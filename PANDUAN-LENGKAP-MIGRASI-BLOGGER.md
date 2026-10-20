# PANDUAN LENGKAP MIGRASI DOMBASTIS KITCHEN KE BLOGGER / BLOGSPOT

Dokumen ini berisi panduan langkah demi langkah cara memasang tema XML, 6 halaman statis, dan 3 postingan artikel ke platform **Google Blogger (Blogspot)** dengan struktur yang 100% sinkron dan bersih.

---

## 1. Pemasangan Tema XML Utama

File tema: [`dist/blogger-theme.xml`](dist/blogger-theme.xml)

1. Buka [Blogger.com](https://www.blogger.com) dan pilih blog Anda (**DOMBASTIS KITCHEN**).
2. Di menu samping kiri, klik **Tema (Theme)**.
3. Di sebelah tombol oranye **SESUAIKAN (Customize)**, klik tanda panah ke bawah (**▼**) > pilih **Edit HTML**.
4. Hapus seluruh isi kode lama yang ada di dalam editor (`Ctrl + A` lalu tekan `Delete`).
5. Buka file [`dist/blogger-theme.xml`](dist/blogger-theme.xml), salin seluruh isinya (`Ctrl + A` lalu `Ctrl + C`).
6. Tempelkan (`Ctrl + V`) ke dalam editor Blogger.
7. Klik tombol **Simpan (Ikon Disket)** di pojok kanan atas.
8. **Pengaturan Tampilan Seluler (PENTING):**
   - Kembali ke menu **Tema** > klik panah ke bawah (**▼**) > pilih **Setelan Seluler (Mobile Settings)**.
   - Pilih opsi **Desktop**, lalu klik **Simpan**. Hal ini memastikan template responsif custom bekerja maksimal di layar HP dan tidak ditimpa tema seluler default Google.

---

## 2. Pemasangan 6 Halaman Statis (Menu 'Halaman' / 'Pages')

Buka menu **Halaman (Pages)** di sidebar Blogger, lalu klik **+ Halaman Baru (+ New Page)**.

> ⚠️ **PENTING:** Pastikan editor Blogger dalam mode **"Tampilan HTML" (<>)** (klik ikon pensil di pojok kiri atas area ketik dan ubah ke Tampilan HTML), BUKAN "Tampilan Menulis".

### 1. Halaman: Tentang Kami
- **Judul Halaman:** `Tentang Kami`
- **File Kode:** [`dist/migration/blogger-static-pages/tentang-kami.html`](dist/migration/blogger-static-pages/tentang-kami.html)
- **Cara:** Salin seluruh isi file tersebut dan tempel di mode HTML.
- **Permalink Otomatis:** `/p/tentang-kami.html`
- Klik **Publikasikan**.

### 2. Halaman: Menu
- **Judul Halaman:** `Menu`
- **File Kode:** [`dist/migration/blogger-static-pages/menu.html`](dist/migration/blogger-static-pages/menu.html)
- **Cara:** Salin seluruh isi file tersebut dan tempel di mode HTML.
- **Permalink Otomatis:** `/p/menu.html`
- Klik **Publikasikan**.

### 3. Halaman: Paket
- **Judul Halaman:** `Paket`
- **File Kode:** [`dist/migration/blogger-static-pages/paket.html`](dist/migration/blogger-static-pages/paket.html)
- **Cara:** Salin seluruh isi file tersebut dan tempel di mode HTML.
- **Permalink Otomatis:** `/p/paket.html`
- Klik **Publikasikan**.

### 4. Halaman: Galeri
- **Judul Halaman:** `Galeri`
- **File Kode:** [`dist/migration/blogger-static-pages/galeri.html`](dist/migration/blogger-static-pages/galeri.html)
- **Cara:** Salin seluruh isi file tersebut dan tempel di mode HTML.
- **Permalink Otomatis:** `/p/galeri.html`
- Klik **Publikasikan**.

### 5. Halaman: Blog (Daftar Panduan Kuliner)
- **Judul Halaman:** `Blog`
- **File Kode:** [`dist/migration/blogger-static-pages/blog.html`](dist/migration/blogger-static-pages/blog.html)
- **Cara:** Salin seluruh isi file tersebut dan tempel di mode HTML.
- **Permalink Otomatis:** `/p/blog.html` (atau `/search/label/Blog`)
- Klik **Publikasikan**.

### 6. Halaman: Kontak
- **Judul Halaman:** `Kontak`
- **File Kode:** [`dist/migration/blogger-static-pages/kontak.html`](dist/migration/blogger-static-pages/kontak.html)
- **Cara:** Salin seluruh isi file tersebut dan tempel di mode HTML.
- **Permalink Otomatis:** `/p/kontak.html`
- Klik **Publikasikan**.

---

## 3. Pemasangan 3 Postingan Artikel (Menu 'Postingan' / 'Posts')

Buka menu **Postingan (Posts)** di sidebar Blogger, lalu klik **+ Postingan Baru (+ New Post)**. Pastikan editor dalam mode **"Tampilan HTML" (<>)**.

### 1. Artikel 1: Panduan Olahan Kambing
- **Judul:** `Panduan Memilih Olahan Kambing untuk Berbagai Jenis Acara Keluarga dan Kantor 2026`
- **Label:** `Blog, Olahan Kambing, Tips Kuliner`
- **Tautan Permanen Khusus:** `panduan-memilih-olahan-kambing-untuk-acara`
- **File Kode:** [`dist/migration/blogger-posts/panduan-memilih-olahan-kambing-untuk-acara.html`](dist/migration/blogger-posts/panduan-memilih-olahan-kambing-untuk-acara.html)
- Salin seluruh isi file dan tempel di mode HTML.
- Klik **Publikasikan**.

### 2. Artikel 2: Panduan Pesanan Masakan Aqiqah
- **Judul:** `Panduan Mempersiapkan Pesanan Masakan untuk Acara Aqiqah Siap Saji 2026`
- **Label:** `Blog, Aqiqah, Paket Masakan`
- **Tautan Permanen Khusus:** `panduan-pesanan-masakan-untuk-acara-aqiqah`
- **File Kode:** [`dist/migration/blogger-posts/panduan-pesanan-masakan-untuk-acara-aqiqah.html`](dist/migration/blogger-posts/panduan-pesanan-masakan-untuk-acara-aqiqah.html)
- Salin seluruh isi file dan tempel di mode HTML.
- Klik **Publikasikan**.

### 3. Artikel 3: Mengenal Nasi Briyani & Hidangan Nampan
- **Judul:** `Mengenal Nasi Briyani dan Tips Memilih Porsi Hidangan Nampan untuk Acara Besar 2026`
- **Label:** `Blog, Nasi Briyani, Gathering`
- **Tautan Permanen Khusus:** `mengenal-nasi-briyani-dan-memilih-menu`
- **File Kode:** [`dist/migration/blogger-posts/mengenal-nasi-briyani-dan-memilih-menu.html`](dist/migration/blogger-posts/mengenal-nasi-briyani-dan-memilih-menu.html)
- Salin seluruh isi file dan tempel di mode HTML.
- Klik **Publikasikan**.

---

## 4. Keunggulan Sinkronisasi Versi Terbaru:
1. **Daftar Isi (TOC) Smooth Scroll:** Mengklik isi daftar isi langsung mengalir (*smooth scroll*) ke judul/heading bagian yang dituju dengan memperhitungkan jarak navbar yang menempel (*sticky offset*), tanpa pernah merefresh atau melompat kasar ke atas.
2. **Perpindahan Halaman Cepat Tanpa Kilatan Putih:** Efek cahaya putih/silau saat navigasi telah dihilangkan sepenuhnya, digantikan dengan garis *glowing loading bar* yang meluncur cepat tepat di atas navbar.
3. **Bebas Gandar / Duplikasi:** File migration hanya berisi konten inti sehingga tidak akan terjadi navbar atau footer ganda di Blogger.
4. **Branding Rapi & Proporsional:** Tagline *Olahan Kambing & Briyani* tampil tepat di bawah nama *DOMBASTIS KITCHEN*, bukan menyamping.
5. **Data Resmi Terpadu:**
   - Nomor WhatsApp: **087787502950** (`0877-8750-2950`)
   - Alamat: **Nglerep, Trayang, Kecamatan Ngeronggot, Kabupaten Nganjuk, Jawa Timur 64395**
   - 8 Menu Lengkap termasuk **Tengkleng Kambing Spesial** & **Briyani Nampan Gathering**.

