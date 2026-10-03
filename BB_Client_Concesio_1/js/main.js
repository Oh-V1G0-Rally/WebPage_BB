/**
 * Casa Vacanza Da Jesi - Concesio (Brescia)
 * Script Interattivo Moderno: Navigazione, Galleria & Lightbox, FAQ, Form, Cookie GDPR
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initGalleryAndLightbox();
  initFaqAccordion();
  initContactForm();
  initCookieConsent();
  initBackToTop();
});

/* ==========================================================================
   1. HEADER SCROLL & BACK TO TOP
   ========================================================================== */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   2. MENU MOBILE
   ========================================================================== */
function initMobileNav() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', isExpanded);
  });

  // Chiudi menu al click sui link
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   3. GALLERIA IMMAGINI & LIGHTBOX
   ========================================================================== */
function initGalleryAndLightbox() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = Array.from(document.querySelectorAll('.gallery-card'));
  const lightbox = document.querySelector('.lightbox-modal');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxTitle = document.querySelector('.lightbox-caption-title');
  const lightboxCounter = document.querySelector('.lightbox-caption-counter');
  const closeBtn = document.querySelector('.lightbox-close-btn');
  const prevBtn = document.querySelector('.lightbox-prev-btn');
  const nextBtn = document.querySelector('.lightbox-next-btn');

  let currentVisibleCards = [...galleryCards];
  let currentIndex = 0;

  // Filtro categorie
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });

      // Aggiorna lista visibile per navigazione lightbox coerente
      currentVisibleCards = galleryCards.filter(card => card.style.display !== 'none');
    });
  });

  // Apri Lightbox
  galleryCards.forEach((card) => {
    card.addEventListener('click', () => {
      const idx = currentVisibleCards.indexOf(card);
      if (idx !== -1) {
        openLightbox(idx);
      }
    });
  });

  function openLightbox(index) {
    if (!lightbox || !currentVisibleCards.length) return;
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const activeCard = currentVisibleCards[currentIndex];
    if (!activeCard) return;

    const img = activeCard.querySelector('img');
    const title = activeCard.querySelector('.gallery-card-title')?.textContent || 'Ambiente della Casa';

    if (lightboxImg && img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || title;
    }
    if (lightboxTitle) {
      lightboxTitle.textContent = title;
    }
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentIndex + 1} / ${currentVisibleCards.length}`;
    }
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % currentVisibleCards.length;
    updateLightboxContent();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + currentVisibleCards.length) % currentVisibleCards.length;
    updateLightboxContent();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  // Click fuori per chiudere
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-container') || e.target.classList.contains('lightbox-img-wrapper')) {
        closeLightbox();
      }
    });
  }

  // Tasti tastiera: Esc, Freccia Dx, Freccia Sx
  window.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  // Touch Swipe per smartphone
  let touchStartX = 0;
  let touchEndX = 0;

  if (lightbox) {
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        showNext(); // Swipe verso sinistra -> immagine successiva
      } else {
        showPrev(); // Swipe verso destra -> immagine precedente
      }
    }
  }
}

/* ==========================================================================
   4. DOMANDE FREQUENTI (FAQ ACCORDION)
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Chiudi altri accordion se si desidera visualizzazione a pannello singolo
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherAns = otherItem.querySelector('.faq-answer');
          if (otherAns) otherAns.style.maxHeight = null;
        }
      });

      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      }
    });
  });
}

/* ==========================================================================
   5. MODULO RICHIESTA DISPONIBILITÀ & CONTATTO
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  const checkinInput = document.getElementById('checkin');
  const checkoutInput = document.getElementById('checkout');
  const alertBox = document.getElementById('formAlert');

  // Calcolo notti e data minima
  const today = new Date().toISOString().split('T')[0];
  if (checkinInput) checkinInput.min = today;
  if (checkoutInput) checkoutInput.min = today;

  if (checkinInput && checkoutInput) {
    checkinInput.addEventListener('change', () => {
      checkoutInput.min = checkinInput.value;
      if (checkoutInput.value && checkoutInput.value < checkinInput.value) {
        checkoutInput.value = checkinInput.value;
      }
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim() || 'Non specificato';
    const checkin = checkinInput?.value || 'Da definire';
    const checkout = checkoutInput?.value || 'Da definire';
    const guests = document.getElementById('guests')?.value || '4';
    const message = document.getElementById('message')?.value.trim() || 'Nessun messaggio aggiuntivo.';
    const privacyCheck = document.getElementById('privacyCheck');

    if (!privacyCheck || !privacyCheck.checked) {
      alert('Per inviare la richiesta è necessario accettare l\'informativa sul trattamento dei dati.');
      return;
    }

    if (!name || !email) {
      alert('Per favore compila i campi obbligatori (Nome e Email).');
      return;
    }

    // Mostra messaggio di successo
    if (alertBox) {
      alertBox.textContent = 'Grazie per la richiesta! Apertura del client email con i dettagli precompilati...';
      alertBox.classList.add('success');
      alertBox.style.display = 'block';
    }

    // Composizione mailto per contatto diretto
    const subject = encodeURIComponent(`Richiesta di Soggiorno - Casa Vacanza Da Jesi da parte di ${name}`);
    const body = encodeURIComponent(
      `Gentile Host di Casa Vacanza Da Jesi,\n\n` +
      `Vorrei richiedere disponibilità e informazioni per un soggiorno:\n\n` +
      `• Nome e Cognome: ${name}\n` +
      `• Email di contatto: ${email}\n` +
      `• Recapito telefonico: ${phone}\n` +
      `• Data Check-in: ${checkin}\n` +
      `• Data Check-out: ${checkout}\n` +
      `• Numero Ospiti: ${guests}\n\n` +
      `Note / Messaggio:\n${message}\n\n` +
      `In attesa di un vostro gentile riscontro, cordiali saluti,\n${name}`
    );

    setTimeout(() => {
      window.location.href = `mailto:alessandro.vigo22@gmail.com?subject=${subject}&body=${body}`;
    }, 800);
  });
}

/* ==========================================================================
   6. GESTIONE COOKIE & PRIVACY GDPR
   ========================================================================== */
function initCookieConsent() {
  const banner = document.getElementById('cookieBanner');
  const modal = document.getElementById('cookieModal');
  const acceptAllBtn = document.getElementById('cookieAcceptAll');
  const rejectBtn = document.getElementById('cookieReject');
  const customizeBtn = document.getElementById('cookieCustomize');
  const savePrefsBtn = document.getElementById('cookieSavePrefs');
  const closeModalBtn = document.getElementById('cookieModalClose');
  const manageLinks = document.querySelectorAll('.manage-cookies-trigger');

  const STORAGE_KEY = 'casa_jesi_cookie_consent_v1';

  // Controlla preferenze salvate
  const savedConsent = localStorage.getItem(STORAGE_KEY);

  if (!savedConsent && banner) {
    setTimeout(() => {
      banner.classList.add('show');
    }, 1000);
  }

  // Accetta tutti i cookie
  if (acceptAllBtn) {
    acceptAllBtn.addEventListener('click', () => {
      saveConsent({ necessary: true, analytics: true, marketing: true });
      closeBanner();
    });
  }

  // Rifiuta non necessari
  if (rejectBtn) {
    rejectBtn.addEventListener('click', () => {
      saveConsent({ necessary: true, analytics: false, marketing: false });
      closeBanner();
    });
  }

  // Apri personalizzazione
  if (customizeBtn) {
    customizeBtn.addEventListener('click', () => {
      openModal();
    });
  }

  // Trigger dal footer
  manageLinks.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  // Salva preferenze personalizzate
  if (savePrefsBtn) {
    savePrefsBtn.addEventListener('click', () => {
      const analyticsChecked = document.getElementById('cookieAnalytics')?.checked ?? false;
      const marketingChecked = document.getElementById('cookieMarketing')?.checked ?? false;

      saveConsent({
        necessary: true,
        analytics: analyticsChecked,
        marketing: marketingChecked
      });

      closeModal();
      closeBanner();
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  function openModal() {
    if (!modal) return;
    // Carica stato precedente se presente
    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent);
        const anInput = document.getElementById('cookieAnalytics');
        const mkInput = document.getElementById('cookieMarketing');
        if (anInput) anInput.checked = parsed.analytics;
        if (mkInput) mkInput.checked = parsed.marketing;
      } catch (e) {
        console.error(e);
      }
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function closeBanner() {
    if (banner) {
      banner.classList.remove('show');
    }
  }

  function saveConsent(preferences) {
    const consentPayload = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consentPayload));
  }
}
