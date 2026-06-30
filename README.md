# Akvaryum Park Cafe & Restaurant — Web Sitesi

**Konsept:** "Akdeniz'in doğasında saklı bir gece bahçesi."
Gece paleti (koyu + dolunay altını/amber + akvaryum turkuazı), **Türkçe + İngilizce**,
tamamen statik. Gerçek fotoğraflar gömülü — yayına hazır.

## Marka hiyerarşisi (siteye işlenen)
1. **Akvaryum** — kimlik (isim bunu söylüyor) → hero'da tabelalar + akvaryumlar
2. **Dolunay** — imza/foto noktası → kendi özel bölümü (akvaryum içindeki ışıklı ay)
3. **Bahçe + gece ışıkları** — atmosfer
4. **Sofra** — taze balık & ev yapımı lezzetler

## Klasör yapısı (repoya bu şekilde)
```
akvaryumpark-site/
├─ index.html   ├─ menu.html   ├─ style.css   ├─ script.js
├─ img/         ← logo + tüm fotoğraflar (HAZIR)
├─ qr_olustur.py └─ README.md
```

## img/ içeriği
- `logo.png` (şeffaf), `exterior-night.jpg` (hero), `moon-aquarium.jpg` (dolunay),
  `story.jpg`, `galeri-1..7.jpg`

## ✅ Hazır
- Gece bahçesi teması, gerçek gece dış cephe hero'su
- **Dolunay bölümü**: akvaryum içindeki ışıklı ay + #AkvaryumPark + Instagram
- Hikaye: "Evimizden kalbinize taşan lezzetler"
- Galeri (7 gerçek kare), tam menü + gerçek fiyatlar
- Telefon 0532 306 59 48 · her gün 10:00–00:00 · adres/harita/IG/FB

## ⚙️ Sadece 2 şey kaldı (kodda XXXX)
1. **Featurable widget ID** — `index.html` → `featurable-XXXXXXXX` (canlı Google yorumları)
2. **Formspree form ID** — `index.html` → `formspree.io/f/XXXXXXXX` (rezervasyon formu)

## Notlar
- Aile fotoğrafı (Image 3) gizlilik için kullanılmadı; o kareden sadece akvaryum+dolunay kırpıldı. İzinleri varsa aile karesini ekleyebiliriz.
- Instagram: tabelada `akvaryumparkcafe`, bağlı olan `akvaryum_park_restaurant`. Asıl hesabı söyle, güncelleyeyim.
- Birkaç fiyat el yazısından okundu (Ayran ₺150, Yeşil Çay & birkaç çorba boş) — kontrol et.
- Reels/özel şarkı: istersen ekleriz (Instagram gömme ya da küçük müzik oynatıcı).

## Renkler
`style.css` en üstteki `:root` (`--amber`, `--sea`, `--bg`, `--bg-2` ...).

## QR (domain sonrası)
`qr_olustur.py` içindeki URL'yi değiştir → `python qr_olustur.py`.
