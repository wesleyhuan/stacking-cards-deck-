/**
 * Universal Stacking Cards Engine
 * Automatically detects whether page is Google Pixel 11 Pro (pixel11.html) or Cathay Bank (index.html)
 */

document.addEventListener('DOMContentLoaded', () => {
  const isPixelPage = window.location.pathname.includes('pixel11.html');
  const cardsData = isPixelPage ? window.pixelCardsData : window.cathayCardsData;

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

  // Pre-order / Apply buttons
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
    });
    updateCounterText();
    updateStackPhysics();
  }

  // Render cards dynamically when filter changes
  function renderCards(filter = 'all') {
    cardsWrapper.innerHTML = '';
    const filteredData = cardsData.filter(card => filter === 'all' || card.category === filter);

    if (filteredData.length === 0) {
      cardsWrapper.innerHTML = `
        <div class="text-center py-16 text-slate-400">
          <i data-lucide="${isPixelPage ? 'smartphone' : 'credit-card'}" class="w-10 h-10 mx-auto mb-2 text-slate-600"></i>
          <p class="text-sm">${isPixelPage ? 'No features in this category.' : '此分類暫無卡片。'}</p>
        </div>
      `;
      if (window.lucide) lucide.createIcons();
      return;
    }

    filteredData.forEach((card, index) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'portfolio-card-item w-full';
      cardEl.style.setProperty('--card-index', index);
      cardEl.dataset.id = card.id;

      cardEl.innerHTML = `
        <div class="portfolio-card-inner p-6 sm:p-7 flex flex-col lg:flex-row gap-6 items-stretch">
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2">
                  <span class="card-number-badge"># ${card.number}</span>
                  <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${card.badgeColor}">
                    ${card.badge}
                  </span>
                </div>
                <span class="text-xs font-mono text-slate-500">${isPixelPage ? 'PIXEL 11 PRO' : 'CATHAY BANK'}</span>
              </div>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 hover:text-amber-300 transition-colors cursor-pointer card-title-click">
                ${card.title}
              </h2>
              <p class="text-slate-300 text-sm font-light mb-4 leading-relaxed">
                ${card.description}
              </p>
            </div>

            <div>
              <div class="grid grid-cols-3 gap-2 py-3 my-3 border-y border-white/10">
                ${card.metrics.map(m => `
                  <div class="flex flex-col">
                    <span class="text-[10px] text-slate-400 font-mono">${m.label}</span>
                    <span class="text-sm sm:text-base font-bold text-white font-mono">${m.value}</span>
                  </div>
                `).join('')}
              </div>
              <div class="flex flex-wrap items-center justify-between gap-3 pt-1">
                <div class="flex flex-wrap gap-1.5">
                  ${card.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                </div>
                <button class="inspect-btn text-xs font-semibold font-mono text-white bg-gradient-to-r ${card.color} px-4 py-2 rounded-full shadow-md hover:brightness-110 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95">
                  <span>${isPixelPage ? 'Explore Specs' : '查看詳細權益'}</span>
                  <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="w-full lg:w-1/2 flex flex-col gap-3 justify-center">
            <div class="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden border border-white/15 shadow-xl group">
              <img src="${card.image}" alt="${card.title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
                <span class="text-amber-400 font-bold">${card.badge}</span>
                <span>${isPixelPage ? 'PIXEL 11 PRO' : '國泰世華'}</span>
              </div>
            </div>
            <div class="relative w-full h-24 sm:h-28 rounded-xl overflow-hidden border border-amber-400/30 shadow-lg group cursor-pointer" onclick="openCardModalByDataId('${card.id}')">
              <img src="${card.promoImage}" alt="${card.promoBadge}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors"></div>
              <div class="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono font-bold text-white">
                <span class="flex items-center gap-1 bg-amber-500/90 text-slate-950 px-2 py-0.5 rounded">
                  <i data-lucide="sparkles" class="w-3 h-3"></i>
                  ${card.promoBadge}
                </span>
                <span class="text-amber-300 underline">${isPixelPage ? 'Tap to View' : '點擊查看詳情'}</span>
              </div>
            </div>
          </div>
        </div>
      `;

      cardsWrapper.appendChild(cardEl);
    });

    if (window.lucide) lucide.createIcons();
    bindCardEvents();
  }

  window.openCardModalByDataId = function(cardId) {
    const card = cardsData.find(c => c.id === cardId);
    if (card) openCardModal(card);
  };

  // Update Scroll Physics
  function updateStackPhysics() {
    if (activeMode !== 'stack' || cards.length === 0) return;

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

    updateActiveCardCounter();
  }

  // Update Active Card Counter
  function updateActiveCardCounter() {
    if (cards.length === 0 || !activeCounter) return;
    let activeIdx = 0;
    const topOffset = 150;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      if (rect.top <= topOffset + 50) {
        activeIdx = index;
      }
    });

    activeCounter.textContent = `${isPixelPage ? 'Feature' : '卡片'} ${activeIdx + 1} / ${cards.length}`;
  }

  function updateCounterText() {
    if (activeCounter) activeCounter.textContent = `${isPixelPage ? 'Feature' : '卡片'} 1 / ${cards.length}`;
  }

  // Scroll Progress Bar Update
  function updateProgressBar() {
    if (!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.max(0, Math.min(100, (scrollTop / docHeight) * 100));
    progressBar.style.width = `${progress}%`;
  }

  // Throttled Scroll Listener
  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        updateStackPhysics();
        updateProgressBar();
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', updateStackPhysics);

  // Category Filters Event Handler
  if (categoryFilters) {
    categoryFilters.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      const activeColorClass = isPixelPage ? 'bg-amber-500' : 'bg-emerald-500';

      categoryFilters.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active', 'bg-amber-500', 'bg-emerald-500', 'text-slate-950', 'shadow-md');
        b.classList.add('text-slate-400');
      });

      btn.classList.add('active', activeColorClass, 'text-slate-950', 'shadow-md');
      btn.classList.remove('text-slate-400');

      activeFilter = btn.dataset.filter;
      if (window.soundEngine) window.soundEngine.playCardStackSound(500, 0.05);

      renderCards(activeFilter);
    });
  }

  // View Mode Switcher (Stack vs Grid)
  if (viewModeSelector) {
    viewModeSelector.addEventListener('click', (e) => {
      const btn = e.target.closest('.view-mode-btn');
      if (!btn) return;

      const activeClass = isPixelPage ? 'bg-amber-500/20' : 'bg-emerald-500/20';

      viewModeSelector.querySelectorAll('.view-mode-btn').forEach(b => {
        b.classList.remove('active', 'bg-amber-500/20', 'bg-emerald-500/20', 'border', 'border-amber-400/40', 'border-emerald-400/40', 'text-slate-200');
        b.classList.add('text-slate-400');
      });

      btn.classList.add('active', activeClass, 'border', 'text-slate-200');
      btn.classList.remove('text-slate-400');

      activeMode = btn.dataset.mode;
      if (window.soundEngine) window.soundEngine.playCardStackSound(600, 0.05);

      if (activeMode === 'grid') {
        cardsWrapper.classList.remove('stack-mode');
        cardsWrapper.classList.add('grid-mode');
        cards.forEach(c => {
          c.style.transform = 'none';
          c.style.opacity = '1';
          c.style.filter = 'none';
        });
      } else {
        cardsWrapper.classList.remove('grid-mode');
        cardsWrapper.classList.add('stack-mode');
        updateStackPhysics();
      }
    });
  }

  // Open Card Modal
  function openCardModal(card) {
    if (!modal || !modalBody) return;
    if (window.soundEngine) window.soundEngine.playModalOpen();

    modalBody.innerHTML = `
      <div class="space-y-5">
        <div class="flex items-center justify-between pb-3 border-b border-white/10">
          <div>
            <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${card.badgeColor} mb-1 inline-block">
              ${card.badge}
            </span>
            <h2 class="text-2xl font-bold text-white tracking-tight">${card.title}</h2>
          </div>
          <span class="card-number-badge text-base"># ${card.number}</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="rounded-xl overflow-hidden border border-white/15 h-44">
            <img src="${card.image}" alt="${card.title}" class="w-full h-full object-cover" />
          </div>
          <div class="rounded-xl overflow-hidden border border-amber-400/30 h-44 relative">
            <img src="${card.promoImage}" alt="${card.promoBadge}" class="w-full h-full object-cover" />
            <div class="absolute bottom-2 left-2 bg-amber-500 text-slate-950 font-bold font-mono text-[9px] px-2 py-0.5 rounded">
              ${card.promoBadge}
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-bold text-amber-300 mb-1">${card.deepDive.headline}</h3>
          <p class="text-slate-300 text-xs leading-relaxed">${card.deepDive.details}</p>
        </div>

        <div>
          <h4 class="text-[10px] font-mono text-cyan-400 uppercase font-bold tracking-wider mb-2">
            ${isPixelPage ? 'DETAILED TECHNICAL SPECIFICATIONS' : '卡片核心權益與優惠說明'}
          </h4>
          <ul class="space-y-1.5">
            ${card.deepDive.specs.map(spec => `
              <li class="flex items-start gap-2 text-xs text-slate-300">
                <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"></i>
                <span>${spec}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="flex items-center justify-between pt-3 border-t border-white/10">
          <button id="modal-close-btn-inner" class="px-5 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors">
            ${isPixelPage ? 'Close' : '關閉'}
          </button>
          <button onclick="openPreorderModal()" class="px-5 py-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-extrabold text-xs shadow-md hover:brightness-110 transition-all">
            ${isPixelPage ? 'Pre-order Pixel 11 Pro' : '立即申辦卡片'}
          </button>
        </div>
      </div>
    `;

    if (window.lucide) lucide.createIcons();

    modal.classList.remove('opacity-0', 'pointer-events-none');
    modalBox.classList.remove('scale-95');
    modalBox.classList.add('scale-100');
    document.body.classList.add('modal-open');

    const innerCloseBtn = document.getElementById('modal-close-btn-inner');
    if (innerCloseBtn) innerCloseBtn.addEventListener('click', closeModal);
  }

  // Pre-order / Application Modal
  window.openPreorderModal = function() {
    if (!modal || !modalBody) return;
    if (window.soundEngine) window.soundEngine.playModalOpen();

    if (isPixelPage) {
      modalBody.innerHTML = `
        <div class="space-y-5">
          <div class="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-full border bg-amber-500/10 text-amber-300 border-amber-500/20 mb-1 inline-block">
                GOOGLE STORE OFFICIAL PROMOTION
              </span>
              <h2 class="text-2xl font-bold text-white tracking-tight">Pre-order Google Pixel 11 Pro</h2>
            </div>
            <span class="text-amber-400 font-mono font-bold">FROM $1,099</span>
          </div>

          <div>
            <label class="block text-xs font-mono text-slate-400 mb-1.5">1. CHOOSE FLAGSHIP MODEL</label>
            <div class="grid grid-cols-2 gap-3">
              <button class="p-3 rounded-xl bg-slate-800 border-2 border-amber-400 text-left">
                <div class="text-xs font-bold text-white">Pixel 11 Pro (6.8")</div>
                <div class="text-[10px] text-slate-400">$1,099 or $45.79/mo</div>
              </button>
              <button class="p-3 rounded-xl bg-slate-900 border border-white/10 text-left hover:border-white/20">
                <div class="text-xs font-bold text-white">Pixel 11 Pro Max (6.9")</div>
                <div class="text-[10px] text-slate-400">$1,199 or $49.95/mo</div>
              </button>
            </div>
          </div>

          <div>
            <label class="block text-xs font-mono text-slate-400 mb-1.5">2. CHOOSE STORAGE</label>
            <div class="grid grid-cols-4 gap-2 text-center text-xs font-mono">
              <button class="py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold">256GB</button>
              <button class="py-2.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:border-white/20">512GB</button>
              <button class="py-2.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:border-white/20">1TB</button>
              <button class="py-2.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:border-white/20">2TB Ultra</button>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
            <div class="flex justify-between text-xs">
              <span class="text-slate-400">Pixel 11 Pro (256GB, Titanium Obsidian):</span>
              <span class="text-white font-bold">$1,099.00</span>
            </div>
            <div class="flex justify-between text-xs">
              <span class="text-slate-400">Launch Pre-order Google Store Bonus:</span>
              <span class="text-emerald-400 font-bold">-$250.00 Credit</span>
            </div>
            <div class="flex justify-between text-xs pt-2 border-t border-white/10 font-bold">
              <span class="text-white">Total Due Today:</span>
              <span class="text-amber-400">$1,099.00</span>
            </div>
          </div>

          <button onclick="confirmOrder()" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-slate-950 font-extrabold text-xs shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
            <i data-lucide="shopping-bag" class="w-4 h-4"></i>
            <span>Complete Pixel 11 Pro Pre-order</span>
          </button>
        </div>
      `;
    } else {
      modalBody.innerHTML = `
        <div class="space-y-5">
          <div class="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-full border bg-emerald-500/10 text-emerald-300 border-emerald-500/20 mb-1 inline-block">
                國泰世華銀行 線上快速申辦
              </span>
              <h2 class="text-2xl font-bold text-white tracking-tight">申辦信用卡資料確認</h2>
            </div>
            <span class="text-emerald-400 font-mono font-bold">最快 3 分鐘核卡</span>
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
    if (isPixelPage) {
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
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      if (!window.soundEngine) return;
      const isEnabled = window.soundEngine.toggle();
      if (isEnabled) {
        soundToggleBtn.classList.add('bg-amber-600/30', 'text-amber-300', 'border-amber-400/40');
        soundIcon.setAttribute('data-lucide', 'volume-2');
      } else {
        soundToggleBtn.classList.remove('bg-amber-600/30', 'text-amber-300', 'border-amber-400/40');
        soundIcon.setAttribute('data-lucide', 'volume-x');
      }
      if (window.lucide) lucide.createIcons();
    });
  }

  // Reset Deck Button
  if (resetStackBtn) {
    resetStackBtn.addEventListener('click', () => {
      const portfolioSection = document.getElementById('portfolio-section');
      if (portfolioSection) portfolioSection.scrollIntoView({ behavior: 'smooth' });
      if (window.soundEngine) window.soundEngine.playCardStackSound(700, 0.06);
    });
  }

  // Initial Hydration
  bindCardEvents();
  updateProgressBar();
});
