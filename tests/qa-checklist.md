# Quality Assurance (QA) Checklist — DOMBASTIS KITCHEN

Laporan pengujian fungsional, aksesibilitas, responsivitas, dan konsistensi UI sesuai PRD Section 10, 14 & 15.

---

## 1. Pengujian Fungsionalitas Halaman & Link

- [x] **Beranda (`index.html`)**: Seluruh section tampil lengkap (Hero, Deskripsi, OUR MENU, Mengapa Memilih Kami, CATEGORIES, PRODUCT, ABOUT US, TAKE-OUT SERVICE, Galeri Preview, Blog Preview, Yang Perlu Diketahui, FAQ, CTA).
- [x] **Tentang Kami (`tentang-kami.html`)**: Bagian Cerita, Keunggulan, Partnership, Terpercaya, FAQ, dan CTA berfungsi.
- [x] **Menu (`menu.html`)**: Filter tab (Semua, Olahan Kambing, Nasi Briyani, Aqiqah) berfungsi responsif menyaring kartu hidangan.
- [x] **Paket (`paket.html`)**: Menampilkan 3 kartu paket terverifikasi dengan rincian komponen dan tombol pemesanan WhatsApp kontekstual.
- [x] **Galeri (`galeri.html`)**: Grid foto responsif dengan lightbox modal interaktif (bisa ditutup dengan tombol Close, tombol Escape, dan klik luar).
- [x] **Blog (`blog.html`)**: 3 kartu artikel terhubung ke posting HTML yang valid tanpa broken link (404).
- [x] **Kontak (`kontak.html`)**: Formulir kontak divalidasi di sisi klien (Nama, Kontak, Topik, Pesan wajib) dan otomatis memicu pesan pre-filled terformat ke WhatsApp.
- [x] **Semua Link Internal**: Seluruh navbar, footer link, mega-menu, dan tombol kembali telah diuji tanpa error.

---

## 2. Pengujian Tiga Artikel Blog (Struktur Sesuai Contoh Pengguna)

- [x] **Auto Table of Contents (TOC)**: Skrip JavaScript otomatis mengekstrak seluruh tag `<h2>` dalam konten artikel dan membuat tautan jangkar navigasi loncat halus.
- [x] **TOC Accordion Toggle**: Tombol header daftar isi dapat dibuka dan ditutup dengan animasi halus.
- [x] **FAQ Accordion Toggle**: Klik pada pertanyaan FAQ membuka jawaban dan menutup FAQ aktif lainnya.
- [x] **Tombol Share Sosial**:
  - WhatsApp: Membuka link `wa.me` dengan judul dan URL ter-encode.
  - Facebook: Membuka dialog share Facebook.
  - Twitter / X: Membuka composer postingan X.
  - LinkedIn: Membuka dialog berbagi LinkedIn.
  - Salin Link: Menggunakan `navigator.clipboard` dengan prompt konfirmasi.
- [x] **Sidebar Interaktif**: Memuat artikel terkait, banner hero promo paket, news widget video highlight cover, dan consultation box hijau WhatsApp.
- [x] **Strip Rekomendasi**: Menampilkan 3 kartu program hidangan terfavorit di bagian bawah artikel.

---

## 3. Komponen Global

- [x] **Floating WhatsApp**: Tampil fixed di kanan bawah pada seluruh 7 halaman dan 3 artikel blog tanpa menutupi elemen penting.
- [x] **Back to Top Button**: Tampil otomatis saat pengguna menggulir lebih dari 300px dan mengembalikan posisi layar ke atas secara halus.
- [x] **Navbar Scrolled Effect**: Menambahkan background pekat dan bayangan halus saat halaman digulir melewati 40px.

---

## 4. Aksesibilitas (WCAG 2.1 AA)

- [x] Kontras teks dan latar belakang memenuhi rasio kontras 4.5:1 untuk teks normal.
- [x] Seluruh tombol dan kontrol form memiliki nama aksesibel atau `aria-label`.
- [x] Lightbox modal memiliki penanganan tombol keyboard `Escape` dan penjagaan fokus.
- [x] Dukungan `prefers-reduced-motion` untuk pengguna yang membatasi animasi gerakan.
- [x] Navigasi "Lewati ke konten utama" (`.visually-hidden-focusable`) tersedia di awal dokumen.
- [x] Tidak ada horizontal scrolling pada layar mobile berukuran 320px hingga desktop lebar 1440px.
