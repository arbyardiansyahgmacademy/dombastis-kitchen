const fs = require('fs');
const path = require('path');

const BLOGGER_IMAGE_MAP = {
  'hero-dombastis-dish.webp': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtJieAOk60qqAuCbY_sMvhEGeJLo3FD5lp0HJ8s3jm_OoQOLZzi4qHhKpldAIXYXsOyfCJWA-UyHOgmk2fXwFHy4K24gK8NlZ2zZkL1MVRE07CsRbrdlxRoMwSHq9A7AvvU-MuFyFK5Kmj8gOF7pI19iCWRS4-rbfBrBmaERl4VNQh8IeLWPVDwPjzHLcW/s1600/hero-dombastis-dish.webp',
  'sate-kambing-empuk.webp': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_oTS5kTKg-PYNnc6kAoh8EY9fHX4cX0C5VdBHl5pj5gSkxWH6B5niqXC2z6j5T7JSb92KLUsd4q_MrQe6uMffApnBvooa3b-X4W-mWR8P3F4vCFz1NggNjH8tnEoVKBzL5doSqWQQM9HtleamG85v3IL_3uk6lbwCia2SNqiqR_8KkKuyS3Dl4xqUZ2xG/s1600/sate-kambing-empuk.webp',
  'briyani-kambing-spesial.webp': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqEQnNq_4cYYlSnNLDaJ9ICxqf3pTeSWLDlEqDvsy1tepwpipFd2jtrCF47dkdNqb32Pp1Ibz2FAPpgFrPGGnbOaXuoSYMUoCO1j7IYkpmI4-5hOHxw-CyfXnWEgjg2k77oLD9ut-sOzVE2sZNqrg7sxisOE8R9dhYIBRCjnmyl-kV4IhutGIQ5JxjfGmK/s1600/briyani-kambing-spesial.webp',
  'tongseng-kambing-gurih.webp': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJpra1Bb0TVdr5FHf0VHlgnKgLchfaXtqxQsGNHrW3tFffCQ1cEncxCY8fm7fcOP-77vDk0y6PlZh0-Vd4jtyhhv7xyb2HzjQ2r97CUWi62LBybkmNjySKnn7mDBb1VUyN-0Spe09i9XQ1M0_Ts2OtfZoTLAohRRmL9ZathHRQcRDLcDB2BoRA0A_S__JK/s1600/tongseng-kambing-gurih.webp',
  'paket-aqiqah-box.webp': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgM4G-FXt2Haj-Z41M_-PsJ8lSG8hIM_kkD3CAz_3toWavBDPRK9qLdkFlLX8QHU5oR3NYKKHAYqXhYfC5fmOp76CXTunoIQzt4G8EA3-hjROmS1nc20NelsdW0XSt0s_je3sPLVC-K67SlmW-O5RAtEgWqKgUFb4mLigqoSIGLOq51fkD4KElF3cI2cybd/s1600/paket-aqiqah-box.webp',
  'about-dombastis-dish.webp': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGgmCQQ3iUXLv5krBfVeHtv-cz8yaFrVgqD-oXfRfQbsjyVmUnHhCIXmVjLX-wLdmp3byRk70q31pyeegtKr_ejuJiP3H1N4XyptxR2TqWLAgoCpuqZ8g8iELQUQAIRWgB-NwohpMYFLvke0J7x_x5ubBFLTvNQxr0cNGoIHHEKHj4QZnH1C9Bo7b_bqYV/s1600/about-dombastis-dish.webp',
  'gulai-kambing-rempah.webp': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-QrRax5YL7baxMxIHSWMCD6vrxJPTNhAgrxNuA4JbgVYNh1HyJRb7h2rpJb8rRnEVIOlzFcDcAKhDGGvsI95XQqI9JD7GOinOgz5ALVOhIjGJe1wz5gG_au_zKO9Jl_eOQfk2y0WPHi6SpEIz0s0HkbdsWYYZYweDiktmhxI8QiULO37KXT5WfBK-5nit/s1600/gulai-kambing-rempah.webp',
  'kebuli-kambing-aroma.webp': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMwmBtwCR2eBagpPhXr5juW21i2DvN4fx44tNYY_r_vw-NJJGZN5KspOlcR7I8r1opWJolgCjJkWTBCaA3lcu8_JkRoQ-I3AlWG37pyENRIa44zVdNt0abz7SJvasBlobA4138MFk2EHE4qlQBJ-L_yGoCHrskrRMN8gwKvNV2SS2ws-jQdKNsnrHuVFlO/s1600/kebuli-kambing-aroma.webp',
  'tengkleng-kambing-spesial.webp': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj52kBZ8sh0G9lBeGcJnDV3Pr26ZjVVRIsyFzbM4JG3oZUfskgQl50UsR6Z34zbokBhdkPWgP69rsbTYT7j0nS18XIc41v_q9Cgc00QSvRdMYKeWiCvIMBu0gkulQ5fmfKRXmHCCd5mRgS8BsloM1icVrERZuOAPmviCYpksb2AqfG3N_rr9GGkhJvObD17/s1600/tengkleng-kambing-spesial.webp',
  'briyani-nampan-gathering.webp': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOwNAL8th8kuPJaCPnI0bQ46k6I1X6wFYMLEfOB2njmwrLTU3mkVM7oXRip-6c7W_0nljwcPxG6nIQFJ9UXMhXXxFMjzATrxqkd9ksCm1GrdC-wnGZBT31e2OQK5CV5uO51wR2DdAcgUaj9_ubdto5OWCCdm0l6O2U6V_DCBV8py23hYtQmpFdQ3XTSwCj/s320/briyani-nampan-gathering.webp',
  'author-arby-ardiansyah.webp': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvEMdCz_2ulaHQgCLXZcgZVjFzQD3gPR2gR948uj7sS95PpcKrUV__hvRDJzSJIAbtejH4FTtcl6ev0-37yuY80zOxxzuEdaTnA5h1kSjv_uq3Woi-pdLfyYVwO4DBMWu2vSUmfR2GiEwWien_mgtB9bfQlA1U4gw8PDOVOyC3XsXvtVow_3jsWSt3adqV/s1600/author-artikel-arby-ardiansyah.webp'
};

// ==========================================================================
// 1. HELPER TO CONVERT LINKS & IMAGES FOR BLOGGER
// ==========================================================================
function formatForBlogger(html) {
  let res = html
    .replace(/href="(\.\.\/pages\/)?paket\.html"/g, 'href="/p/paket.html"')
    .replace(/href="(\.\.\/pages\/)?menu\.html"/g, 'href="/p/menu.html"')
    .replace(/href="(\.\.\/pages\/)?tentang-kami\.html"/g, 'href="/p/tentang-kami.html"')
    .replace(/href="(\.\.\/pages\/)?galeri\.html"/g, 'href="/p/galeri.html"')
    .replace(/href="(\.\.\/pages\/)?blog\.html"/g, 'href="/p/blog.html"')
    .replace(/href="(\.\.\/pages\/)?kontak\.html"/g, 'href="/p/kontak.html"')
    .replace(/href="(\.\.\/pages\/)?index\.html"/g, 'href="/"')
    .replace(/href="(\.\.\/posts\/|\.\.\/|posts\/)?panduan-memilih-olahan-kambing-untuk-acara\.html"/g, 'href="/2026/10/panduan-memilih-olahan-kambing-untuk-acara.html"')
    .replace(/href="(\.\.\/posts\/|\.\.\/|posts\/)?panduan-pesanan-masakan-untuk-acara-aqiqah\.html"/g, 'href="/2026/10/panduan-pesanan-masakan-untuk-acara-aqiqah.html"')
    .replace(/href="(\.\.\/posts\/|\.\.\/|posts\/)?mengenal-nasi-briyani-dan-memilih-menu\.html"/g, 'href="/2026/10/mengenal-nasi-briyani-dan-memilih-menu.html"');

  // Replace image references with Google Blogger CDN URLs
  for (const [key, cdnUrl] of Object.entries(BLOGGER_IMAGE_MAP)) {
    const escapedKey = key.replace(/\./g, '\\.');
    const regex = new RegExp('(?:https:\\/\\/dombastiskitchen\\.blogspot\\.com\\/assets\\/images\\/|(\\.\\.\\/)+assets\\/images\\/|assets\\/images\\/)' + escapedKey, 'g');
    res = res.replace(regex, cdnUrl);
  }

  res = res
    .replace(/src="(\.\.\/)+assets\/images\//g, 'src="https://dombastiskitchen.blogspot.com/assets/images/')
    .replace(/src="assets\/images\//g, 'src="https://dombastiskitchen.blogspot.com/assets/images/');

  // Ensure self closing XML tags
  res = res
    .replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />')
    .replace(/<br(?<!\/)>/g, '<br/>')
    .replace(/<hr(?<!\/)>/g, '<hr/>')
    .replace(/<input([^>]*?)(?<!\/)>/g, '<input$1 />');

  // Replace XML entities with valid numeric entities to prevent SAXParseException
  res = res
    .replace(/&bull;/g, '&#8226;')
    .replace(/&copy;/g, '&#169;')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–');

  return res.trim();
}

// ==========================================================================
// 2. EXTRACT MAIN CONTENT FROM STANDALONE HTML
// ==========================================================================
function extractMain(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/<main id="main"[^>]*>([\s\S]*?)<\/main>/);
  if (!match) {
    throw new Error('No <main id="main"> found in ' + filePath);
  }
  return match[1];
}

// ==========================================================================
// 3. GENERATE CLEAN BLOGGER STATIC PAGES
// ==========================================================================
const staticPages = [
  { file: 'src/pages/tentang-kami.html', out: 'dist/migration/blogger-static-pages/tentang-kami.html', title: 'Tentang Kami', url: '/p/tentang-kami.html' },
  { file: 'src/pages/menu.html', out: 'dist/migration/blogger-static-pages/menu.html', title: 'Menu', url: '/p/menu.html' },
  { file: 'src/pages/paket.html', out: 'dist/migration/blogger-static-pages/paket.html', title: 'Paket', url: '/p/paket.html' },
  { file: 'src/pages/galeri.html', out: 'dist/migration/blogger-static-pages/galeri.html', title: 'Galeri', url: '/p/galeri.html' },
  { file: 'src/pages/blog.html', out: 'dist/migration/blogger-static-pages/blog.html', title: 'Blog', url: '/p/blog.html' },
  { file: 'src/pages/kontak.html', out: 'dist/migration/blogger-static-pages/kontak.html', title: 'Kontak', url: '/p/kontak.html' }
];

console.log('--- GENERATING BLOGGER STATIC PAGES ---');
staticPages.forEach(p => {
  const mainRaw = extractMain(p.file);
  const formatted = formatForBlogger(mainRaw);
  
  const output = `<!-- ==========================================================================
     HALAMAN BLOGGER: ${p.title.toUpperCase()}
     Domain: dombastiskitchen.blogspot.com
     Permalink Otomatis: ${p.url}
     Instruksi: Salin SELURUH kode di bawah dan tempel di editor Blogger
     Menu: Halaman (Pages) > Halaman Baru > Buka mode "Tampilan HTML" (<>)
     ========================================================================== -->
${formatted}`;

  fs.writeFileSync(p.out, output, 'utf8');
  console.log('Generated ready-to-paste static page:', p.out);
});

// Also create beranda body in case needed
const berandaMain = extractMain('src/pages/index.html');
fs.writeFileSync(
  'dist/migration/blogger-static-pages/beranda.html',
  `<!-- KONTEN BERANDA DOMBASTIS KITCHEN (READY TO PASTE) -->\n` + formatForBlogger(berandaMain),
  'utf8'
);

// ==========================================================================
// 4. GENERATE CLEAN BLOGGER POSTS (ARTIKEL)
// ==========================================================================
const blogPosts = [
  {
    file: 'src/posts/panduan-memilih-olahan-kambing-untuk-acara.html',
    out: 'dist/migration/blogger-posts/panduan-memilih-olahan-kambing-untuk-acara.html',
    title: 'Panduan Memilih Olahan Kambing untuk Berbagai Jenis Acara Keluarga dan Kantor 2026',
    labels: 'Blog, Olahan Kambing, Tips Kuliner',
    permalink: 'panduan-memilih-olahan-kambing-untuk-acara'
  },
  {
    file: 'src/posts/panduan-pesanan-masakan-untuk-acara-aqiqah.html',
    out: 'dist/migration/blogger-posts/panduan-pesanan-masakan-untuk-acara-aqiqah.html',
    title: 'Panduan Mempersiapkan Pesanan Masakan untuk Acara Aqiqah Siap Saji 2026',
    labels: 'Blog, Aqiqah, Paket Masakan',
    permalink: 'panduan-pesanan-masakan-untuk-acara-aqiqah'
  },
  {
    file: 'src/posts/mengenal-nasi-briyani-dan-memilih-menu.html',
    out: 'dist/migration/blogger-posts/mengenal-nasi-briyani-dan-memilih-menu.html',
    title: 'Mengenal Nasi Briyani dan Tips Memilih Porsi Hidangan Nampan untuk Acara Besar 2026',
    labels: 'Blog, Nasi Briyani, Gathering',
    permalink: 'mengenal-nasi-briyani-dan-memilih-menu'
  }
];

console.log('\n--- GENERATING BLOGGER POSTS (ARTIKEL) ---');
blogPosts.forEach(p => {
  const mainRaw = extractMain(p.file);
  const formatted = formatForBlogger(mainRaw);
  
  // Wrap with article-page-main to ensure proper navbar clearance and crisp typography
  const output = `<!-- ==========================================================================
     POSTINGAN ARTIKEL BLOGGER:
     Judul: ${p.title}
     Label: ${p.labels}
     Permalink Khusus: ${p.permalink}
     Instruksi: Buka Postingan Baru > Ubah ke "Tampilan HTML" (<>) > Tempel kode ini
     ========================================================================== -->
<div class="article-page-main">
${formatted}
</div>`;

  fs.writeFileSync(p.out, output, 'utf8');
  console.log('Generated ready-to-paste post:', p.out);
});

// ==========================================================================
// 5. UPDATE BLOGGER THEME XML WITH CLEAN INNER PAGE RENDER
// ==========================================================================
console.log('\n--- GENERATING DIST/BLOGGER-THEME.XML ---');
let css = fs.readFileSync('src/css/style.css', 'utf8');

const logoPath = 'src/assets/images/logo-dombastis-kitchen.webp';
const logoBase64 = 'data:image/webp;base64,' + fs.readFileSync(logoPath).toString('base64');

// Formatted homepage content
let homepageMainContent = formatForBlogger(berandaMain);
homepageMainContent = homepageMainContent.replace(/(&)(?!(amp;|lt;|gt;|quot;|apos;|#\d+;))/g, '&amp;');

const themeXml = `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultmessagingserver='true' b:layoutsVersion='3' b:responsive='true' b:templateUrl='indie.xml' b:templateVersion='1.0.0' lang='id' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
  <meta charset='UTF-8'/>
  <meta content='width=device-width, initial-scale=1.0' name='viewport'/>
  <title><data:blog.pageTitle/></title>
  <b:include data='blog' name='all-head-content'/>

  <!-- DNS Prefetch & Preconnect for High Speed -->
  <link rel='dns-prefetch' href='//fonts.googleapis.com'/>
  <link rel='dns-prefetch' href='//fonts.gstatic.com'/>
  <link rel='dns-prefetch' href='//cdnjs.cloudflare.com'/>
  <link rel='dns-prefetch' href='//cdn.jsdelivr.net'/>
  <link rel='preconnect' href='https://fonts.googleapis.com'/>
  <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin='anonymous'/>
  <link href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Playfair+Display:wght@600;700;800&amp;family=Outfit:wght@500;600;700;800&amp;display=swap' rel='stylesheet'/>
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'/>
  <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet'/>

  <!-- Speculation Rules API for Instant Prerender & Prefetch (< 200ms transitions) -->
  <script type="speculationrules">
  {
    "prefetch": [
      {
        "tag": "dombastis-prefetch",
        "where": { "href_matches": "/*" },
        "eagerness": "eager"
      }
    ],
    "prerender": [
      {
        "tag": "dombastis-prerender",
        "where": { "href_matches": "/*" },
        "eagerness": "moderate"
      }
    ]
  }
  </script>

  <b:skin><![CDATA[
${css}
  ]]></b:skin>
</head>
<body expr:class='data:view.isHomepage ? &quot;theme-crimson home-view&quot; : (data:view.isPost ? &quot;post-view&quot; : &quot;theme-crimson page-view&quot;)'>
  <!-- INSTANT PROGRESS BAR -->
  <div id='pageLoadingBar'></div>

  <!-- TOP NAVBAR -->
  <nav class='navbar navbar-expand-lg fixed-top navbar-navy' id='mainNavbar'>
    <div class='container'>
      <a class='navbar-brand' expr:href='data:blog.homepageUrl'>
        <img alt='Logo DOMBASTIS KITCHEN' class='brand-logo-img' height='44' src='${logoBase64}' width='44'/>
        <div class='brand-text'>
          <span class='brand-name'>DOMBASTIS KITCHEN</span>
          <span class='brand-tagline'>Olahan Kambing &amp; Briyani</span>
        </div>
      </a>
      <button aria-label='Toggle navigation' class='navbar-toggler border-0 text-white' data-bs-target='#navbarMain' data-bs-toggle='collapse' type='button'>
        <i class='fas fa-bars'></i>
      </button>
      <div class='collapse navbar-collapse' id='navbarMain'>
        <ul class='navbar-nav mx-auto gap-1'>
          <li class='nav-item'><a class='nav-link' expr:href='data:blog.homepageUrl'>Beranda</a></li>
          <li class='nav-item'><a class='nav-link' href='/p/tentang-kami.html'>Tentang Kami</a></li>
          <li class='nav-item'><a class='nav-link' href='/p/menu.html'>Menu</a></li>
          <li class='nav-item'><a class='nav-link' href='/p/paket.html'>Paket</a></li>
          <li class='nav-item'><a class='nav-link' href='/p/galeri.html'>Galeri</a></li>
          <li class='nav-item'><a class='nav-link' href='/p/blog.html'>Blog</a></li>
          <li class='nav-item'><a class='nav-link' href='/p/kontak.html'>Kontak</a></li>
        </ul>
        <a class='btn-wa-nav' href='https://wa.me/6287787502950?text=Halo%20DOMBASTIS%20KITCHEN%2C%20saya%20ingin%20tanya%20menu' rel='noopener' target='_blank'>
          <i class='fab fa-whatsapp'></i> Chat WhatsApp
        </a>
      </div>
    </div>
  </nav>

  <!-- MAIN CONTENT CONTAINER -->
  <main class='site-main' id='main'>
    <b:section id='main-content' showaddelement='yes'>
      <b:widget id='Blog1' locked='true' title='Posting Blog' type='Blog'>
        <b:includable id='main' var='top'>
          <b:if cond='data:view.isHomepage'>
            <!-- =============================================
                 BERANDA LENGKAP (IDENTIK DENGAN INDEX.HTML)
                 ============================================= -->
            <div class='homepage-wrapper'>
              ${homepageMainContent}
            </div>
          <b:else/>
            <!-- =============================================
                 HALAMAN STATIS & ARTIKEL POSTINGAN
                 ============================================= -->
            <b:if cond='data:view.isPage or data:view.isPost'>
              <b:loop values='data:posts' var='post'>
                <div class='blogger-content-wrapper'>
                  <data:post.body/>
                </div>
              </b:loop>
            <b:else/>
              <!-- ARSIP / LABEL / SEARCH -->
              <div class='container' style='padding: 40px 15px; min-height: 70vh;'>
                <b:loop values='data:posts' var='post'>
                  <article class='blog-post-card mb-4 p-4 rounded-4 shadow' style='background: rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.15);'>
                    <h2 style='font-family: var(--font-heading); color: #ffffff;'>
                      <a expr:href='data:post.url' style='color:#ffffff; text-decoration:none;'><data:post.title/></a>
                    </h2>
                    <div class='post-body' style='color: rgba(255,255,255,0.9); margin-top: 15px; line-height: 1.8;'>
                      <data:post.snippet/>
                    </div>
                    <div style='margin-top: 15px;'>
                      <a expr:href='data:post.url' style='color: var(--secondary); font-weight: 700; text-decoration: none;'>
                        Baca Selengkapnya <i class='fas fa-arrow-right ms-1'></i>
                      </a>
                    </div>
                  </article>
                </b:loop>
              </div>
            </b:if>
          </b:if>
        </b:includable>
      </b:widget>
    </b:section>
  </main>

  <!-- LIGHTBOX MODAL -->
  <div class='lightbox-modal' id='galleryLightbox' role='dialog' aria-modal='true' aria-hidden='true'>
    <div class='lightbox-content-box'>
      <button class='lightbox-close-btn' id='lightboxClose' aria-label='Tutup preview gambar'>&#215;</button>
      <img src='' alt='' class='lightbox-img' id='lightboxImg' />
      <p class='lightbox-caption' id='lightboxCaption'></p>
    </div>
  </div>

  <!-- FOOTER (IDENTIK DENGAN BERANDA) -->
  <footer class='footer'>
    <div class='container'>
      <div class='row g-4 mb-5'>
        <div class='col-12 col-md-6 col-lg-3'>
          <div class='footer-brand'>
            <a class='navbar-brand d-flex align-items-center mb-3' expr:href='data:blog.homepageUrl'>
              <img alt='Logo DOMBASTIS KITCHEN' class='brand-logo-img' height='44' src='${logoBase64}' width='44'/>
              <div class='brand-text ms-2'>
                <span class='brand-name'>DOMBASTIS KITCHEN</span>
                <span class='brand-tagline'>Olahan Kambing &amp; Briyani</span>
              </div>
            </a>
            <p style='color: rgba(255,255,255,0.75); line-height:1.6;'>Penyedia aneka olahan kambing lezat, nasi briyani rempah, dan masakan paket aqiqah higienis siap santap terpercaya.</p>
            <div class='footer-social'>
              <a aria-label='Instagram Dombastis Kitchen' class='social-btn' href='#'><i class='fab fa-instagram'></i></a>
              <a aria-label='Facebook Dombastis Kitchen' class='social-btn' href='#'><i class='fab fa-facebook-f'></i></a>
              <a aria-label='TikTok Dombastis Kitchen' class='social-btn' href='#'><i class='fab fa-tiktok'></i></a>
              <a aria-label='YouTube Dombastis Kitchen' class='social-btn' href='#'><i class='fab fa-youtube'></i></a>
              <a aria-label='WhatsApp Dombastis Kitchen' class='social-btn' href='https://wa.me/6287787502950' rel='noopener' target='_blank'><i class='fab fa-whatsapp'></i></a>
            </div>
          </div>
        </div>
        <div class='col-6 col-md-3 col-lg-2'>
          <h4 class='footer-title'>Navigasi</h4>
          <ul class='footer-links'>
            <li><a expr:href='data:blog.homepageUrl'><i class='fas fa-chevron-right'></i> Beranda</a></li>
            <li><a href='/p/tentang-kami.html'><i class='fas fa-chevron-right'></i> Tentang Kami</a></li>
            <li><a href='/p/menu.html'><i class='fas fa-chevron-right'></i> Menu</a></li>
            <li><a href='/p/paket.html'><i class='fas fa-chevron-right'></i> Paket</a></li>
            <li><a href='/p/galeri.html'><i class='fas fa-chevron-right'></i> Galeri</a></li>
            <li><a href='/p/blog.html'><i class='fas fa-chevron-right'></i> Blog</a></li>
            <li><a href='/p/kontak.html'><i class='fas fa-chevron-right'></i> Kontak</a></li>
          </ul>
        </div>
        <div class='col-6 col-md-3 col-lg-3'>
          <h4 class='footer-title'>Kategori Menu</h4>
          <ul class='footer-links'>
            <li><a href='/p/menu.html'><i class='fas fa-chevron-right'></i> Sate Kambing Muda</a></li>
            <li><a href='/p/menu.html'><i class='fas fa-chevron-right'></i> Gulai Kambing Rempah</a></li>
            <li><a href='/p/menu.html'><i class='fas fa-chevron-right'></i> Tongseng Kambing</a></li>
            <li><a href='/p/menu.html'><i class='fas fa-chevron-right'></i> Tengkleng Kambing Spesial</a></li>
            <li><a href='/p/menu.html'><i class='fas fa-chevron-right'></i> Nasi Briyani Basmati</a></li>
            <li><a href='/p/menu.html'><i class='fas fa-chevron-right'></i> Nasi Kebuli Samin</a></li>
            <li><a href='/p/menu.html'><i class='fas fa-chevron-right'></i> Briyani Nampan Gathering</a></li>
            <li><a href='/p/paket.html'><i class='fas fa-chevron-right'></i> Paket Aqiqah Siap Saji</a></li>
          </ul>
        </div>
        <div class='col-12 col-md-3 col-lg-4'>
          <h4 class='footer-title'>Kontak Kami</h4>
          <div class='footer-contact-item'>
            <div class='footer-contact-icon'><i class='fab fa-whatsapp'></i></div>
            <div>
              <p style='color:rgba(255,255,255,0.85); font-weight:600; margin-bottom:2px;'>WhatsApp (Fast Response)</p>
              <a href='https://wa.me/6287787502950' rel='noopener' style='color: var(--secondary); font-weight:700;' target='_blank'>0877-8750-2950</a>
            </div>
          </div>
          <div class='footer-contact-item'>
            <div class='footer-contact-icon'><i class='fas fa-map-marker-alt'></i></div>
            <p>Nglerep, Trayang, Kecamatan Ngeronggot, Kabupaten Nganjuk, Jawa Timur 64395</p>
          </div>
          <div class='footer-contact-item'>
            <div class='footer-contact-icon'><i class='fas fa-clock'></i></div>
            <p>Senin – Minggu: 08.00 – 20.00 WIB<br/>
            <span style='color: var(--secondary);'>&#8226; Pemesanan &amp; Konsultasi Cepat</span></p>
          </div>
          <div class='footer-contact-item'>
            <div class='footer-contact-icon'><i class='fas fa-envelope'></i></div>
            <a href='mailto:dombastiskitchen@gmail.com' style='color:rgba(255,255,255,0.8);'>dombastiskitchen@gmail.com</a>
          </div>
        </div>
      </div>
      <div class='footer-bottom'>
        <p>&#169; 2026 DOMBASTIS KITCHEN. Hak Cipta Dilindungi. — <a href='https://dombastiskitchen.blogspot.com' style='color: var(--secondary);'>dombastiskitchen.blogspot.com</a></p>
        <div class='footer-bottom-links'>
          <a href='/p/kontak.html'>Kebijakan Privasi</a>
          <a href='/p/kontak.html'>Syarat &amp; Ketentuan</a>
          <a href='/p/kontak.html'>Kontak</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- FLOATING WHATSAPP -->
  <div class='floating-wa' id='floatingWa'>
    <div class='floating-wa-tooltip'>Tanya Menu Cepat!</div>
    <a aria-label='Chat WhatsApp Dombastis Kitchen' class='floating-wa-btn' href='https://wa.me/6287787502950?text=Halo%20DOMBASTIS%20KITCHEN%2C%20saya%20ingin%20konsultasi%20menu%20dan%20paket%20kuliner' rel='noopener' target='_blank'>
      <i class='fab fa-whatsapp'></i>
    </a>
  </div>

  <button id='backToTop' aria-label='Kembali ke atas'><i class='fas fa-chevron-up'></i></button>

  <!-- SCRIPTS -->
  <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' defer='defer'></script>
  <script>
  //<![CDATA[
  (function () {
    'use strict';

    // IN-MEMORY CACHE FOR INSTANT NAVIGATION (< 100ms)
    var pageCache = new Map();
    var prefetchedLinks = new Set();

    /**
     * Updates active class and aria-current on navbar links
     */
    function updateActiveNavLink(customUrl) {
      try {
        var urlToCheck = customUrl || window.location.href;
        var curUrl = new URL(urlToCheck, window.location.href);
        var curPath = curUrl.pathname.toLowerCase();
        var curBase = curPath.split('/').pop();

        document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
          var linkHref = link.getAttribute('href') || link.href || '';
          var linkUrl = new URL(linkHref, window.location.href);
          var linkPath = linkUrl.pathname.toLowerCase();
          var linkBase = linkPath.split('/').pop();

          var isMatch = false;

          // 1. Homepage match
          if (curPath === '/' || curPath === '' || curPath.indexOf('index.html') !== -1 || curPath.indexOf('beranda') !== -1) {
            if (linkPath === '/' || linkBase === 'index.html' || linkBase === '' || link.textContent.trim().toLowerCase() === 'beranda') {
              isMatch = true;
            }
          } 
          // 2. Tentang Kami
          else if (curPath.indexOf('tentang-kami') !== -1 && (linkPath.indexOf('tentang-kami') !== -1 || link.textContent.trim().toLowerCase() === 'tentang kami')) {
            isMatch = true;
          }
          // 3. Menu
          else if (curPath.indexOf('menu') !== -1 && (linkPath.indexOf('menu') !== -1 || link.textContent.trim().toLowerCase().indexOf('menu') !== -1)) {
            isMatch = true;
          }
          // 4. Paket
          else if (curPath.indexOf('paket') !== -1 && (linkPath.indexOf('paket') !== -1 || link.textContent.trim().toLowerCase() === 'paket')) {
            isMatch = true;
          }
          // 5. Galeri
          else if (curPath.indexOf('galeri') !== -1 && (linkPath.indexOf('galeri') !== -1 || link.textContent.trim().toLowerCase() === 'galeri')) {
            isMatch = true;
          }
          // 6. Blog and Article Posts (e.g. /2026/, panduan-, mengenal-)
          else if ((curPath.indexOf('blog') !== -1 || curPath.indexOf('/2026/') !== -1 || curPath.indexOf('panduan') !== -1 || curPath.indexOf('mengenal') !== -1) && (linkPath.indexOf('blog') !== -1 || link.textContent.trim().toLowerCase() === 'blog')) {
            isMatch = true;
          }
          // 7. Kontak
          else if (curPath.indexOf('kontak') !== -1 && (linkPath.indexOf('kontak') !== -1 || link.textContent.trim().toLowerCase() === 'kontak')) {
            isMatch = true;
          }

          if (isMatch) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
          } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
          }
        });
      } catch (e) {
        console.warn('Navbar active update error:', e);
      }
    }

    /**
     * Initializes or re-initializes interactive components on current page
     */
    function initInteractiveComponents() {
      // 1. STICKY NAVBAR ON SCROLL
      var navbar = document.getElementById('mainNavbar') || document.querySelector('.navbar');
      if (navbar && !navbar._hasScrollListener) {
        navbar._hasScrollListener = true;
        window.addEventListener('scroll', function () {
          if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
        }, { passive: true });
      }

      // 2. BACK TO TOP
      var btt = document.getElementById('backToTop');
      function checkBttVisibility() {
        if (!btt) btt = document.getElementById('backToTop');
        if (!btt) return;
        if (window.scrollY > 250) {
          btt.classList.add('show');
        } else {
          btt.classList.remove('show');
        }
      }
      window.addEventListener('scroll', checkBttVisibility, { passive: true });
      checkBttVisibility();

      // 3. AUTO TABLE OF CONTENTS GENERATION
      var articleContent = document.getElementById('articleContent') || 
                           document.querySelector('.article-content') || 
                           document.querySelector('.post-body') || 
                           document.querySelector('article');
      var tocList = document.getElementById('tocList');
      if (articleContent && tocList && tocList.children.length === 0) {
        var headings = articleContent.querySelectorAll('h2');
        if (headings.length === 0) headings = articleContent.querySelectorAll('h3');
        headings.forEach(function (h, index) {
          var id = h.id || 'section-' + (index + 1);
          if (!h.id) h.id = id;
          var li = document.createElement('li');
          var a = document.createElement('a');
          a.href = '#' + id;
          a.textContent = h.textContent.replace(/^[0-9]+\.\s*/, '').trim();
          li.appendChild(a);
          tocList.appendChild(li);
        });
      }

      // 4. ACCESSIBLE GALLERY LIGHTBOX
      var lightbox = document.getElementById('galleryLightbox');
      var lightboxImg = document.getElementById('lightboxImg');
      var lightboxCaption = document.getElementById('lightboxCaption');
      var lightboxClose = document.getElementById('lightboxClose');
      var galleryItems = document.querySelectorAll('.gallery-item, .gallery-card');

      galleryItems.forEach(function (card) {
        if (!card._hasLightboxListener) {
          card._hasLightboxListener = true;
          card.addEventListener('click', function () {
            var img = this.querySelector('img');
            var caption = this.getAttribute('data-caption') || 
                          (this.querySelector('.gallery-item-caption') ? this.querySelector('.gallery-item-caption').textContent.replace(/\\s+/g, ' ').trim() : '') ||
                          (this.querySelector('.gallery-overlay-title') ? this.querySelector('.gallery-overlay-title').textContent.trim() : '') ||
                          (img ? img.alt : '');
            if (img && lightbox && lightboxImg) {
              lightboxImg.src = img.src;
              lightboxImg.alt = img.alt || caption;
              if (lightboxCaption) {
                lightboxCaption.textContent = caption;
              }
              lightbox.classList.add('active');
              lightbox.setAttribute('aria-hidden', 'false');
            }
          });
        }
      });

      if (lightboxClose && lightbox && !lightboxClose._hasCloseListener) {
        lightboxClose._hasCloseListener = true;
        lightboxClose.addEventListener('click', function () {
          lightbox.classList.remove('active');
          lightbox.setAttribute('aria-hidden', 'true');
        });
        lightbox.addEventListener('click', function (e) {
          if (e.target === lightbox) {
            lightbox.classList.remove('active');
            lightbox.setAttribute('aria-hidden', 'true');
          }
        });
      }

      // 5. ACTIVE MENU ROWS
      var menuRows = document.querySelectorAll('.menu-row-item');
      menuRows.forEach(function (row) {
        if (!row._hasRowListener) {
          row._hasRowListener = true;
          row.addEventListener('mouseenter', function () {
            menuRows.forEach(function (r) { r.classList.remove('active'); });
            this.classList.add('active');
          });
          row.addEventListener('click', function () {
            menuRows.forEach(function (r) { r.classList.remove('active'); });
            this.classList.add('active');
          });
        }
      });

      // 6. CONTACT FORM HANDLER
      var contactForm = document.getElementById('contactForm');
      if (contactForm && !contactForm._hasContactListener) {
        contactForm._hasContactListener = true;
        contactForm.addEventListener('submit', function (e) {
          e.preventDefault();
          var nameInput = document.getElementById('formName');
          var contactInput = document.getElementById('formContact');
          var topicSelect = document.getElementById('formTopic');
          var messageInput = document.getElementById('formMessage');

          var name = nameInput ? nameInput.value.trim() : '';
          var contactVal = contactInput ? contactInput.value.trim() : '';
          var topic = topicSelect ? topicSelect.value : 'Pertanyaan Umum';
          var message = messageInput ? messageInput.value.trim() : '';

          if (!name || !contactVal || !message) {
            alert('Mohon lengkapi Nama, Kontak, dan Pesan Anda.');
            return;
          }

          var waPhone = '6287787502950';
          var waText = encodeURIComponent('Halo DOMBASTIS KITCHEN,') + '%0A%0A' +
            encodeURIComponent('Nama: ' + name) + '%0A' +
            encodeURIComponent('Kontak: ' + contactVal) + '%0A' +
            encodeURIComponent('Topik: ' + topic) + '%0A' +
            encodeURIComponent('Pesan: ' + message) + '%0A%0A' +
            encodeURIComponent('Saya ingin konsultasi lebih lanjut. Terima kasih!');

          window.open('https://wa.me/' + waPhone + '?text=' + waText, '_blank', 'noopener,noreferrer');
        });
      }

      // Update active nav state
      updateActiveNavLink();
    }

    /**
     * GLOBAL DELEGATED EVENTS: TOC, FAQ, BACK TO TOP, SOCIAL SHARE, MENU FILTERS
     * (Always works even after SPA DOM innerHTML swaps)
     */
    if (!window._hasGlobalDelegatedEvents) {
      window._hasGlobalDelegatedEvents = true;

      document.addEventListener('click', function (e) {
        // Back To Top Click
        var bttBtn = e.target.closest('#backToTop');
        if (bttBtn) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // TOC Accordion Header Click
        var tocHead = e.target.closest('#tocToggle, .toc-header');
        if (tocHead) {
          e.preventDefault();
          tocHead.classList.toggle('active');
          var tocBody = document.getElementById('tocBody') || 
                        (tocHead.closest('.toc-wrapper') ? tocHead.closest('.toc-wrapper').querySelector('.toc-body') : null) ||
                        tocHead.nextElementSibling;
          if (tocBody) {
            tocBody.classList.toggle('open');
            tocBody.classList.toggle('active');
          }
          return;
        }

        // TOC Anchor Link Click (Smooth scroll directly to target heading - NEVER reload page)
        var tocLink = e.target.closest('#tocList a, .toc-list a, .toc-link');
        if (tocLink) {
          var targetHash = tocLink.getAttribute('href') || tocLink.hash;
          if (targetHash && targetHash.indexOf('#') !== -1) {
            var hashOnly = targetHash.substring(targetHash.indexOf('#'));
            var targetId = hashOnly.replace(/^#/, '');
            var targetElement = document.getElementById(targetId) || document.querySelector(hashOnly);
            if (targetElement) {
              e.preventDefault();
              e.stopPropagation();
              var navbar = document.getElementById('mainNavbar') || document.querySelector('.navbar');
              var navOffset = (navbar ? navbar.offsetHeight : 70) + 18;
              var elemPos = targetElement.getBoundingClientRect().top + window.pageYOffset;
              window.scrollTo({
                top: elemPos - navOffset,
                behavior: 'smooth'
              });
              try {
                history.pushState(null, '', hashOnly);
              } catch (err) {}
              return;
            }
          }
        }

        // FAQ Accordion Click
        var faqBtn = e.target.closest('.faq-question');
        if (faqBtn) {
          e.preventDefault();
          var item = faqBtn.closest('.faq-item');
          if (!item) return;

          var wasActive = item.classList.contains('active') || item.classList.contains('open');
          var container = item.closest('.faq-container') || document;

          container.querySelectorAll('.faq-item').forEach(function (other) {
            if (other !== item) {
              other.classList.remove('active', 'open');
              var otherBtn = other.querySelector('.faq-question');
              if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            }
          });

          if (wasActive) {
            item.classList.remove('active', 'open');
            faqBtn.setAttribute('aria-expanded', 'false');
          } else {
            item.classList.add('active', 'open');
            faqBtn.setAttribute('aria-expanded', 'true');
          }
          return;
        }

        // Menu Filter Tabs
        var filterBtn = e.target.closest('.filter-btn');
        if (filterBtn) {
          e.preventDefault();
          var filterGroup = filterBtn.closest('.filter-tabs') || document;
          filterGroup.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
          filterBtn.classList.add('active');

          var category = filterBtn.getAttribute('data-filter');
          document.querySelectorAll('.menu-card-filter-item').forEach(function (card) {
            if (category === 'all' || card.getAttribute('data-category') === category) {
              card.style.display = '';
            } else {
              card.style.display = 'none';
            }
          });
          return;
        }

        // Social Share Buttons
        var shareBtn = e.target.closest('.share-btn');
        if (shareBtn) {
          e.preventDefault();
          var type = shareBtn.getAttribute('data-share');
          var pageUrl = encodeURIComponent(window.location.href);
          var pageTitle = encodeURIComponent(document.title);
          var shareUrl = '';
          switch (type) {
            case 'wa':
              shareUrl = 'https://wa.me/?text=' + pageTitle + '%20' + pageUrl;
              break;
            case 'fb':
              shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + pageUrl;
              break;
            case 'tw':
              shareUrl = 'https://twitter.com/intent/tweet?text=' + pageTitle + '&url=' + pageUrl;
              break;
            case 'li':
              shareUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + pageUrl;
              break;
            case 'copy':
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href).then(function () {
                  alert('Tautan artikel berhasil disalin!');
                }).catch(function () {
                  prompt('Salin link berikut:', window.location.href);
                });
              } else {
                prompt('Salin link berikut:', window.location.href);
              }
              return;
          }
          if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=500');
          }
          return;
        }
      });
    }

    /**
     * Pre-fetches an internal page in background and caches it
     */
    function prefetchUrl(url) {
      if (!url || pageCache.has(url) || prefetchedLinks.has(url)) return;
      try {
        var parsed = new URL(url, window.location.href);
        if (parsed.origin !== window.location.origin) return;
        if (parsed.pathname === window.location.pathname && parsed.hash) return;
        if (parsed.pathname.match(/\\.(jpg|jpeg|png|webp|gif|pdf|zip|svg)$/i)) return;

        prefetchedLinks.add(url);

        fetch(url)
          .then(function (res) { return res.text(); })
          .then(function (html) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(html, 'text/html');
            var mainEl = doc.querySelector('#main') || doc.querySelector('main');
            if (mainEl) {
              var newNav = doc.querySelector('#mainNavbar');
              var newFooter = doc.querySelector('footer');
              pageCache.set(url, {
                title: doc.title,
                mainHtml: mainEl.innerHTML,
                mainClass: mainEl.className,
                navHtml: newNav ? newNav.innerHTML : null,
                footerHtml: newFooter ? newFooter.innerHTML : null,
                bodyClass: doc.body ? doc.body.className : ''
              });
            }
          })
          .catch(function () {});
      } catch (e) {}
    }

    /**
     * Applies new page DOM and state smoothly
     */
    function applyPageData(url, pageData, isPopState) {
      var mainEl = document.querySelector('#main') || document.querySelector('main');
      if (!mainEl) return;

      if (pageData.title) document.title = pageData.title;
      if (pageData.bodyClass) document.body.className = pageData.bodyClass;
      if (pageData.mainClass !== undefined) mainEl.className = pageData.mainClass;

      mainEl.innerHTML = pageData.mainHtml;

      if (pageData.navHtml) {
        var currentNav = document.getElementById('mainNavbar') || document.querySelector('.navbar');
        if (currentNav) currentNav.innerHTML = pageData.navHtml;
      }

      if (pageData.footerHtml) {
        var currentFooter = document.querySelector('footer');
        if (currentFooter) currentFooter.innerHTML = pageData.footerHtml;
      }

      window.scrollTo({ top: 0, behavior: 'instant' });

      if (!isPopState) {
        window.history.pushState({ url: url }, '', url);
      }

      // Update active navigation state
      updateActiveNavLink(url);

      // Close mobile dropdown if open
      var navCollapse = document.getElementById('navbarMain');
      if (navCollapse && navCollapse.classList.contains('show')) {
        navCollapse.classList.remove('show');
      }

      // Re-initialize all interactive components
      initInteractiveComponents();
    }

    /**
     * Performs ultra-fast instant SPA transition (< 100ms)
     */
    async function instantNavigate(url, isPopState) {
      var mainEl = document.querySelector('#main') || document.querySelector('main');
      if (!mainEl) {
        window.location.href = url;
        return;
      }

      var bar = document.getElementById('pageLoadingBar');
      if (bar) bar.className = 'loading';

      try {
        var pageData = pageCache.get(url);
        if (!pageData) {
          var res = await fetch(url);
          var html = await res.text();
          var parser = new DOMParser();
          var doc = parser.parseFromString(html, 'text/html');
          var newMain = doc.querySelector('#main') || doc.querySelector('main');
          if (!newMain) throw new Error('No main element in target document');

          var newNav = doc.querySelector('#mainNavbar');
          var newFooter = doc.querySelector('footer');

          pageData = {
            title: doc.title,
            mainHtml: newMain.innerHTML,
            mainClass: newMain.className,
            navHtml: newNav ? newNav.innerHTML : null,
            footerHtml: newFooter ? newFooter.innerHTML : null,
            bodyClass: doc.body ? doc.body.className : ''
          };
          pageCache.set(url, pageData);
        }

        // Seamless instantaneous DOM update - ZERO white flash, glowing line only
        applyPageData(url, pageData, isPopState);

        if (bar) {
          bar.className = 'done';
          setTimeout(function () { bar.className = ''; }, 300);
        }

      } catch (err) {
        console.warn('Instant navigation fallback:', err);
        if (bar) bar.className = '';
        window.location.href = url;
      }
    }

    /**
     * Setup Universal Instant Navigation & Hover Prefetching
     */
    function initInstantNavigation() {
      // Cache current page on load
      var currentMain = document.querySelector('#main') || document.querySelector('main');
      var currentNav = document.getElementById('mainNavbar') || document.querySelector('.navbar');
      var currentFooter = document.querySelector('footer');
      if (currentMain) {
        pageCache.set(window.location.href, {
          title: document.title,
          mainHtml: currentMain.innerHTML,
          mainClass: currentMain.className,
          navHtml: currentNav ? currentNav.innerHTML : null,
          footerHtml: currentFooter ? currentFooter.innerHTML : null,
          bodyClass: document.body.className
        });
      }

      // Intercept clicks on internal links for < 100ms transitions
      document.addEventListener('click', function (e) {
        var anchor = e.target.closest('a');
        if (!anchor || !anchor.href) return;
        if (anchor.target === '_blank' || anchor.hasAttribute('download')) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

        // In-page hash link or Table of Contents link (NEVER trigger page navigation)
        var rawHref = anchor.getAttribute('href') || '';
        var anchorHash = anchor.hash || (rawHref.startsWith('#') ? rawHref : '');
        var isTocLink = !!anchor.closest('#tocList, .toc-wrapper, .toc-list');
        var targetElementById = anchorHash ? document.getElementById(anchorHash.replace(/^#/, '')) : null;

        if (rawHref.startsWith('#') || isTocLink || targetElementById) {
          e.preventDefault();
          e.stopPropagation();
          var hashTarget = rawHref.startsWith('#') ? rawHref : (anchor.hash || (targetElementById ? '#' + targetElementById.id : ''));
          if (hashTarget && hashTarget !== '#') {
            var targetId = hashTarget.replace(/^#/, '');
            var targetElem = targetElementById || document.getElementById(targetId) || document.querySelector(hashTarget);
            if (targetElem) {
              var navbar = document.getElementById('mainNavbar') || document.querySelector('.navbar');
              var navOffset = (navbar ? navbar.offsetHeight : 70) + 18;
              var elemPos = targetElem.getBoundingClientRect().top + window.pageYOffset;
              window.scrollTo({
                top: Math.max(0, elemPos - navOffset),
                behavior: 'smooth'
              });
              try {
                history.pushState(null, '', hashTarget);
              } catch (err) {}
            }
          }
          return;
        }

        try {
          var targetUrl = new URL(anchor.href, window.location.href);
          if (targetUrl.origin !== window.location.origin) return;

          // Same page anchor link with hash
          if (targetUrl.hash && (targetUrl.pathname === window.location.pathname || targetUrl.href.split('#')[0] === window.location.href.split('#')[0])) {
            var hTarget = targetUrl.hash;
            var hElem = document.getElementById(hTarget.replace(/^#/, '')) || document.querySelector(hTarget);
            if (hElem) {
              e.preventDefault();
              e.stopPropagation();
              var navB = document.getElementById('mainNavbar') || document.querySelector('.navbar');
              var offset = (navB ? navB.offsetHeight : 70) + 18;
              var pos = hElem.getBoundingClientRect().top + window.pageYOffset;
              window.scrollTo({
                top: pos - offset,
                behavior: 'smooth'
              });
              try {
                history.pushState(null, '', hTarget);
              } catch (err) {}
              return;
            }
            return;
          }

          // Non-page links
          if (targetUrl.protocol !== 'http:' && targetUrl.protocol !== 'https:') return;
          if (targetUrl.hostname.includes('wa.me')) return;

          var path = targetUrl.pathname;
          var isPage = path.endsWith('.html') || path === '/' || !path.includes('.');
          if (isPage) {
            e.preventDefault();
            instantNavigate(anchor.href, false);
          }
        } catch (err) {}
      });

      // Browser back/forward buttons
      window.addEventListener('popstate', function () {
        instantNavigate(window.location.href, true);
      });

      // Hover and touch background prefetch
      document.addEventListener('pointerover', function (e) {
        var anchor = e.target.closest('a');
        if (anchor && anchor.href) prefetchUrl(anchor.href);
      }, { passive: true });

      document.addEventListener('touchstart', function (e) {
        var anchor = e.target.closest('a');
        if (anchor && anchor.href) prefetchUrl(anchor.href);
      }, { passive: true });

      // Proactively prefetch all critical pages in background
      var prefetchCriticalPages = function () {
        var targets = [
          '/',
          '/p/tentang-kami.html',
          '/p/menu.html',
          '/p/paket.html',
          '/p/galeri.html',
          '/p/blog.html',
          '/p/kontak.html',
          '/2026/10/panduan-memilih-olahan-kambing-untuk-acara.html',
          '/2026/10/panduan-pesanan-masakan-untuk-acara-aqiqah.html',
          '/2026/10/mengenal-nasi-briyani-dan-memilih-menu.html'
        ];
        targets.forEach(function (u) {
          prefetchUrl(u);
        });

        document.querySelectorAll('.navbar-nav a, .footer-links a, .footer-bottom-links a, .baca-juga-box a, .related-item a').forEach(function (a) {
          if (a.href) prefetchUrl(a.href);
        });
      };

      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(prefetchCriticalPages);
      } else {
        setTimeout(prefetchCriticalPages, 300);
      }
    }

    // INITIALIZE ALL
    initInteractiveComponents();
    initInstantNavigation();
  })();
  //]]>
  </script>
</body>
</html>`;

fs.writeFileSync('dist/blogger-theme.xml', themeXml, 'utf8');
console.log('dist/blogger-theme.xml generated successfully! Size: ' + (fs.statSync('dist/blogger-theme.xml').size / 1024).toFixed(2) + ' KB');
