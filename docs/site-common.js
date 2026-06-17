/* ============================================================
   D&D 5e База Знань — спільний скрипт
   Єдине меню + мобільне меню + темна тема + глобальний пошук (fuzzy) + рік
   ============================================================ */
(function () {
  "use strict";

  var NAV_LINKS = [
    { href: "index.html", label: "Головна" },
    { href: "rules.html", label: "Правила" },
    { href: "races.html", label: "Раси" },
    { href: "classes.html", label: "Класи" },
    { href: "backgrounds.html", label: "Передісторії" },
    { href: "feats.html", label: "Риси" },
    { href: "spells.html", label: "Заклинання" },
    { href: "character-creator.html", label: "Конструктор" }
  ];

  function currentPage() {
    var path = location.pathname.split("/").pop() || "index.html";
    if (path === "") path = "index.html";
    return path.toLowerCase();
  }

  /* ---------- Темна тема ---------- */
  function applyTheme(theme) {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    var btns = document.querySelectorAll("[data-theme-toggle]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].textContent = theme === "dark" ? "☀️" : "🌙";
      btns[i].setAttribute("aria-label", theme === "dark" ? "Світла тема" : "Темна тема");
    }
  }
  function getTheme() {
    try { return localStorage.getItem("theme") === "dark" ? "dark" : "light"; }
    catch (e) { return "light"; }
  }
  function toggleTheme() {
    var next = getTheme() === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", next); } catch (e) {}
    applyTheme(next);
  }

  /* ---------- Побудова навігації ---------- */
  function buildNav() {
    var header = document.querySelector("header");
    if (!header) return;
    var bar = header.querySelector(".container") || header.firstElementChild || header;
    var page = currentPage();

    var existingNav = header.querySelector("nav");
    var navHtml = "";
    for (var i = 0; i < NAV_LINKS.length; i++) {
      var l = NAV_LINKS[i];
      var active = l.href.toLowerCase() === page;
      navHtml += '<a href="' + l.href + '" class="transition-colors ' +
        (active ? "text-forest-accent font-bold" : "hover:text-forest-accent") +
        '"' + (active ? ' aria-current="page"' : "") + ">" + l.label + "</a>";
    }

    var __inEn = location.pathname.indexOf("/en/") !== -1;
    var __langHref = (__inEn ? "../" : "en/") + page;
    var __langLabel = __inEn ? "🇺🇦 УК" : "🇬🇧 EN";
    var __langTitle = __inEn ? "Перемкнути на українську" : "Switch to English";
    var __langLink = '<a href="' + __langHref + '" data-lang-toggle class="hover:text-forest-accent transition-colors text-sm font-semibold" title="' + __langTitle + '">' + __langLabel + '</a>';
    var controls = __langLink +
      '<button type="button" data-search-open aria-label="Пошук" ' +
      'class="hover:text-forest-accent transition-colors text-lg" title="Пошук (натисніть /)">🔍</button>' +
      '<button type="button" data-theme-toggle aria-label="Темна тема" ' +
      'class="hover:text-forest-accent transition-colors text-lg">🌙</button>';

    if (existingNav) {
      existingNav.innerHTML = navHtml + controls;
      existingNav.className = "hidden md:flex items-center gap-5 text-sm font-semibold";
    } else {
      var nav = document.createElement("nav");
      nav.className = "hidden md:flex items-center gap-5 text-sm font-semibold";
      nav.innerHTML = navHtml + controls;
      bar.appendChild(nav);
    }

    var burger = document.createElement("button");
    burger.type = "button";
    burger.id = "nav-burger";
    burger.className = "md:hidden text-white text-2xl leading-none ml-auto";
    burger.setAttribute("aria-label", "Меню");
    burger.setAttribute("aria-expanded", "false");
    burger.innerHTML = "☰";
    bar.appendChild(burger);

    var mobile = document.createElement("div");
    mobile.id = "mobile-menu";
    mobile.className = "md:hidden bg-forest text-white";
    var mHtml = '<div class="container mx-auto px-4 py-2 flex flex-col">';
    for (var j = 0; j < NAV_LINKS.length; j++) {
      var ml = NAV_LINKS[j];
      var mActive = ml.href.toLowerCase() === page;
      mHtml += '<a href="' + ml.href + '" class="py-2 border-b border-white/10 ' +
        (mActive ? "text-forest-accent font-bold" : "hover:text-forest-accent") + '">' +
        ml.label + "</a>";
    }
    mHtml += '<a href="' + __langHref + '" class="py-2 border-b border-white/10 hover:text-forest-accent">' + __langLabel + '</a>';
    mHtml += '<button type="button" data-search-open class="text-left py-2 border-b border-white/10 hover:text-forest-accent">🔍 Пошук</button>';
    mHtml += '<button type="button" data-theme-toggle-text class="text-left py-2 hover:text-forest-accent">🌙 Перемкнути тему</button>';
    mHtml += "</div>";
    mobile.innerHTML = mHtml;
    header.insertAdjacentElement("afterend", mobile);

    burger.addEventListener("click", function () {
      var open = mobile.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.innerHTML = open ? "✕" : "☰";
    });
  }

  /* ---------- Глобальний пошук (fuzzy + фільтри) ---------- */
  var searchIndex = [];
  var indexLoaded = false;
  var activeResult = -1;
  var activeCat = "";        // поточний фільтр категорії
  var catsBuilt = false;

  function prepareIndex(data) {
    searchIndex = Array.isArray(data) ? data : [];
    for (var i = 0; i < searchIndex.length; i++) {
      var it = searchIndex[i];
      it._n = normalize((it.title || "") + " " + (it.cat || "") + " " + (it.desc || ""));
      it._t = normalize(it.title || "");
    }
    indexLoaded = true;
  }

  function loadIndex() {
    if (indexLoaded) return Promise.resolve();
    // 1) Вбудований індекс (search-index.js) — працює і локально (file://)
    if (typeof window !== "undefined" && Array.isArray(window.SEARCH_INDEX)) {
      prepareIndex(window.SEARCH_INDEX);
      return Promise.resolve();
    }
    // 2) Резерв: завантаження JSON через fetch (при роботі через сервер)
    if (typeof fetch !== "function") { indexLoaded = true; return Promise.resolve(); }
    return fetch("search-index.json")
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (data) {
        searchIndex = Array.isArray(data) ? data : [];
        // підготовлений нормалізований текст для швидкого пошуку
        for (var i = 0; i < searchIndex.length; i++) {
          var it = searchIndex[i];
          it._n = normalize((it.title || "") + " " + (it.cat || "") + " " + (it.desc || ""));
          it._t = normalize(it.title || "");
        }
        indexLoaded = true;
      })
      .catch(function () { indexLoaded = true; });
  }

  function normalize(s) {
    return String(s || "").toLowerCase().replace(/[’'`ʼ]/g, "'").replace(/\s+/g, " ").trim();
  }

  // Оцінка збігу одного токена в тексті: -1 якщо немає збігу
  function tokenScore(token, text) {
    if (!token) return 0;
    var idx = text.indexOf(token);
    if (idx !== -1) {
      var score = 60;
      if (idx === 0) score += 50;
      else if (/[\s(\[«"'\-]/.test(text.charAt(idx - 1))) score += 30; // межа слова
      score -= Math.min(idx, 25) * 0.4;
      return score;
    }
    // нечіткий збіг (підпослідовність літер)
    var ti = 0, qi = 0, first = -1, last = -1;
    for (; ti < text.length && qi < token.length; ti++) {
      if (text.charAt(ti) === token.charAt(qi)) {
        if (first < 0) first = ti;
        last = ti;
        qi++;
      }
    }
    if (qi === token.length) {
      var span = last - first + 1;
      var compact = token.length / span; // 1 = ідеально компактно
      return 8 + compact * 12 - first * 0.05;
    }
    return -1;
  }

  function scoreItem(tokens, it) {
    var total = 0;
    for (var i = 0; i < tokens.length; i++) {
      var tk = tokens[i];
      var inTitle = tokenScore(tk, it._t);
      var inAll = inTitle >= 0 ? inTitle + 15 : tokenScore(tk, it._n);
      if (inAll < 0) return -1; // кожен токен має збігтись
      total += inAll;
    }
    return total;
  }

  function buildSearchOverlay() {
    var overlay = document.createElement("div");
    overlay.id = "global-search-overlay";
    overlay.innerHTML =
      '<div id="global-search-box" role="dialog" aria-label="Пошук по базі">' +
      '<input id="global-search-input" type="search" autocomplete="off" ' +
      'placeholder="Пошук заклинань, рис, рас, класів, правил...">' +
      '<div id="global-search-cats"></div>' +
      '<div id="global-search-results"></div>' +
      '<div class="gs-hint">↑↓ рух · Enter відкрити · Esc закрити</div>' +
      "</div>";
    document.body.appendChild(overlay);

    var input = overlay.querySelector("#global-search-input");
    var results = overlay.querySelector("#global-search-results");

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeSearch();
    });
    input.addEventListener("input", function () { renderResults(input.value, results); });
    input.addEventListener("keydown", function (e) {
      var items = results.querySelectorAll(".gs-result");
      if (e.key === "ArrowDown") { e.preventDefault(); activeResult = Math.min(activeResult + 1, items.length - 1); highlight(items); }
      else if (e.key === "ArrowUp") { e.preventDefault(); activeResult = Math.max(activeResult - 1, 0); highlight(items); }
      else if (e.key === "Enter") { if (items[activeResult]) window.location.href = items[activeResult].getAttribute("href"); }
      else if (e.key === "Escape") { closeSearch(); }
    });
  }

  function buildCatChips() {
    var box = document.getElementById("global-search-cats");
    if (!box || catsBuilt) return;
    var seen = {}, cats = [];
    for (var i = 0; i < searchIndex.length; i++) {
      var c = searchIndex[i].cat || "";
      if (c && !seen[c]) { seen[c] = 1; cats.push(c); }
    }
    cats.sort(function (a, b) { return a.localeCompare(b, "uk"); });
    var html = '<button type="button" class="gs-chip active" data-cat="">Всі</button>';
    for (var j = 0; j < cats.length; j++) {
      html += '<button type="button" class="gs-chip" data-cat="' + escapeHtml(cats[j]) + '">' + escapeHtml(cats[j]) + "</button>";
    }
    box.innerHTML = html;
    box.addEventListener("click", function (e) {
      var chip = e.target.closest ? e.target.closest(".gs-chip") : null;
      if (!chip) return;
      activeCat = chip.getAttribute("data-cat") || "";
      var all = box.querySelectorAll(".gs-chip");
      for (var k = 0; k < all.length; k++) all[k].classList.toggle("active", all[k] === chip);
      var input = document.getElementById("global-search-input");
      renderResults(input ? input.value : "", document.getElementById("global-search-results"));
    });
    catsBuilt = true;
  }

  function highlight(items) {
    for (var i = 0; i < items.length; i++) items[i].classList.toggle("active", i === activeResult);
    if (items[activeResult]) items[activeResult].scrollIntoView({ block: "nearest" });
  }

  // Підсвічування збігів у назві
  function markTitle(title, tokens) {
    var safe = escapeHtml(title);
    var lower = normalize(title);
    var ranges = [];
    for (var i = 0; i < tokens.length; i++) {
      var tk = tokens[i];
      var from = 0, idx;
      while (tk && (idx = lower.indexOf(tk, from)) !== -1) {
        ranges.push([idx, idx + tk.length]);
        from = idx + tk.length;
      }
    }
    if (!ranges.length) return safe;
    // працюємо на escaped-рядку лише якщо без спецсимволів, інакше віддаємо без підсвітки
    if (safe !== title) return safe;
    ranges.sort(function (a, b) { return a[0] - b[0]; });
    var merged = [ranges[0]];
    for (var r = 1; r < ranges.length; r++) {
      var prev = merged[merged.length - 1];
      if (ranges[r][0] <= prev[1]) prev[1] = Math.max(prev[1], ranges[r][1]);
      else merged.push(ranges[r]);
    }
    var out = "", pos = 0;
    for (var m = 0; m < merged.length; m++) {
      out += title.slice(pos, merged[m][0]) + "<mark>" + title.slice(merged[m][0], merged[m][1]) + "</mark>";
      pos = merged[m][1];
    }
    out += title.slice(pos);
    return out;
  }

  function renderResults(q, results) {
    activeResult = -1;
    var raw = (q || "").trim();
    var nq = normalize(raw);
    var tokens = nq ? nq.split(" ") : [];

    var pool = searchIndex;
    var scored = [];
    for (var i = 0; i < pool.length; i++) {
      var it = pool[i];
      if (activeCat && (it.cat || "") !== activeCat) continue;
      if (!tokens.length) {
        scored.push({ it: it, s: 0 });
      } else {
        var s = scoreItem(tokens, it);
        if (s >= 0) scored.push({ it: it, s: s });
      }
    }

    if (tokens.length) scored.sort(function (a, b) { return b.s - a.s; });
    else scored.sort(function (a, b) { return a.it._t < b.it._t ? -1 : 1; });

    if (!scored.length) {
      results.innerHTML = tokens.length
        ? '<div class="gs-empty">Нічого не знайдено</div>'
        : '<div class="gs-empty">Почніть вводити, щоб знайти...</div>';
      return;
    }

    var limit = Math.min(scored.length, 50);
    var html = '<div class="gs-count">Знайдено: ' + scored.length + (scored.length > limit ? ' (показано ' + limit + ')' : '') + '</div>';
    for (var j = 0; j < limit; j++) {
      var m = scored[j].it;
      var url = m.page + "?find=" + encodeURIComponent(m.title || "") + (m.anchor ? "#" + m.anchor : "");
      html += '<a class="gs-result" href="' + url + '">' +
        '<span class="gs-title">' + markTitle(m.title || "", tokens) + "</span>" +
        '<span class="gs-cat">' + escapeHtml(m.cat || "") + "</span></a>";
    }
    results.innerHTML = html;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function openSearch() {
    var overlay = document.getElementById("global-search-overlay");
    if (!overlay) return;
    overlay.classList.add("open");
    var input = overlay.querySelector("#global-search-input");
    loadIndex().then(function () {
      buildCatChips();
      renderResults(input.value, overlay.querySelector("#global-search-results"));
    });
    setTimeout(function () { input.focus(); }, 30);
  }
  function closeSearch() {
    var overlay = document.getElementById("global-search-overlay");
    if (overlay) overlay.classList.remove("open");
  }

  /* ---------- Рік у підвалі ---------- */
  function fixFooterYear() {
    var year = new Date().getFullYear();
    var footers = document.querySelectorAll("footer");
    for (var i = 0; i < footers.length; i++) {
      footers[i].innerHTML = footers[i].innerHTML.replace(/(19|20)\d{2}/g, year);
    }
  }

  /* ---------- Back-to-top ---------- */
  function buildBackToTop() {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.id = "back-to-top";
    btn.setAttribute("aria-label", "Нагору");
    btn.innerHTML = "↑";
    document.body.appendChild(btn);
    btn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    var onScroll = function () { btn.classList.toggle("show", window.pageYOffset > 600); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Ад����птивні таблиці (горизонтал��на прокрутка на мобільних) ---------- */
  function makeTablesResponsive() {
    var tables = document.querySelectorAll("main table");
    for (var i = 0; i < tables.length; i++) {
      var t = tables[i];
      if (t.closest(".table-scroll")) continue;
      var wrap = document.createElement("div");
      wrap.className = "table-scroll";
      t.parentNode.insertBefore(wrap, t);
      wrap.appendChild(t);
    }
  }

  /* ---------- Підсвічування знайденого після переходу (?find=...) ---------- */
  function getParam(name) {
    var m = new RegExp("[?&]" + name + "=([^&]*)").exec(location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : "";
  }

  function flashTarget(el) {
    if (!el) return;
    el.classList.add("search-flash");
    setTimeout(function () { el.classList.remove("search-flash"); }, 2800);
  }

  // Розгорнути картку, якщо вона згортається
  function openCollapsible(card) {
    if (!card) return;
    var content = card.querySelector(".feat-content");
    if (content && !content.classList.contains("open")) {
      var header = card.querySelector('[onclick*="toggle"]') ||
                   card.querySelector(".cursor-pointer") ||
                   card.firstElementChild;
      try { if (header) header.click(); } catch (e) {}
    }
  }

  function focusSearchTarget() {
    var q = getParam("find");
    if (!q) return;
    var nq = normalize(q);
    var primary = normalize(q.split(" (")[0]); // укр. частина для локального фільтра

    // 1) Якщо на сторінці є власний пошук — підставити запит і відфільтрувати
    var input = document.getElementById("searchInput");
    if (input) {
      input.value = q.split(" (")[0];
      try {
        input.dispatchEvent(new Event("keyup", { bubbles: true }));
        input.dispatchEvent(new Event("input", { bubbles: true }));
      } catch (e) {}
    }

    setTimeout(function () { locateAndHighlight(nq, primary); }, 80);
  }

  function locateAndHighlight(nq, primary) {
    var target = null;

    // А) Якщо є якір у URL
    if (location.hash && location.hash.length > 1) {
      var byId = document.getElementById(location.hash.slice(1));
      if (byId) target = byId;
    }

    // Б) Картки .feat-card за заголовком
    if (!target) {
      var cards = document.querySelectorAll("main .feat-card");
      var best = null, bestLen = Infinity, exact = null;
      for (var i = 0; i < cards.length; i++) {
        var nameEl = cards[i].querySelector(".feat-name");
        var txt = normalize((nameEl ? nameEl.textContent : cards[i].textContent) || "");
        if (!txt) continue;
        if (txt === nq) { exact = cards[i]; break; }
        if (txt.indexOf(nq) !== -1 || (primary && txt.indexOf(primary) !== -1) || nq.indexOf(txt) !== -1) {
          if (txt.length < bestLen) { best = cards[i]; bestLen = txt.length; }
        }
      }
      target = exact || best;
    }

    // В) Заголовки / рядки / картки-посилання
    if (!target) {
      var els = document.querySelectorAll("main h2, main h3, main h4, main td, main th, main li, main .nav-card");
      var pick = null, pickLen = Infinity;
      for (var j = 0; j < els.length; j++) {
        var t = normalize(els[j].textContent || "");
        if (t && (t.indexOf(nq) !== -1 || (primary && t.indexOf(primary) !== -1))) {
          if (t.length < pickLen) { pick = els[j]; pickLen = t.length; }
        }
      }
      target = pick;
    }

    if (!target) return;
    var card = target.closest ? (target.closest(".feat-card") || target) : target;
    openCollapsible(card);
    // Підсвітити саме знайдений елемент (здібність/рядок), а не всю картку
    var focusEl = (target === card) ? card : target;
    setTimeout(function () {
      focusEl.scrollIntoView({ behavior: "smooth", block: "center" });
      flashTarget(focusEl);
    }, 180);
  }

  /* ---------- Ініціалізація ---------- */
  function init() {
    applyTheme(getTheme());
    buildNav();
    buildSearchOverlay();
    buildBackToTop();
    makeTablesResponsive();
    fixFooterYear();
    focusSearchTarget();

    document.addEventListener("click", function (e) {
      var t = e.target.closest ? e.target.closest("[data-theme-toggle],[data-theme-toggle-text],[data-search-open]") : null;
      if (!t) return;
      if (t.hasAttribute("data-search-open")) { e.preventDefault(); openSearch(); }
      else { e.preventDefault(); toggleTheme(); }
    });

    document.addEventListener("keydown", function (e) {
      var tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : "";
      var typing = tag === "input" || tag === "textarea" || tag === "select";
      if (e.key === "/" && !typing) { e.preventDefault(); openSearch(); }
      else if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) { e.preventDefault(); openSearch(); }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
