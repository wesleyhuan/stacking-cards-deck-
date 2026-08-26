---
name: stacking-cards-design
description: >-
  Use this skill to design, build, or convert any landing page or showcase website
  into an interactive 3D Stacking Cards experience. Supports 4 view modes out of the box:
  (1) Scroll Stacking Deck (cards stack as you scroll down), (2) Vertical Pre-Stacked Deck
  (cards pre-stacked in 1 section with hover pop-out), (3) Horizontal Pre-Stacked Deck
  (cards pre-stacked horizontally with hover pop-out), and (4) Responsive Grid View.
  Instructs the agent to prompt the user to choose their preferred layout style before building.
---

# 3D Stacking Cards Web Design Skill

This skill provides a complete blueprint and procedural guide for creating high-impact **3D Stacking Cards** landing pages, portfolio showcases, and product launch websites.

---

## ❓ 1. Interactive Style Prompting Protocol

When activating this skill to build or convert a website for a user, **the AI agent MUST FIRST prompt the user** to choose their preferred initial card layout style:

> **Agent Prompt Question**:
> *"Which 3D Stacking Card style would you like for your website layout?"*
> 
> 1. 📜 **Scroll Stacking Deck** (`stack`) — Cards stack dynamically over each other as you scroll down the page. (Best for storytelling & long feature pages).
> 2. 🎴 **Vertical Pre-Stacked Deck** (`prestacked`) — Cards are pre-stacked in 1 compact section (height ~560px), popping out when hovered. (Best for compact hero sections & portfolios).
> 3. 🖼️ **Horizontal Pre-Stacked Deck** (`horizontal`) — Full-sized cards pre-stacked in a horizontal overlapping fan, popping up/out when hovered. (Best for gallery showcases & mobile decks).
> 4. 🔲 **Responsive Grid View** (`grid`) — Standard side-by-side grid layout without card overlap.

Once the user selects their option, set `let activeMode` in `js/app.js` to the chosen mode (`'stack'`, `'prestacked'`, `'horizontal'`, or `'grid'`).

---

## 🔀 2. Supported Interaction Modes Matrix

The framework supports **4 interchangeable view modes** out of the box:

| View Mode | Class Name | Interaction & Behavior | Best Used For |
| :--- | :--- | :--- | :--- |
| **1. Scroll Stack** | `.stack-mode` | Cards stack dynamically on scroll via CSS sticky + 60fps physics (`scale`, `opacity`, `blur`). | Long landing pages, feature walkthroughs, storytelling. |
| **2. Vertical Pre-Stacked Deck** | `.prestacked-mode` | Cards pre-stacked in **1 compact vertical section** (height ~560px). Hovering pops card up to front. | Compact portfolio sections, compact hero showcases. |
| **3. Horizontal Pre-Stacked Deck** | `.horizontal-mode` | Full-sized cards pre-stacked in a **horizontal overlapping fan deck**. Hovering pops card up/out. | Mobile swipe decks, gallery showcases, card fan decks. |
| **4. Responsive Grid** | `.grid-mode` | Standard 2-column responsive layout without stacking overlap. | Traditional browsing, quick comparison across all items. |

---

## 📐 3. Scroll Physics & Sticky Math Formula

For **Scroll Stack Mode** (`.stack-mode`):
- **Sticky Offset Formula**:
  $$\text{top} = \text{headerOffset} + (\text{cardIndex} \times \text{gapStep})$$
  Example: `top: calc(110px + var(--card-index) * 28px);`
- **60fps Overlap Physics**:
  Calculated in `requestAnimationFrame`:
  - **Scale**: `scale(1.0 -> 0.95)`
  - **Opacity**: `opacity(1.0 -> 0.70)`
  - **Depth Blur**: `blur(0px -> 3px)`

---

## 🃏 4. Pre-Stacked Hover & Pop-Out Math Formula

For **Vertical Pre-Stacked Mode** (`.prestacked-mode`):
- **Container Height**: Fixed compact section height (`height: 560px`).
- **Card Offset**: `top: calc(var(--card-index) * 60px);`
- **Hover Pop-Out**: `z-index: 100 !important; transform: translateY(-45px) scale(1.03);`

For **Horizontal Pre-Stacked Mode** (`.horizontal-mode`):
- **Card Overlap**: `flex: 0 0 680px; margin-left: -520px;` (preserves full original card shape).
- **Hover Pop-Out**: `z-index: 100 !important; transform: translateY(-40px) scale(1.02);`

---

## 🛠️ 5. HTML Markup Template

Every card element must be wrapped in `.portfolio-card-item` with inline style `--card-index`:

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

## 🚀 6. Configuring Initial Default Mode

In `js/app.js`, set `let activeMode` based on the user's answer from the interactive prompt:

```javascript
// User's choice from prompt: 'stack', 'prestacked', 'horizontal', or 'grid'
let activeMode = 'stack'; 
```

---

## ☀️ 7. Bright Light & Dark Mode Support

Include Theme Toggle button handler in `js/app.js` with `localStorage` persistence:
- Adds `.light` class to `<html>` and `<body>` when Bright mode is selected.
- Automatically adjusts background colors, glass card gradients, text contrast, and modal drawers.
