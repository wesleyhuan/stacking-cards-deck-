/**
 * Universal Stacking Cards Engine
 * Automatically detects whether page is NEXUS Agency (agency.html), Google Pixel 11 Pro (pixel11.html), or Cathay Bank (index.html)
 */

document.addEventListener('DOMContentLoaded', () => {
  const isAgencyPage = window.location.pathname.includes('agency.html');
  const isPixelPage = window.location.pathname.includes('pixel11.html');
  
  const cardsData = isAgencyPage 
    ? window.agencyCardsData 
    : (isPixelPage ? window.pixelCardsData : window.cathayCardsData);

  const cardsWrapper = document.getElementById('cards-stack-wrapper');
  const activeCounter = document.getElementById('active-card-counter');
  const progressBar = document.getElementById('scroll-progress-bar');
  const modal = document.getElementById('card-modal');
  const modalBox = document.getElementById('modal-box');
  const modalBody = document.getElementById('modal-body-content');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const viewModeSelector = document.getElementById('view-mode-selector');
  const categoryFilters = document.getElementById('category-filters');
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  const soundIcon = document.getElementById('sound-icon');
  const resetStackBtn = document.getElementById('reset-stack-btn');

  // Pre-order / Apply / Consultation buttons
  const preorderNavBtn = document.getElementById('preorder-nav-btn');
  const heroPreorderBtn = document.getElementById('hero-preorder-btn');
  const footerPreorderBtn = document.getElementById('footer-preorder-btn');

  let activeFilter = 'all';
  let activeMode = 'stack';
  let cards = [];
  let isTicking = false;

  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Bind click event handlers to DOM cards
  function bindCardEvents() {
    cards = Array.from(document.querySelectorAll('.portfolio-card-item'));
    cards.forEach(cardEl => {
      const cardId = cardEl.dataset.id;
      const card = cardsData.find(c => c.id === cardId);
      if (!card) return;

      const inspectBtn = cardEl.querySelector('.inspect-btn');
      const titleClick = cardEl.querySelector('.card-title-click');
      [inspectBtn, titleClick].forEach(btn => {
        if (btn && !btn.dataset.bound) {
          btn.dataset.bound = "true";
          btn.addEventListener('click', () => openCardModal(card));
        }
      });

      // Mouseenter audio & active state
      if (!cardEl.dataset.hoverBound) {
        cardEl.dataset.hoverBound = "true";
        cardEl.addEventListener('mouseenter', () => {
          if (activeMode === 'prestacked' && window.soundEngine) {
            window.soundEngine.playCardSlideSound();
          }
        });

        // Mobile tap to toggle card active state
        cardEl.addEventListener('click', (e) => {
          if (activeMode === 'prestacked' && !e.target.closest('.inspect-btn')) {
            cards.forEach(c => c.classList.remove('card-active'));
            cardEl.classList.add('card-active');
          }
        });
      }
    });
    updateCounterText();
    updateStackPhysics();
  }

  // Render cards dynamically when filter changes
  function renderCards(filter = 'all') {
    if (!cardsWrapper) return;

    activeFilter = filter;
    const filteredData = filter === 'all'
      ? cardsData
      : cardsData.filter(item => item.category === filter);

    if (filteredData.length === 0) {
      cardsWrapper.innerHTML = `
        <div class="py-16 text-center text-slate-400 font-mono">
          <i data-lucide="folder-open" class="w-10 h-10 mx-auto mb-3 opacity-50"></i>
          <p>No items found for category: "${filter}"</p>
        </div>
      `;
      if (window.lucide) lucide.createIcons();
      updateCounterText();
      return;
    }

    cardsWrapper.innerHTML = filteredData.map((item, index) => {
      const isCustomBg = isPixelPage || isAgencyPage;
      const badgeClasses = isCustomBg
        ? item.badgeColor
        : (index % 2 === 0
          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
          : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20');

      const btnGradient = isAgencyPage
        ? 'from-purple-500 via-indigo-500 to-pink-500'
        : (isPixelPage
          ? 'from-amber-400 via-orange-500 to-rose-500'
          : 'from-emerald-400 via-teal-500 to-cyan-500');

      return `
        <div class="portfolio-card-item w-full" style="--card-index: ${index};" data-id="${item.id}">
          <div class="portfolio-card-inner p-6 sm:p-7 flex flex-col lg:flex-row gap-6 items-stretch">
            
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-2">
                    <span class="card-number-badge"># ${item.number}</span>
                    <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${badgeClasses}">
                      ${item.badge}
                    </span>
                  </div>
                  <span class="text-xs font-mono text-slate-500">
                    ${isAgencyPage ? 'NEXUS STUDIO' : (isPixelPage ? 'PIXEL 11 DEMO' : '國泰世華信用卡')}
                  </span>
                </div>

                <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 hover:text-purple-300 transition-colors cursor-pointer card-title-click">
                  ${item.title}
                </h2>
                
                <p class="text-slate-300 text-sm font-light mb-4 leading-relaxed">
                  ${item.description}
                </p>
              </div>

              <div>
                <div class="grid grid-cols-3 gap-2 py-3 my-3 border-y border-white/10">
                  ${item.metrics.map(m => `
                    <div class="flex flex-col">
                      <span class="text-[10px] text-slate-400 font-mono">${m.label}</span>
                      <span class="text-sm sm:text-base font-bold text-white font-mono">${m.value}</span>
                    </div>
                  `).join('')}
                </div>

                <div class="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div class="flex flex-wrap gap-1.5">
                    ${item.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
                  </div>

                  <button class="inspect-btn text-xs font-semibold font-mono text-white bg-gradient-to-r ${btnGradient} px-4 py-2 rounded-full shadow-md hover:brightness-110 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95">
                    <span>${isAgencyPage ? 'View Case Breakdown' : (isPixelPage ? 'Explore Specs' : '查看卡片權益')}</span>
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="w-full lg:w-1/2 flex flex-col gap-3 justify-center">
              <div class="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden border border-white/15 shadow-xl group">
                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div class="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <span class="text-purple-400 font-bold">${item.badge}</span>
                  <span>${isAgencyPage ? 'CASE STUDY' : (isPixelPage ? 'PIXEL 11 PRO' : '國泰世華')}</span>
                </div>
              </div>

              ${item.promoImage ? `
                <div class="relative w-full h-24 sm:h-28 rounded-xl overflow-hidden border border-purple-400/30 shadow-lg group cursor-pointer" onclick="openCardModalByDataId('${item.id}')">
                  <img src="${item.promoImage}" alt="${item.promoBadge || 'FEATURE'}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors"></div>
                  <div class="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono font-bold text-white">
                    <span class="flex items-center gap-1 bg-purple-500/90 text-white px-2 py-0.5 rounded">
                      <i data-lucide="sparkles" class="w-3 h-3"></i>
                      ${item.promoBadge || 'SPECIAL HIGHLIGHT'}
                    </span>
                    <span class="text-purple-300 underline">Tap to View</span>
                  </div>
                </div>
              ` : ''}
            </div>

          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons();
    bindCardEvents();
  }

  // 60fps Scroll Physics Engine
  function updateStackPhysics() {
    if (activeMode !== 'stack') return;

    cards = Array.from(document.querySelectorAll('.portfolio-card-item'));
    if (cards.length === 0) return;

    const topOffset = 110;
    const gapStep = 28;

    cards.forEach((card, index) => {
      const stickyTop = topOffset + (index * gapStep);

      if (index < cards.length - 1) {
        const nextCard = cards[index + 1];
        const nextRect = nextCard.getBoundingClientRect();
        const overlapProgress = Math.max(0, Math.min(1, (stickyTop + 140 - nextRect.top) / 240));

        if (overlapProgress > 0) {
          const scale = 1 - (overlapProgress * 0.05);
          const opacity = 1 - (overlapProgress * 0.3);
          const blur = overlapProgress * 3;

          card.style.transform = `scale(${scale})`;
          card.style.opacity = `${opacity}`;
          card.style.filter = `blur(${blur}px)`;
        } else {
          card.style.transform = `scale(1)`;
          card.style.opacity = `1`;
          card.style.filter = `none`;
        }
      } else {
        card.style.transform = `scale(1)`;
        card.style.opacity = `1`;
        card.style.filter = `none`;
      }
    });

    updateScrollProgress();
  }

  // Update top scroll progress bar
  function updateScrollProgress() {
    if (!progressBar) return;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  }

  // Update active counter text
  function updateCounterText() {
    if (!activeCounter) return;
    const total = cards.length;
    if (total === 0) {
      activeCounter.textContent = '0 Cards';
      return;
    }

    const topOffset = 150;
    let activeIdx = 0;

    cards.forEach((card, idx) => {
      const rect = card.getBoundingClientRect();
      if (rect.top <= topOffset) {
        activeIdx = idx;
      }
    });

    const label = isAgencyPage ? 'Case' : (isPixelPage ? 'Feature' : 'Card');
    activeCounter.textContent = `${label} ${activeIdx + 1} / ${total}`;
  }

  // Passive throttled scroll listener
  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        updateStackPhysics();
        updateCounterText();
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });

  // View Mode Switcher
  if (viewModeSelector) {
    viewModeSelector.addEventListener('click', (e) => {
      const btn = e.target.closest('.view-mode-btn');
      if (!btn) return;

      const mode = btn.dataset.mode;
      if (mode === activeMode) return;

      activeMode = mode;
      viewModeSelector.querySelectorAll('.view-mode-btn').forEach(b => {
        b.classList.remove('active', 'bg-emerald-500/20', 'bg-amber-500/20', 'bg-purple-500/20', 'border', 'border-emerald-400/40', 'border-amber-400/40', 'border-purple-400/40', 'text-slate-200');
        b.classList.add('text-slate-400');
      });

      const activeColor = isAgencyPage ? 'purple' : (isPixelPage ? 'amber' : 'emerald');
      btn.classList.add('active', `bg-${activeColor}-500/20`, 'border', `border-${activeColor}-400/40`, 'text-slate-200');
      btn.classList.remove('text-slate-400');

      const portfolioSection = document.getElementById('portfolio-section');
      if (portfolioSection) portfolioSection.classList.remove('has-horizontal');

      if (!cardsWrapper) return;
      cardsWrapper.classList.remove('stack-mode', 'grid-mode', 'prestacked-mode', 'horizontal-mode');

      if (activeMode === 'grid') {
        cardsWrapper.classList.add('grid-mode');
        cards.forEach(card => {
          card.style.transform = 'none';
          card.style.opacity = '1';
          card.style.filter = 'none';
        });
      } else if (activeMode === 'prestacked') {
        cardsWrapper.classList.add('prestacked-mode');
        cards.forEach(card => {
          card.style.transform = '';
          card.style.opacity = '';
          card.style.filter = '';
        });
      } else if (activeMode === 'horizontal') {
        cardsWrapper.classList.add('horizontal-mode');
        if (portfolioSection) portfolioSection.classList.add('has-horizontal');
        cards.forEach(card => {
          card.style.transform = '';
          card.style.opacity = '';
          card.style.filter = '';
        });
      } else {
        cardsWrapper.classList.add('stack-mode');
        updateStackPhysics();
      }

      if (window.soundEngine) window.soundEngine.playClickSound();
    });
  }

  // Category Filters
  if (categoryFilters) {
    categoryFilters.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      const filter = btn.dataset.filter;
      if (filter === activeFilter) return;

      categoryFilters.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active', 'bg-emerald-500', 'bg-amber-500', 'bg-purple-500', 'text-slate-950', 'text-white', 'shadow-md');
        b.classList.add('text-slate-400');
      });

      const activeBg = isAgencyPage ? 'bg-purple-500 text-white' : (isPixelPage ? 'bg-amber-500 text-slate-950' : 'bg-emerald-500 text-slate-950');
      btn.classList.add('active', ...activeBg.split(' '), 'shadow-md');
      btn.classList.remove('text-slate-400');

      renderCards(filter);
      if (window.soundEngine) window.soundEngine.playCardSlideSound();
    });
  }

  // Theme Toggle Button Handler (Dark / Bright Light Mode)
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      document.body.classList.add('light');
      if (themeIcon) themeIcon.setAttribute('data-lucide', 'sun');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      document.body.classList.remove('light');
      if (themeIcon) themeIcon.setAttribute('data-lucide', 'moon');
    }
    if (window.lucide) lucide.createIcons();
  }

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.documentElement.classList.contains('light');
      const newTheme = isLight ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
      if (window.soundEngine) window.soundEngine.playClickSound();
    });
  }

  // Reset Stack Button
  if (resetStackBtn) {
    resetStackBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.soundEngine) window.soundEngine.playClickSound();
    });
  }

  // Open Modal by Card Object
  function openCardModal(card) {
    if (!modal || !modalBody || !modalBox) return;

    const accentColor = isAgencyPage ? 'purple' : (isPixelPage ? 'amber' : 'emerald');

    modalBody.innerHTML = `
      <div class="space-y-6">
        <div class="flex items-center justify-between border-b border-white/10 pb-4">
          <span class="text-xs font-mono px-3 py-1 rounded-full ${card.badgeColor}">
            ${card.badge}
          </span>
          <span class="text-xs font-mono text-slate-400"># ${card.number}</span>
        </div>

        <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">${card.title}</h2>
        <p class="text-sm font-medium text-${accentColor}-300">${card.subtitle || ''}</p>

        <div class="relative w-full h-56 rounded-2xl overflow-hidden border border-white/15 shadow-xl">
          <img src="${card.image}" alt="${card.title}" class="w-full h-full object-cover" />
        </div>

        <div class="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
          <h3 class="text-sm font-bold text-white mb-2 flex items-center gap-2">
            <i data-lucide="sparkles" class="w-4 h-4 text-${accentColor}-400"></i>
            <span>${card.deepDive ? card.deepDive.headline : 'Overview'}</span>
          </h3>
          <p class="text-xs text-slate-300 leading-relaxed mb-3">
            ${card.deepDive ? card.deepDive.details : card.description}
          </p>

          ${card.deepDive && card.deepDive.specs ? `
            <ul class="space-y-2 text-xs text-slate-300">
              ${card.deepDive.specs.map(spec => `
                <li class="flex items-start gap-2">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-${accentColor}-400 shrink-0 mt-0.5"></i>
                  <span>${spec}</span>
                </li>
              `).join('')}
            </ul>
          ` : ''}
        </div>

        <div class="flex items-center justify-between pt-2">
          <button onclick="openPreorderModal()" class="w-full py-3.5 rounded-full bg-gradient-to-r from-${accentColor}-400 to-${accentColor}-600 text-slate-950 font-extrabold text-xs shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
            <span>${isAgencyPage ? 'Start a Project Consultation' : (isPixelPage ? 'Reserve Demo Unit' : '立即線上申辦')}</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `;

    if (window.lucide) lucide.createIcons();

    modal.classList.remove('opacity-0', 'pointer-events-none');
    modalBox.classList.remove('scale-95');
    modalBox.classList.add('scale-100');
    document.body.classList.add('modal-open');
    if (window.soundEngine) window.soundEngine.playCardSlideSound();
  }

  window.openCardModalByDataId = function(id) {
    const card = cardsData.find(c => c.id === id);
    if (card) openCardModal(card);
  };

  // Pre-order / Apply / Consultation Form Modal
  window.openPreorderModal = function() {
    if (!modal || !modalBody || !modalBox) return;

    if (isAgencyPage) {
      modalBody.innerHTML = `
        <div class="space-y-5">
          <div class="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <span class="text-[10px] font-mono text-purple-400 uppercase tracking-widest">NEXUS CREATIVE STUDIO</span>
              <h2 class="text-2xl font-bold text-white tracking-tight">Project Consultation</h2>
            </div>
            <span class="text-purple-400 font-mono font-bold text-xs">Awwwards Agency 2026</span>
          </div>

          <form id="agency-contact-form" class="space-y-3" onsubmit="confirmOrder(event)">
            <div>
              <label class="block text-xs font-mono text-slate-400 mb-1">Project Discipline</label>
              <select class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-purple-500">
                <option>Spatial UI/UX Operating System</option>
                <option>3D Motion & Realtime AR Cockpit</option>
                <option>Web3 FinTech & Neo-Banking App</option>
                <option>Spatial E-Commerce & 3D WebGL Fitting</option>
                <option>Enterprise SaaS Observability Platform</option>
              </select>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
                <input type="text" required placeholder="Alex Vance" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:outline-none focus:border-purple-500" />
              </div>
              <div>
                <label class="block text-xs font-mono text-slate-400 mb-1">Company / Studio</label>
                <input type="text" required placeholder="Aether Labs Inc." class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:outline-none focus:border-purple-500" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-mono text-slate-400 mb-1">Work Email</label>
              <input type="email" required placeholder="alex@aetherlabs.io" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:outline-none focus:border-purple-500" />
            </div>

            <button type="submit" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 text-white font-extrabold text-xs shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
              <i data-lucide="sparkles" class="w-4 h-4"></i>
              <span>Book Design Consultation</span>
            </button>
          </form>
        </div>
      `;
    } else if (isPixelPage) {
      modalBody.innerHTML = `
        <div class="space-y-5">
          <div class="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <span class="text-[10px] font-mono text-amber-400 uppercase tracking-widest">DEMO RESERVATION</span>
              <h2 class="text-2xl font-bold text-white tracking-tight">Google Pixel 11 Pro</h2>
            </div>
            <span class="text-amber-400 font-mono font-bold text-xs">FROM $1,099</span>
          </div>

          <form id="pixel-preorder-form" class="space-y-3" onsubmit="confirmOrder(event)">
            <div>
              <label class="block text-xs font-mono text-slate-400 mb-1">Model & Storage</label>
              <select class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-amber-500">
                <option>Pixel 11 Pro 256GB — Obsidian Titanium ($1,099)</option>
                <option>Pixel 11 Pro 512GB — Quantum Amber ($1,299)</option>
                <option>Pixel 11 Pro 1TB — Cyber Rose ($1,499)</option>
              </select>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-mono text-slate-400 mb-1">Full Name</label>
                <input type="text" required placeholder="John Doe" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500" />
              </div>
              <div>
                <label class="block text-xs font-mono text-slate-400 mb-1">Email</label>
                <input type="email" required placeholder="john@example.com" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500" />
              </div>
            </div>

            <button type="submit" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-slate-950 font-extrabold text-xs shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
              <i data-lucide="shopping-bag" class="w-4 h-4"></i>
              <span>Confirm Demo Reservation</span>
            </button>
          </form>
        </div>
      `;
    } else {
      modalBody.innerHTML = `
        <div class="space-y-5">
          <div class="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <span class="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">國泰世華銀行 線上申辦</span>
              <h2 class="text-2xl font-bold text-white tracking-tight">申辦信用卡資料確認</h2>
            </div>
            <span class="text-emerald-400 font-mono font-bold text-xs">最快 3 分鐘核卡</span>
          </div>

          <form id="cathay-apply-form" class="space-y-3" onsubmit="confirmOrder(event)">
            <div>
              <label class="block text-xs font-mono text-slate-400 mb-1">申辦卡片</label>
              <select class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-emerald-500">
                <option>國泰世華 CUBE 卡 (最高 3.3% 小樹點無上限)</option>
                <option>亞洲萬里通聯名卡 (哩程最優 NT$10=1里)</option>
                <option>蝦皮購物聯名卡 (最高 26% 蝦幣回饋)</option>
                <option>國泰世華 世界卡 (米其林美饌 2人5折)</option>
                <option>長榮航空聯名卡 (官網購票 9 折起)</option>
              </select>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-mono text-slate-400 mb-1">中文姓名</label>
                <input type="text" required placeholder="王大明" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label class="block text-xs font-mono text-slate-400 mb-1">身分證字號</label>
                <input type="text" required placeholder="A123456789" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-mono text-slate-400 mb-1">行動電話</label>
              <input type="tel" required placeholder="0900-000-000" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500" />
            </div>

            <button type="submit" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 text-slate-950 font-extrabold text-xs shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
              <i data-lucide="check-circle-2" class="w-4 h-4"></i>
              <span>送出線上申辦申請</span>
            </button>
          </form>
        </div>
      `;
    }

    if (window.lucide) lucide.createIcons();

    modal.classList.remove('opacity-0', 'pointer-events-none');
    modalBox.classList.remove('scale-95');
    modalBox.classList.add('scale-100');
    document.body.classList.add('modal-open');
  };

  window.confirmOrder = function(e) {
    if (e) e.preventDefault();
    if (isAgencyPage) {
      alert("🎉 Thank you for booking a consultation with NEXUS CREATIVE STUDIO! Our design directors will contact you within 24 hours.");
    } else if (isPixelPage) {
      alert("🎉 Congratulations! Your Google Pixel 11 Pro pre-order reservation has been successfully registered!");
    } else {
      alert("🎉 恭喜！您已成功送出國泰世華信用卡線上申辦申請！");
    }
    closeModal();
  };

  [preorderNavBtn, heroPreorderBtn, footerPreorderBtn].forEach(btn => {
    if (btn) btn.addEventListener('click', openPreorderModal);
  });

  function closeModal() {
    if (!modal) return;
    modal.classList.add('opacity-0', 'pointer-events-none');
    modalBox.classList.remove('scale-100');
    modalBox.classList.add('scale-95');
    document.body.classList.remove('modal-open');
    if (window.soundEngine) window.soundEngine.playClickSound();
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Sound Toggle Button
  if (soundToggleBtn && soundIcon) {
    soundToggleBtn.addEventListener('click', () => {
      if (!window.soundEngine) return;
      const isMuted = window.soundEngine.toggleMute();
      if (isMuted) {
        soundIcon.setAttribute('data-lucide', 'volume-x');
        soundToggleBtn.classList.remove('text-purple-400', 'text-amber-400', 'text-emerald-400');
        soundToggleBtn.classList.add('text-slate-400');
      } else {
        soundIcon.setAttribute('data-lucide', 'volume-2');
        const activeColor = isAgencyPage ? 'purple' : (isPixelPage ? 'amber' : 'emerald');
        soundToggleBtn.classList.add(`text-${activeColor}-400`);
        soundToggleBtn.classList.remove('text-slate-400');
        window.soundEngine.playClickSound();
      }
      if (window.lucide) lucide.createIcons();
    });
  }

  // Initial setup
  bindCardEvents();
});
