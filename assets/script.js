/* ============================================================
   TECHCARE MOBILE — Language toggle + WhatsApp links
   ============================================================ */
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '60146226011'; // 014-6226011
  var WA_MESSAGE = {
    ms: 'Hai Techcare Mobile! Saya nak bertanya tentang repair fon saya.',
    en: 'Hi Techcare Mobile! I would like to ask about repairing my phone.'
  };

  /* ---------- Translations ---------- */
  var I18N = {
    ms: {
      nav_services: 'Servis',
      nav_why: 'Kenapa Kami',
      nav_gallery: 'Galeri',
      nav_location: 'Lokasi',
      cta_whatsapp: 'WhatsApp Kami',
      term1: 'skrin pecah?',
      term2: 'bateri cepat habis?',
      term3: 'masuk air?',
      hero_title: 'Fon Rosak, <span class="accent">Kami Yang Obat.</span>',
      hero_sub: 'Techcare Mobile — pakar repair phone & gadget di Klang. Tukar skrin, bateri, water damage, software issue & banyak lagi. Repair cepat, harga telus, warranty ada.',
      hero_cta1: 'Repair Sekarang',
      hero_cta2: '📍 Datang Ke Kedai',
      trust1: 'Most Repair < 2 Jam',
      trust2: 'Warranty Part',
      trust3: 'Harga Telus',
      svc_kicker: '// PERKHIDMATAN',
      svc_title: 'Semua Masalah Fon, Ada Penyelesaian.',
      svc1_title: '📱 Tukar Skrin / LCD',
      svc1_desc: 'Skrin pecah, sentuh tak jalan, display gelap — part berkualiti dengan warranty.',
      svc2_title: '🔋 Tukar Bateri',
      svc2_desc: 'Bateri cepat habis atau health dah drop? Tukar baru — fon tahan sepanjang hari semula.',
      svc3_title: '💧 Water Damage',
      svc3_desc: 'Fon masuk air? Jangan charge! Bawa terus ke sini — kami selamatkan board anda.',
      svc4_title: 'Software & System',
      svc4_desc: 'Lag, hang, bootloop, upgrade/downgrade — kami settle.',
      svc5_title: 'Charging Port',
      svc5_desc: 'Charge lambat masuk atau tak charge terus — tukar port bersih kemas.',
      svc6_title: 'Kamera & Speaker',
      svc6_desc: 'Kamera blurry, speaker pecih, mic tak dengar — kami baiki.',
      svc7_title: 'Data & Unlock',
      svc7_desc: 'Selamatkan data fon rosak, flash, bypass & unlock peranti.',
      why_kicker: '// KENAPA TECHCARE',
      why_title: 'Repair Bukan Sekadar Tukar Part.',
      f1_title: 'Teknisi Mahir',
      f1_desc: 'Experienced dengan semua jenama — iPhone, Samsung, Xiaomi, Oppo, Vivo, Huawei & lain-lain.',
      f2_title: 'Quote Sebelum Repair',
      f2_desc: 'Check dulu, bagi harga dulu. Takde hidden charge, takde kejutan.',
      f3_title: 'Warranty',
      f3_desc: 'Part yang kami tukar ada warranty. Ada masalah? Datang balik je.',
      f4_title: 'Cepat Siap',
      f4_desc: 'Kebanyakan repair siap dalam 1-2 jam. Tunggu kat kedai atau datang ambil kemudian.',
      gal_kicker: '// GALERI',
      gal_title: 'Kerja Kami, Bukti Kami.',
      loc_kicker: '// LOKASI & WAKTU',
      loc_title: 'Singgah Ke Kedai Kami.',
      loc_alamat: 'Alamat',
      loc_open_map: 'Buka dalam Google Maps →',
      loc_waktu: 'Waktu Operasi',
      loc_hari: 'Isnin – Sabtu',
      loc_tutup: 'Ahad: Tutup',
      loc_cta: '💬 WhatsApp Sebelum Datang — Confirm Stok Part',
      band_title: 'Fon dah rosak, data semua dalam tu? 😱',
      band_sub: 'WhatsApp kami sekarang — diagnose & quote. Selamatkan fon anda hari ini.',
      band_cta: '💬 WhatsApp 014-6226011',
      foot_tag: 'Pakar repair phone & gadget — Klang, Selangor. Skrin, bateri, water damage, software & lebih.',
      foot_hubungi: 'Hubungi',
      foot_hours: '🕐 Isnin – Sabtu, 10am – 8pm',
      foot_alamat: 'Alamat',
      foot_rights: 'Hak cipta terpelihara.'
    },
    en: {
      nav_services: 'Services',
      nav_why: 'Why Us',
      nav_gallery: 'Gallery',
      nav_location: 'Location',
      cta_whatsapp: 'WhatsApp Us',
      term1: 'cracked screen?',
      term2: 'battery drains fast?',
      term3: 'water damage?',
      hero_title: 'Broken Phone, <span class="accent">We Fix It Right.</span>',
      hero_sub: 'Techcare Mobile — phone & gadget repair specialists in Klang. Screen replacement, battery, water damage, software issues & more. Fast repairs, transparent pricing, warranty included.',
      hero_cta1: 'Repair Now',
      hero_cta2: '📍 Visit Our Shop',
      trust1: 'Most Repairs < 2 Hours',
      trust2: 'Parts Warranty',
      trust3: 'Transparent Pricing',
      svc_kicker: '// OUR SERVICES',
      svc_title: "Every Phone Problem Has a Fix.",
      svc1_title: '📱 Screen / LCD Replacement',
      svc1_desc: 'Cracked glass, dead touch, dark display — quality parts with warranty.',
      svc2_title: '🔋 Battery Replacement',
      svc2_desc: 'Battery draining fast or health degraded? Replace it new — all-day life again.',
      svc3_title: '💧 Water Damage',
      svc3_desc: 'Phone went for a swim? Do NOT charge it! Bring it straight here — we save your board.',
      svc4_title: 'Software & System',
      svc4_desc: 'Lag, freezing, bootloop, upgrade/downgrade — we handle it.',
      svc5_title: 'Charging Port',
      svc5_desc: 'Slow or no charging — clean port replacement done neatly.',
      svc6_title: 'Camera & Speaker',
      svc6_desc: 'Blurry camera, crackling speaker, dead mic — we repair them.',
      svc7_title: 'Data & Unlock',
      svc7_desc: 'Rescue data from broken phones, flash, bypass & device unlock.',
      why_kicker: '// WHY TECHCARE',
      why_title: 'Repair Is More Than Swapping Parts.',
      f1_title: 'Skilled Technicians',
      f1_desc: 'Experienced with all brands — iPhone, Samsung, Xiaomi, Oppo, Vivo, Huawei & more.',
      f2_title: 'Quote Before Repair',
      f2_desc: 'We check first, quote first. No hidden charges, no surprises.',
      f3_title: 'Warranty',
      f3_desc: "Parts we replace come with warranty. Any issue? Just come back.",
      f4_title: 'Fast Turnaround',
      f4_desc: 'Most repairs done in 1-2 hours. Wait in-store or pick up later.',
      gal_kicker: '// GALLERY',
      gal_title: 'Our Work, Our Proof.',
      loc_kicker: '// LOCATION & HOURS',
      loc_title: 'Drop By Our Shop.',
      loc_alamat: 'Address',
      loc_open_map: 'Open in Google Maps →',
      loc_waktu: 'Operating Hours',
      loc_hari: 'Monday – Saturday',
      loc_tutup: 'Sunday: Closed',
      loc_cta: '💬 WhatsApp Before Coming — Confirm Part Stock',
      band_title: 'Phone dead with all your data inside? 😱',
      band_sub: 'WhatsApp us now — diagnosis & quote. Save your phone today.',
      band_cta: '💬 WhatsApp 014-6226011',
      foot_tag: 'Phone & gadget repair specialists — Klang, Selangor. Screens, batteries, water damage, software & more.',
      foot_hubungi: 'Contact',
      foot_hours: '🕐 Mon – Sat, 10am – 8pm',
      foot_alamat: 'Address',
      foot_rights: 'All rights reserved.'
    }
  };

  var currentLang = localStorage.getItem('tm-lang') || 'ms';

  /* ---------- Apply language ---------- */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('tm-lang', lang);
    document.documentElement.lang = lang;

    var dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key]) el.innerHTML = dict[key];
    });

    document.getElementById('langLabel').textContent = lang.toUpperCase();
    updateWaLinks();
  }

  /* ---------- WhatsApp helpers ---------- */
  function waLink() {
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(WA_MESSAGE[currentLang]);
  }

  function updateWaLinks() {
    ['waNav', 'waHero', 'waLoc', 'waLocBtn', 'waBand', 'waFooter', 'waFloat'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.href = waLink();
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    applyLang(currentLang);

    document.getElementById('langToggle').addEventListener('click', function () {
      applyLang(currentLang === 'ms' ? 'en' : 'ms');
    });

    // Navbar scroll state
    var navbar = document.getElementById('navbar');
    function onScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile menu
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { navLinks.classList.remove('open'); });
    });
  });
})();
