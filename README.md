# Akvaryum Park Cafe & Restaurant — Web Sitesi

Sıcak & rustik temalı, **Türkçe + İngilizce** (dil seçici), statik site.
Sunucu gerektirmez — GitHub Pages, Netlify veya Cloudflare Pages'e atılır.

## Dosyalar
| Dosya | Açıklama |
|-------|----------|
| `index.html` | Ana sayfa (hero, hikaye, öne çıkanlar, menü önizleme, galeri, rezervasyon/organizasyon formu, yorumlar, iletişim) |
| `menu.html`  | Tam menü — **QR bu sayfayı gösterir** (gerçek fiyatlar girildi) |
| `style.css`  | Tüm tasarım (`:root` içinde renkler) |
| `script.js`  | Dil seçici (TR/EN) + mobil menü |
| `qr_olustur.py` | Menü QR üretici |

## ✅ Hazır olanlar
- Tüm menü, gerçek fiyatlarla (yemek + içecek + tatlı)
- Telefon: 0532 306 59 48 · Saatler: her gün 10:00 – 00:00
- Adres, harita, Instagram, Facebook bağlı
- Rezervasyon / doğum günü / organizasyon formu (talep türü seçmeli)
- Featurable canlı yorumlar için hazır bölüm

## ⚙️ Senin doldurman gerekenler
1. **Featurable widget ID** — `index.html` içinde `featurable-XXXXXXXX`.
   featurable.com → ücretsiz hesap → Google işletmeni bağla → widget oluştur → ID'yi yapıştır.
2. **Formspree form ID** — `index.html` içinde form `action="https://formspree.io/f/XXXXXXXX"`.
   formspree.io'da yeni form aç (hasrettufekci@gmail.com) → verdiği ID'yi yaz.
3. **Fotoğraflar** — `img/` klasörüne koy:
   - Hikaye görseli: `.photo` div → `<img src="img/bahce.jpg" alt="...">`
   - Galeri: her `.gp` kutusu → `<img src="img/1.jpg" alt="">`
   - Hero arka planı (opsiyonel): `style.css` içindeki `.hero` notuna bak.
4. **Google yorumlar linki** — yorumlar butonundaki `href`'i kendi Google işletme bağlantınla değiştir.

## 🔎 Kontrol edilecek menü fiyatları (el yazısı netti ama yine de bir bak)
- **Ayran** → ₺150 girdim (emin değilim, kola/fanta ₺100 idi).
- **Yeşil Çay** → fiyat görünmüyordu, `—` bıraktım.
- **Şehriye, Çabuk Çorba, Sezar Salata** → fiyat boştu, `—` bıraktım. Fiyat varsa yaz.

## Renkleri değiştirmek
`style.css` en üstteki `:root` bloğu (`--sea`, `--clay`, `--sand` vb.).

## QR kod
Domain kesinleşince:
```
pip install "qrcode[pil]"
# qr_olustur.py içindeki MENU_URL'yi kendi adresinle değiştir
python qr_olustur.py   # -> menu_qr.png
```
