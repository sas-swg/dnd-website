/* ============================================================
   D&D 5e База Знань — спільний скрипт
   Єдине меню + мобільне меню + темна тема + глобальний пошук + рік
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

    // Права частина: десктоп-лінки + кнопки
    var existingNav = header.querySelector("nav");
    var navHtml = "";
    for (var i = 0; i < NAV_LINKS.length; i++) {
      var l = NAV_LINKS[i];
      var active = l.href.toLowerCase() === page;
      navHtml += '<a href="' + l.href + '" class="transition-colors ' +
        (active ? "text-forest-accent font-bold" : "hover:text-forest-accent") +
        '"' + (active ? ' aria-current="page"' : "") + ">" + l.label + "</a>";
    }

    var controls =
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

    // Кнопка-гамбургер (мобільна)
    var burger = document.createElement("button");
    burger.type = "button";
    burger.id = "nav-burger";
    burger.className = "md:hidden text-white text-2xl leading-none ml-auto";
    burger.setAttribute("aria-label", "Меню");
    burger.setAttribute("aria-expanded", "false");
    burger.innerHTML = "☰";
    bar.appendChild(burger);

    // Мобільне випадне меню
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

  /* ---------- Глобальний пошук ---------- */
  var searchIndex = [];
  var indexLoaded = false;
  var activeResult = -1;

  function loadIndex() {
    if (indexLoaded) return Promise.resolve();
    return fetch("search-index.json")
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (data) { searchIndex = Array.isArray(data) ? data : []; indexLoaded = true; })
      .catch(function () { indexLoaded = true; });
  }

  function buildSearchOverlay() {
    var overlay = document.createElement("div");
    overlay.id = "global-search-overlay";
    overlay.innerHTML =
      '<div id="global-search-box" role="dialog" aria-label="Пошук по базі">' +
      '<input id="global-search-input" type="search" autocomplete="off" ' +
      'placeholder="Пошук заклинань, рис, рас, класів, правил...">' +
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

  function highlight(items) {
    for (var i = 0; i < items.length; i++) items[i].classList.toggle("active", i === activeResult);
    if (items[activeResult]) items[activeResult].scrollIntoView({ block: "nearest" });
  }

  function renderResults(q, results) {
    activeResult = -1;
    q = (q || "").trim().toLowerCase();
    if (!q) { results.innerHTML = '<div class="gs-empty">Почніть вводити, щоб знайти...</div>'; return; }
    var matches = [];
    for (var i = 0; i < searchIndex.length && matches.length < 40; i++) {
      var it = searchIndex[i];
      if ((it.title || "").toLowerCase().indexOf(q) !== -1) matches.push(it);
    }
    if (!matches.length) { results.innerHTML = '<div class="gs-empty">Нічого не знайдено</div>'; return; }
    var html = "";
    for (var j = 0; j < matches.length; j++) {
      var m = matches[j];
      var url = m.page + (m.anchor ? "#" + m.anchor : "");
      html += '<a class="gs-result" href="' + url + '">' +
        '<span class="gs-title">' + escapeHtml(m.title) + "</span>" +
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
    loadIndex().then(function () { renderResults(input.value, overlay.querySelector("#global-search-results")); });
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

  /* ---------- Ініціалізація ---------- */
  function init() {
    applyTheme(getTheme());
    buildNav();
    buildSearchOverlay();
    fixFooterYear();

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
