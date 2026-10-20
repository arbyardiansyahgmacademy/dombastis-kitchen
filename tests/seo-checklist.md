# SEO, AEO & GEO Checklist 2026 — DOMBASTIS KITCHEN

Laporan verifikasi kepatuhan SEO On-Page, AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), dan Structured Data sesuai PRD Section 8 & 14.3.

---

## 1. Audit Title & Meta Description Per Halaman

Semua title mematuhi batas maksimal 60 karakter dan meta description mematuhi batas 120 karakter.

| Halaman | Title Tag (< 60 karakter) | Karakter | Meta Description (< 120 karakter) | Karakter | Status |
|---|---|:---:|---|:---:|:---:|
| **Beranda** | DOMBASTIS KITCHEN \| Olahan Kambing & Briyani | 44 | Jelajahi olahan kambing, nasi briyani, dan masakan aqiqah dari DOMBASTIS KITCHEN. | 79 | PASS |
| **Tentang Kami** | Tentang DOMBASTIS KITCHEN | 24 | Kenali DOMBASTIS KITCHEN dan temukan informasi seputar menu, paket, serta cara konsultasi. | 90 | PASS |
| **Menu** | Menu Olahan Kambing, Briyani & Aqiqah | 37 | Lihat kategori menu olahan kambing, nasi briyani, dan masakan aqiqah yang tersedia. | 83 | PASS |
| **Paket** | Paket DOMBASTIS KITCHEN | 22 | Telusuri pilihan paket DOMBASTIS KITCHEN dan tanyakan detail kebutuhan Anda. | 75 | PASS |
| **Galeri** | Galeri Menu DOMBASTIS KITCHEN | 29 | Lihat foto menu dan hidangan DOMBASTIS KITCHEN melalui galeri gambar. | 68 | PASS |
| **Blog** | Blog DOMBASTIS KITCHEN | 22 | Baca panduan memilih olahan kambing, mengenal nasi briyani, dan menyiapkan pesanan aqiqah. | 89 | PASS |
| **Kontak** | Kontak DOMBASTIS KITCHEN | 24 | Hubungi DOMBASTIS KITCHEN untuk bertanya tentang menu, paket, dan kebutuhan pesanan. | 84 | PASS |
| **Artikel 1** | Panduan Memilih Olahan Kambing untuk Berbagai Acara | 50 | Panduan memilih aneka olahan kambing lezat & bebas prengus untuk syukuran, gathering, dan pesta keluarga Anda. | 110 | PASS |
| **Artikel 2** | Mengenal Nasi Briyani dan Cara Memilih Menu yang Sesuai | 54 | Kenali kelezatan nasi briyani rempah khas Dombastis Kitchen, tips memilih lauk pendamping, dan porsi yang pas. | 108 | PASS |
| **Artikel 3** | Panduan Menyiapkan Pesanan Masakan untuk Acara Aqiqah | 52 | Panduan lengkap menyiapkan hidangan aqiqah praktis, lezat, higienis, dan siap antar untuk keluarga tercinta. | 107 | PASS |

---

## 2. Heading Semantik & Hierarki Struktur

- [x] Tepat 1 tag `<h1>` per halaman
- [x] Subheading terstruktur secara hierarkis (`<h2>` untuk topik utama, `<h3>` untuk sub-item)
- [x] Heading deskriptif dan mencerminkan intensi pencarian pengunjung (bukan semata untuk styling)
- [x] Tidak ada heading kosong atau loncat level (`<h1>` langsung ke `<h4>`)

---

## 3. Structured Data (Schema.org JSON-LD @graph)

- [x] **WebSite Schema**: Diterapkan pada beranda dengan URL kanonis, nama brand, dan deskripsi.
- [x] **Organization Schema**: Memuat identitas brand DOMBASTIS KITCHEN, logo resmi, dan titik kontak.
- [x] **BreadcrumbList Schema**: Diterapkan pada 3 posting artikel blog dengan hierarki 3 tingkat (Beranda > Blog > Judul Artikel).
- [x] **Article Schema**: Memuat headline, description, author, publisher, datePublished, dateModified, dan image.
- [x] **FAQPage Schema**: Diterapkan pada beranda dan setiap artikel blog dengan Question dan acceptedAnswer faktual.

---

## 4. Answer Engine Optimization (AEO)

- [x] Setiap artikel diawali dengan **Answer-First Callout Box** (40–80 kata) yang langsung menjawab pertanyaan inti pembaca sebelum pembahasan rinci.
- [x] Format penyajian memakai bullet points, numbered lists, dan perbandingan jelas agar mudah dikutip mesin jawaban AI.
- [x] FAQ accordion interaktif menyajikan solusi instan atas pertanyaan paling umum pelanggan.

---

## 5. Generative Engine Optimization (GEO)

- [x] Penggunaan nama entitas brand "DOMBASTIS KITCHEN" konsisten di seluruh template.
- [x] Menghindari klaim berlebihan ("nomor 1", "paling murah", sertifikasi palsu) sesuai PRD 8.5.
- [x] Struktur paragraf pendek dan faktual yang mudah diindeks oleh mesin perangkum generatif.

---

## 6. SEO Visual & Optimasi Aset Gambar

- [x] Nama file deskriptif dengan huruf kecil dan tanda hubung (`hero-dombastis-dish.webp`, `briyani-kambing-spesial.webp`, dll.)
- [x] Semua elemen `<img>` memiliki atribut `alt` kontekstual dan deskriptif.
- [x] Gambar LCP Hero menggunakan `fetchpriority="high"` dan tidak menggunakan `loading="lazy"`.
- [x] Gambar di bawah fold menggunakan `loading="lazy"` untuk efisiensi bandwidth.
- [x] Atribut `width` dan `height` disematkan guna mencegah Cumulative Layout Shift (CLS).
