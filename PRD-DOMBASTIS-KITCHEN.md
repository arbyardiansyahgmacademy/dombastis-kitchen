# PRODUCT REQUIREMENTS DOCUMENT (PRD)
# DOMBASTIS KITCHEN
**Domain:** `https://dombastiskitchen.blogspot.com`  
**Platform:** Blogger / Blogspot  
**Development workflow:** Antigravity AI → implementasi dan pengujian lokal → salin/adaptasi kode ke tema Blogger  
**Teknologi tampilan:** HTML5, CSS, Tailwind CSS (build menjadi CSS statis), JavaScript vanilla  
**Bahasa:** Indonesia  
**Versi dokumen:** 1.0  
**Tanggal:** 19 Oktober 2026

---

## 1. Ringkasan Proyek

DOMBASTIS KITCHEN adalah website kuliner yang berfokus pada aneka olahan kambing, nasi briyani, serta masakan dan layanan aqiqah. Website dirancang untuk memperkenalkan brand, menampilkan menu dan paket, menyajikan galeri makanan, menerbitkan artikel blog, serta memudahkan calon pelanggan menghubungi bisnis melalui WhatsApp dan formulir kontak.

Website dikembangkan terlebih dahulu di Antigravity agar struktur, desain, responsivitas, SEO teknis, dan performa dapat diuji sebelum kode dipindahkan ke Blogger. Blogger menjadi platform publikasi dan pengelolaan konten. Implementasi harus memperhitungkan keterbatasan Blogger: halaman statis, posting blog, tema XML, widget, serta kebutuhan URL dan metadata yang dikelola platform.

### 1.1 Tujuan utama
- Membangun citra brand kuliner yang profesional, menggugah selera, modern, dan tepercaya.
- Menampilkan informasi menu dan paket secara jelas tanpa mengarang harga, bahan, sertifikasi, alamat, jam operasional, atau klaim bisnis yang belum diberikan.
- Meningkatkan pertanyaan dan pemesanan melalui WhatsApp.
- Menyediakan halaman khusus yang mudah ditemukan melalui pencarian organik dan mesin jawaban/AI.
- Menjaga website ringan, cepat, aksesibel, aman, dan mudah dirawat di Blogger.

### 1.2 Catatan penting tentang target SEO dan PageSpeed
Target “nomor 1” di Google tidak dapat dijamin oleh PRD, pengembang, atau satu teknik SEO. Peringkat bergantung pada relevansi, persaingan, lokasi, kualitas konten, reputasi, tautan, dan sistem pencarian yang terus berubah. Target proyek adalah menerapkan praktik SEO, AEO (Answer Engine Optimization), dan GEO (Generative Engine Optimization) yang berlandaskan dokumentasi resmi dan konten bermanfaat.

Target performa adalah mengejar skor hijau pada PageSpeed Insights/Lighthouse, terutama Core Web Vitals, tetapi skor 100 atau seluruh indikator hijau tidak bisa dijamin pada semua perangkat, jaringan, dan kondisi Blogger. Pengukuran wajib dilakukan pada versi staging dan domain produksi.

---

## 2. Sasaran Pengguna

1. **Pelanggan keluarga:** mencari menu olahan kambing, nasi briyani, atau hidangan untuk acara keluarga.
2. **Penyelenggara acara:** mencari paket makanan untuk pertemuan, syukuran, atau acara lainnya.
3. **Calon pelanggan aqiqah:** mencari informasi masakan/paket aqiqah dan ingin bertanya tentang ketersediaan layanan.
4. **Pengunjung dari mesin pencari:** membutuhkan jawaban cepat mengenai menu, pilihan paket, cara pemesanan, dan kontak.
5. **Pengelola website:** perlu memperbarui menu, galeri, artikel, FAQ, dan informasi bisnis melalui Blogger.

---

## 3. Ruang Lingkup

### 3.1 Termasuk dalam MVP
- Halaman Beranda.
- Halaman Tentang Kami.
- Halaman Menu.
- Halaman Paket.
- Halaman Galeri dengan preview gambar.
- Halaman Blog yang menampilkan tiga artikel terbaru/unggulan.
- Halaman Kontak dengan formulir, informasi kontak, dan social media.
- Tiga posting artikel blog lengkap.
- Tombol WhatsApp mengambang pada semua halaman.
- Tombol Back to Top yang berada di atas tombol WhatsApp.
- Navigasi responsif, footer, breadcrumb, FAQ, CTA, metadata SEO, dan schema markup yang sesuai.
- Optimasi performa, aksesibilitas, keamanan, dan pengujian.

### 3.2 Di luar ruang lingkup awal
- Sistem pembayaran online.
- Keranjang belanja dan checkout.
- Login pelanggan/admin khusus.
- Database eksternal.
- Pemesanan otomatis dengan inventori.
- Integrasi API pihak ketiga berbayar.
- Klaim ulasan, sertifikasi, penghargaan, jumlah pelanggan, atau cabang yang belum diverifikasi.

### 3.3 Batasan Blogger
- Blogger bukan framework aplikasi penuh. Jangan membuat fitur yang membutuhkan server khusus atau database tanpa persetujuan perubahan ruang lingkup.
- Tailwind CSS tidak boleh bergantung pada proses build saat halaman dipublikasikan. Gunakan Tailwind saat pengembangan, lalu hasilkan CSS produksi statis yang sudah diminifikasi. Jangan memasukkan seluruh utility Tailwind yang tidak digunakan.
- Kode yang dipindahkan ke Blogger harus disesuaikan dengan format tema XML dan aturan editor Blogger. Jangan menganggap HTML hasil build dapat ditempel begitu saja tanpa pengujian.
- Gunakan halaman statis Blogger untuk halaman utama layanan dan posting Blogger untuk artikel blog.
- URL halaman statis Blogger dapat berbeda dari struktur URL custom biasa. Verifikasi URL final di Blogger; jangan menjanjikan rewrite URL yang tidak didukung platform.
- Formulir kontak tidak boleh terlihat berfungsi jika belum terhubung. MVP dapat menggunakan `mailto:` atau CTA WhatsApp sebagai fallback, atau integrasi Google Forms/Apps Script hanya jika disetujui dan diuji.

---

## 4. Identitas Brand dan Arahan Desain

### 4.1 Brand
- Nama: **DOMBASTIS KITCHEN**
- Domain: `dombastiskitchen.blogspot.com`
- Industri: kuliner, olahan kambing, nasi briyani, dan hidangan aqiqah.
- Bahasa antarmuka: Bahasa Indonesia.
- Nada komunikasi: hangat, menggugah selera, jelas, sopan, profesional, dan tidak berlebihan.

### 4.2 Arah visual
Gunakan tampilan premium dan bersih yang berpusat pada foto makanan berkualitas. Hindari desain yang terlalu ramai, ornamen berlebihan, efek animasi berat, atau layout yang menyerupai template generik.

Palet awal yang dapat digunakan:
- **Deep charcoal / cokelat gelap:** warna teks dan elemen utama.
- **Warm cream:** latar halaman.
- **Terracotta / merah bata:** aksen CTA.
- **Muted gold:** aksen kecil untuk detail premium.
- **Putih:** kartu dan area konten.

Nilai warna final boleh disesuaikan selama kontras teks tetap memenuhi aksesibilitas. Gunakan maksimal dua keluarga font web; prioritaskan font sistem agar cepat. Jika memakai font eksternal, batasi variasi dan gunakan `font-display: swap`.

### 4.3 Foto dan aset
- Prioritaskan foto asli produk/menu yang dimiliki bisnis atau aset yang memiliki izin penggunaan.
- Foto harus sesuai dengan menu yang disebutkan. Jangan menampilkan gambar kambing atau hidangan yang tidak sesuai dengan produk aktual.
- Format utama: AVIF/WebP; siapkan fallback jika dibutuhkan.
- Gunakan dimensi responsif, `srcset`/`sizes` bila sesuai, dan kompresi yang baik.
- Jangan menampilkan teks penting hanya di dalam gambar.
- Semua gambar konten wajib memiliki `alt` deskriptif. Gambar dekoratif menggunakan `alt=""`.
- Hindari foto stok yang menyesatkan pengunjung seolah-olah merupakan produk asli DOMBASTIS KITCHEN.

---

## 5. Arsitektur Informasi dan Navigasi

### 5.1 Navbar utama
1. Beranda
2. Tentang Kami
3. Menu
4. Paket
5. Galeri
6. Blog
7. Kontak

Navbar harus:
- Sticky hanya jika tidak mengganggu area viewport dan tidak menambah beban performa.
- Memiliki logo/wordmark DOMBASTIS KITCHEN.
- Menampilkan state aktif halaman.
- Menggunakan menu mobile yang bisa diakses dengan keyboard dan pembaca layar.
- Menutup menu mobile setelah tautan dipilih.
- Memiliki CTA “Pesan via WhatsApp” yang jelas tetapi tidak berlebihan.

### 5.2 Struktur URL yang diharapkan
Gunakan URL yang mudah dibaca, konsisten, dan tanpa parameter yang tidak diperlukan.

- Beranda: `/`
- Tentang Kami: halaman statis Blogger; verifikasi permalink final.
- Menu: halaman statis Blogger; verifikasi permalink final.
- Paket: halaman statis Blogger; verifikasi permalink final.
- Galeri: halaman statis Blogger; verifikasi permalink final.
- Blog: `/search/label/Blog` atau halaman indeks blog yang benar-benar diuji; pilih satu URL kanonis untuk daftar artikel.
- Artikel: format posting Blogger, misalnya `/2026/10/slug-artikel.html`, kecuali Blogger/domain setup mendukung format lain. Jangan memaksakan URL bersih tanpa `.html` jika platform tidak mendukungnya.
- Kontak: halaman statis Blogger; verifikasi permalink final.

Catatan: pada Blogger, format permalink posting umumnya dikontrol oleh platform. Jangan membuat tautan palsu yang menghasilkan 404. Semua URL final harus diuji setelah dipublikasikan.

### 5.3 Footer
Footer minimal mencakup:
- Nama dan deskripsi singkat brand.
- Tautan halaman utama.
- Tautan kategori menu/paket.
- Kontak yang telah diverifikasi.
- Social media yang benar-benar aktif.
- Copyright dinamis bila memungkinkan.
- Kebijakan privasi jika formulir mengumpulkan data pribadi.
- Tautan menuju halaman Blog.

Jangan menampilkan alamat, nomor telepon, jam operasional, atau akun social media contoh seolah-olah nyata. Gunakan konfigurasi placeholder yang mudah diganti sebelum peluncuran.

---

## 6. Spesifikasi Halaman

## 6.1 Halaman Beranda

Urutan section harus mengikuti daftar di bawah.

### A. Hero
- Headline utama yang menyebutkan kategori usaha secara natural, misalnya “Aneka Olahan Kambing, Nasi Briyani, dan Hidangan Aqiqah”.
- Subheadline singkat yang menjelaskan layanan dan mengajak pengunjung melihat menu atau bertanya.
- CTA utama: “Tanya Menu via WhatsApp”.
- CTA sekunder: “Lihat Menu”.
- Visual hero berupa foto hidangan yang relevan dan berkualitas.
- Pastikan teks hero terbaca pada layar kecil dan kontrasnya memadai.
- Jangan memasukkan klaim “terbaik”, “nomor satu”, “paling murah”, atau klaim lain tanpa bukti.

### B. Deskripsi singkat tentang kami
- 50–90 kata.
- Menjelaskan fokus DOMBASTIS KITCHEN pada olahan kambing, nasi briyani, dan masakan/paket aqiqah.
- Jangan mengarang sejarah berdiri, resep turun-temurun, bahan premium, sertifikasi halal, kapasitas produksi, atau lokasi operasional.
- Tautkan ke halaman Tentang Kami.

### C. Tiga rekomendasi menu
- Tampilkan tepat tiga kartu rekomendasi.
- Setiap kartu: foto, nama menu, deskripsi ringkas, kategori, tombol “Tanya Menu”.
- Nama menu final harus dikonfirmasi dengan pemilik bisnis. Jika belum tersedia, gunakan placeholder editorial yang jelas di file konfigurasi dan jangan publikasikan sebagai produk pasti.
- Hindari harga jika harga belum diberikan atau pemilik meminta harga tidak ditampilkan.

### D. Mengapa memilih kami?
Tampilkan 3–5 poin yang dapat dibuktikan dan tidak mengarang fakta, misalnya:
- Pilihan menu yang mudah ditelusuri.
- Informasi menu dan paket yang tersusun jelas.
- Konsultasi kebutuhan pesanan melalui WhatsApp.
- Informasi pemesanan yang transparan.
- Pilihan hidangan untuk kebutuhan acara, hanya jika layanan tersebut memang tersedia.

Hindari klaim kualitas, higienitas, halal, pengalaman bertahun-tahun, atau pengiriman cepat tanpa verifikasi.

### E. Tiga paket terbaik
- Tampilkan tiga kartu paket unggulan.
- Setiap kartu: nama paket, deskripsi, isi/komponen yang sudah diverifikasi, untuk kebutuhan apa, dan CTA “Konsultasikan Paket”.
- Jangan membuat jumlah porsi, harga, bonus, atau fasilitas tanpa data dari pemilik.
- Label “Pilihan populer” hanya digunakan jika data penjualan mendukung. Jika belum ada, gunakan “Pilihan paket”.

### F. Enam foto galeri
- Grid responsif berisi enam foto.
- Klik/tap foto membuka preview/lightbox yang dapat ditutup dengan tombol close, tombol Escape, dan klik area luar jika sesuai.
- Sediakan fokus keyboard dan label aksesibel.
- Jangan memuat semua gambar berukuran penuh pada awal render. Thumbnail harus ringan.

### G. Tiga kartu blog
- Tampilkan tiga artikel terbaru atau artikel pilihan.
- Kartu mencakup gambar, kategori, judul, ringkasan, tanggal publikasi yang valid, dan tautan “Baca Artikel”.
- Jangan membuat tanggal atau artikel palsu. Jika konten belum terbit, jangan menampilkan tanggal publikasi seolah-olah sudah tayang.

### H. Tiga kartu testimoni
- Tampilkan tiga testimoni hanya jika ada kutipan dan izin publikasi yang nyata.
- Cantumkan nama/identitas sesuai izin yang diberikan.
- Jangan menciptakan nama pelanggan, kutipan, rating, atau logo perusahaan.
- Jika belum tersedia, ganti section menjadi “Yang Perlu Anda Ketahui” atau “Cara Pemesanan” sampai testimoni terverifikasi.

### I. FAQ
- Gunakan 4–6 pertanyaan yang menjawab pertanyaan pelanggan umum, seperti kategori menu, cara bertanya tentang paket, pemesanan acara, ketersediaan menu, dan kontak.
- Jawaban singkat, jelas, dan faktual.
- Jangan menjawab ketersediaan, pengiriman, metode pembayaran, area layanan, atau jam operasional sebelum dikonfirmasi.
- Accordion harus dapat dioperasikan dengan keyboard; gunakan elemen semantik `button` dan atribut `aria-expanded`.

### J. CTA penutup
- Headline ajakan yang ramah.
- Ringkasan manfaat menghubungi bisnis.
- Tombol WhatsApp dan tautan ke Menu/Paket.
- Gunakan nomor WhatsApp bisnis yang sudah diverifikasi. Nomor placeholder tidak boleh tayang.

---

## 6.2 Halaman Tentang Kami

Urutan section:

### A. Hero / pengantar
- Judul unik: “Tentang DOMBASTIS KITCHEN”.
- Penjelasan singkat mengenai fokus kuliner dan jenis hidangan yang disediakan.
- Gambar yang relevan.

### B. Cerita dan fokus brand
- Jelaskan fokus layanan berdasarkan fakta yang diberikan.
- Jangan mengarang tanggal pendirian, pendiri, asal resep, cabang, jumlah pelanggan, atau kisah perusahaan.

### C. Keunggulan kami
- 3–5 poin yang konkret dan dapat diverifikasi.
- Fokus pada kemudahan melihat pilihan menu, konsultasi, kejelasan informasi, dan dukungan pemilihan paket jika benar-benar disediakan.

### D. Partnership
- Tampilkan bagian kerja sama untuk kebutuhan acara, komunitas, perusahaan, vendor, atau penyelenggara acara hanya jika kerja sama tersebut memang diterima.
- Jika belum ada mitra resmi, jangan menampilkan logo atau nama partner palsu.
- CTA: “Diskusikan Peluang Kerja Sama”.

### E. Terpercaya
- Gunakan informasi yang benar-benar tersedia: informasi kontak konsisten, proses konsultasi yang jelas, foto produk yang relevan, kebijakan pemesanan yang transparan.
- Jangan menyebut sertifikasi, status halal, izin usaha, penghargaan, ulasan pihak ketiga, atau klaim “terpercaya” sebagai fakta tanpa bukti.
- Bila dokumen resmi tersedia, tampilkan hanya setelah disetujui pemilik dan diverifikasi.

### F. FAQ
- 3–5 FAQ khusus tentang brand, cara konsultasi, dan kerja sama.

### G. CTA
- Ajakan menghubungi DOMBASTIS KITCHEN atau melihat menu.

---

## 6.3 Halaman Menu

### A. Hero
- H1: “Menu DOMBASTIS KITCHEN”.
- Intro singkat untuk membantu pengguna memilih kategori menu.
- CTA “Tanyakan Menu”.

### B. Kategori menu
Tampilkan tiga kategori utama:

#### 1. Berbagai olahan kambing
- Grid kartu produk.
- Setiap item: nama, foto, deskripsi, bahan/alergen jika sudah dikonfirmasi, dan CTA WhatsApp.
- Kategori dapat mencakup olahan kambing yang benar-benar tersedia; jangan mengarang nama hidangan sebagai menu aktif.
- Gunakan filter kategori hanya jika membantu dan tetap ringan.

#### 2. Olahan nasi briyani
- Grid kartu menu briyani yang tersedia.
- Jelaskan variasi menu berdasarkan informasi pemilik.
- Jangan membuat klaim autentisitas, asal negara, bahan, tingkat kepedasan, atau porsi tanpa verifikasi.

#### 3. Masakan dan olahan aqiqah
- Tampilkan jenis masakan atau paket aqiqah yang benar-benar disediakan.
- Berikan CTA konsultasi untuk menanyakan pilihan, jumlah porsi, proses pemesanan, dan ketentuan yang berlaku.
- Jangan mengklaim layanan penyembelihan, sertifikasi, atau proses sesuai standar tertentu tanpa data resmi.

### C. Elemen pada kartu menu
- Foto dengan rasio konsisten.
- Nama menu.
- Deskripsi 1–3 kalimat.
- Label kategori.
- Tombol “Tanya Menu via WhatsApp”.
- Harga disembunyikan secara default; jika pemilik ingin menampilkan harga di masa mendatang, perubahan harus disetujui dan data harus akurat.

### D. FAQ
- Cara menanyakan menu.
- Cara mengecek ketersediaan.
- Cara konsultasi untuk kebutuhan acara/aqiqah.
- Informasi bahan atau alergen hanya berdasarkan data aktual.
- Jawaban harus sesuai kebijakan operasional bisnis.

### E. CTA
- “Belum menemukan menu yang dicari?”
- Tombol WhatsApp dan tautan Paket.

---

## 6.4 Halaman Paket

### A. Hero
- H1: “Paket DOMBASTIS KITCHEN”.
- Intro bahwa pengunjung dapat melihat pilihan paket dan menghubungi tim untuk konsultasi.
- Jangan menjanjikan paket custom sebelum layanan ini dikonfirmasi.

### B. Daftar paket
- Tampilkan seluruh paket yang telah dikonfirmasi pemilik.
- Minimal struktur desain mendukung beberapa kartu paket, tetapi jumlah paket publik mengikuti data aktual.
- Kartu memuat nama, ringkasan, isi paket, target acara, ketentuan, dan CTA.
- Jangan menampilkan harga jika belum disediakan atau tidak ingin dipublikasikan.
- Jangan mengarang porsi, bonus, fasilitas, ongkos kirim, diskon, atau ketersediaan.

### C. CTA per paket
- Gunakan WhatsApp dengan pesan awal yang kontekstual, misalnya “Halo DOMBASTIS KITCHEN, saya ingin bertanya tentang [nama paket].”
- URL WhatsApp harus memakai format resmi `https://wa.me/` dengan nomor internasional tanpa tanda `+`, spasi, atau tanda baca. Nomor harus diganti dengan nomor resmi.

### D. FAQ
- Perbedaan paket.
- Cara konsultasi.
- Ketersediaan dan jadwal pemesanan.
- Penyesuaian kebutuhan acara, hanya jika disediakan.
- Ketentuan pembayaran/pengiriman hanya setelah dikonfirmasi.

### E. CTA penutup
- Arahkan pengguna ke WhatsApp atau halaman Kontak.

---

## 6.5 Halaman Galeri

### A. Hero
- H1: “Galeri DOMBASTIS KITCHEN”.
- Deskripsi singkat tentang foto menu, paket, dan dokumentasi yang benar-benar dimiliki.

### B. Grid galeri
- Grid responsif, 2 kolom di ponsel besar dan 3–4 kolom di layar lebar sesuai ruang.
- Setiap gambar dapat di-preview melalui lightbox.
- Tombol close terlihat jelas; dukung Escape, fokus keyboard, dan pemulihan fokus ke gambar pemicu setelah ditutup.
- Jangan mengaktifkan autoplay video atau animasi berat.
- Gunakan lazy loading untuk gambar di luar viewport.

### C. FAQ
- Pertanyaan tentang menu/foto, penggunaan foto, dan cara meminta informasi paket.
- Jangan menjanjikan bahwa semua foto selalu tersedia atau semua menu selalu ready.

### D. CTA
- Tombol “Tanyakan Menu” dan “Lihat Paket”.

---

## 6.6 Halaman Blog

### A. Hero
- H1: “Blog DOMBASTIS KITCHEN”.
- Pengantar singkat tentang artikel menu, panduan memilih hidangan, dan informasi pemesanan.

### B. Tiga kartu artikel
- Tampilkan tiga artikel terbaru atau unggulan.
- Setiap kartu: gambar, kategori, judul, ringkasan, tanggal, dan link.
- Gunakan data dari posting Blogger; jangan hardcode tanggal yang tidak sesuai.
- Sediakan pagination atau link “Artikel lainnya” jika jumlah posting bertambah.
- Jangan membuat daftar artikel menampilkan isi yang tidak sinkron dengan posting aktual.

### C. FAQ
- Cara menemukan artikel.
- Cara menghubungi bisnis setelah membaca artikel.
- Informasi menu yang tersedia tetap harus dikonfirmasi langsung.

### D. CTA
- Tautan ke Menu, Paket, dan WhatsApp.

---

## 6.7 Halaman Kontak

### A. Hero
- H1: “Hubungi DOMBASTIS KITCHEN”.
- Kalimat pengantar yang mengundang pengunjung untuk bertanya tentang menu dan paket.

### B. Formulir kontak
Field yang disarankan:
- Nama (wajib).
- Nomor WhatsApp atau email (minimal satu kontak wajib).
- Topik pertanyaan (opsional: Menu, Paket, Aqiqah, Kerja Sama, Lainnya).
- Pesan (wajib).
- Persetujuan singkat atas penggunaan data untuk menindaklanjuti pertanyaan, bila data dikumpulkan/diteruskan.

Persyaratan:
- Validasi input di sisi klien.
- Label yang terlihat, pesan error yang jelas, dan atribut aksesibilitas.
- Jangan meminta data sensitif yang tidak diperlukan.
- Jangan menyatakan formulir berhasil dikirim jika tidak ada backend/penerima aktif.
- Karena MVP tidak memiliki backend, opsi default adalah mengarahkan pesan yang telah divalidasi ke WhatsApp atau menggunakan `mailto:`. Integrasi Google Forms/Apps Script dapat menjadi fase berikutnya jika disetujui.
- Lindungi dari spam secara proporsional tanpa menambah script berat.
- Tampilkan kebijakan privasi jika informasi pribadi dikumpulkan.

### C. Informasi kontak
- WhatsApp resmi.
- Email resmi, bila tersedia.
- Alamat, jam operasional, dan area layanan hanya bila telah dikonfirmasi.
- Jangan menampilkan peta yang tidak diperlukan atau alamat placeholder sebagai data asli.

### D. Social media
- Tampilkan hanya akun resmi yang aktif dan telah diverifikasi.
- Setiap tautan memiliki label aksesibel dan membuka domain yang tepat.
- Jangan menampilkan ikon social media tanpa tautan yang berfungsi.

### E. FAQ
- Waktu respons: jangan menjanjikan waktu tertentu tanpa persetujuan.
- Cara menanyakan menu dan paket.
- Data apa yang perlu disertakan saat konsultasi.
- Saluran kontak yang tersedia.

### F. CTA
- Tombol WhatsApp yang jelas.
- Link kembali ke Menu dan Paket.

---

## 6.8 Tiga Artikel Blog

Buat tiga posting Blogger yang lengkap, orisinal, bermanfaat, dan tidak sekadar mengulang kata kunci. Setiap artikel harus memiliki:
- Judul yang spesifik dan tidak clickbait.
- Slug/permalink yang ringkas, deskriptif, dan konsisten dengan kemampuan Blogger.
- Meta description unik, maksimal 120 karakter sebagai batas proyek.
- H1 tunggal yang sesuai dengan judul.
- Jawaban langsung di bagian awal (sekitar 40–80 kata) untuk membantu pembaca mendapatkan inti jawaban.
- Isi terstruktur dengan H2/H3, daftar atau tabel bila membantu.
- Informasi faktual yang dapat diverifikasi; jangan mengarang data gizi, sejarah, sertifikasi, bahan, atau klaim kesehatan.
- CTA yang relevan, tidak memaksa.
- 2 gambar per artikel: hero dan gambar pendukung, dengan alt text yang deskriptif.
- Internal link menuju Menu, Paket, Kontak, dan artikel terkait jika relevan.
- Author dan tanggal yang benar-benar sesuai.
- Schema Article/BlogPosting yang valid, bila tidak sudah dihasilkan oleh tema Blogger.
- Tidak ada keyword stuffing atau paragraf yang dibuat hanya untuk mesin pencari.

### Artikel 1
**Judul kerja:** Panduan Memilih Olahan Kambing untuk Berbagai Acara  
**Slug kerja:** `panduan-memilih-olahan-kambing-untuk-acara`  
**Tujuan pencarian:** membantu pembaca memahami hal-hal yang perlu dipertimbangkan saat memilih hidangan kambing.  
**Kerangka:**
1. Jawaban langsung.
2. Pertimbangkan jenis acara dan preferensi tamu.
3. Pilih variasi hidangan berdasarkan konteks.
4. Konfirmasi jumlah porsi, penyajian, dan ketersediaan langsung ke penyedia.
5. Perhatikan kebutuhan bahan/alergen jika informasinya tersedia.
6. Checklist sebelum memesan.
7. FAQ.
8. CTA ke halaman Menu.

### Artikel 2
**Judul kerja:** Mengenal Nasi Briyani dan Cara Memilih Menu yang Sesuai  
**Slug kerja:** `mengenal-nasi-briyani-dan-memilih-menu`  
**Tujuan pencarian:** menjawab pertanyaan umum tentang nasi briyani dan membantu pembaca memilih hidangan sesuai kebutuhan.  
**Kerangka:**
1. Jawaban langsung.
2. Gambaran umum nasi briyani secara netral.
3. Hal yang perlu ditanyakan tentang bahan dan tingkat rasa.
4. Memilih menu untuk keluarga atau acara.
5. Informasi porsi dan ketersediaan yang harus dikonfirmasi.
6. FAQ.
7. CTA ke halaman Menu.

### Artikel 3
**Judul kerja:** Panduan Menyiapkan Pesanan Masakan untuk Acara Aqiqah  
**Slug kerja:** `panduan-pesanan-masakan-untuk-acara-aqiqah`  
**Tujuan pencarian:** membantu keluarga menyiapkan pertanyaan dan kebutuhan sebelum berkonsultasi tentang masakan aqiqah.  
**Kerangka:**
1. Jawaban langsung.
2. Tentukan kebutuhan acara dan perkiraan jumlah tamu.
3. Buat daftar pertanyaan tentang pilihan menu dan porsi.
4. Konfirmasi jadwal, pengemasan, pengiriman, pembayaran, serta ketentuan layanan secara langsung.
5. Checklist komunikasi dengan penyedia.
6. FAQ.
7. CTA ke halaman Paket/Kontak.

Catatan: ketiga artikel adalah topik awal, bukan klaim bahwa semua produk/layanan tersedia. Sebelum publikasi, sesuaikan dengan penawaran nyata DOMBASTIS KITCHEN dan lakukan pemeriksaan fakta.

---

## 7. Komponen Global

### 7.1 Floating WhatsApp
- Muncul di semua halaman dan posting.
- Posisi fixed di sisi kanan bawah dengan jarak aman dari tepi viewport dan safe area ponsel.
- Gunakan ikon SVG ringan atau ikon lokal; jangan memuat library ikon besar hanya untuk satu ikon.
- Label aksesibel, misalnya `aria-label="Hubungi DOMBASTIS KITCHEN melalui WhatsApp"`.
- Link membuka WhatsApp dengan pesan awal yang relevan.
- Nomor harus berasal dari konfigurasi global dan diganti dengan nomor bisnis yang valid sebelum rilis.
- Jangan menutupi tombol submit, konten, cookie notice, atau kontrol penting.

### 7.2 Back to Top
- Posisi di atas tombol WhatsApp.
- Awalnya dapat disembunyikan hingga pengguna menggulir halaman melewati ambang tertentu.
- Menggunakan `scroll-behavior: smooth` jika preferensi gerak pengguna mengizinkan.
- Hormati `prefers-reduced-motion`.
- Tombol dapat diakses keyboard dan memiliki nama aksesibel.
- Hindari listener scroll yang berat; gunakan handler pasif dan throttling ringan bila perlu.

### 7.3 Header dan footer
- Konsisten pada seluruh halaman.
- Link navigasi tidak boleh rusak.
- Logo memiliki teks alternatif yang sesuai jika berupa gambar.
- Menu mobile harus berfungsi dengan keyboard, fokus yang terlihat, dan state terbuka/tertutup yang benar.

### 7.4 FAQ accordion
- Pertanyaan adalah tombol.
- State terbuka/tertutup menggunakan `aria-expanded` dan `aria-controls`.
- Konten tetap dapat diakses pembaca layar.
- Jangan memaksa semua FAQ dibuka sekaligus jika membuat halaman terlalu panjang.

### 7.5 Breadcrumb
- Tambahkan pada halaman dalam dan artikel jika sesuai.
- Breadcrumb harus mencerminkan jalur navigasi yang benar, bukan jalur fiktif.
- Schema BreadcrumbList hanya jika breadcrumb benar-benar terlihat dan URL-nya valid.

---

## 8. Persyaratan SEO, AEO, dan GEO 2026

SEO/AEO/GEO harus berfokus pada pengalaman pengguna, informasi yang akurat, struktur semantik, dan kemudahan mesin memahami konten. Tidak ada markup khusus yang menjamin muncul di AI Overview atau posisi teratas.

### 8.1 SEO On-Page
- Setiap halaman memiliki `<title>` unik dengan target maksimal 60 karakter.
- Setiap halaman memiliki meta description unik, maksimal 120 karakter untuk standar proyek ini.
- Setiap halaman memiliki satu H1 utama yang deskriptif.
- Hierarki H2/H3 logis; jangan memilih heading hanya karena ukuran visual.
- URL/permalink deskriptif dan konsisten dengan kemampuan Blogger.
- Canonical URL menunjuk ke URL final yang benar.
- Open Graph title/description/image disesuaikan per halaman bila didukung tema.
- Gunakan anchor text yang deskriptif, bukan “klik di sini” berulang.
- Internal link menghubungkan Menu, Paket, Tentang Kami, Blog, Kontak, dan artikel terkait.
- Hindari duplikasi title, description, H1, dan konten antarhalaman.
- Jangan menumpuk kata kunci, kota, atau variasi keyword secara tidak natural.
- Jangan membuat halaman tipis yang hanya mengganti nama lokasi/menu.

### 8.2 Contoh metadata awal
Metadata ini adalah draft dan harus disesuaikan dengan konten final:

| Halaman | Title draft | Meta description draft |
|---|---|---|
| Beranda | DOMBASTIS KITCHEN \| Olahan Kambing & Briyani | Jelajahi olahan kambing, nasi briyani, dan masakan aqiqah dari DOMBASTIS KITCHEN. |
| Tentang Kami | Tentang DOMBASTIS KITCHEN | Kenali DOMBASTIS KITCHEN dan temukan informasi seputar menu, paket, serta cara konsultasi. |
| Menu | Menu Olahan Kambing, Briyani & Aqiqah | Lihat kategori menu olahan kambing, nasi briyani, dan masakan aqiqah yang tersedia. |
| Paket | Paket DOMBASTIS KITCHEN | Telusuri pilihan paket DOMBASTIS KITCHEN dan tanyakan detail kebutuhan Anda. |
| Galeri | Galeri Menu DOMBASTIS KITCHEN | Lihat foto menu dan hidangan DOMBASTIS KITCHEN melalui galeri gambar. |
| Blog | Blog DOMBASTIS KITCHEN | Baca panduan memilih olahan kambing, mengenal nasi briyani, dan menyiapkan pesanan aqiqah. |
| Kontak | Kontak DOMBASTIS KITCHEN | Hubungi DOMBASTIS KITCHEN untuk bertanya tentang menu, paket, dan kebutuhan pesanan. |

Validasi panjang title dan description secara otomatis saat build. Metadata final harus sesuai isi halaman; jangan menyatakan menu tersedia jika belum dikonfirmasi.

### 8.3 SEO teknis
- Pastikan halaman dapat di-crawl dan tidak diblokir oleh robots yang tidak disengaja.
- Verifikasi sitemap Blogger dan daftarkan domain di Google Search Console.
- Gunakan HTTPS dan pastikan tidak ada mixed content.
- Pastikan canonical tidak mengarah ke staging atau domain yang salah.
- Cek redirect domain, versi www/non-www, dan URL dengan/ tanpa trailing slash sesuai konfigurasi.
- Periksa halaman 404, tautan rusak, redirect chain, serta gambar gagal dimuat.
- Jangan memasang dua plugin/skrip yang menghasilkan canonical, title, atau schema duplikat.
- Hindari menyisipkan keyword tersembunyi atau konten yang hanya terlihat crawler.
- Pastikan robots meta tidak menghalangi halaman penting.
- Gunakan `lang="id"` pada elemen HTML utama jika struktur tema memungkinkan.

### 8.4 AEO (Answer Engine Optimization)
- Berikan jawaban langsung untuk pertanyaan inti pada awal halaman/artikel.
- Gunakan pertanyaan yang benar-benar diajukan pelanggan sebagai H2/H3 bila relevan.
- Buat FAQ singkat, spesifik, dan faktual.
- Sajikan detail penting dalam paragraf pendek, daftar, atau tabel yang mudah dipahami.
- Definisikan istilah seperti nasi briyani atau kategori menu secara natural.
- Jawab apa yang diketahui dan nyatakan apa yang perlu dikonfirmasi.
- Hindari jawaban generik yang tidak membantu pengunjung mengambil keputusan.

### 8.5 GEO (Generative Engine Optimization)
- Gunakan nama brand “DOMBASTIS KITCHEN” secara konsisten.
- Pastikan informasi brand, menu, kontak, dan kebijakan konsisten di seluruh website.
- Tulis konten yang dapat dipahami tanpa konteks halaman lain.
- Gunakan heading yang deskriptif, fakta yang dapat diverifikasi, dan sumber terpercaya jika membuat klaim faktual eksternal.
- Tampilkan informasi bisnis yang benar-benar ada; jangan membuat alamat, jam, cakupan pengiriman, atau profil bisnis palsu.
- Tambahkan tanggal publikasi dan pembaruan hanya jika benar.
- Buat halaman About/Contact yang jelas untuk membantu pengunjung memahami identitas dan cara menghubungi bisnis.
- Jangan menjanjikan bahwa teknik GEO tertentu pasti membuat konten dikutip AI.

### 8.6 Structured data / Schema.org
Gunakan JSON-LD hanya jika datanya akurat dan sesuai konten terlihat. Pilihan:
- `Organization` atau `LocalBusiness` hanya jika tipe dan data bisnis dapat dibuktikan. Jangan mengisi alamat, nomor, jam, harga, atau area layanan dengan data rekaan.
- `WebSite` untuk identitas website bila sesuai.
- `WebPage` untuk halaman umum jika dibutuhkan.
- `BreadcrumbList` jika breadcrumb terlihat dan valid.
- `Article`/`BlogPosting` untuk posting blog dengan judul, gambar, penulis, tanggal, dan URL yang benar.
- `FAQPage` hanya jika FAQ tampil di halaman dan memenuhi panduan mesin pencari yang berlaku. Jangan mengharapkan rich result FAQ karena dukungan tampilan dapat berubah.
- `Product`, `Offer`, `AggregateRating`, dan `Review` jangan digunakan untuk mengarang harga, rating, atau ulasan.
- Validasi JSON-LD menggunakan Rich Results Test dan Schema Markup Validator.
- Hindari schema duplikat dari tema dan kode tambahan. Pilih satu sumber yang benar.

### 8.7 Local SEO
- Jika bisnis melayani wilayah tertentu, cantumkan wilayah hanya setelah dikonfirmasi.
- Konsistensikan nama, alamat, dan nomor telepon di website dengan profil bisnis resmi.
- Jangan membuat Google Business Profile atau lokasi palsu.
- Jika ada Google Business Profile yang sah, hubungkan dengan website dan pastikan informasi sinkron.
- Jangan membuat halaman kota massal yang kontennya hampir sama.

### 8.8 Gambar dan SEO visual
- Nama file deskriptif, huruf kecil, gunakan tanda hubung.
- Alt text menjelaskan isi foto, bukan daftar keyword.
- Kompres foto dan sediakan ukuran sesuai perangkat.
- Gambar hero yang menjadi Largest Contentful Paint tidak boleh lazy-load; prioritaskan pemuatan gambar utama secara tepat.
- Gambar di bawah fold menggunakan `loading="lazy"` dan `decoding="async"` bila sesuai.
- Tetapkan `width` dan `height` atau `aspect-ratio` untuk mengurangi layout shift.
- Jangan memasukkan teks penting hanya ke dalam gambar.

---

## 9. Persyaratan Performa dan PageSpeed

### 9.1 Target proyek
Target internal:
- Lighthouse/PageSpeed Performance: target 90+ untuk mobile dan desktop pada halaman yang diuji.
- Accessibility: target 95+.
- Best Practices: target 95+.
- SEO audit: target 95+.
- Core Web Vitals lapangan: LCP ≤ 2,5 detik, INP ≤ 200 ms, CLS ≤ 0,1 pada persentil ke-75 jika data lapangan sudah tersedia.

Angka ini adalah target, bukan jaminan. Skor berubah sesuai perangkat, jaringan, script pihak ketiga, iklan/widget Blogger, dan data lapangan.

### 9.2 Strategi performa
- Build Tailwind dengan purge/content scanning agar hanya utility yang dipakai masuk ke CSS final.
- Minifikasi CSS dan JavaScript.
- Jangan memuat Tailwind Play CDN di website produksi.
- Hindari framework JS, carousel berat, animasi parallax, video autoplay, dan library besar yang tidak diperlukan.
- Gunakan JavaScript vanilla seperlunya.
- Hindari banyak request font; gunakan system font stack bila visual tetap sesuai.
- Optimalkan foto hero; gunakan ukuran responsif dan format modern.
- Lazy-load gambar di bawah fold, bukan gambar LCP utama.
- Tentukan dimensi gambar agar tidak terjadi CLS.
- Gunakan `defer` untuk script non-kritis dan jangan memblokir rendering.
- Hapus CSS/JS yang tidak digunakan.
- Batasi widget eksternal, tracker, embed sosial, dan script pihak ketiga.
- Jangan menambahkan preconnect/preload tanpa kebutuhan yang terukur.
- Periksa layout shift dari font, iklan, widget, dan gambar.
- Gunakan cache browser/CDN yang memang tersedia pada platform; jangan mengasumsikan kontrol server yang tidak disediakan Blogger.
- Jangan memasukkan gambar base64 besar langsung ke HTML.
- Pastikan tombol floating tidak menyebabkan horizontal overflow atau menutupi konten.

### 9.3 Pengujian performa
Uji setidaknya:
- Beranda.
- Tentang Kami.
- Menu.
- Paket.
- Galeri.
- Blog index.
- Satu artikel blog.
- Kontak.

Untuk setiap halaman:
1. Jalankan Lighthouse mobile dan desktop.
2. Jalankan PageSpeed Insights pada URL staging/publikasi yang dapat diakses.
3. Catat Performance, Accessibility, Best Practices, SEO, LCP, INP/TBT, CLS, ukuran halaman, dan jumlah request.
4. Perbaiki masalah berdasarkan dampak nyata, mulai dari gambar LCP, CSS/JS blocking, font, layout shift, dan script pihak ketiga.
5. Ulangi pengujian setelah perubahan.
6. Uji kembali pada domain produksi setelah migrasi Blogger.

---

## 10. Aksesibilitas, Responsivitas, dan UX

- Desain mobile-first.
- Tidak ada horizontal scrolling pada lebar 320 px dan seterusnya.
- Area klik tombol/link cukup besar untuk layar sentuh.
- Kontras warna teks dan latar memenuhi WCAG AA sejauh memungkinkan.
- Semua fungsi tersedia dengan keyboard.
- Fokus keyboard terlihat jelas.
- Setiap input form memiliki label.
- Gambar informatif memiliki alt text.
- Jangan mengandalkan warna saja untuk menyampaikan status.
- Gunakan elemen semantik `header`, `nav`, `main`, `section`, `article`, `footer`, `button`, dan `form`.
- Hindari penggunaan heading hanya untuk styling.
- Gunakan `prefers-reduced-motion`.
- Ukuran teks nyaman dibaca dan tidak terlalu kecil.
- Menu mobile, accordion FAQ, lightbox, formulir, dan tombol floating harus diuji di ponsel.

---

## 11. Implementasi Antigravity ke Blogger

### 11.1 Struktur kerja lokal
Struktur direktori yang disarankan:

```text
dombastis-kitchen/
├── README.md
├── PRD-DOMBASTIS-KITCHEN.md
├── src/
│   ├── pages/
│   │   ├── index.html
│   │   ├── tentang-kami.html
│   │   ├── menu.html
│   │   ├── paket.html
│   │   ├── galeri.html
│   │   ├── blog.html
│   │   └── kontak.html
│   ├── posts/
│   │   ├── panduan-memilih-olahan-kambing-untuk-acara.html
│   │   ├── mengenal-nasi-briyani-dan-memilih-menu.html
│   │   └── panduan-pesanan-masakan-untuk-acara-aqiqah.html
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── css/
│   │   └── input.css
│   └── js/
│       └── main.js
├── dist/
│   ├── blogger-theme.xml
│   ├── css/
│   │   └── styles.min.css
│   ├── js/
│   │   └── main.min.js
│   └── migration/
│       ├── blogger-static-pages/
│       └── blogger-posts/
└── tests/
    ├── seo-checklist.md
    └── qa-checklist.md
```

Struktur ini adalah struktur kerja pengembangan. Blogger tidak akan menjalankan folder lokal tersebut secara langsung.

### 11.2 Aturan penggunaan Tailwind
- Gunakan Tailwind untuk mempercepat pengembangan UI.
- Simpan source CSS dan konfigurasi build secara lokal.
- Scan seluruh file HTML/template agar class yang dipakai terdeteksi.
- Build CSS produksi statis, minified, dan hanya berisi utility yang dipakai.
- Jangan menempel `@tailwind` directives mentah ke Blogger tanpa proses build.
- Jangan gunakan Tailwind Play CDN pada produksi.
- Jika mengembangkan theme Blogger XML, pastikan escaping XML dan sintaks Blogger template valid.

### 11.3 Tahapan migrasi
1. Buat dan uji halaman HTML di Antigravity.
2. Pisahkan komponen global: header, footer, tombol WhatsApp, Back to Top, FAQ, dan lightbox.
3. Build CSS final dari Tailwind.
4. Adaptasikan struktur ke theme XML Blogger yang valid.
5. Buat halaman statis Blogger untuk Tentang Kami, Menu, Paket, Galeri, dan Kontak.
6. Buat halaman Beranda sesuai mekanisme tema Blogger.
7. Buat tiga artikel sebagai posting Blogger, bukan sekadar halaman HTML lokal.
8. Hubungkan Blog index ke posting aktual dan uji permalink.
9. Pindahkan aset ke hosting yang stabil dan mendukung hotlinking, atau unggah melalui fasilitas Blogger bila sesuai.
10. Ganti semua placeholder dengan informasi bisnis yang sudah dikonfirmasi.
11. Uji semua link, metadata, schema, formulir, tombol WA, dan responsive states.
12. Hubungkan domain `dombastiskitchen.blogspot.com`, HTTPS, dan Search Console.
13. Uji ulang PageSpeed di domain produksi.
14. Simpan salinan theme XML final dan dokumentasikan cara rollback.

### 11.4 Konten yang harus menjadi konfigurasi tunggal
Agar mudah dikelola, buat konfigurasi untuk:
- Nama brand.
- Domain kanonis.
- Nomor WhatsApp.
- Email.
- Social media.
- Alamat/jam operasional (jika ada).
- Menu yang tersedia.
- Paket yang tersedia.
- URL gambar.
- CTA default.
- Metadata tiap halaman.

Jangan menduplikasi nomor WhatsApp atau URL penting di banyak file tanpa kebutuhan.

---

## 12. Persyaratan Keamanan dan Privasi

- Jangan memasukkan API key, token, password, atau rahasia ke kode frontend.
- Validasi input form; jangan menganggap validasi browser sebagai proteksi server.
- Jelaskan tujuan pengumpulan data pada formulir.
- Kumpulkan data seminimal mungkin.
- Jangan menyimpan data pribadi ke spreadsheet atau layanan pihak ketiga tanpa persetujuan pemilik dan kebijakan privasi yang sesuai.
- Hindari memasukkan script eksternal yang tidak tepercaya.
- Gunakan HTTPS.
- Buka tautan eksternal di tab baru hanya jika perlu; jika memakai `target="_blank"`, gunakan `rel="noopener noreferrer"`.
- Jangan mengklaim data formulir aman/terenkripsi di server jika tidak ada sistem yang mendukung klaim tersebut.

---

## 13. Analitik dan Pengukuran

Opsional setelah mendapat persetujuan pemilik:
- Google Search Console untuk indeks, kueri, klik, impresi, dan masalah teknis.
- Google Analytics atau alat analitik lain hanya jika diperlukan dan sesuai kebijakan privasi.
- Event pengukuran: klik WhatsApp, klik menu/paket, pengiriman form (hanya bila benar-benar berhasil), dan klik artikel.
- Jangan memasang beberapa sistem analitik yang tumpang tindih.
- Ukur konversi dengan event yang valid, bukan hanya klik tombol yang gagal.

---

## 14. Kriteria Penerimaan (Acceptance Criteria)

### 14.1 Struktur dan konten
- [ ] Semua tujuh halaman utama tersedia: Beranda, Tentang Kami, Menu, Paket, Galeri, Blog, Kontak.
- [ ] Beranda memiliki seluruh section sesuai urutan yang ditentukan.
- [ ] Halaman Tentang Kami memiliki Keunggulan, Partnership, Terpercaya, FAQ, dan CTA.
- [ ] Halaman Menu memiliki kategori olahan kambing, nasi briyani, serta masakan/olahan aqiqah, FAQ, dan CTA.
- [ ] Halaman Paket memiliki daftar paket, FAQ, dan CTA.
- [ ] Galeri memiliki grid foto dan preview/lightbox yang berfungsi.
- [ ] Blog index menampilkan tiga kartu artikel yang mengarah ke posting valid.
- [ ] Halaman Kontak memiliki formulir, social media terverifikasi, FAQ, dan CTA.
- [ ] Tiga artikel blog tersedia sebagai posting Blogger.
- [ ] Konten placeholder, nomor palsu, testimoni palsu, harga rekaan, dan klaim tak terverifikasi tidak tampil di produksi.

### 14.2 Komponen global
- [ ] Tombol WhatsApp floating tampil pada seluruh halaman dan artikel.
- [ ] Tombol Back to Top tampil di atas tombol WhatsApp ketika sesuai aturan scroll.
- [ ] Kedua tombol tidak menutupi konten penting.
- [ ] Header, menu mobile, footer, FAQ, dan breadcrumb berfungsi.
- [ ] Tidak ada tautan internal yang menuju 404.

### 14.3 SEO/AEO/GEO
- [ ] Setiap halaman memiliki title unik maksimal 60 karakter.
- [ ] Setiap halaman memiliki meta description unik maksimal 120 karakter.
- [ ] Satu H1 utama per halaman dan heading tersusun logis.
- [ ] Canonical, robots, sitemap, dan HTTPS benar.
- [ ] Schema valid dan tidak duplikat.
- [ ] Alt text informatif tersedia.
- [ ] Internal link relevan dan tidak berlebihan.
- [ ] Artikel memberi jawaban langsung dan konten yang berguna.
- [ ] Tidak ada klaim ranking nomor satu atau jaminan tampil di AI Overview.

### 14.4 Performa dan aksesibilitas
- [ ] Tidak ada error JavaScript yang tidak tertangani.
- [ ] Tidak ada horizontal overflow pada ukuran mobile umum.
- [ ] Semua kontrol interaktif bisa digunakan dengan keyboard.
- [ ] Gambar memiliki dimensi/rasio yang mencegah layout shift.
- [ ] Gambar di bawah fold lazy-load; gambar LCP tidak lazy-load.
- [ ] Tailwind telah di-build menjadi CSS statis yang dioptimasi.
- [ ] Lighthouse/PageSpeed dijalankan pada semua template utama.
- [ ] Target 90+ Performance diusahakan pada mobile dan desktop; hasil aktual didokumentasikan, bukan diasumsikan.
- [ ] Core Web Vitals diperiksa kembali setelah website mendapat data lapangan.

### 14.5 Integrasi Blogger
- [ ] Theme XML dapat diunggah tanpa error.
- [ ] Halaman statis dan posting dapat diedit melalui dashboard Blogger.
- [ ] URL final dan canonical telah diuji.
- [ ] Domain custom dan HTTPS berjalan.
- [ ] Artikel, gambar, dan navigasi tidak bergantung pada path lokal Antigravity.

---

## 15. Rencana Pengujian

### Functional testing
- Klik semua link navigasi pada desktop dan mobile.
- Buka/tutup menu mobile.
- Klik setiap CTA WhatsApp dan periksa nomor serta isi pesan.
- Uji Back to Top dari bagian bawah halaman.
- Uji lightbox: buka, tutup, Escape, keyboard, dan pemulihan fokus.
- Uji semua accordion FAQ.
- Uji validasi formulir, fallback, serta pesan sukses/gagal yang jujur.
- Uji semua gambar dan alt text.
- Uji link antarartikel dan tombol kembali ke kategori.

### SEO testing
- Audit title, description, canonical, H1, heading, robots, sitemap, dan internal links.
- Validasi JSON-LD.
- Periksa status HTTP dan redirect.
- Periksa halaman 404 dan permalink posting.
- Periksa rendering HTML setelah kode dimigrasikan ke Blogger.

### Performance testing
- Lighthouse mobile/desktop untuk seluruh template.
- PageSpeed Insights untuk URL produksi.
- Periksa ukuran transfer gambar, CSS, JS, font, dan script eksternal.
- Periksa LCP, CLS, dan interaktivitas.
- Ulangi pengukuran setelah optimasi utama.

### Browser/device testing
- Chrome desktop dan Android.
- Safari iOS jika tersedia.
- Ukuran viewport 320 px, 375 px, 768 px, 1024 px, dan desktop lebar.
- Uji koneksi lambat untuk melihat pengalaman loading.

---

## 16. Tahapan Pengerjaan

1. **Discovery dan pengumpulan data:** verifikasi menu, paket, nomor WhatsApp, kontak, social media, foto, dan ketentuan pemesanan.
2. **Desain UI:** tetapkan palet, tipografi, grid, kartu, CTA, header, footer, dan komponen responsif.
3. **Pengembangan Antigravity:** bangun seluruh halaman dan komponen menggunakan HTML/Tailwind.
4. **Konten dan SEO:** isi metadata, struktur heading, FAQ, internal links, schema, dan tiga artikel.
5. **Build dan optimasi:** purge Tailwind, minifikasi, optimasi gambar, dan hapus kode yang tidak dipakai.
6. **QA lokal:** uji fungsi, aksesibilitas, responsivitas, dan performa.
7. **Migrasi Blogger:** adaptasi theme XML, halaman statis, posting, permalink, dan aset.
8. **QA staging/produksi:** uji URL publik, WhatsApp, form, metadata, schema, dan PageSpeed.
9. **Peluncuran:** domain/HTTPS, Search Console, sitemap, pemeriksaan indeks, dan dokumentasi.
10. **Pemeliharaan:** pembaruan menu/paket, artikel, foto, pemeriksaan broken links, dan review performa berkala.

---

## 17. Data yang Harus Dikonfirmasi Sebelum Launch

- [ ] Nomor WhatsApp resmi dengan format internasional.
- [ ] Email resmi.
- [ ] Akun Instagram/Facebook/TikTok atau social media lain yang aktif.
- [ ] Alamat dan jam operasional, bila ingin ditampilkan.
- [ ] Area layanan/pengiriman, bila tersedia.
- [ ] Daftar nama menu olahan kambing yang benar-benar dijual.
- [ ] Daftar varian nasi briyani yang benar-benar tersedia.
- [ ] Jenis masakan/paket aqiqah yang benar-benar dilayani.
- [ ] Nama dan isi paket, termasuk jumlah porsi jika ingin disebutkan.
- [ ] Ketentuan pemesanan, pembayaran, pembatalan, dan pengiriman.
- [ ] Foto produk asli dan izin penggunaan.
- [ ] Testimoni asli dan izin publikasi.
- [ ] Logo dan aset brand final.
- [ ] Kebijakan privasi untuk formulir jika diperlukan.
- [ ] Status sertifikasi/izin hanya jika ingin ditampilkan dan dokumennya tersedia.

---

## 18. Instruksi Akhir untuk Agent Antigravity

Bangun website DOMBASTIS KITCHEN berdasarkan PRD ini. Prioritaskan struktur halaman yang lengkap, desain premium yang ringan, konten Bahasa Indonesia yang natural, aksesibilitas, dan kemudahan migrasi ke Blogger.

**Aturan wajib:**
1. Jangan membuat SPA; setiap halaman harus memiliki struktur dan konten halaman yang jelas.
2. Gunakan HTML5 semantik, Tailwind CSS pada tahap pengembangan, CSS hasil build yang statis untuk produksi, dan JavaScript vanilla seperlunya.
3. Jangan memakai React, Vue, Angular, Bootstrap, jQuery, atau framework UI lain.
4. Jangan menggunakan Tailwind Play CDN untuk produksi.
5. Jangan mengarang harga, nama pelanggan, testimoni, alamat, nomor telepon, jam operasional, sertifikasi, penghargaan, statistik, atau klaim bisnis.
6. Buat konfigurasi terpusat untuk semua placeholder bisnis.
7. Pastikan setiap halaman mempunyai title unik maksimal 60 karakter dan meta description unik maksimal 120 karakter.
8. Buat tombol floating WhatsApp di semua halaman dan artikel serta Back to Top di atasnya.
9. Buat preview/lightbox galeri yang aksesibel dan ringan.
10. Buat tiga posting artikel sesuai topik dalam PRD, lalu siapkan konten untuk dipindahkan ke Blogger.
11. Sediakan theme XML Blogger yang valid atau dokumentasikan dengan jelas bagian yang perlu dipindahkan secara manual; jangan mengklaim file HTML biasa sebagai theme Blogger siap unggah.
12. Optimalkan gambar, CSS, JS, font, dan loading behavior. Jangan lazy-load gambar hero/LCP.
13. Uji semua link, CTA, FAQ, formulir, metadata, schema, dan tampilan mobile.
14. Jalankan Lighthouse/PageSpeed, dokumentasikan skor aktual dan masalah tersisa. Jangan mengklaim “semua hijau” sebelum diuji pada URL yang benar-benar dapat diakses.
15. Buat README berisi cara menjalankan build, lokasi konfigurasi, cara mengganti aset, dan langkah migrasi ke Blogger.
16. Bila data bisnis belum tersedia, gunakan placeholder yang terlihat jelas hanya pada lingkungan pengembangan dan tandai sebagai “WAJIB DIGANTI SEBELUM RILIS”.
17. Jangan menghapus fitur atau section yang ditentukan PRD tanpa alasan teknis yang dijelaskan.
18. Pastikan hasil akhir mudah disalin dan disesuaikan ke Blogger serta tidak bergantung pada server lokal Antigravity.

**Output yang diharapkan dari agent:**
- Seluruh file sumber halaman.
- CSS Tailwind hasil build yang teroptimasi.
- JavaScript ringan untuk interaksi.
- Theme Blogger XML atau panduan migrasi teknis yang dapat diikuti.
- Tiga artikel blog dalam format siap dipindahkan ke Blogger.
- Aset gambar yang telah dioptimasi atau daftar kebutuhan aset beserta prompt visualnya.
- README setup dan migrasi.
- Checklist QA SEO, aksesibilitas, responsivitas, dan performa.
- Laporan hasil Lighthouse/PageSpeed aktual.

---

## 19. Definisi Selesai (Definition of Done)

Proyek dianggap siap diluncurkan jika seluruh halaman dan tiga posting blog telah terpasang di Blogger, konten bisnis sudah diverifikasi, navigasi dan komponen interaktif berfungsi, metadata unik telah diuji, schema tidak menghasilkan error kritis, seluruh tautan penting valid, domain HTTPS aktif, serta hasil pengujian performa dan aksesibilitas sudah didokumentasikan. Skor PageSpeed hijau merupakan sasaran optimasi yang perlu diuji dan dipelihara, bukan janji absolut.
