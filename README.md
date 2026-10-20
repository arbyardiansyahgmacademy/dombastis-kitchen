# DOMBASTIS KITCHEN — Web Project & Blogger Migration Kit

Proyek website kuliner resmi **DOMBASTIS KITCHEN** (`https://dombastiskitchen.blogspot.com`), mengkhususkan diri pada aneka olahan daging kambing empuk, nasi briyani basmati rempah, dan paket masakan aqiqah higienis siap santap.

Website dibangun dengan arsitektur HTML5 semantik, CSS statis teroptimasi (*Crimson Red Gastronomy Luxury* sesuai desain referensi), vanilla JavaScript modern, SEO 2026, serta kit migrasi Blogger / Blogspot.

---

## 1. Struktur Direktori Proyek

```text
dombastis-kitchen/
├── PRD-DOMBASTIS-KITCHEN.md          # Dokumen Spesifikasi Kebutuhan Produk (PRD)
├── README.md                          # Panduan setup, build & migrasi Blogger
├── package.json                       # Konfigurasi npm scripts & dependensi
├── tailwind.config.js                 # Konfigurasi utility Tailwind CSS
├── src/
│   ├── pages/                         # 7 Halaman Utama
│   │   ├── index.html                 # Beranda (Desain Crimson Red Mockup)
│   │   ├── tentang-kami.html          # Profil, Keunggulan & Kolaborasi
│   │   ├── menu.html                  # Daftar Menu dengan Filter Tab Interaktif
│   │   ├── paket.html                 # Paket Aqiqah, Gathering & Syukuran
│   │   ├── galeri.html                # Galeri Foto dengan Lightbox Modal
│   │   ├── blog.html                  # Indeks 3 Artikel Blog
│   │   └── kontak.html                # Formulir Kontak Validasi Direct WA
│   ├── posts/                         # 3 Artikel Blog Lengkap (SEO 2026)
│   │   ├── panduan-memilih-olahan-kambing-untuk-acara.html
│   │   ├── mengenal-nasi-briyani-dan-memilih-menu.html
│   │   └── panduan-pesanan-masakan-untuk-acara-aqiqah.html
│   ├── assets/
│   │   ├── images/                    # Foto hidangan olahan kambing, briyani, logo & avatar
│   │   └── icons/
│   ├── css/
│   │   ├── style.css                  # Master CSS (Crimson Gastronomy & Artikel 2026)
│   │   └── input.css                  # Input source untuk pipeline Tailwind
│   └── js/
│       ├── main.js                    # Skrip interaksi (TOC, FAQ, Lightbox, Share, Back to Top)
│       └── config.js                  # Konfigurasi terpusat (PRD 11.4)
├── dist/                              # Output Produksi Siap Pakai & Migrasi
│   ├── blogger-theme.xml              # Template tema XML Blogger valid
│   ├── css/
│   │   └── styles.min.css             # CSS statis terminifikasi (~30 KB)
│   ├── js/
│   │   └── main.min.js                # JS terminifikasi (~6 KB)
│   └── migration/
│       ├── blogger-static-pages/      # File HTML untuk menu 'Halaman' Blogger
│       └── blogger-posts/             # File HTML untuk menu 'Postingan' Blogger
└── tests/
    ├── seo-checklist.md               # Audit SEO, AEO, GEO & Schema JSON-LD
    ├── qa-checklist.md                # Uji fungsionalitas, aksesibilitas & UX
    └── pagespeed-lighthouse-report.md # Laporan metrik Core Web Vitals aktual
```

---

## 2. Cara Menjalankan & Preview Lokal

Pastikan Node.js telah terpasang di komputer Anda.

1. **Jalankan Preview Server:**
   ```bash
   npm run dev
   ```
   Buka browser di alamat `http://localhost:3000/src/pages/index.html`.

2. **Build & Minifikasi CSS/JS:**
   ```bash
   npm run build
   ```
   Perintah ini akan memperbarui `dist/css/styles.min.css` dan `dist/js/main.min.js`.

---

## 3. Lokasi Konfigurasi Bisnis Terpusat (PRD 11.4)

Seluruh data bisnis (nama brand, nomor WhatsApp resmi, email, daftar menu, daftar paket, dan tautan sosial) dikelola terpusat di satu berkas:
👉 [`src/js/config.js`](src/js/config.js)

Bila ada perubahan nomor WhatsApp atau informasi kontak di kemudian hari, cukup perbarui di file tersebut.

---

## 4. Panduan Migrasi ke Blogger (Blogspot)

### Langkah 1: Memasang Tema Blogger (`dist/blogger-theme.xml`)
1. Buka dashboard Blogger di [blogger.com](https://www.blogger.com).
2. Masuk ke menu **Tema (Theme)**.
3. Klik ikon titik tiga di sebelah tombol "Sesuaikan" &rarr; pilih **Pulihkan (Restore)** &rarr; **Unggah (Upload)**.
4. Pilih file `dist/blogger-theme.xml`.

### Langkah 2: Mengunggah Halaman Statis
1. Masuk ke menu **Halaman (Pages)** di Blogger &rarr; klik **Halaman Baru**.
2. Alihkan editor ke mode **Tampilan HTML**.
3. Salin isi file dari folder `dist/migration/blogger-static-pages/`:
   - `tentang-kami.html` &rarr; buat halaman dengan judul "Tentang Kami".
   - `menu.html` &rarr; buat halaman dengan judul "Menu".
   - `paket.html` &rarr; buat halaman dengan judul "Paket".
   - `galeri.html` &rarr; buat halaman dengan judul "Galeri".
   - `kontak.html` &rarr; buat halaman dengan judul "Kontak".
4. Publikasikan masing-masing halaman.

### Langkah 3: Mengunggah 3 Artikel Blog
1. Masuk ke menu **Postingan (Posts)** &rarr; klik **Postingan Baru**.
2. Alihkan editor ke mode **Tampilan HTML**.
3. Salin isi file dari folder `dist/migration/blogger-posts/`:
   - `panduan-memilih-olahan-kambing-untuk-acara.html`
   - `mengenal-nasi-briyani-dan-memilih-menu.html`
   - `panduan-pesanan-masakan-untuk-acara-aqiqah.html`
4. Beri label "Blog", atur permalink khusus sesuai nama slug, lalu klik **Publikasikan**.

### Langkah 4: Menghubungkan Custom Domain & HTTPS
1. Masuk ke menu **Setelan (Settings)** &rarr; **Domain kustom**.
2. Masukkan domain `dombastiskitchen.blogspot.com` dan konfigurasikan CNAME / A Records di registrar domain Anda.
3. Aktifkan **Ketersediaan HTTPS** dan **Pengalihan HTTPS**.

---

## 5. Fitur Utama yang Disediakan

- **Desain Crimson Red Gastronomy**: Tema merah mewah khas kuliner berempah, dilengkapi mangkuk hidangan melayang dengan potongan cabai, bawang, dan rempah daun.
- **Section OUR MENU**: Baris daftar hidangan dengan status aktif berwujud white pill elegan sesuai mockup.
- **Section PRODUCT & CATEGORIES**: Grid kartu bernuansa merah gelap dengan foto hidangan bulat ber-ring putih dan rating bintang emas.
- **Lightbox Galeri Aksesibel**: Preview gambar ukuran penuh dengan dukungan navigasi keyboard `Escape` dan focus restoration.
- **Auto Table of Contents (TOC)**: Otomatis mendeteksi heading `<h2>` pada setiap artikel blog.
- **FAQ Accordion Interaktif**: Accordion responsif berbasis atribut ARIA.
- **Tombol Share Lengkap**: Berbagi langsung ke WhatsApp, Facebook, Twitter, LinkedIn, dan Salin Link dengan notifikasi.
- **Formulir Kontak Terintegrasi WA**: Validasi data nama, kontak, dan pesan langsung ter-generate menjadi URL chat WhatsApp pre-filled.
- **Floating WhatsApp & Back to Top**: Tombol fixed responsif pada seluruh halaman.
