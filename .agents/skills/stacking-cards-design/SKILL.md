---
name: stacking-cards-design
description: >-
  Use this skill to design, build, or convert any landing page or showcase website
  into an interactive 3D Stacking Cards scroll experience. Provides step-by-step
  instructions, CSS sticky positioning math, 60fps requestAnimationFrame scroll physics
  (scaling, opacity dimming, depth blur), dual-view mode switching (Stack vs Grid),
  category filtering, progressive HTML fallback hydration, and modal drawer integration.
---

# 3D Stacking Cards Web Design Skill

This skill provides a complete blueprint and procedural guide for creating high-impact **3D Stacking Cards** landing pages and showcase websites.

---

## 📐 1. Architecture & Math Principle

The Stacking Cards effect relies on **CSS Sticky Positioning** coupled with **JS Scroll Physics**:

1. **Parent Wrapper**: Must have a relative position and sufficient bottom padding (`pb-40`) to allow scrolling past all cards.
2. **Sticky Top Formula**:
   $$\text{top} = \text{headerOffset} + (\text{cardIndex} \times \text{gapStep})$$
   Example: `top: calc(110px + var(--card-index) * 28px);`
3. **Scroll Overlap Physics**:
   As the user scrolls, lower cards slide up over previous cards. `requestAnimationFrame` calculates the overlap ratio and dynamically applies:
   - **Scale**: `scale(1.0 -> 0.95)`
   - **Opacity**: `opacity(1.0 -> 0.70)`
   - **Filter**: `blur(0px -> 3px)`

---

## 🛠️ 2. HTML Markup Template

Every card element must be wrapped in `.portfolio-card-item` with a inline style for `--card-index`:

```html
<main id="portfolio-section" class="py-8 px-4 sm:px-6 max-w-4xl mx-auto">
  <div id="cards-stack-wrapper" class="stack-mode flex flex-col gap-8 relative pb-40">
    
    <!-- CARD 01 -->
    <div class="portfolio-card-item w-full" style="--card-index: 0;" data-id="card-1">
      <div class="portfolio-card-inner p-6 sm:p-7 flex flex-col lg:flex-row gap-6 items-stretch">
        <!-- Left Side: Copy & Specs -->
        <div class="flex-1 flex flex-col justify-between">
          <div>
            <span class="card-number-badge"># 01</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white card-title-click">Card Title</h2>
            <p class="text-slate-300 text-sm">Card detailed description...</p>
          </div>
          <button class="inspect-btn text-xs font-semibold px-4 py-2 rounded-full">
            Explore Details
          </button>
        </div>
        <!-- Right Side: Graphic Gallery -->
        <div class="w-full lg:w-1/2 flex flex-col gap-3">
          <img src="assets/images/card_main.jpg" alt="Feature Image" class="w-full h-44 object-cover rounded-2xl" />
        </div>
      </div>
    </div>

  </div>
</main>
```

---

## 🎨 3. Essential CSS Stylesheet (`css/styles.css`)

```css
/* Stack Mode Sticky Calculation */
.stack-mode .portfolio-card-item {
  position: sticky;
  top: calc(110px + var(--card-index) * 28px);
  transition: transform 0.15s ease-out, opacity 0.15s ease-out, filter 0.15s ease-out;
  will-change: transform, opacity, filter;
  z-index: calc(10 + var(--card-index));
}

.portfolio-card-inner {
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 1.5rem;
  box-shadow: 0 20px 50px -12px rgba(0, 0, 0, 0.5);
}

/* Grid Mode Override */
.grid-mode {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  padding-bottom: 2rem !important;
}

.grid-mode .portfolio-card-item {
  position: relative !important;
  top: 0 !important;
  transform: none !important;
  opacity: 1 !important;
  filter: none !important;
}
```

---

## ⚡ 4. 60fps Scroll Physics Engine (`js/app.js`)

```javascript
function updateStackPhysics() {
  const cards = Array.from(document.querySelectorAll('.portfolio-card-item'));
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
    }
  });
}

// 60fps Throttled Scroll Listener
let isTicking = false;
window.addEventListener('scroll', () => {
  if (!isTicking) {
    window.requestAnimationFrame(() => {
      updateStackPhysics();
      isTicking = false;
    });
    isTicking = true;
  }
}, { passive: true });
```

---

## 🚀 5. Progressive Fallback Best Practice

To guarantee **100% immediate rendering** on any browser environment without waiting for client-side JS generation:
1. Always write the initial 5 cards as static HTML inside `#cards-stack-wrapper` in `index.html`.
2. On DOM load, `app.js` automatically binds click listeners and scroll physics to existing DOM cards.
3. If category filters are clicked, `renderCards(filter)` dynamically updates the stack.

---

## ⚖️ 6. Portfolio & Legal Compliance Disclaimer

When building showcases featuring real-world brands or products (e.g. Credit Cards, Smartphones, Automotive):
- Include a top notice bar: `【UNOFFICIAL CONCEPT DEMO】 This website is a UI/UX portfolio concept...`
- Include a detailed footer disclaimer box clarifying ownership and immediate takedown policy upon request.
