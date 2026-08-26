# 🃏 3D Stacking Cards Web Design Framework

An ultra-sleek, high-performance **3D Stacking Cards Scroll Experience** framework designed for product landing pages, commercial marketing showcases, SaaS feature decks, and luxury e-commerce.

Built with **HTML5, Tailwind CSS, Vanilla JavaScript, Lucide Icons**, and an integrated **WebAudio Synth Engine**.

---

## 🌐 Live Google Cloud Platform (GCP) Deployment

All three interactive showcase websites are deployed live on **Google Cloud App Engine**:

1. 🎨 **NEXUS CREATIVE STUDIO — Design & 3D Motion Agency**:
   - **Live Production URL**: [https://gen-lang-client-0954299193.de.r.appspot.com/agency.html](https://gen-lang-client-0954299193.de.r.appspot.com/agency.html)
   - **Local URL**: `http://localhost:8080/agency.html`

2. 💳 **Cathay United Bank Credit Cards Demo Platform**:
   - **Live Production URL**: [https://gen-lang-client-0954299193.de.r.appspot.com/](https://gen-lang-client-0954299193.de.r.appspot.com/)
   - **Local URL**: `http://localhost:8080/index.html`

3. 📱 **Google Pixel 11 Pro Flagship Launch Showcase**:
   - **Live Production URL**: [https://gen-lang-client-0954299193.de.r.appspot.com/pixel11.html](https://gen-lang-client-0954299193.de.r.appspot.com/pixel11.html)
   - **Local URL**: `http://localhost:8080/pixel11.html`

---

## 🔀 4 Built-In View Modes & Theme Features

The framework supports **4 interchangeable layout modes** and a **Bright Light / Dark Theme Switcher**:

1. 📜 **Scroll Stacking Deck (`'stack'`)**: Cards stack dynamically over each other as the user scrolls down the page (sticky CSS + 60fps physics).
2. 🎴 **Vertical Pre-Stacked Deck (`'prestacked'`)**: Cards are pre-stacked inside **1 compact vertical section** (height ~560px), popping up to the front when hovered.
3. 🖼️ **Horizontal Pre-Stacked Deck (`'horizontal'`)**: Full-sized cards pre-stacked in a **horizontal overlapping fan deck**, popping up/out when hovered with zero clipping.
4. 🔲 **Responsive Grid View (`'grid'`)**: Standard side-by-side grid layout without overlap.
5. ☀️ / 🌙 **Bright Light / Dark Theme Switcher**: Sun/Moon header button toggling between high-contrast bright mode (`#f8fafc`) and dark obsidian mode, with `localStorage` persistence.

---

## 🤖 Interactive Custom Skill Protocol (`SKILL.md`)

The repository includes a custom Antigravity skill at [`.agents/skills/stacking-cards-design/SKILL.md`](file:///C:/Users/wesle/Desktop/antigravity/web_design3/.agents/skills/stacking-cards-design/SKILL.md). 

When activated, the skill **instructs the AI agent to prompt the user to choose their preferred layout style**:

> **Interactive Prompt Question**:
> *"Which 3D Stacking Card style would you like for your website layout?"*
> 1. Scroll Stacking Deck (`stack`)
> 2. Vertical Pre-Stacked Deck (`prestacked`)
> 3. Horizontal Pre-Stacked Deck (`horizontal`)
> 4. Responsive Grid View (`grid`)

---

## 🎯 Best Use Cases & Why Use This Design?

The **3D Stacking Cards** pattern is one of the most effective web design structures for modern product marketing and storytelling:

### 1. 🎨 Design Agency & Studio Portfolios (`agency.html`)
* **Featured Showcase**: **NEXUS CREATIVE STUDIO**
* **Case Studies**: AETHER (Spatial AI OS), HYPERION (3D AR Cockpit), LUMINA (Web3 DeFi), VALKYRIE (Haute Couture 3D Store), NOVA (Quantum Cloud SaaS).
* **Why It Works**: Highlights 5 flagship case studies in a memorable 3D sticky deck, immediately differentiating your agency from standard template portfolios.

### 2. 💳 FinTech, Credit Cards & Membership Tier Showcases (`index.html`)
* **Featured Showcase**: **Cathay United Bank Credit Cards**
* **Featured Cards**: CUBE卡 (3.3% 小樹點), 亞洲萬里通, 蝦皮購物 (26% 蝦幣), 世界卡 (米其林5折), 長榮航空 (官網9折).
* **Why It Works**: Physically mimics a deck of credit cards in a wallet. As the user scrolls, new physical card tiers slide over previous ones.

### 3. 🚗 Luxury E-Commerce & High-End Hardware Launches (`pixel11.html`)
* **Featured Showcase**: **Google Pixel 11 Pro Flagship Launch**
* **Featured Cards**: 144Hz Super Actua Display, 200MP Quantum Camera, TSMC 3nm Tensor G5 AI, 5000mAh HyperCharge, Titan M3 Security.
* **Why It Works**: Gives each flagship product specification full-screen hero focus without competing with other elements on the page.

---

## 🧠 Why This Design Converts (The UX Science)

1. **Reduced Cognitive Load**: Instead of overwhelming visitors with a wall of text, each card isolates a single core feature at a time.
2. **High Visual Impact & Prestige**: The 3D depth, scale reduction, and subtle blur dimming deliver a high-end "Apple-style" presentation.
3. **Progressive Disclosure**: Detailed technical specs remain clean and accessible inside expandable modal drawers, keeping the main scroll streamlined.
4. **Interactive Tactile Feedback**: Pairs 60fps smooth scroll physics with optional WebAudio sound synthesis for a tactile app-like experience on both desktop and mobile.

---

## 📁 Repository Structure

```text
web_design3/
├── app.yaml                     # Google Cloud App Engine deployment configuration
├── agency.html                  # NEXUS Creative Studio Design Agency Showcase Site
├── index.html                   # Cathay United Bank Credit Cards Demo Site
├── pixel11.html                 # Google Pixel 11 Pro Marketing Demo Site
├── css/
│   └── styles.css               # Core CSS sticky math, backdrop filters, animations & light theme
├── js/
│   ├── app.js                   # Universal 4-mode engine, theme switcher & modal handler
│   ├── cardsData.js             # Datasets for Agency, Cathay Cards & Pixel 11 Cards
│   └── sound.js                 # WebAudio synthesis sound engine
├── assets/
│   └── images/                  # High-resolution photorealistic product & agency graphics
├── .agents/
│   └── skills/
│       └── stacking-cards-design/
│           └── SKILL.md         # Antigravity skill with interactive style selection protocol
└── README.md                    # Project documentation & live GCP deployment URLs
```

---

## 💻 Quick Start & Deployment

### 1. Local HTTP Server
Run a simple local HTTP server using Python or Node:

```bash
# Using Python (Recommended)
python -m http.server 8080
```

### 2. Deploy to Google Cloud Platform (App Engine)
Deploy your web application to Google Cloud App Engine with a single command:

```bash
gcloud app deploy --project=gen-lang-client-0954299193
```

---

## 🛠️ How to Customize for Your Own Project

To adapt this web design for your own product, SaaS, or portfolio:

1. Edit [`js/cardsData.js`](file:///C:/Users/wesle/Desktop/antigravity/web_design3/js/cardsData.js) and add your product details.
2. Duplicate `agency.html`, `index.html`, or `pixel11.html` and update the pre-rendered HTML cards in `#cards-stack-wrapper`.
3. Set your preferred initial layout style (`'stack'`, `'prestacked'`, `'horizontal'`, or `'grid'`) in `js/app.js`.

---

## 📜 License & Disclaimer

This framework is created for **educational, portfolio, and UI/UX demonstration purposes**. Trademarks, logos, and product names (such as Cathay United Bank and Google Pixel) belong to their respective copyright holders and are used solely for illustrative mockup purposes.
