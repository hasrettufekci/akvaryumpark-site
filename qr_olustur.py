"""
Akvaryum Park — Menü QR üretici
Kullanım:
    pip install "qrcode[pil]"
    python qr_olustur.py
"""
import qrcode
from qrcode.constants import ERROR_CORRECT_H

# >>> Domain kesinleşince burayı değiştir <<<
MENU_URL = "https://senindomainin.com/menu.html"

SEA = (20, 63, 59)      # derin deniz-yeşili
SAND = (251, 246, 236)  # açık zemin

qr = qrcode.QRCode(version=None, error_correction=ERROR_CORRECT_H, box_size=14, border=3)
qr.add_data(MENU_URL)
qr.make(fit=True)

img = qr.make_image(fill_color=SEA, back_color=SAND).convert("RGB")
img.save("menu_qr.png")
print("Kaydedildi: menu_qr.png  ->", MENU_URL)
