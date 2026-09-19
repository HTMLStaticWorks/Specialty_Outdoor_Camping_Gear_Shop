/* ==========================================================================
   TRAILFORGE - SPECIALTY OUTDOOR & CAMPING GEAR SHOP
   Single JavaScript File (assets/js/main.js)
   Organized Sections:
   - 01. DEMO DATA (Products & Guides)
   - 02. NAVIGATION & MOBILE DRAWER
   - 03. THEME SYSTEM (Light / Dark)
   - 04. RTL SYSTEM (LTR / RTL)
   - 05. GLOBAL ENQUIRY MODAL & FORM VALIDATION
   - 06. SEARCH MODAL SYSTEM
   - 07. PRODUCT FILTERS & DETAIL MODAL
   - 08. HOME 1 CATEGORY NAVIGATOR
   - 09. HOME 2 INTERACTIVE COMPONENTS (Hotspots, Journey, Weight Bars, Adventure)
   - 10. BUYING GUIDES CHECKLIST
   - 11. RENTAL ENQUIRY BUILDER
   - 12. CONTACT TOPIC SELECTOR
   - 13. SCROLL REVEAL & INTERSECTION OBSERVER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 01. DEMO DATA
  // ==========================================================================
  const PRODUCTS_DATA = [
    {
      id: 'ridgeline-tent',
      name: 'Ridgeline 2P Expedition Tent',
      category: 'TENTS',
      categoryKey: 'tents',
      description: 'Ultralight 4-season alpine shelter designed for high wind resistance and instant set-up.',
      image: 'assets/images/25.png',
      weight: '1.8 kg',
      capacity: '2 Person',
      material: '40D Ripstop Nylon with Silicone Coating',
      use: 'Alpine Trekking & Cold Weather',
      details: 'Double-walled construction with dual vestibules, lightweight DAC featherlite poles, and 3000mm hydrostatic head waterproofing.'
    },
    {
      id: 'trailpack-38',
      name: 'Trailpack 38 Ergonomic Pack',
      category: 'BACKPACKS',
      categoryKey: 'backpacks',
      description: 'Contoured frame backpack with ventilated back panel and rain cover.',
      image: 'assets/images/26.png',
      weight: '1.2 kg',
      capacity: '38 Liters',
      material: 'Cordura 210D High-Tenacity Fabric',
      use: 'Multi-Day Backpacking & Hikes',
      details: 'Includes hydration reservoir sleeve, dual trekking pole attachments, and load-lifter ergonomic shoulder straps.'
    },
    {
      id: 'ember-sleep-bag',
      name: 'Ember -10°C Sleeping System',
      category: 'SLEEPING',
      categoryKey: 'sleeping',
      description: 'Water-resistant hydrophobic 800-fill down sleeping bag built for frosty nights.',
      image: 'assets/images/27.png',
      weight: '980 grams',
      capacity: 'Single Mummy',
      material: 'Pertex Quantum Nylon & 800 FP Down',
      use: 'Winter Camping & High Altitude',
      details: 'Thermal draft collar, full-length 2-way YKK anti-snag zipper, and compressed dry sack included.'
    },
    {
      id: 'summit-cookset',
      name: 'Summit Titanium Cookset',
      category: 'COOKWARE',
      categoryKey: 'cookware',
      description: 'Nesting 3-piece ultra-light titanium pot, pan, and micro stove combo.',
      image: 'assets/images/28.png',
      weight: '340 grams',
      capacity: '1–2 Campers',
      material: 'Grade-1 Pure Titanium',
      use: 'Fast-and-Light Backpacking',
      details: 'Heat-resistant folding handles, measuring scale inside pot, and mesh storage pouch.'
    },
    {
      id: 'field-shell-jacket',
      name: 'Field Shell Pro Weather Jacket',
      category: 'APPAREL',
      categoryKey: 'apparel',
      description: '3-layer breathable waterproof hard-shell mountain jacket.',
      image: 'assets/images/29.png',
      weight: '410 grams',
      capacity: 'Unisex S–XXL',
      material: '3L Waterproof-Breathable Membrane',
      use: 'Storm Protection & Alpine Trail',
      details: 'Helmet-compatible hood, pit zips for ventilation, fully taped seams, and waterproof aqua-guard zippers.'
    },
    {
      id: 'nighttrack-headlamp',
      name: 'Nighttrack 450 Lumen Headlamp',
      category: 'LIGHTING',
      categoryKey: 'lighting',
      description: 'Rechargeable weatherproof headlamp with red night-vision mode.',
      image: 'assets/images/30.png',
      weight: '85 grams',
      capacity: '450 Lumens (60h max)',
      material: 'Impact-Resistant Polycarbonate',
      use: 'Night Hiking & Camp Setup',
      details: 'USB-C fast charging, IPX7 waterproof rating, and adjustable elastic reflective strap.'
    },
    {
      id: 'stealth-bivy-1p',
      name: 'Stealth Solo 1P Bivy Shelter',
      category: 'TENTS',
      categoryKey: 'tents',
      description: 'Single-person ultralight waterproof-breathable solo bivy for high-speed alpine pushes.',
      image: 'assets/images/prod_bivy_1p.jpg',
      weight: '620 grams',
      capacity: '1 Person',
      material: '3-Layer eVent Waterproof Membrane',
      use: 'Solo Alpine & Ultralight Bikepacking',
      details: 'Delivers complete storm sealing with integrated mosquito netting, aluminum head hoop pole, and glow-in-the-dark stake loops.'
    },
    {
      id: 'summit-pack-55',
      name: 'Apex Expedition 55L Pack',
      category: 'BACKPACKS',
      categoryKey: 'backpacks',
      description: 'Heavy-haul expedition backpack with custom moldable hipbelt and dual ice-axe loops.',
      image: 'assets/images/prod_expedition_pack.jpg',
      weight: '1.65 kg',
      capacity: '55 Liters',
      material: 'UHMWPE Ripstop & Cordura 420D',
      use: 'Multi-Week Expeditions & Winter Treks',
      details: 'Features expandable roll-top collar, floating top lid, reinforced crampon pouch, and heavy-load lumbar support frame.'
    },
    {
      id: 'aero-insulated-mat',
      name: 'AeroLite Insulated Sleep Mat',
      category: 'SLEEPING',
      categoryKey: 'sleeping',
      description: 'Thermal reflective air mattress boasting an R-value of 4.8 for year-round ground insulation.',
      image: 'assets/images/prod_sleep_mat.jpg',
      weight: '490 grams',
      capacity: 'Regular Wide (183cm x 64cm)',
      material: 'ThermaCapture Reflective Film & 30D Ripstop',
      use: '4-Season Backpacking & Cold Ground',
      details: 'Includes rapid-inflation pump sack, repair field kit, and ultra-compact pack sack (smaller than a 1L water bottle).'
    },
    {
      id: 'micro-jet-stove',
      name: 'MicroJet Windproof Camp Stove',
      category: 'COOKWARE',
      categoryKey: 'cookware',
      description: 'High-efficiency pressure-regulated canister stove capable of boiling 1L water in under 2.5 minutes.',
      image: 'assets/images/prod_windproof_stove.jpg',
      weight: '72 grams',
      capacity: 'Rapid Boil (10,000 BTU)',
      material: 'Anodized Aluminum & Stainless Steel',
      use: 'All-Weather Mountain Cooking',
      details: 'Push-button piezo igniter, micro-regulator for consistent output in freezing temperatures, and serrated pot support arms.'
    },
    {
      id: 'alpine-thermal-grid',
      name: 'Alpine Grid-Fleece Thermal Midlayer',
      category: 'APPAREL',
      categoryKey: 'apparel',
      description: 'High-breathability grid fleece pullover engineered for active moisture management on steep ascents.',
      image: 'assets/images/prod_thermal_fleece.jpg',
      weight: '280 grams',
      capacity: 'Unisex S–XXL',
      material: 'Polartec Power Grid Recycled Polyester',
      use: 'Layering System & Trail Running',
      details: 'Deep chest zipper for quick thermal venting, thumb holes at cuffs, and flatlock anti-chafing seams.'
    },
    {
      id: 'lumina-camp-lantern',
      name: 'Lumina Solar Trail Lantern',
      category: 'LIGHTING',
      categoryKey: 'lighting',
      description: 'Collapsible waterproof camp lantern with solar charging panel and USB power-bank output.',
      image: 'assets/images/prod_solar_lantern.jpg',
      weight: '195 grams',
      capacity: '300 Lumens / 4000mAh Powerbank',
      material: 'IP67 Shatterproof TPU Silicone',
      use: 'Campsite Illumination & Device Power',
      details: 'Features 4 light modes (Warm Amber, Cool White, Candle Flicker, Red SOS), solar recharge panel, and magnetic hanging clip.'
    }
  ];

  const GUIDES_DATA = [
    { title: 'First Camping Trip Checklist', desc: 'Essential advice on shelter, sleeping, and camp setup for beginners.', url: 'guides.html' },
    { title: 'Choosing Backpack Capacity', desc: 'Understanding liters, torso sizing, and load distribution.', url: 'guides.html' },
    { title: 'Tent Size & Weather Ratings', desc: '3-season vs 4-season tents explained.', url: 'guides.html' },
    { title: 'Camp Kitchen Essentials', desc: 'Stoves, fuel types, cookware, and leave-no-trace outdoor cooking.', url: 'guides.html' }
  ];

  // ==========================================================================
  // 02. NAVIGATION & MOBILE DRAWER
  // ==========================================================================
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');

  function openDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.add('open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);

  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) closeDrawer();
    });
  }

  document.querySelectorAll('.drawer-nav .nav-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Highlight active nav link based on window location
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // ==========================================================================
  // 03. THEME SYSTEM (Light / Dark)
  // ==========================================================================
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const savedTheme = localStorage.getItem('trailforge_theme') || 'light';

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('trailforge_theme', theme);
    themeToggleBtns.forEach(btn => {
      const label = btn.querySelector('.theme-label');
      if (label) label.textContent = theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE';
      const icon = btn.querySelector('.theme-icon');
      if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    });
  }

  setTheme(savedTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  });

  // ==========================================================================
  // 04. RTL SYSTEM (LTR / RTL)
  // ==========================================================================
  const rtlToggleBtns = document.querySelectorAll('.rtl-toggle-btn');
  const savedDir = localStorage.getItem('trailforge_dir') || 'ltr';

  function setDirection(dir) {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem('trailforge_dir', dir);
    rtlToggleBtns.forEach(btn => {
      const label = btn.querySelector('.rtl-label');
      if (label) label.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
    });
  }

  setDirection(savedDir);

  rtlToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('dir');
      setDirection(current === 'rtl' ? 'ltr' : 'rtl');
    });
  });

  // ==========================================================================
  // 05. GLOBAL ENQUIRY MODAL & FORM VALIDATION
  // ==========================================================================
  const enquiryModal = document.getElementById('enquiry-modal');
  const enquiryCloseBtn = document.getElementById('enquiry-close-btn');
  const enquiryForm = document.getElementById('enquiry-form');
  const enquirySuccessBanner = document.getElementById('enquiry-success');
  const enquiryProductInput = document.getElementById('enquiry-product');

  function openEnquiryModal(productName = '') {
    if (enquiryModal) {
      if (enquiryProductInput && productName) {
        enquiryProductInput.value = productName;
      }
      if (enquirySuccessBanner) enquirySuccessBanner.style.display = 'none';
      if (enquiryForm) enquiryForm.style.display = 'block';
      enquiryModal.classList.add('open');
      enquiryModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeEnquiryModal() {
    if (enquiryModal) {
      enquiryModal.classList.remove('open');
      enquiryModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  // Trigger buttons with data-enquiry or matching classes
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-enquiry], .open-enquiry-btn');
    if (trigger) {
      e.preventDefault();
      // If product detail modal is open, close it first
      const productModal = document.getElementById('product-detail-modal');
      if (productModal && productModal.classList.contains('open')) {
        productModal.classList.remove('open');
      }
      const product = trigger.getAttribute('data-product-name') || '';
      openEnquiryModal(product);
    }
  });

  if (enquiryCloseBtn) enquiryCloseBtn.addEventListener('click', closeEnquiryModal);
  if (enquiryModal) {
    enquiryModal.addEventListener('click', (e) => {
      if (e.target === enquiryModal) closeEnquiryModal();
    });
  }

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('enquiry-name')?.value.trim();
      const email = document.getElementById('enquiry-email')?.value.trim();
      const message = document.getElementById('enquiry-message')?.value.trim();

      if (!name || !email || !message) {
        alert('Please complete all required fields.');
        return;
      }

      enquiryForm.style.display = 'none';
      if (enquirySuccessBanner) enquirySuccessBanner.style.display = 'block';
      enquiryForm.reset();
    });
  }

  // Close modals on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeEnquiryModal();
      closeSearchModal();
      closeProductDetailModal();
    }
  });

  // ==========================================================================
  // 06. SEARCH MODAL SYSTEM
  // ==========================================================================
  const searchModal = document.getElementById('search-modal');
  const searchToggleBtns = document.querySelectorAll('.search-toggle-btn');
  const searchCloseBtn = document.getElementById('search-close-btn');
  const searchInput = document.getElementById('search-input');
  const searchResultsContainer = document.getElementById('search-results');

  function openSearchModal() {
    if (searchModal) {
      searchModal.classList.add('open');
      searchModal.setAttribute('aria-hidden', 'false');
      if (searchInput) searchInput.focus();
      document.body.style.overflow = 'hidden';
    }
  }

  function closeSearchModal() {
    if (searchModal) {
      searchModal.classList.remove('open');
      searchModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  searchToggleBtns.forEach(btn => btn.addEventListener('click', openSearchModal));
  if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearchModal);
  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearchModal();
    });
  }

  if (searchInput && searchResultsContainer) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        searchResultsContainer.innerHTML = '<p class="text-muted" style="padding:16px;">Type to search equipment or guides...</p>';
        return;
      }

      const matchingProducts = PRODUCTS_DATA.filter(p => 
        p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
      );

      const matchingGuides = GUIDES_DATA.filter(g =>
        g.title.toLowerCase().includes(query) || g.desc.toLowerCase().includes(query)
      );

      if (matchingProducts.length === 0 && matchingGuides.length === 0) {
        searchResultsContainer.innerHTML = '<p class="text-muted" style="padding:16px;">No matching gear or guide found.</p>';
        return;
      }

      let html = '';
      if (matchingProducts.length > 0) {
        html += '<h4 style="margin: 12px 0 6px; color: var(--color-signal-orange);">Products</h4>';
        matchingProducts.forEach(p => {
          html += `
            <div class="search-result-item" style="padding: 10px; border-bottom: 1px solid var(--border-color); cursor: pointer;" onclick="window.location.href='products.html'">
              <strong>${p.name}</strong> <span class="badge" style="margin-inline-start:8px;">${p.category}</span>
              <p style="font-size:0.85rem; color: var(--text-secondary); margin:0;">${p.description}</p>
            </div>
          `;
        });
      }

      if (matchingGuides.length > 0) {
        html += '<h4 style="margin: 16px 0 6px; color: var(--color-signal-orange);">Buying Guides</h4>';
        matchingGuides.forEach(g => {
          html += `
            <div class="search-result-item" style="padding: 10px; border-bottom: 1px solid var(--border-color); cursor: pointer;" onclick="window.location.href='${g.url}'">
              <strong>${g.title}</strong>
              <p style="font-size:0.85rem; color: var(--text-secondary); margin:0;">${g.desc}</p>
            </div>
          `;
        });
      }

      searchResultsContainer.innerHTML = html;
    });
  }

  // ==========================================================================
  // 07. PRODUCT FILTERS & DETAIL MODAL
  // ==========================================================================
  const productGrid = document.getElementById('products-grid-container');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderProducts(category = 'ALL') {
    if (!productGrid) return;
    const catLower = category.toLowerCase();
    const filtered = (category === 'ALL' || catLower === 'all') 
      ? PRODUCTS_DATA 
      : PRODUCTS_DATA.filter(p => p.categoryKey === catLower || p.category.toLowerCase() === catLower);

    productGrid.innerHTML = filtered.map(p => `
      <div class="product-card revealed">
        <div class="product-img-wrap">
          <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy">
        </div>
        <div class="product-info">
          <span class="product-cat">${p.category}</span>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.description}</p>
          <div class="product-meta-row">
            <span>Weight: <strong>${p.weight}</strong></span>
            <button class="btn btn-outline btn-sm view-product-detail-btn" data-id="${p.id}">View Details</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  if (productGrid) renderProducts('ALL');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      renderProducts(cat);
    });
  });

  // Product Detail Modal
  const productDetailModal = document.getElementById('product-detail-modal');
  const productDetailCloseBtn = document.getElementById('product-detail-close');
  const productDetailBody = document.getElementById('product-detail-body');

  function openProductDetailModal(id) {
    const p = PRODUCTS_DATA.find(item => item.id === id);
    if (!p || !productDetailModal) return;

    if (productDetailBody) {
      productDetailBody.innerHTML = `
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: stretch;">
          <!-- Left Column: Full-Height Image & Feature Highlights -->
          <div style="display:flex; flex-direction:column; justify-content:space-between; gap:16px; height:100%;">
            <div style="position:relative; border-radius:8px; overflow:hidden; border:1px solid var(--border-color); box-shadow:var(--shadow-md); height:100%; min-height:260px;">
              <img src="${p.image}" alt="${p.name}" style="width:100%; height:100%; object-fit:cover; display:block;">
              <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(23,32,25,0.85) 0%, transparent 55%);"></div>
              
              <!-- Badge over Image -->
              <div style="position:absolute; top:12px; left:12px; background:var(--color-signal-orange); color:#FFF; font-family:var(--font-heading); font-size:0.75rem; font-weight:700; letter-spacing:1px; padding:4px 10px; border-radius:4px; text-transform:uppercase;">
                TRAILFORGE LAB CERTIFIED
              </div>

              <!-- Bottom Overlay Bar on Image -->
              <div style="position:absolute; bottom:12px; left:12px; right:12px; display:flex; justify-content:space-between; align-items:center; background:rgba(23,32,25,0.85); backdrop-filter:blur(6px); padding:8px 14px; border-radius:6px; border:1px solid rgba(231,221,202,0.15);">
                <span style="font-size:0.8rem; color:#E7DDCA; font-weight:600;">100% Field-Tested Equipment</span>
                <span style="font-size:0.8rem; color:var(--color-signal-orange); font-weight:700;">★ 4.9 Rating</span>
              </div>
            </div>

            <!-- Guarantee Badges (Fills vertical space under image) -->
            <div style="background:var(--bg-primary); border:1px solid var(--border-color); border-radius:8px; padding:12px 14px; display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; text-align:center;">
              <div>
                <strong style="display:block; font-size:0.72rem; color:var(--color-signal-orange); text-transform:uppercase; letter-spacing:0.5px;">WARRANTY</strong>
                <span style="font-size:0.8rem; color:var(--text-secondary);">Lifetime</span>
              </div>
              <div style="border-inline:1px solid var(--border-color);">
                <strong style="display:block; font-size:0.72rem; color:var(--color-signal-orange); text-transform:uppercase; letter-spacing:0.5px;">DISPATCH</strong>
                <span style="font-size:0.8rem; color:var(--text-secondary);">Within 24h</span>
              </div>
              <div>
                <strong style="display:block; font-size:0.72rem; color:var(--color-signal-orange); text-transform:uppercase; letter-spacing:0.5px;">RETURNS</strong>
                <span style="font-size:0.8rem; color:var(--text-secondary);">30 Days</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Specs & Technical Details -->
          <div style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <span class="badge">${p.category}</span>
                <span style="font-size:0.8rem; color:var(--text-muted); font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">SKU: ${p.id.toUpperCase()}</span>
              </div>

              <h2 style="font-size:1.7rem; margin-bottom:10px; line-height:1.15; color:var(--text-primary);">${p.name}</h2>
              <p style="color:var(--text-secondary); font-size:0.95rem; line-height:1.5; margin-bottom:16px;">${p.details}</p>

              <!-- Structured Technical Specifications Grid -->
              <div style="background:var(--bg-primary); padding:16px; border:1px solid var(--border-color); border-radius:8px; margin-bottom:20px; display:grid; grid-template-columns:1fr 1fr; gap:12px 16px;">
                <div>
                  <span style="display:block; font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); font-weight:700; letter-spacing:0.5px;">Weight</span>
                  <strong style="font-size:0.95rem; color:var(--text-primary);">${p.weight}</strong>
                </div>
                <div>
                  <span style="display:block; font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); font-weight:700; letter-spacing:0.5px;">Capacity</span>
                  <strong style="font-size:0.95rem; color:var(--text-primary);">${p.capacity}</strong>
                </div>
                <div>
                  <span style="display:block; font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); font-weight:700; letter-spacing:0.5px;">Material</span>
                  <strong style="font-size:0.95rem; color:var(--text-primary);">${p.material}</strong>
                </div>
                <div>
                  <span style="display:block; font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); font-weight:700; letter-spacing:0.5px;">Ideal Use</span>
                  <strong style="font-size:0.95rem; color:var(--text-primary);">${p.use}</strong>
                </div>
              </div>
            </div>

            <!-- Action Buttons Row -->
            <div style="display:flex; gap:12px;">
              <button class="btn btn-primary open-enquiry-btn" data-product-name="${p.name}" style="flex:1; text-align:center; justify-content:center;">ENQUIRE ABOUT THIS GEAR →</button>
            </div>
          </div>
        </div>
      `;
    }

    productDetailModal.classList.add('open');
    productDetailModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProductDetailModal() {
    if (productDetailModal) {
      productDetailModal.classList.remove('open');
      productDetailModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.view-product-detail-btn');
    if (btn) {
      const id = btn.getAttribute('data-id');
      openProductDetailModal(id);
    }
  });

  if (productDetailCloseBtn) productDetailCloseBtn.addEventListener('click', closeProductDetailModal);
  if (productDetailModal) {
    productDetailModal.addEventListener('click', (e) => {
      if (e.target === productDetailModal) closeProductDetailModal();
    });
  }

  // ==========================================================================
  // 08. HOME 1 CATEGORY NAVIGATOR
  // ==========================================================================
  const catMenuItems = document.querySelectorAll('.cat-menu-item');
  const catPreviewImg = document.getElementById('cat-preview-img');
  const catPreviewTitle = document.getElementById('cat-preview-title');
  const catPreviewDesc = document.getElementById('cat-preview-desc');

  const CAT_NAV_DATA = {
    tents: { title: 'Tents & Shelter', desc: 'Storm-tested 2-person and family expedition shelters built for wind resistance.', img: 'assets/images/2.png' },
    backpacks: { title: 'Backpacks & Hauling', desc: 'Ergonomic internal frame packs with ventilated suspensions.', img: 'assets/images/26.png' },
    sleeping: { title: 'Sleeping Systems', desc: 'Hydrophobic thermal down bags and insulated trail sleeping pads.', img: 'assets/images/27.png' },
    cookware: { title: 'Camping Cookware', desc: 'Titanium cookware, micro stoves, and camp coffee essentials.', img: 'assets/images/28.png' },
    apparel: { title: 'Outdoor Apparel', desc: '3-layer weatherproof shells, thermal mid-layers, and trail pants.', img: 'assets/images/29.png' },
    lighting: { title: 'Trail Lighting', desc: 'High-lumen waterproof headlamps and warm camp lanterns.', img: 'assets/images/30.png' }
  };

  catMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      catMenuItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const key = item.getAttribute('data-cat-key');
      const data = CAT_NAV_DATA[key];
      if (data && catPreviewImg) {
        catPreviewImg.src = data.img;
        if (catPreviewTitle) catPreviewTitle.textContent = data.title;
        if (catPreviewDesc) catPreviewDesc.textContent = data.desc;
      }
    });
  });

  // ==========================================================================
  // 09. HOME 2 INTERACTIVE COMPONENTS
  // ==========================================================================
  // 9a. Hotspots on Packing Table (Hover & Click)
  const hotspots = document.querySelectorAll('.hotspot');
  const tooltip = document.getElementById('hotspot-tooltip');

  function activateHotspot(hs) {
    hotspots.forEach(h => h.classList.remove('active'));
    hs.classList.add('active');
    const title = hs.getAttribute('data-name');
    const purpose = hs.getAttribute('data-purpose');
    const use = hs.getAttribute('data-use');

    if (tooltip) {
      tooltip.innerHTML = `
        <h4 style="font-size:1.3rem; margin-bottom: 4px; color: var(--color-signal-orange);">${title}</h4>
        <p><strong>Purpose:</strong> ${purpose}</p>
        <p><strong>Ideal Use:</strong> ${use}</p>
      `;
      tooltip.classList.add('active');
    }
  }

  hotspots.forEach(hs => {
    hs.addEventListener('click', () => activateHotspot(hs));
    hs.addEventListener('mouseenter', () => activateHotspot(hs));
  });

  // 9b. Trailhead to Campsite Journey Tabs
  const journeyTabs = document.querySelectorAll('.journey-tab');
  const journeyPanels = document.querySelectorAll('.journey-panel-item');

  journeyTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      journeyTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const stage = tab.getAttribute('data-stage');
      journeyPanels.forEach(panel => {
        if (panel.getAttribute('data-panel') === stage) {
          panel.style.display = 'grid';
        } else {
          panel.style.display = 'none';
        }
      });
    });
  });

  // 9c. Pack Weight Visualizer Animation
  const weightBars = document.querySelectorAll('.weight-bar-fill');
  if (weightBars.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          weightBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth;
          });
        }
      });
    }, { threshold: 0.3 });

    const container = document.querySelector('.weight-bars-container');
    if (container) observer.observe(container);
  }

  // ==========================================================================
  // 10. BUYING GUIDES CHECKLIST
  // ==========================================================================
  const checklistItems = document.querySelectorAll('.checklist-item');
  const checklistCounterEl = document.getElementById('checklist-count');

  function updateChecklistCount() {
    let count = 0;
    const state = {};
    checklistItems.forEach((item, index) => {
      const checkbox = item.querySelector('.checklist-checkbox');
      if (checkbox.checked) {
        count++;
        item.classList.add('checked');
        state[index] = true;
      } else {
        item.classList.remove('checked');
        state[index] = false;
      }
    });
    if (checklistCounterEl) checklistCounterEl.textContent = count;
    localStorage.setItem('trailforge_checklist', JSON.stringify(state));
  }

  const savedChecklist = JSON.parse(localStorage.getItem('trailforge_checklist') || '{}');
  checklistItems.forEach((item, index) => {
    const checkbox = item.querySelector('.checklist-checkbox');
    if (savedChecklist[index]) {
      checkbox.checked = true;
    }
    item.addEventListener('click', (e) => {
      if (e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
      }
      updateChecklistCount();
    });
  });
  updateChecklistCount();

  // ==========================================================================
  // 11. RENTAL ENQUIRY BUILDER
  // ==========================================================================
  const rentalForm = document.getElementById('rental-builder-form');
  const rentalConfirmation = document.getElementById('rental-confirmation');

  if (rentalForm) {
    rentalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (rentalConfirmation) {
        rentalConfirmation.style.display = 'block';
        rentalForm.reset();
      }
    });
  }

  // ==========================================================================
  // 12. CONTACT TOPIC SELECTOR
  // ==========================================================================
  const topicBtns = document.querySelectorAll('.topic-selector-btn');
  const topicCtaBtn = document.getElementById('topic-cta-btn');

  topicBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      topicBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const topic = btn.getAttribute('data-topic');
      if (topicCtaBtn) {
        topicCtaBtn.textContent = `START ENQUIRY REGARDING: ${topic.toUpperCase()} →`;
      }
    });
  });

  // ==========================================================================
  // 13. SCROLL REVEAL & INTERSECTION OBSERVER
  // ==========================================================================
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ==========================================================================
  // 14. BACK TO TOP BUTTON
  // ==========================================================================
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    // Show/hide based on scroll position
    const handleBackToTopVisibility = () => {
      if (window.scrollY > 200) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleBackToTopVisibility, { passive: true });
    handleBackToTopVisibility(); // Check on load

    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

