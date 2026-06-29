/* Dil seçici + mobil menü
   Metinler HTML'de data-tr / data-en olarak duruyor. */
(function () {
  var KEY = "akvaryum_lang";

  function setLang(lang) {
    if (lang !== "tr" && lang !== "en") lang = "tr";
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-tr]").forEach(function (el) {
      var val = el.getAttribute("data-" + lang);
      if (val === null) return;
      if (el.hasAttribute("data-html")) el.innerHTML = val;
      else el.textContent = val;
    });

    // placeholder / aria için
    document.querySelectorAll("[data-tr-attr]").forEach(function (el) {
      var attr = el.getAttribute("data-tr-attr");
      var val = el.getAttribute("data-" + lang + "-" + attr);
      if (val !== null) el.setAttribute(attr, val);
    });

    document.querySelectorAll(".lang button").forEach(function (b) {
      b.classList.toggle("is-active", b.dataset.lang === lang);
      b.setAttribute("aria-pressed", b.dataset.lang === lang);
    });

    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  function init() {
    var saved = "tr";
    try { saved = localStorage.getItem(KEY) || "tr"; } catch (e) {}
    setLang(saved);

    document.querySelectorAll(".lang button").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.dataset.lang); });
    });

    var toggle = document.querySelector(".menu-toggle");
    var nav = document.querySelector(".nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () { nav.classList.toggle("open"); });
      nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () { nav.classList.remove("open"); });
      });
    }
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init);
  else init();
})();
