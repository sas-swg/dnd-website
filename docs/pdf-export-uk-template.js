(function () {
  "use strict";
  function base64ToBytes(b64) {
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }
  function u16(d, o) {
    return (d[o] << 8) | d[o + 1];
  }
  function i16(d, o) {
    const v = u16(d, o);
    return v & 32768 ? v - 65536 : v;
  }
  function u32(d, o) {
    return d[o] * 16777216 + (d[o + 1] << 16) + (d[o + 2] << 8) + d[o + 3];
  }
  function parseFont(bytes) {
    const numTables = u16(bytes, 4);
    const tables = {};
    let p = 12;
    for (let i = 0; i < numTables; i++) {
      const tag = String.fromCharCode(bytes[p], bytes[p + 1], bytes[p + 2], bytes[p + 3]);
      tables[tag] = { offset: u32(bytes, p + 8), length: u32(bytes, p + 12) };
      p += 16;
    }
    const unitsPerEm = u16(bytes, tables.head.offset + 18);
    const numGlyphs = u16(bytes, tables.maxp.offset + 4);
    const numHMetrics = u16(bytes, tables.hhea.offset + 34);
    const adv = new Uint16Array(numGlyphs);
    const hm = tables.hmtx.offset;
    let last = 0;
    for (let g = 0; g < numGlyphs; g++) {
      if (g < numHMetrics) last = u16(bytes, hm + g * 4);
      adv[g] = last;
    }
    const cmapOff = tables.cmap.offset;
    const nSub = u16(bytes, cmapOff + 2);
    let best = null,
      bestScore = -1;
    for (let i = 0; i < nSub; i++) {
      const platform = u16(bytes, cmapOff + 4 + i * 8);
      const encoding = u16(bytes, cmapOff + 6 + i * 8);
      const subOff = cmapOff + u32(bytes, cmapOff + 8 + i * 8);
      const fmt = u16(bytes, subOff);
      let score = -1;
      if (fmt === 12 && ((platform === 3 && encoding === 10) || platform === 0)) score = 4;
      else if (fmt === 4 && ((platform === 3 && encoding === 1) || platform === 0)) score = 3;
      else if (fmt === 12) score = 2;
      else if (fmt === 4) score = 1;
      if (score > bestScore) {
        bestScore = score;
        best = { fmt: fmt, subOff: subOff };
      }
    }
    const map = new Map();
    if (best.fmt === 4) {
      const o = best.subOff;
      const segX2 = u16(bytes, o + 6);
      const segCount = segX2 / 2;
      const endO = o + 14;
      const startO = endO + segX2 + 2;
      const deltaO = startO + segX2;
      const rangeO = deltaO + segX2;
      for (let s = 0; s < segCount; s++) {
        const end = u16(bytes, endO + s * 2);
        const start = u16(bytes, startO + s * 2);
        const delta = i16(bytes, deltaO + s * 2);
        const rangeOffset = u16(bytes, rangeO + s * 2);
        for (let c = start; c <= end && c !== 65535; c++) {
          let g;
          if (rangeOffset === 0) g = (c + delta) & 65535;
          else {
            const gi = rangeO + s * 2 + rangeOffset + (c - start) * 2;
            g = u16(bytes, gi);
            if (g !== 0) g = (g + delta) & 65535;
          }
          if (g !== 0) map.set(c, g);
        }
      }
    } else {
      const o = best.subOff;
      const nGroups = u32(bytes, o + 12);
      let gp = o + 16;
      for (let i = 0; i < nGroups; i++) {
        const startChar = u32(bytes, gp);
        const endChar = u32(bytes, gp + 4);
        const startGid = u32(bytes, gp + 8);
        for (let c = startChar; c <= endChar; c++) map.set(c, startGid + (c - startChar));
        gp += 12;
      }
    }
    return { unitsPerEm: unitsPerEm, numGlyphs: numGlyphs, adv: adv, cmap: map };
  }
  const toHex4 = (n) => n.toString(16).padStart(4, "0").toUpperCase();
  const pdfNum = (n) => (Math.round(n * 100) / 100).toString();
  class MiniPDF {
    constructor(fontBytes) {
      this.font = parseFont(fontBytes);
      this.fontBytes = fontBytes;
      this.pages = [];
      this.used = new Map();
      this.cur = null;
      this.images = [];
    }
    addJpeg(bytes, width, height) {
      const img = {
        name: "Im" + (this.images.length + 1),
        bytes: bytes,
        width: width,
        height: height,
      };
      this.images.push(img);
      return img;
    }
    image(img, x, yTop, w, h) {
      const y = this.cur.h - yTop - h;
      this.cur.ops.push(
        "q",
        `${pdfNum(w)} 0 0 ${pdfNum(h)} ${pdfNum(x)} ${pdfNum(y)} cm`,
        `/${img.name} Do`,
        "Q",
      );
    }
    addPage(w, h) {
      this.cur = { w: w, h: h, ops: [] };
      this.pages.push(this.cur);
      return this.cur;
    }
    _glyphs(str) {
      const out = [];
      for (const ch of String(str)) {
        const cp = ch.codePointAt(0);
        const g = this.font.cmap.get(cp);
        if (g === undefined) continue;
        out.push(g);
        if (!this.used.has(g)) this.used.set(g, cp);
      }
      return out;
    }
    widthOf(str, size) {
      const upm = this.font.unitsPerEm;
      let w = 0;
      for (const ch of String(str)) {
        const g = this.font.cmap.get(ch.codePointAt(0));
        if (g === undefined) continue;
        w += this.font.adv[g];
      }
      return (w * size) / upm;
    }
    text(x, yTop, str, opts = {}) {
      const size = opts.size || 10;
      const color = opts.color || [0, 0, 0];
      const gids = this._glyphs(str);
      if (!gids.length) return;
      const hex = gids.map(toHex4).join("");
      const y = this.cur.h - yTop - size;
      this.cur.ops.push(
        `${pdfNum(color[0])} ${pdfNum(color[1])} ${pdfNum(color[2])} rg`,
        "BT",
        `/F1 ${pdfNum(size)} Tf`,
        `1 0 0 1 ${pdfNum(x)} ${pdfNum(y)} Tm`,
        `<${hex}> Tj`,
        "ET",
      );
    }
    rect(x, yTop, w, h, color) {
      const y = this.cur.h - yTop - h;
      this.cur.ops.push(
        `${pdfNum(color[0])} ${pdfNum(color[1])} ${pdfNum(color[2])} rg`,
        `${pdfNum(x)} ${pdfNum(y)} ${pdfNum(w)} ${pdfNum(h)} re`,
        "f",
      );
    }
    line(x1, y1Top, x2, y2Top, width, color) {
      const y1 = this.cur.h - y1Top,
        y2 = this.cur.h - y2Top;
      this.cur.ops.push(
        `${pdfNum(color[0])} ${pdfNum(color[1])} ${pdfNum(color[2])} RG`,
        `${pdfNum(width)} w`,
        `${pdfNum(x1)} ${pdfNum(y1)} m ${pdfNum(x2)} ${pdfNum(y2)} l S`,
      );
    }
    build() {
      const enc = (s) => {
        const o = [];
        for (let i = 0; i < s.length; i++) o.push(s.charCodeAt(i) & 255);
        return o;
      };
      const chunks = [];
      let len = 0;
      const push = (data) => {
        if (typeof data === "string") data = enc(data);
        chunks.push(data);
        len += data.length;
      };
      const objOffsets = [];
      let objNum = 0;
      const newObj = () => ++objNum;
      const catalogN = newObj(),
        pagesN = newObj();
      const pageNs = this.pages.map(() => newObj());
      const contentNs = this.pages.map(() => newObj());
      const imageNs = this.images.map(() => newObj());
      const fontN = newObj(),
        cidFontN = newObj(),
        fdN = newObj(),
        fontFileN = newObj(),
        toUniN = newObj();
      const startObj = (n) => {
        objOffsets[n] = len;
        push(`${n} 0 obj\n`);
      };
      const endObj = () => push("endobj\n");
      push("%PDF-1.7\n%âãÏÓ\n");
      startObj(catalogN);
      push(`<< /Type /Catalog /Pages ${pagesN} 0 R >>\n`);
      endObj();
      startObj(pagesN);
      push(
        `<< /Type /Pages /Count ${this.pages.length} /Kids [${pageNs.map((n) => `${n} 0 R`).join(" ")}] >>\n`,
      );
      endObj();
      this.pages.forEach((pg, i) => {
        startObj(pageNs[i]);
        const xobjs = this.images.length
          ? ` /XObject << ${this.images.map((im, j) => `/${im.name} ${imageNs[j]} 0 R`).join(" ")} >>`
          : "";
        push(
          `<< /Type /Page /Parent ${pagesN} 0 R /MediaBox [0 0 ${pdfNum(pg.w)} ${pdfNum(pg.h)}] /Resources << /Font << /F1 ${fontN} 0 R >>${xobjs} >> /Contents ${contentNs[i]} 0 R >>\n`,
        );
        endObj();
        const sbytes = enc(pg.ops.join("\n") + "\n");
        startObj(contentNs[i]);
        push(`<< /Length ${sbytes.length} >>\nstream\n`);
        push(sbytes);
        push("\nendstream\n");
        endObj();
      });
      this.images.forEach((im, j) => {
        startObj(imageNs[j]);
        push(
          `<< /Type /XObject /Subtype /Image /Width ${im.width} /Height ${im.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${im.bytes.length} >>\nstream\n`,
        );
        push(im.bytes);
        push("\nendstream\n");
        endObj();
      });
      startObj(fontN);
      push(
        `<< /Type /Font /Subtype /Type0 /BaseFont /DejaVuSans /Encoding /Identity-H /DescendantFonts [${cidFontN} 0 R] /ToUnicode ${toUniN} 0 R >>\n`,
      );
      endObj();
      const upm = this.font.unitsPerEm;
      const usedGids = [...this.used.keys()].sort((a, b) => a - b);
      const wParts = usedGids.map((g) => `${g} [${Math.round((this.font.adv[g] * 1e3) / upm)}]`);
      startObj(cidFontN);
      push(
        `<< /Type /Font /Subtype /CIDFontType2 /BaseFont /DejaVuSans /CIDSystemInfo << /Registry (Adobe) /Ordering (Identity) /Supplement 0 >> /FontDescriptor ${fdN} 0 R /CIDToGIDMap /Identity /DW 500 /W [${wParts.join(" ")}] >>\n`,
      );
      endObj();
      startObj(fdN);
      push(
        `<< /Type /FontDescriptor /FontName /DejaVuSans /Flags 32 /FontBBox [-1021 -463 1793 1232] /ItalicAngle 0 /Ascent 928 /Descent -236 /CapHeight 928 /StemV 80 /FontFile2 ${fontFileN} 0 R >>\n`,
      );
      endObj();
      startObj(fontFileN);
      push(`<< /Length ${this.fontBytes.length} /Length1 ${this.fontBytes.length} >>\nstream\n`);
      push(this.fontBytes);
      push("\nendstream\n");
      endObj();
      let bf = "";
      const entries = usedGids.map((g) => `<${toHex4(g)}> <${toHex4(this.used.get(g))}>`);
      for (let i = 0; i < entries.length; i += 100) {
        const block = entries.slice(i, i + 100);
        bf += `${block.length} beginbfchar\n${block.join("\n")}\nendbfchar\n`;
      }
      const cmapStr =
        "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo << /Registry (Adobe) /Ordering (UCS) /Supplement 0 >> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000> <FFFF>\nendcodespacerange\n" +
        bf +
        "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend\n";
      const cmapBytes = enc(cmapStr);
      startObj(toUniN);
      push(`<< /Length ${cmapBytes.length} >>\nstream\n`);
      push(cmapBytes);
      push("\nendstream\n");
      endObj();
      const xrefStart = len;
      const total = objNum + 1;
      push(`xref\n0 ${total}\n`);
      push("0000000000 65535 f \n");
      for (let n = 1; n <= objNum; n++)
        push(`${String(objOffsets[n]).padStart(10, "0")} 00000 n \n`);
      push(`trailer\n<< /Size ${total} /Root ${catalogN} 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`);
      const out = new Uint8Array(len);
      let off = 0;
      for (const c of chunks) {
        out.set(c, off);
        off += c.length;
      }
      return out;
    }
  }
  const PAGE_W = 612,
    PAGE_H = 792;
  const C = { text: [0, 0, 0], muted: [0.15, 0.15, 0.15] };
  function decodeBase64ToBytes(b64) {
    const bin = atob(b64);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  function setPdfStatus(text, isError = false) {
    const el = document.getElementById("pdf-status");
    if (!el) return;
    el.innerText = text || "";
    el.className =
      "text-xs mt-4 min-h-[1rem] " + (isError ? "text-red-600 font-semibold" : "text-slate-500");
  }
  async function fetchBytes(url) {
    const r = await fetch(url);
    if (!r.ok) throw new Error("Не вдалося завантажити шаблон: " + url);
    return new Uint8Array(await r.arrayBuffer());
  }
  function jpegSize(bytes) {
    let i = 2;
    while (i < bytes.length - 9) {
      if (bytes[i] !== 255) {
        i++;
        continue;
      }
      const marker = bytes[i + 1];
      const len = (bytes[i + 2] << 8) + bytes[i + 3];
      if (marker >= 192 && marker <= 195) {
        return { h: (bytes[i + 5] << 8) + bytes[i + 6], w: (bytes[i + 7] << 8) + bytes[i + 8] };
      }
      i += 2 + len;
    }
    return { w: 1241, h: 1754 };
  }
  function txt(doc, x, y, s, size = 9, opts = {}) {
    if (s === undefined || s === null || String(s).trim() === "") return;
    const str = String(s);
    const w = Math.min(opts.w || Math.max(18, doc.widthOf(str, size) + 5), opts.maxW || 9999);
    if (opts.box !== false) doc.rect(x - 2, y - 2, w, size + 5, [1, 1, 1]);
    doc.text(x, y, str, { size: size, color: opts.color || C.text });
  }
  function wrap(doc, text, maxW, size) {
    const out = [];
    String(text || "")
      .split(/\r?\n/)
      .forEach((line) => {
        let cur = "";
        for (const w of line.split(/\s+/).filter(Boolean)) {
          const t = cur ? cur + " " + w : w;
          if (doc.widthOf(t, size) > maxW && cur) {
            out.push(cur);
            cur = w;
          } else cur = t;
        }
        if (cur) out.push(cur);
      });
    return out;
  }
  function block(doc, x, y, w, h, text, size = 7.2, lineH = 9) {
    if (!text || String(text).trim() === "") return;
    doc.rect(x - 3, y - 4, w + 6, h + 4, [1, 1, 1]);
    const maxLines = Math.floor(h / lineH);
    wrap(doc, text, w, size)
      .slice(0, maxLines)
      .forEach((l, i) => txt(doc, x, y + i * lineH, l, size, { box: false }));
  }
  function mod(n) {
    return n >= 0 ? "+" + n : String(n);
  }
  function safeFileName(s) {
    return (
      String(s || "character")
        .replace(/[^A-Za-zА-Яа-яЁёЇїІіЄєҐґ0-9_-]+/g, "_")
        .slice(0, 80) || "character"
    );
  }
  function collectData() {
    const ch = typeof character !== "undefined" ? character : {};
    const cls = ch.classId && typeof DND_CLASSES !== "undefined" ? DND_CLASSES[ch.classId] : null;
    const race = ch.raceId && typeof DND_RACES !== "undefined" ? DND_RACES[ch.raceId] : null;
    const d = ch.description || {};
    const lvl = ch.level || 1;
    const pb = typeof profBonus === "function" ? profBonus(lvl) : 2;
    const ability = (k) =>
      typeof finalAbility === "function"
        ? finalAbility(k)
        : (ch.abilities && ch.abilities[k]) || "";
    const amod = (k) => (typeof abilityMod === "function" ? abilityMod(k) : 0);
    const fmt = (n) => (typeof fmtMod === "function" ? fmtMod(n) : mod(n));
    const ac = typeof calculateAC === "function" ? calculateAC().ac : "";
    const hp = cls && typeof maxHP === "function" ? maxHP() : "";
    const inv = ch.inventory || {};
    const speed =
      typeof speedDisplayString === "function"
        ? speedDisplayString()
        : race && race.speed
          ? race.speed
          : "";
    const init = typeof initiativeBonus === "function" ? initiativeBonus() : amod("dex");
    const passive =
      typeof passivePerception === "function" ? passivePerception() : 10 + amod("wis");
    const bg =
      typeof effectiveBackgroundName === "function"
        ? effectiveBackgroundName()
        : d.background || "";
    const saves = new Set(cls && cls.savingThrows ? cls.savingThrows : []);
    const skills = new Set([
      ...(ch.skills || []),
      ...(typeof backgroundBonusSkills === "function" ? backgroundBonusSkills() : []),
      ...(typeof getRaceSkillProficiencies === "function" ? getRaceSkillProficiencies() : []),
    ]);
    return {
      ch: ch,
      cls: cls,
      race: race,
      d: d,
      lvl: lvl,
      pb: pb,
      ability: ability,
      amod: amod,
      fmt: fmt,
      ac: ac,
      hp: hp,
      inv: inv,
      speed: speed,
      init: init,
      passive: passive,
      bg: bg,
      saves: saves,
      skills: skills,
    };
  }
  function spellNames() {
    const ch = typeof character !== "undefined" ? character : {};
    const sp = ch.spells || { cantrips: [], prepared: [] };
    const by = {};
    const seen = new Set();
    const resolve = (id) => (typeof getSpellById === "function" ? getSpellById(id) : null);
    const add = (s) => {
      if (!s || seen.has(s.id)) return;
      seen.add(s.id);
      const lv = s.level || 0;
      (by[lv] = by[lv] || []).push(
        s.name + (s.concentration ? " (К)" : "") + (s.ritual ? " (Р)" : ""),
      );
    };
    const __grantedMax =
      typeof maxSpellLevelAvailable === "function" ? maxSpellLevelAvailable() : 9;
    (typeof getGrantedSpells === "function" ? getGrantedSpells() : []).forEach((g) => {
      const __s = resolve(g.id);
      if (!__s) return;
      const __lv = __s.level || 0;
      if (__lv >= 1 && !g.innate && __lv > __grantedMax) return;
      add(__s);
    });
    (sp.cantrips || []).forEach((id) => add(resolve(id)));
    (sp.prepared || []).forEach((id) => add(resolve(id)));
    return by;
  }
  function featuresText(data) {
    const a = [];
    if (typeof collectAllClassFeatures === "function")
      collectAllClassFeatures()
        .filter((f) => f.level <= data.lvl)
        .forEach((f) => a.push("• " + f.name));
    if (typeof getSubclassFeatures === "function")
      getSubclassFeatures().forEach((f) => a.push("• " + f.name));
    if (data.race && data.race.traits) data.race.traits.forEach((t) => a.push("• " + t.name));
    if (data.race && data.race.subraces && data.ch && data.ch.subraceId) {
      const sr = data.race.subraces.find((s) => s.id === data.ch.subraceId);
      if (sr && sr.traits) sr.traits.forEach((t) => a.push("• " + t.name));
    }
    if (data.ch && data.ch.fightingStyle && typeof FIGHTING_STYLES !== "undefined") {
      const fst = FIGHTING_STYLES.find((s) => s.id === data.ch.fightingStyle);
      if (fst) a.push("• Бойовий стиль: " + fst.name);
    }
    const bf = typeof backgroundFeatureText === "function" ? backgroundFeatureText() : "";
    if (bf) a.push("• " + bf);
    if (typeof selectedFeats === "function") selectedFeats().forEach((f) => a.push("• " + f.name));
    if (typeof computeClassResources === "function") {
      const mods = {
        str: data.amod("str"),
        dex: data.amod("dex"),
        con: data.amod("con"),
        int: data.amod("int"),
        wis: data.amod("wis"),
        cha: data.amod("cha"),
      };
      (computeClassResources(data.ch.classId, data.lvl, mods, data.pb) || []).forEach((r) =>
        a.push("• " + r.name + ": " + r.value),
      );
    }
    return a.join("\n");
  }
  function featuresDetailed(data) {
    const a = [];
    const cut = (s) => {
      s = s ? String(s) : "";
      return s.length > 170 ? s.slice(0, 168) + "…" : s;
    };
    if (typeof collectAllClassFeatures === "function")
      collectAllClassFeatures()
        .filter((f) => f.level <= data.lvl)
        .forEach((f) => a.push("• " + f.name + (f.desc ? ": " + cut(f.desc) : "")));
    if (typeof getSubclassFeatures === "function")
      getSubclassFeatures().forEach((f) =>
        a.push("• " + f.name + (f.description ? ": " + cut(f.description) : "")),
      );
    if (data.race && data.race.traits)
      data.race.traits.forEach((t) => a.push("• " + t.name + (t.desc ? ": " + cut(t.desc) : "")));
    if (data.race && data.race.subraces && data.ch && data.ch.subraceId) {
      const sr = data.race.subraces.find((s) => s.id === data.ch.subraceId);
      if (sr) {
        a.push("• " + data.race.name + " — " + sr.name);
        (sr.traits || []).forEach((t) =>
          a.push("• " + t.name + (t.desc ? ": " + cut(t.desc) : "")),
        );
      }
    }
    if (data.ch && data.ch.fightingStyle && typeof FIGHTING_STYLES !== "undefined") {
      const fst = FIGHTING_STYLES.find((s) => s.id === data.ch.fightingStyle);
      if (fst)
        a.push(
          "• Бойовий стиль: " + fst.name + (fst.description ? " — " + cut(fst.description) : ""),
        );
    }
    const bf = typeof backgroundFeatureText === "function" ? backgroundFeatureText() : "";
    if (bf) a.push("• " + cut(bf));
    if (typeof selectedFeats === "function")
      selectedFeats().forEach((f) =>
        a.push("• " + f.name + (f.description ? ": " + cut(f.description) : "")),
      );
    if (typeof computeClassResources === "function") {
      const mods = {
        str: data.amod("str"),
        dex: data.amod("dex"),
        con: data.amod("con"),
        int: data.amod("int"),
        wis: data.amod("wis"),
        cha: data.amod("cha"),
      };
      (computeClassResources(data.ch.classId, data.lvl, mods, data.pb) || []).forEach((r) =>
        a.push("• " + r.name + ": " + r.value + (r.note ? " (" + r.note + ")" : "")),
      );
    }
    return a.join("\n");
  }
  function profText(data) {
    const a = [];
    if (data.cls) {
      if (data.cls.armorProf) a.push("Броня: " + data.cls.armorProf);
      if (data.cls.weaponProf) a.push("Зброя: " + data.cls.weaponProf);
      if (data.cls.savingThrowsLabel) a.push("Рятунки: " + data.cls.savingThrowsLabel);
    }
    if (data.race && data.race.languages) a.push("Мови: " + data.race.languages);
    const bl = typeof backgroundLanguagesText === "function" ? backgroundLanguagesText() : "";
    if (bl) a.push("Мови передісторії: " + bl);
    const bt = typeof backgroundToolsText === "function" ? backgroundToolsText() : "";
    if (bt) a.push("Інструменти: " + bt);
    if (data.skills.size) a.push("Навички: " + Array.from(data.skills).join(", "));
    return a.join("\n");
  }
  function attacksText(data) {
    const rows = Array.isArray(data.inv.weaponList) ? data.inv.weaponList : [];
    const out = [];
    rows.forEach((r) => {
      const info = typeof weaponAttackInfo === "function" ? weaponAttackInfo(r) : null;
      if (info) out.push(info.name + "  " + info.attackBonus + "  " + info.damageStr);
    });
    if (data.inv.weapons) out.push(data.inv.weapons);
    return out.join("\n");
  }
  function equipmentText(data) {
    const inv = data.inv || {};
    const out = [];
    if (
      inv.armor &&
      inv.armor !== "none" &&
      typeof ARMOR_DATA !== "undefined" &&
      ARMOR_DATA[inv.armor]
    )
      out.push("Броня: " + ARMOR_DATA[inv.armor].name);
    if (inv.shield) out.push("Щит");
    if (inv.items) out.push(inv.items);
    out.push(
      "ММ " +
        (inv.cp || 0) +
        "  СМ " +
        (inv.sp || 0) +
        "  ЕМ " +
        (inv.ep || 0) +
        "  ЗМ " +
        (inv.gp || 0) +
        "  ПМ " +
        (inv.pp || 0),
    );
    return out.join("\n");
  }
  async function generatePDF() {
    const btn = document.getElementById("btn-download-pdf"),
      label = document.getElementById("btn-download-label"),
      icon = document.getElementById("btn-download-icon");
    try {
      if (typeof window.DEJAVU_SANS_BASE64 !== "string" || window.DEJAVU_SANS_BASE64.length < 1e3)
        throw new Error("Шрифт не завантажився.");
      const errors = typeof runValidation === "function" ? runValidation() : [];
      if (errors.length) {
        setPdfStatus(
          "Заповніть обов’язкові поля: " +
            errors
              .slice(0, 5)
              .map((e) => e.message)
              .join("; "),
          true,
        );
        if (errors[0].tab && typeof switchTab === "function") switchTab(errors[0].tab);
        return;
      }
      if (btn) btn.disabled = true;
      if (icon) icon.innerText = "⏳";
      if (label) label.innerText = "Готуємо PDF...";
      setPdfStatus("Заповнюємо український аркуш...");
      const doc = new MiniPDF(decodeBase64ToBytes(window.DEJAVU_SANS_BASE64));
      const imgs = [];
      for (let i = 1; i <= 3; i++) {
        const varName = "CHAR_SHEET_UK_PAGE_" + i;
        const b64 = window[varName];
        if (!b64) throw new Error("Зображення аркуша " + varName + " не завантажено");
        const b = base64ToBytes(b64);
        const sz = jpegSize(b);
        imgs.push(doc.addJpeg(b, sz.w, sz.h));
      }
      for (let i = 0; i < 3; i++) {
        doc.addPage(PAGE_W, PAGE_H);
        doc.image(imgs[i], 0, 0, PAGE_W, PAGE_H);
      }
      const data = collectData();
      const d = data.d,
        cls = data.cls,
        race = data.race;
      const FR = {
        ClassLevel: [0, 270.04, 48.16, 105.84, 15.66],
        Background: [0, 384.13, 48.16, 86.07, 15.66],
        PlayerName: [0, 480.28, 48.16, 90, 15.66],
        CharacterName: [0, 47.56, 61.32, 173.18, 20.88],
        "Race ": [0, 269.04, 74.24, 106.84, 15.66],
        Alignment: [0, 383.52, 74.24, 90, 15.66],
        XP: [0, 480.28, 74.24, 90, 15.66],
        Inspiration: [0, 96.87, 131.49, 21.24, 16.56],
        STR: [0, 36.82, 154.2, 40.98, 25.53],
        ProfBonus: [0, 96.83, 169.1, 21.24, 16.56],
        AC: [0, 234.04, 140.52, 27.36, 25.92],
        Initiative: [0, 285.88, 140.52, 36, 33.12],
        Speed: [0, 344.2, 140.52, 36, 33.12],
        "PersonalityTraits ": [0, 418.72, 140.52, 152.82, 48.6],
        STRmod: [0, 46.48, 186.72, 21.24, 12.81],
        "ST Strength": [0, 112.72, 206.55, 14.4, 8.63],
        DEX: [0, 36.82, 226.2, 40.98, 25.53],
        Ideals: [0, 418.72, 209.64, 152.82, 34.56],
        "DEXmod ": [0, 46.48, 258.72, 21.24, 12.81],
        Bonds: [0, 418.72, 265.08, 152.82, 34.56],
        CON: [0, 36.82, 297.48, 40.98, 25.53],
        HDTotal: [0, 247, 318.36, 48.24, 9.18],
        "Check Box 12": [0, 345.93, 320.79, 9.28, 12.23],
        "Check Box 13": [0, 358.75, 320.79, 9.28, 12.23],
        "Check Box 14": [0, 371.71, 320.79, 9.28, 12.23],
        CONmod: [0, 46.48, 330, 21.24, 12.81],
        "Check Box 15": [0, 345.86, 335.88, 9.28, 12.23],
        "Check Box 16": [0, 358.76, 335.88, 9.28, 12.23],
        "Check Box 17": [0, 371.66, 335.88, 9.28, 12.23],
        HD: [0, 231.88, 331.32, 63.36, 20.88],
        Flaws: [0, 418.72, 319.8, 152.82, 34.56],
        INT: [0, 36.82, 369.48, 40.98, 25.53],
        "ST Dexterity": [0, 112.72, 220.06, 14.4, 8.63],
        "ST Constitution": [0, 112.72, 233.54, 14.4, 8.63],
        "ST Intelligence": [0, 112.72, 247.08, 14.4, 8.63],
        "ST Wisdom": [0, 112.72, 260.61, 14.4, 8.63],
        "ST Charisma": [0, 112.72, 274.01, 14.4, 8.63],
        Acrobatics: [0, 112, 321.7, 14.4, 8.63],
        Animal: [0, 112, 335.24, 14.4, 8.63],
        Athletics: [0, 112, 362.24, 14.4, 8.63],
        "Deception ": [0, 112, 375.78, 14.4, 8.63],
        "History ": [0, 112, 389.31, 14.4, 8.63],
        "Wpn Name": [0, 223.96, 393.24, 61.56, 14.04],
        "Wpn1 AtkBonus": [0, 292, 393.24, 29.88, 14.04],
        "Wpn1 Damage": [0, 328, 393.24, 60.84, 14.04],
        Insight: [0, 112, 402.78, 14.4, 8.63],
        Intimidation: [0, 112, 416.24, 14.4, 8.63],
        "Wpn Name 2": [0, 223.96, 413.4, 61.56, 14.04],
        "Wpn2 AtkBonus ": [0, 292, 413.4, 29.88, 14.04],
        "Wpn Name 3": [0, 223.96, 434.28, 61.56, 14.04],
        "Wpn3 AtkBonus  ": [0, 292, 434.28, 29.88, 14.04],
        "Check Box 11": [0, 101.28, 207.09, 6.12, 8.69],
        "Check Box 18": [0, 101.28, 220.38, 6.12, 8.69],
        "Check Box 19": [0, 101.28, 234.13, 6.12, 8.69],
        "Check Box 20": [0, 101.28, 247.59, 6.12, 8.69],
        "Check Box 21": [0, 101.28, 261.04, 6.12, 8.69],
        "Check Box 22": [0, 101.28, 274.55, 6.12, 8.69],
        INTmod: [0, 46.48, 402, 21.24, 12.81],
        "Wpn2 Damage ": [0, 328, 413.4, 60.84, 14.04],
        "Investigation ": [0, 112, 429.85, 14.4, 8.63],
        WIS: [0, 36.82, 440.76, 40.98, 25.53],
        Arcana: [0, 112, 348.78, 14.4, 8.63],
        "Perception ": [0, 112, 470.31, 14.4, 8.63],
        WISmod: [0, 46.48, 473.28, 21.24, 12.81],
        CHA: [0, 36.82, 512.04, 40.98, 25.53],
        Nature: [0, 112, 456.85, 14.4, 8.63],
        Performance: [0, 112, 483.78, 14.4, 8.63],
        Medicine: [0, 112, 443.24, 14.4, 8.63],
        Religion: [0, 112, 510.78, 14.4, 8.63],
        "Stealth ": [0, 112, 537.85, 14.4, 8.63],
        "Check Box 23": [0, 101.28, 322.17, 6.12, 8.69],
        "Check Box 24": [0, 101.28, 335.79, 6.12, 8.69],
        "Check Box 25": [0, 101.28, 349.32, 6.12, 8.69],
        "Check Box 26": [0, 101.28, 362.67, 6.12, 8.69],
        "Check Box 27": [0, 101.28, 376.01, 6.12, 8.69],
        "Check Box 28": [0, 101.28, 389.54, 6.12, 8.69],
        "Check Box 29": [0, 101.28, 403.3, 6.12, 8.69],
        "Check Box 30": [0, 101.28, 416.47, 6.12, 8.69],
        "Check Box 31": [0, 101.28, 430.01, 6.12, 8.69],
        "Check Box 32": [0, 101.28, 443.54, 6.12, 8.69],
        "Check Box 33": [0, 101.28, 457.24, 6.12, 8.69],
        "Check Box 34": [0, 101.28, 470.76, 6.12, 8.69],
        "Check Box 35": [0, 101.28, 484.33, 6.12, 8.69],
        "Check Box 36": [0, 101.28, 497.79, 6.12, 8.69],
        "Check Box 37": [0, 101.28, 511.32, 6.12, 8.69],
        "Check Box 38": [0, 101.28, 524.8, 6.12, 8.69],
        "Check Box 39": [0, 101.28, 538.33, 6.12, 8.69],
        "Check Box 40": [0, 101.28, 551.83, 6.12, 8.69],
        Persuasion: [0, 112, 497.31, 14.4, 8.63],
        HPMax: [0, 290.92, 196.68, 89.28, 10.8],
        HPCurrent: [0, 231.16, 212.52, 149.04, 30.24],
        HPTemp: [0, 231.16, 264.36, 149.04, 30.24],
        "Wpn3 Damage ": [0, 328, 434.28, 60.84, 14.04],
        SleightofHand: [0, 112, 524.24, 14.4, 8.63],
        CHamod: [0, 46.48, 544.56, 21.24, 12.81],
        Survival: [0, 112, 551.31, 14.4, 8.63],
        AttacksSpellcasting: [0, 223.24, 453.72, 165.6, 113.76],
        Passive: [0, 32.29, 591.16, 21.24, 16.56],
        CP: [0, 229.72, 599.02, 29.16, 17.6],
        ProficienciesLang: [0, 34.24, 627.19, 165.6, 128.93],
        SP: [0, 229.72, 624.98, 29.16, 17.6],
        EP: [0, 229.72, 650.93, 29.16, 17.6],
        GP: [0, 229.72, 676.89, 29.16, 17.61],
        PP: [0, 229.72, 702.84, 29.16, 17.61],
        Equipment: [0, 268.96, 593.4, 119.88, 162.72],
        "Features and Traits": [0, 412.44, 386.54, 165.08, 369.58],
        "CharacterName 2": [1, 47.52, 65.2, 208.44, 20.88],
        Age: [1, 266, 51.04, 105.84, 15.66],
        Height: [1, 379.15, 51.04, 86.07, 15.66],
        Weight: [1, 475.24, 51.04, 97.56, 15.66],
        Eyes: [1, 265, 77.12, 106.84, 15.66],
        Skin: [1, 378.54, 77.12, 90, 15.66],
        Hair: [1, 475.24, 77.12, 97.56, 15.66],
        "CHARACTER IMAGE": [1, 36.48, 130.5, 162.69, 218.1],
        "Faction Symbol Image": [1, 423.96, 174.03, 137.17, 109.44],
        Allies: [1, 225, 131.17, 175.65, 218.75],
        FactionName: [1, 423.21, 153.46, 138.03, 15.84],
        Backstory: [1, 34.78, 385.2, 164.44, 370.08],
        "Feat+Traits": [1, 223.78, 375.12, 353.66, 204.48],
        Treasure: [1, 223.78, 603, 353.66, 152.28],
        "Spellcasting Class 2": [2, 47.52, 65.2, 208.44, 20.88],
        "SpellcastingAbility 2": [2, 283.78, 56.25, 64.85, 24.39],
        "SpellSaveDC  2": [2, 384.49, 56.25, 64.85, 24.39],
        "SpellAtkBonus 2": [2, 488.29, 56.25, 64.86, 24.39],
        "SlotsTotal 19": [2, 51.85, 313.67, 39.24, 20.88],
        "SlotsRemaining 19": [2, 103, 313.67, 92.83, 20.88],
        "Spells 1014": [2, 40.32, 172.44, 158.4, 12.1],
        "Spells 1015": [2, 40.77, 359.71, 157.95, 9.94],
        "Spells 1016": [2, 40.32, 186.38, 158.4, 12.1],
        "Spells 1017": [2, 40.32, 200.32, 158.4, 12.1],
        "Spells 1018": [2, 40.32, 214.27, 158.4, 12.1],
        "Spells 1019": [2, 40.32, 228.21, 158.4, 12.1],
        "Spells 1020": [2, 40.32, 242.3, 158.4, 12.1],
        "Spells 1021": [2, 40.32, 256.4, 158.4, 12.1],
        "Spells 1022": [2, 40.32, 270.37, 158.4, 12.1],
        "Check Box 314": [2, 221.4, 192.47, 5.9, 8.47],
        "Check Box 3031": [2, 221.4, 206.47, 5.9, 8.47],
        "Check Box 3032": [2, 221.4, 220.47, 5.9, 8.48],
        "Check Box 3033": [2, 221.4, 234.47, 5.9, 8.47],
        "Check Box 3034": [2, 221.4, 248.46, 5.9, 8.47],
        "Check Box 3035": [2, 221.4, 262.46, 5.9, 8.47],
        "Check Box 3036": [2, 221.4, 276.46, 5.9, 8.47],
        "Check Box 3037": [2, 221.4, 290.46, 5.9, 8.47],
        "Check Box 3038": [2, 221.4, 304.45, 5.9, 8.47],
        "Check Box 3039": [2, 221.4, 318.45, 5.9, 8.48],
        "Check Box 3040": [2, 221.4, 332.45, 5.9, 8.47],
        "Check Box 321": [2, 408.53, 178.36, 5.9, 8.47],
        "Check Box 320": [2, 408.53, 192.37, 5.9, 8.47],
        "Check Box 3060": [2, 408.53, 206.38, 5.9, 8.48],
        "Check Box 3061": [2, 408.53, 220.39, 5.9, 8.48],
        "Check Box 3062": [2, 408.53, 234.4, 5.9, 8.47],
        "Check Box 3063": [2, 408.53, 248.46, 5.9, 8.47],
        "Check Box 3064": [2, 408.53, 262.45, 5.9, 8.47],
        "Check Box 3065": [2, 408.53, 276.44, 5.9, 8.47],
        "Check Box 3066": [2, 408.53, 290.43, 5.9, 8.47],
        "Check Box 315": [2, 221.4, 178.47, 5.9, 8.47],
        "Check Box 3041": [2, 221.4, 346.45, 5.9, 8.47],
        "Spells 1023": [2, 40.77, 373.68, 157.95, 9.94],
        "Check Box 251": [2, 32.42, 362.23, 5.9, 8.47],
        "Check Box 309": [2, 32.42, 376.22, 5.9, 8.47],
        "Check Box 3010": [2, 32.42, 390.2, 5.9, 8.47],
        "Check Box 3011": [2, 32.42, 404.19, 5.9, 8.47],
        "Check Box 3012": [2, 32.42, 418.17, 5.9, 8.47],
        "Check Box 3013": [2, 32.42, 432.16, 5.9, 8.47],
        "Check Box 3014": [2, 32.42, 446.14, 5.9, 8.47],
        "Check Box 3015": [2, 32.42, 460.12, 5.9, 8.47],
        "Check Box 3016": [2, 32.42, 474.11, 5.9, 8.47],
        "Check Box 3017": [2, 32.42, 488.09, 5.9, 8.47],
        "Check Box 3018": [2, 32.42, 502.08, 5.9, 8.47],
        "Check Box 3019": [2, 32.42, 516.06, 5.9, 8.47],
        "Spells 1024": [2, 40.77, 387.65, 157.95, 9.94],
        "Spells 1025": [2, 40.77, 401.69, 157.95, 9.94],
        "Spells 1026": [2, 40.77, 415.69, 157.95, 9.94],
        "Spells 1027": [2, 40.77, 429.7, 157.95, 9.94],
        "Spells 1028": [2, 40.77, 443.66, 157.95, 9.94],
        "Spells 1029": [2, 40.77, 457.7, 157.95, 9.94],
        "Spells 1030": [2, 40.77, 471.67, 157.95, 9.94],
        "Spells 1031": [2, 40.77, 485.64, 157.95, 9.94],
        "Spells 1032": [2, 40.77, 499.68, 157.95, 9.94],
        "Spells 1033": [2, 40.77, 513.65, 157.95, 9.94],
        "SlotsTotal 20": [2, 51.85, 542.25, 39.24, 20.88],
        "SlotsRemaining 20": [2, 103, 542.25, 92.83, 20.88],
        "Spells 1034": [2, 40.77, 586.33, 157.95, 9.94],
        "Spells 1035": [2, 40.77, 600.3, 157.95, 9.94],
        "Spells 1036": [2, 40.77, 614.27, 157.95, 9.94],
        "Spells 1037": [2, 40.77, 628.27, 157.95, 9.94],
        "Spells 1038": [2, 40.77, 642.24, 157.95, 9.94],
        "Spells 1039": [2, 40.77, 656.21, 157.95, 9.94],
        "Spells 1040": [2, 40.77, 670.25, 157.95, 9.94],
        "Spells 1041": [2, 40.77, 684.22, 157.95, 9.94],
        "Spells 1042": [2, 40.77, 698.25, 157.95, 9.94],
        "Spells 1043": [2, 40.77, 712.26, 157.95, 9.94],
        "Spells 1044": [2, 40.77, 726.25, 157.95, 9.94],
        "Spells 1045": [2, 40.77, 740.23, 157.95, 9.94],
        "Spells 1046": [2, 40.77, 572.26, 157.95, 9.94],
        "SlotsTotal 21": [2, 240.84, 145.94, 39.24, 20.88],
        "SlotsRemaining 21": [2, 291.99, 145.94, 92.83, 20.88],
        "Spells 1047": [2, 229.75, 190.03, 157.95, 9.94],
        "Spells 1048": [2, 229.75, 175.95, 157.95, 9.94],
        "Spells 1049": [2, 229.75, 203.99, 157.95, 9.94],
        "Spells 1050": [2, 229.75, 217.96, 157.95, 9.94],
        "Spells 1051": [2, 229.75, 231.97, 157.95, 9.94],
        "Spells 1052": [2, 229.75, 245.93, 157.95, 9.94],
        "Spells 1053": [2, 229.75, 259.9, 157.95, 9.94],
        "Spells 1054": [2, 229.75, 273.94, 157.95, 9.94],
        "Spells 1055": [2, 229.75, 287.91, 157.95, 9.94],
        "Spells 1056": [2, 229.75, 301.95, 157.95, 9.94],
        "Spells 1057": [2, 229.75, 315.95, 157.95, 9.94],
        "Spells 1058": [2, 229.75, 329.94, 157.95, 9.94],
        "Spells 1059": [2, 229.75, 343.93, 157.95, 9.94],
        "SlotsTotal 22": [2, 240.84, 371.52, 39.24, 20.88],
        "SlotsRemaining 22": [2, 291.99, 371.52, 92.83, 20.88],
        "Spells 1060": [2, 229.75, 415.6, 157.95, 9.94],
        "Spells 1061": [2, 229.75, 401.53, 157.95, 9.94],
        "Spells 1062": [2, 229.75, 429.57, 157.95, 9.94],
        "Spells 1063": [2, 229.75, 443.54, 157.95, 9.94],
        "Spells 1064": [2, 229.75, 457.54, 157.95, 9.94],
        "Check Box 323": [2, 408.53, 348.14, 5.9, 8.47],
        "Check Box 322": [2, 408.53, 362.14, 5.9, 8.47],
        "Check Box 3067": [2, 408.53, 376.13, 5.9, 8.48],
        "Check Box 3068": [2, 408.53, 390.12, 5.9, 8.48],
        "Check Box 3069": [2, 408.53, 404.12, 5.9, 8.47],
        "Check Box 3070": [2, 408.53, 418.11, 5.9, 8.47],
        "Check Box 3071": [2, 408.53, 432.11, 5.9, 8.47],
        "Check Box 3072": [2, 408.53, 446.1, 5.9, 8.47],
        "Check Box 3073": [2, 408.53, 460.1, 5.9, 8.47],
        "Spells 1065": [2, 229.75, 471.51, 157.95, 9.94],
        "Spells 1066": [2, 229.75, 485.48, 157.95, 9.94],
        "Spells 1067": [2, 229.75, 499.52, 157.95, 9.94],
        "Spells 1068": [2, 229.75, 513.49, 157.95, 9.94],
        "Spells 1069": [2, 229.75, 527.52, 157.95, 9.94],
        "Spells 1070": [2, 229.75, 541.53, 157.95, 9.94],
        "Spells 1071": [2, 229.75, 555.52, 157.95, 9.94],
        "Check Box 317": [2, 221.4, 404.05, 5.9, 8.47],
        "Spells 1072": [2, 229.75, 569.5, 157.95, 9.94],
        "SlotsTotal 23": [2, 240.84, 598.1, 39.24, 20.88],
        "SlotsRemaining 23": [2, 291.99, 598.1, 92.83, 20.88],
        "Spells 1073": [2, 229.75, 642.19, 157.95, 9.94],
        "Spells 1074": [2, 229.75, 628.11, 157.95, 9.94],
        "Spells 1075": [2, 229.75, 656.15, 157.95, 9.94],
        "Spells 1076": [2, 229.75, 670.12, 157.95, 9.94],
        "Spells 1077": [2, 229.75, 684.13, 157.95, 9.94],
        "Spells 1078": [2, 229.75, 698.09, 157.95, 9.94],
        "Spells 1079": [2, 229.75, 712.06, 157.95, 9.94],
        "Spells 1080": [2, 229.75, 726.1, 157.95, 9.94],
        "Spells 1081": [2, 229.75, 740.23, 157.95, 9.94],
        "SlotsTotal 24": [2, 427.96, 145.94, 39.24, 20.88],
        "SlotsRemaining 24": [2, 479.11, 145.94, 92.84, 20.88],
        "Spells 1082": [2, 416.88, 189.94, 157.95, 9.94],
        "Spells 1083": [2, 416.88, 175.95, 157.95, 9.94],
        "Spells 1084": [2, 416.88, 203.99, 157.95, 9.94],
        "Spells 1085": [2, 416.88, 217.96, 157.95, 9.94],
        "Spells 1086": [2, 416.88, 231.97, 157.95, 9.94],
        "Spells 1087": [2, 416.88, 245.93, 157.95, 9.94],
        "Spells 1088": [2, 416.88, 259.92, 157.95, 9.94],
        "Spells 1089": [2, 416.88, 273.94, 157.95, 9.94],
        "Spells 1090": [2, 416.88, 287.93, 157.95, 9.94],
        "SlotsTotal 25": [2, 427.96, 315.72, 39.24, 20.88],
        "SlotsRemaining 25": [2, 479.11, 315.72, 92.84, 20.88],
        "Spells 1091": [2, 416.88, 359.71, 157.95, 9.94],
        "Spells 1092": [2, 416.88, 345.73, 157.95, 9.94],
        "Spells 1093": [2, 416.88, 373.77, 157.95, 9.94],
        "Spells 1094": [2, 416.88, 387.74, 157.95, 9.94],
        "Spells 1095": [2, 416.88, 401.74, 157.95, 9.94],
        "Spells 1096": [2, 416.88, 415.71, 157.95, 9.94],
        "Spells 1097": [2, 416.88, 429.7, 157.95, 9.94],
        "Spells 1098": [2, 416.88, 443.72, 157.95, 9.94],
        "Spells 1099": [2, 416.88, 457.7, 157.95, 9.94],
        "SlotsTotal 26": [2, 427.96, 485.5, 39.24, 20.88],
        "SlotsRemaining 26": [2, 479.11, 485.5, 92.84, 20.88],
        "Spells 10100": [2, 416.88, 529.49, 157.95, 9.94],
        "Spells 10101": [2, 416.88, 515.5, 157.95, 9.94],
        "Spells 10102": [2, 416.88, 543.55, 157.95, 9.94],
        "Spells 10103": [2, 416.88, 557.51, 157.95, 9.94],
        "Check Box 316": [2, 221.4, 418.05, 5.9, 8.48],
        "Check Box 3042": [2, 221.4, 432.05, 5.9, 8.47],
        "Check Box 3043": [2, 221.4, 446.04, 5.9, 8.48],
        "Check Box 3044": [2, 221.4, 460.04, 5.9, 8.47],
        "Check Box 3045": [2, 221.4, 474.04, 5.9, 8.47],
        "Check Box 3046": [2, 221.4, 488.04, 5.9, 8.47],
        "Check Box 3047": [2, 221.4, 502.04, 5.9, 8.47],
        "Check Box 3048": [2, 221.4, 516.03, 5.9, 8.47],
        "Check Box 3049": [2, 221.4, 530.03, 5.9, 8.47],
        "Check Box 3050": [2, 221.4, 544.03, 5.9, 8.48],
        "Check Box 3051": [2, 221.4, 558.03, 5.9, 8.47],
        "Check Box 3052": [2, 221.4, 572.03, 5.9, 8.47],
        "Spells 10104": [2, 416.88, 571.52, 157.95, 9.94],
        "Check Box 325": [2, 408.53, 517.92, 5.9, 8.47],
        "Check Box 324": [2, 408.53, 531.93, 5.9, 8.47],
        "Check Box 3074": [2, 408.53, 545.94, 5.9, 8.47],
        "Check Box 3075": [2, 408.53, 559.96, 5.9, 8.47],
        "Check Box 3076": [2, 408.53, 573.97, 5.9, 8.47],
        "Check Box 3077": [2, 408.53, 587.98, 5.9, 8.47],
        "Spells 10105": [2, 416.88, 585.49, 157.95, 9.94],
        "Spells 10106": [2, 416.88, 599.47, 157.95, 9.94],
        "Check Box 3078": [2, 408.53, 601.99, 5.9, 8.47],
        "SlotsTotal 27": [2, 427.96, 626.26, 39.24, 20.88],
        "SlotsRemaining 27": [2, 479.11, 626.26, 92.84, 20.88],
        "Check Box 313": [2, 32.42, 574.78, 5.9, 8.47],
        "Check Box 310": [2, 32.42, 588.78, 5.9, 8.48],
        "Check Box 3020": [2, 32.42, 602.78, 5.9, 8.47],
        "Check Box 3021": [2, 32.42, 616.77, 5.9, 8.47],
        "Check Box 3022": [2, 32.42, 630.77, 5.9, 8.47],
        "Check Box 3023": [2, 32.42, 644.77, 5.9, 8.47],
        "Check Box 3024": [2, 32.42, 658.77, 5.9, 8.47],
        "Check Box 3025": [2, 32.42, 672.77, 5.9, 8.47],
        "Check Box 3026": [2, 32.42, 686.76, 5.9, 8.47],
        "Check Box 3027": [2, 32.42, 700.76, 5.9, 8.47],
        "Check Box 3028": [2, 32.42, 714.76, 5.9, 8.47],
        "Check Box 3029": [2, 32.42, 728.76, 5.9, 8.47],
        "Check Box 3030": [2, 32.42, 742.76, 5.9, 8.47],
        "Spells 10107": [2, 416.88, 670.25, 157.95, 9.94],
        "Spells 10108": [2, 416.88, 656.26, 157.95, 9.94],
        "Spells 10109": [2, 416.88, 684.31, 157.95, 9.94],
        "Spells 101010": [2, 416.88, 698.27, 157.95, 9.94],
        "Spells 101011": [2, 416.88, 712.28, 157.95, 9.94],
        "Spells 101012": [2, 416.88, 726.25, 157.95, 9.94],
        "Check Box 319": [2, 221.4, 630.63, 5.9, 8.47],
        "Check Box 318": [2, 221.4, 644.63, 5.9, 8.47],
        "Check Box 3053": [2, 221.4, 658.62, 5.9, 8.47],
        "Check Box 3054": [2, 221.4, 672.62, 5.9, 8.48],
        "Check Box 3055": [2, 221.4, 686.61, 5.9, 8.47],
        "Check Box 3056": [2, 221.4, 700.61, 5.9, 8.47],
        "Check Box 3057": [2, 221.4, 714.6, 5.9, 8.47],
        "Check Box 3058": [2, 221.4, 728.59, 5.9, 8.47],
        "Check Box 3059": [2, 221.4, 742.59, 5.9, 8.47],
        "Check Box 327": [2, 408.53, 658.62, 5.9, 8.47],
        "Check Box 326": [2, 408.53, 672.64, 5.9, 8.47],
        "Check Box 3079": [2, 408.53, 686.67, 5.9, 8.47],
        "Check Box 3080": [2, 408.53, 700.69, 5.9, 8.47],
        "Check Box 3081": [2, 408.53, 714.71, 5.9, 8.47],
        "Check Box 3082": [2, 408.53, 728.73, 5.9, 8.47],
        "Spells 101013": [2, 416.88, 740.23, 157.95, 9.94],
        "Check Box 3083": [2, 408.53, 742.76, 5.9, 8.47],
      };
      const SKILLS = [
        ["Acrobatics", "dex", "Акробатика", "Check Box 23"],
        ["Animal", "wis", "Поводження з тваринами", "Check Box 24"],
        ["Arcana", "int", "Аркана", "Check Box 25"],
        ["Athletics", "str", "Атлетика", "Check Box 26"],
        ["Deception ", "cha", "Обман", "Check Box 27"],
        ["History ", "int", "Історія", "Check Box 28"],
        ["Insight", "wis", "Проникливість", "Check Box 29"],
        ["Intimidation", "cha", "Залякування", "Check Box 30"],
        ["Investigation ", "int", "Дослідження", "Check Box 31"],
        ["Medicine", "wis", "Медицина", "Check Box 32"],
        ["Nature", "int", "Природа", "Check Box 33"],
        ["Perception ", "wis", "Уважність", "Check Box 34"],
        ["Performance", "cha", "Виступ", "Check Box 35"],
        ["Persuasion", "cha", "Переконання", "Check Box 36"],
        ["Religion", "int", "Релігія", "Check Box 37"],
        ["SleightofHand", "dex", "Спритність рук", "Check Box 38"],
        ["Stealth ", "dex", "Скритність", "Check Box 39"],
        ["Survival", "wis", "Виживання", "Check Box 40"],
      ];
      const pad = 2;
      function gp(n) {
        return FR[n];
      }
      function putL(name, str, size) {
        const f = gp(name);
        if (!f) return;
        if (str === undefined || str === null || String(str).trim() === "") return;
        doc.cur = doc.pages[f[0]];
        const y = f[2] + (f[4] - size) / 2 - 0.6;
        doc.text(f[1] + pad, y, String(str), { size: size });
      }
      function putC(name, str, size) {
        const f = gp(name);
        if (!f) return;
        if (str === undefined || str === null || String(str).trim() === "") return;
        doc.cur = doc.pages[f[0]];
        const s = String(str);
        let tw = doc.widthOf(s, size);
        let x = f[1] + (f[3] - tw) / 2;
        if (x < f[1] + 1) x = f[1] + 1;
        const y = f[2] + (f[4] - size) / 2 - 0.6;
        doc.text(x, y, s, { size: size });
      }
      function putCheck(name, on) {
        if (!on) return;
        const f = gp(name);
        if (!f) return;
        doc.cur = doc.pages[f[0]];
        const s = Math.min(f[3], f[4]) * 0.72;
        doc.rect(f[1] + (f[3] - s) / 2, f[2] + (f[4] - s) / 2, s, s, [0, 0, 0]);
      }
      function putBlock(name, text, size, lineH) {
        const f = gp(name);
        if (!f) return;
        if (!text || String(text).trim() === "") return;
        doc.cur = doc.pages[f[0]];
        const maxLines = Math.max(1, Math.floor(f[4] / lineH));
        wrap(doc, text, f[3] - 2 * pad, size)
          .slice(0, maxLines)
          .forEach((l, i) => doc.text(f[1] + pad, f[2] + 1 + i * lineH, l, { size: size }));
      }
      function blockAt(page, x, y, w, h, text, size, lineH) {
        if (!text || String(text).trim() === "") return;
        doc.cur = doc.pages[page];
        const maxLines = Math.max(1, Math.floor(h / lineH));
        wrap(doc, text, w, size)
          .slice(0, maxLines)
          .forEach((l, i) => doc.text(x, y + i * lineH, l, { size: size }));
      }
      function attackRows() {
        const rows = Array.isArray(data.inv.weaponList) ? data.inv.weaponList : [];
        const out = [];
        rows.forEach((r) => {
          const info = typeof weaponAttackInfo === "function" ? weaponAttackInfo(r) : null;
          if (info) out.push({ name: info.name, bonus: info.attackBonus, dmg: info.damageStr });
        });
        return out;
      }
      putL("CharacterName", d.name, 12);
      putC("ClassLevel", cls ? cls.name + " " + data.lvl : "", 9);
      putC("Background", data.bg, 9);
      putC("PlayerName", d.player || "", 9);
      putC(
        "Race ",
        race
          ? race.name +
            (race.subraces && data.ch && data.ch.subraceId
              ? (function () {
                  var s = race.subraces.find((x) => x.id === data.ch.subraceId);
                  return s ? " (" + s.name + ")" : "";
                })()
              : "")
          : "",
        9,
      );
      putC("Alignment", d.alignment, 9);
      putC("XP", d.xp || "", 9);
      putC("AC", data.ac, 15);
      putC("Initiative", data.fmt(data.init), 13);
      putC("Speed", data.speed, 11);
      putC("ProfBonus", data.pb ? "+" + data.pb : "", 11);
      putC("Passive", data.passive, 11);
      const ABK = ["str", "dex", "con", "int", "wis", "cha"];
      const ABSC = { str: "STR", dex: "DEX", con: "CON", int: "INT", wis: "WIS", cha: "CHA" };
      const ABMD = {
        str: "STRmod",
        dex: "DEXmod ",
        con: "CONmod",
        int: "INTmod",
        wis: "WISmod",
        cha: "CHamod",
      };
      ABK.forEach((k) => {
        putC(ABSC[k], data.ability(k), 16);
        putC(ABMD[k], data.fmt(data.amod(k)), 11);
      });
      const SAVEF = {
        str: ["ST Strength", "Check Box 11"],
        dex: ["ST Dexterity", "Check Box 18"],
        con: ["ST Constitution", "Check Box 19"],
        int: ["ST Intelligence", "Check Box 20"],
        wis: ["ST Wisdom", "Check Box 21"],
        cha: ["ST Charisma", "Check Box 22"],
      };
      ABK.forEach((k) => {
        const prof = data.saves.has(k);
        putC(SAVEF[k][0], data.fmt(data.amod(k) + (prof ? data.pb : 0)), 7);
        putCheck(SAVEF[k][1], prof);
      });
      SKILLS.forEach(([field, k, dn, cb]) => {
        const prof = data.skills.has(dn);
        putC(field, data.fmt(data.amod(k) + (prof ? data.pb : 0)), 7);
        putCheck(cb, prof);
      });
      putC("HPMax", data.hp, 10);
      putL("HPCurrent", data.inv.hpCurrent || data.hp, 11);
      putC("HDTotal", data.lvl, 8);
      putL("HD", cls ? data.lvl + cls.hitDice.slice(cls.hitDice.indexOf("d")) : "", 9);
      const AR = attackRows();
      const AF = [
        ["Wpn Name", "Wpn1 AtkBonus", "Wpn1 Damage"],
        ["Wpn Name 2", "Wpn2 AtkBonus ", "Wpn2 Damage "],
        ["Wpn Name 3", "Wpn3 AtkBonus  ", "Wpn3 Damage "],
      ];
      AR.slice(0, 3).forEach((r, i) => {
        putL(AF[i][0], r.name, 7);
        putC(AF[i][1], r.bonus, 7);
        putL(AF[i][2], r.dmg, 7);
      });
      const extraAtk = AR.slice(3).map((r) => r.name + "  " + r.bonus + "  " + r.dmg);
      if (data.inv.weapons) extraAtk.push(data.inv.weapons);
      putBlock("AttacksSpellcasting", extraAtk.join("\n"), 7, 9);
      putBlock("Equipment", equipmentText(data), 7, 10);
      putBlock("ProficienciesLang", profText(data), 6.5, 8.5);
      putBlock("Features and Traits", featuresText(data), 6.5, 8.5);
      putBlock("PersonalityTraits ", d.traits, 7, 9);
      putBlock("Ideals", d.ideals, 7, 9);
      putBlock("Bonds", d.bonds, 7, 9);
      putBlock("Flaws", d.flaws, 7, 9);
      putC("CP", data.inv.cp || "", 8);
      putC("SP", data.inv.sp || "", 8);
      putC("EP", data.inv.ep || "", 8);
      putC("GP", data.inv.gp || "", 8);
      putC("PP", data.inv.pp || "", 8);
      putL("CharacterName 2", d.name, 12);
      putC("Age", d.age, 9);
      putC("Height", d.height, 9);
      putC("Weight", d.weight, 9);
      putC("Eyes", d.eyes, 9);
      putC("Skin", d.skin, 9);
      putC("Hair", d.hair, 9);
      putBlock("Allies", d.allies || "", 8, 11);
      putBlock(
        "Backstory",
        (function () {
          var p = [];
          if (d.backstory) p.push(d.backstory);
          return p.join(String.fromCharCode(10, 10));
        })(),
        8,
        10,
      );
      putBlock("Feat+Traits", featuresDetailed(data), 7, 9.5);
      putBlock("Treasure", d.treasure || "", 8, 10);
      putL("Spellcasting Class 2", data.cls ? data.cls.name : "", 10);
      const sc = data.cls && data.cls.spellcasting ? data.cls.spellcasting : null;
      if (sc) {
        const an =
          (typeof ABILITY_LABELS !== "undefined" && ABILITY_LABELS[sc.ability]) || sc.ability;
        putC("SpellcastingAbility 2", an, 10);
        putC("SpellSaveDC  2", 8 + data.pb + data.amod(sc.ability), 12);
        putC("SpellAtkBonus 2", data.fmt(data.pb + data.amod(sc.ability)), 12);
      }
      const by = spellNames();
      const SREG = {
        0: [40, 172, 158, 128],
        1: [40, 360, 158, 172],
        2: [40, 572, 158, 170],
        3: [229, 176, 158, 176],
        4: [229, 401, 158, 168],
        5: [229, 628, 158, 118],
        6: [416, 176, 158, 164],
        7: [416, 345, 158, 134],
        8: [416, 515, 158, 104],
        9: [416, 656, 158, 84],
      };
      Object.entries(SREG).forEach(([lv, a]) =>
        blockAt(2, a[0] + 6, a[1], a[2] - 9, a[3], (by[lv] || []).join("\n"), 6.4, 13.95),
      );
      const __slots =
        typeof getSpellSlots === "function" && data.ch
          ? getSpellSlots(data.ch.classId, data.lvl)
          : [];
      for (let __L = 1; __L <= 9; __L++) {
        const __n = (__slots && __slots[__L - 1]) || 0;
        if (__n > 0) {
          putC("SlotsTotal " + (18 + __L), __n, 9);
          putC("SlotsRemaining " + (18 + __L), __n, 9);
        }
      }
      const blob = new Blob([doc.build()], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = safeFileName(d.name) + "_Аркуш_персонажа.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 5e3);
      setPdfStatus("Готово! Український аркуш заповнено.");
    } catch (err) {
      console.error(err);
      setPdfStatus("Помилка: " + err.message, true);
    } finally {
      if (btn) btn.disabled = false;
      if (icon) icon.innerText = "⬇️";
      if (label) label.innerText = "Завантажити PDF";
    }
  }
  window.generatePDF = generatePDF;
})();
