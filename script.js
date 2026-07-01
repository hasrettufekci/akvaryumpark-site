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

/* ============================================================
   Rezervasyon formu → WhatsApp + E-posta
   WhatsApp numarası ve e-posta adresi aşağıda; değiştirebilirsin.
   ============================================================ */
(function () {
  var WA = "905323065948";                 // WhatsApp (0532 306 59 48)
  var MAIL = "hasrettufekci@gmail.com";     // rezervasyonların düşeceği e-posta

  function val(id){ var el=document.getElementById(id); return el ? el.value.trim() : ""; }
  function lang(){ return document.documentElement.lang === "en" ? "en" : "tr"; }

  function build(){
    var tur=val("rz-tur"), ad=val("rz-ad"), tel=val("rz-tel"), tarih=val("rz-tarih"),
        saat=val("rz-saat"), kisi=val("rz-kisi"), email=val("rz-email"), not_=val("rz-not");
    if(!ad || !tel || !tarih){
      alert(lang()==="en"
        ? "Please fill in name, phone and date."
        : "Lütfen ad soyad, telefon ve tarih alanlarını doldurun.");
      return null;
    }
    var L = lang()==="en"
      ? {h:"Akvaryum Park reservation request", tur:"Type", ad:"Name", tel:"Phone", tarih:"Date", saat:"Time", kisi:"Guests", email:"Email", not:"Notes"}
      : {h:"Akvaryum Park rezervasyon talebi", tur:"Talep", ad:"Ad Soyad", tel:"Telefon", tarih:"Tarih", saat:"Saat", kisi:"Kişi", email:"E-posta", not:"Not"};
    var lines=[L.h, ""];
    lines.push("• "+L.tur+": "+tur);
    lines.push("• "+L.ad+": "+ad);
    lines.push("• "+L.tel+": "+tel);
    lines.push("• "+L.tarih+": "+tarih+(saat ? (" "+saat) : ""));
    if(kisi)  lines.push("• "+L.kisi+": "+kisi);
    if(email) lines.push("• "+L.email+": "+email);
    if(not_)  lines.push("• "+L.not+": "+not_);
    return lines.join("\n");
  }

  function init(){
    // Bugünün tarihi + şu anki saat otomatik dolsun (elle yazmaya gerek yok)
    var d = new Date();
    var pad = function(n){ return (n<10 ? "0" : "") + n; };
    var bugun = d.getFullYear() + "-" + pad(d.getMonth()+1) + "-" + pad(d.getDate());
    var simdi = pad(d.getHours()) + ":" + pad(d.getMinutes());
    var dEl = document.getElementById("rz-tarih");
    var tEl = document.getElementById("rz-saat");
    if(dEl){ dEl.value = bugun; dEl.min = bugun; }  // geçmiş tarih seçilemez
    if(tEl){ tEl.value = simdi; }

    var wa = document.getElementById("rz-whatsapp");
    var em = document.getElementById("rz-eposta");
    if(wa) wa.addEventListener("click", function(){
      var m=build(); if(!m) return;
      window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(m), "_blank");
    });
    if(em) em.addEventListener("click", function(){
      var m=build(); if(!m) return;
      var subj = lang()==="en" ? "Akvaryum Park Reservation Request" : "Akvaryum Park Rezervasyon Talebi";
      window.location.href = "mailto:"+MAIL+"?subject="+encodeURIComponent(subj)+"&body="+encodeURIComponent(m);
    });
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
