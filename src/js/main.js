/**
 * DOMBASTIS KITCHEN - Master Interactive Script & Instant Page Router
 * Features:
 * 1. Ultra-Fast Instant Client-Side Navigation (SPA / Pjax) (< 50ms)
 * 2. Background Hover/Touch Prefetching Cache
 * 3. Sticky Navbar & Back to Top
 * 4. Auto TOC Generator & Accordion
 * 5. FAQ Accordions
 * 6. Social Share Handlers
 * 7. Accessible Lightbox Gallery
 * 8. Interactive Menu Rows & Category Filters
 * 9. Client-Side Contact Form WhatsApp Handler
 */

(function () {
  'use strict';

  // IN-MEMORY PAGE CACHE FOR INSTANT NAVIGATION (< 50ms)
  const pageCache = new Map();
  const prefetchedLinks = new Set();

  /**
   * Updates active class and aria-current on navbar links
   */
  function updateActiveNavLink(customUrl) {
    try {
      const urlToCheck = customUrl || window.location.href;
      const curUrl = new URL(urlToCheck, window.location.href);
      const curPath = curUrl.pathname.toLowerCase();
      const curBase = curPath.split('/').pop();

      document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        const linkHref = link.getAttribute('href') || link.href || '';
        const linkUrl = new URL(linkHref, window.location.href);
        const linkPath = linkUrl.pathname.toLowerCase();
        const linkBase = linkPath.split('/').pop();

        let isMatch = false;

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
    // 1. AUTO TABLE OF CONTENTS GENERATION
    const content = document.getElementById('articleContent') || 
                    document.querySelector('.article-content') || 
                    document.querySelector('.post-body') || 
                    document.querySelector('article');
    const tocList = document.getElementById('tocList');
    if (content && tocList && tocList.children.length === 0) {
      let headings = content.querySelectorAll('h2');
      if (headings.length === 0) headings = content.querySelectorAll('h3');
      headings.forEach((h, index) => {
        const id = h.id || 'section-' + (index + 1);
        if (!h.id) h.id = id;
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + id;
        a.textContent = h.textContent.replace(/^[0-9]+\.\s*/, '').trim();
        li.appendChild(a);
        tocList.appendChild(li);
      });
    }

    // 2. TOC ACCORDION TOGGLE
    const tocToggle = document.getElementById('tocToggle');
    const tocBody = document.getElementById('tocBody');
    if (tocToggle && tocBody && !tocToggle._hasTocListener) {
      tocToggle._hasTocListener = true;
      tocToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        tocBody.classList.toggle('open');
        tocBody.classList.toggle('active');
      });
    }

    // 3. FAQ ACCORDION TOGGLE
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(btn => {
      if (!btn._hasFaqListener) {
        btn._hasFaqListener = true;
        btn.addEventListener('click', function () {
          const item = this.closest('.faq-item');
          if (!item) return;
          const isActive = item.classList.contains('active') || item.classList.contains('open');
          const container = item.closest('.faq-container') || document;
          container.querySelectorAll('.faq-item').forEach(i => {
            if (i !== item) {
              i.classList.remove('active', 'open');
              const otherBtn = i.querySelector('.faq-question');
              if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            }
          });
          if (!isActive) {
            item.classList.add('active', 'open');
            this.setAttribute('aria-expanded', 'true');
          } else {
            item.classList.remove('active', 'open');
            this.setAttribute('aria-expanded', 'false');
          }
        });
      }
    });

    // Update active nav state
    updateActiveNavLink();

    // 4. SOCIAL SHARE BUTTONS
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(btn => {
      if (!btn._hasShareListener) {
        btn._hasShareListener = true;
        btn.addEventListener('click', function () {
          const type = this.getAttribute('data-share');
          const pageUrl = encodeURIComponent(window.location.href);
          const pageTitle = encodeURIComponent(document.title);
          let shareUrl = '';
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
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('Tautan berhasil disalin ke clipboard!');
                }).catch(() => {
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
        });
      }
    });

    // 5. "OUR MENU" ROW SELECTOR
    const menuRows = document.querySelectorAll('.menu-row-item');
    menuRows.forEach(row => {
      if (!row._hasRowListener) {
        row._hasRowListener = true;
        row.addEventListener('click', function () {
          menuRows.forEach(r => r.classList.remove('active'));
          this.classList.add('active');
        });
      }
    });

    // 6. ACCESSIBLE GALLERY LIGHTBOX
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxModal = document.getElementById('galleryLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    let lastFocusedElement = null;

    if (lightboxModal && lightboxImg) {
      galleryItems.forEach(item => {
        if (!item._hasLightboxListener) {
          item._hasLightboxListener = true;
          item.addEventListener('click', function () {
            lastFocusedElement = this;
            const img = this.querySelector('img');
            const caption = this.getAttribute('data-caption') || (img ? img.alt : '');
            const fullSrc = this.getAttribute('data-full') || (img ? img.src : '');

            lightboxImg.src = fullSrc;
            lightboxImg.alt = caption;
            if (lightboxCaption) lightboxCaption.textContent = caption;

            lightboxModal.classList.add('active');
            lightboxModal.setAttribute('aria-hidden', 'false');
            if (lightboxClose) lightboxClose.focus();
            document.body.style.overflow = 'hidden';
          });
        }
      });

      const closeLightbox = function () {
        lightboxModal.classList.remove('active');
        lightboxModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lastFocusedElement) lastFocusedElement.focus();
      };

      if (lightboxClose && !lightboxClose._hasCloseListener) {
        lightboxClose._hasCloseListener = true;
        lightboxClose.addEventListener('click', closeLightbox);
      }

      if (!lightboxModal._hasModalClickListener) {
        lightboxModal._hasModalClickListener = true;
        lightboxModal.addEventListener('click', function (e) {
          if (e.target === lightboxModal) closeLightbox();
        });

        document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
            closeLightbox();
          }
        });
      }
    }

    // 7. MENU FILTER TABS (FOR MENU PAGE)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuCards = document.querySelectorAll('.menu-card-filter-item');
    if (filterBtns.length > 0 && menuCards.length > 0) {
      filterBtns.forEach(btn => {
        if (!btn._hasFilterListener) {
          btn._hasFilterListener = true;
          btn.addEventListener('click', function () {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');

            menuCards.forEach(card => {
              if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'flex';
              } else {
                card.style.display = 'none';
              }
            });
          });
        }
      });
    }

    // 8. CONTACT FORM HANDLER
    const contactForm = document.getElementById('contactForm');
    if (contactForm && !contactForm._hasSubmitListener) {
      contactForm._hasSubmitListener = true;
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameInput = document.getElementById('formName');
        const contactInput = document.getElementById('formContact');
        const topicSelect = document.getElementById('formTopic');
        const messageInput = document.getElementById('formMessage');

        const name = nameInput ? nameInput.value.trim() : '';
        const contactVal = contactInput ? contactInput.value.trim() : '';
        const topic = topicSelect ? topicSelect.value : 'Pertanyaan Umum';
        const message = messageInput ? messageInput.value.trim() : '';

        if (!name || !contactVal || !message) {
          alert('Mohon lengkapi Nama, Kontak (WhatsApp/Email), dan Pesan Anda.');
          return;
        }

        const waPhone = '6287787502950';
        const waText = encodeURIComponent(
          `Halo DOMBASTIS KITCHEN,\n\nNama: ${name}\nKontak: ${contactVal}\nTopik: ${topic}\nPesan: ${message}\n\nSaya ingin konsultasi lebih lanjut. Terima kasih!`
        );

        const targetUrl = `https://wa.me/${waPhone}?text=${waText}`;
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      });
    }
  }

  /**
   * Pre-fetches an internal page HTML into memory cache
  /**
   * Resilient fetch helper with intelligent fallback for path resolution
   */
  async function fetchWithFallback(url) {
    try {
      const res = await fetch(url);
      if (res.ok) return res;
    } catch (_) {}

    // Smart fallback if relative URL path was slightly misaligned
    const cleanBasename = url.split('/').pop().split('?')[0];
    const alternates = [
      url.replace('/posts/', '/pages/'),
      url.replace('/pages/', '/posts/'),
      url.replace('/src/posts/', '/src/pages/'),
      url.replace('/src/pages/', '/src/posts/'),
      '/' + cleanBasename,
      '/pages/' + cleanBasename,
      '/posts/' + cleanBasename,
      '../pages/' + cleanBasename,
      '../posts/' + cleanBasename
    ];

    for (const alt of alternates) {
      if (alt === url) continue;
      try {
        const altRes = await fetch(alt);
        if (altRes.ok) return altRes;
      } catch (_) {}
    }

    throw new Error('Could not fetch ' + url);
  }

  /**
   * Pre-fetches a page in background and caches it
   */
  function prefetchUrl(url) {
    if (!url || pageCache.has(url) || prefetchedLinks.has(url)) return;
    try {
      const parsed = new URL(url, window.location.href);
      if (parsed.origin !== window.location.origin) return;
      if (parsed.pathname === window.location.pathname && parsed.hash) return;
      if (parsed.pathname.match(/\.(jpg|jpeg|png|webp|gif|pdf|zip|svg)$/i)) return;

      prefetchedLinks.add(url);

      fetchWithFallback(url)
        .then(res => res.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const mainEl = doc.querySelector('#main') || doc.querySelector('main');
          if (mainEl) {
            const newNav = doc.querySelector('#mainNavbar');
            const newFooter = doc.querySelector('footer');
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
        .catch(() => {});
    } catch (e) {}
  }

  /**
   * Helper to apply new page data to current document
   */
  function applyPageData(url, pageData, isPopState) {
    const mainEl = document.querySelector('#main') || document.querySelector('main');
    if (!mainEl) return;

    if (pageData.title) document.title = pageData.title;
    if (pageData.bodyClass) document.body.className = pageData.bodyClass;
    if (pageData.mainClass !== undefined) mainEl.className = pageData.mainClass;

    mainEl.innerHTML = pageData.mainHtml;

    // Keep navbar synced to current page context
    if (pageData.navHtml) {
      const currentNav = document.getElementById('mainNavbar') || document.querySelector('.navbar');
      if (currentNav) currentNav.innerHTML = pageData.navHtml;
    }

    // Keep footer synced to current page context
    if (pageData.footerHtml) {
      const currentFooter = document.querySelector('footer');
      if (currentFooter) currentFooter.innerHTML = pageData.footerHtml;
    }

    window.scrollTo({ top: 0, behavior: 'instant' });

    if (!isPopState) {
      window.history.pushState({ url: url }, '', url);
    }

    // Update active navigation link in navbar
    updateActiveNavLink(url);

    // Close mobile drawer if open
    const navCollapse = document.getElementById('navbarMain');
    if (navCollapse && navCollapse.classList.contains('show')) {
      navCollapse.classList.remove('show');
    }

    // Re-bind interactive events on new DOM
    initInteractiveComponents();
  }

  /**
   * Performs seamless instant SPA transition (< 100ms)
   */
  async function instantNavigate(url, isPopState = false) {
    const mainEl = document.querySelector('#main') || document.querySelector('main');
    if (!mainEl) {
      window.location.href = url;
      return;
    }

    const bar = document.getElementById('pageLoadingBar');
    if (bar) bar.className = 'loading';

    try {
      let pageData = pageCache.get(url);
      if (!pageData) {
        const res = await fetchWithFallback(url);
        const html = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newMain = doc.querySelector('#main') || doc.querySelector('main');
        if (!newMain) throw new Error('No main element in target document');

        const newNav = doc.querySelector('#mainNavbar');
        const newFooter = doc.querySelector('footer');

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

      // Instant seamless DOM update - ZERO white flash, glowing bar only
      applyPageData(url, pageData, isPopState);

      if (bar) {
        bar.className = 'done';
        setTimeout(() => { bar.className = ''; }, 300);
      }

    } catch (err) {
      console.warn('Instant navigation fallback:', err);
      if (bar) bar.className = '';
      window.location.href = url;
    }
  }

  /**
   * Setup Instant Navigation Listeners
   */
  function initInstantNavigation() {
    // Cache current page on load
    const currentMain = document.querySelector('#main') || document.querySelector('main');
    const currentNav = document.getElementById('mainNavbar') || document.querySelector('.navbar');
    const currentFooter = document.querySelector('footer');
    if (currentMain) {
      pageCache.set(window.location.href, {
        title: document.title,
        mainHtml: currentMain.innerHTML,
        navHtml: currentNav ? currentNav.innerHTML : null,
        footerHtml: currentFooter ? currentFooter.innerHTML : null,
        bodyClass: document.body.className
      });
    }

    // Intercept clicks on internal links
    document.addEventListener('click', function (e) {
      const anchor = e.target.closest('a');
      if (!anchor || !anchor.href) return;
      if (anchor.target === '_blank' || anchor.hasAttribute('download')) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      // In-page hash link or Table of Contents link (Smooth scroll, NEVER trigger page reload)
      const rawHref = anchor.getAttribute('href') || '';
      const anchorHash = anchor.hash || (rawHref.startsWith('#') ? rawHref : '');
      const isTocLink = !!anchor.closest('#tocList, .toc-wrapper, .toc-list');
      const targetElementById = anchorHash ? document.getElementById(anchorHash.replace(/^#/, '')) : null;

      if (rawHref.startsWith('#') || isTocLink || targetElementById) {
        e.preventDefault();
        e.stopPropagation();
        const hashTarget = rawHref.startsWith('#') ? rawHref : (anchor.hash || (targetElementById ? '#' + targetElementById.id : ''));
        if (hashTarget && hashTarget !== '#') {
          const targetId = hashTarget.replace(/^#/, '');
          const targetElem = targetElementById || document.getElementById(targetId) || document.querySelector(hashTarget);
          if (targetElem) {
            const navbar = document.getElementById('mainNavbar') || document.querySelector('.navbar');
            const navOffset = (navbar ? navbar.offsetHeight : 70) + 18;
            const elemPos = targetElem.getBoundingClientRect().top + window.pageYOffset;
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
        const targetUrl = new URL(anchor.href, window.location.href);
        if (targetUrl.origin !== window.location.origin) return;

        // Same page anchor link with hash
        if (targetUrl.hash && (targetUrl.pathname === window.location.pathname || targetUrl.href.split('#')[0] === window.location.href.split('#')[0])) {
          const hTarget = targetUrl.hash;
          const hElem = document.getElementById(hTarget.replace(/^#/, '')) || document.querySelector(hTarget);
          if (hElem) {
            e.preventDefault();
            e.stopPropagation();
            const navB = document.getElementById('mainNavbar') || document.querySelector('.navbar');
            const offset = (navB ? navB.offsetHeight : 70) + 18;
            const pos = hElem.getBoundingClientRect().top + window.pageYOffset;
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

        // WhatsApp or tel links
        if (targetUrl.protocol !== 'http:' && targetUrl.protocol !== 'https:') return;
        if (targetUrl.hostname.includes('wa.me')) return;

        // Check if internal page link
        const path = targetUrl.pathname;
        const isPage = path.endsWith('.html') || path === '/' || !path.includes('.');
        if (isPage) {
          e.preventDefault();
          instantNavigate(anchor.href);
        }
      } catch (err) {}
    });

    // Handle browser back and forward buttons
    window.addEventListener('popstate', function () {
      instantNavigate(window.location.href, true);
    });

    // Hover and touch prefetch
    document.addEventListener('pointerover', function (e) {
      const anchor = e.target.closest('a');
      if (anchor && anchor.href) prefetchUrl(anchor.href);
    }, { passive: true });

    document.addEventListener('touchstart', function (e) {
      const anchor = e.target.closest('a');
      if (anchor && anchor.href) prefetchUrl(anchor.href);
    }, { passive: true });

    // Idle prefetch primary links
    const prefetchPrimary = () => {
      document.querySelectorAll('.navbar-nav a, .footer-links a').forEach(a => {
        if (a.href) prefetchUrl(a.href);
      });
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(prefetchPrimary);
    } else {
      setTimeout(prefetchPrimary, 800);
    }
  }

  // GLOBAL INITIALIZATION
  document.addEventListener('DOMContentLoaded', function () {
    // 1. Sticky Navbar on scroll
    const navbar = document.getElementById('mainNavbar') || document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 40) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }, { passive: true });
    }

    // 2. Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
      const checkBtt = () => {
        if (window.scrollY > 250) {
          backToTopBtn.classList.add('show');
        } else {
          backToTopBtn.classList.remove('show');
        }
      };
      window.addEventListener('scroll', checkBtt, { passive: true });
      checkBtt();

      backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // 3. Initialize Interactive Components
    initInteractiveComponents();

    // 4. Initialize Instant SPA Navigation
    initInstantNavigation();
  });

})();
