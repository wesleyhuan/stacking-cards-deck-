# 🃏 3D Stacking Cards Web Design Framework

An ultra-sleek, high-performance **3D Stacking Cards Scroll Experience** framework designed for product landing pages, commercial marketing showcases, SaaS feature decks, and luxury e-commerce.

Built with **HTML5, Tailwind CSS, Vanilla JavaScript, Lucide Icons**, and an integrated **WebAudio Synth Engine**.

---

## 🌐 Live Google Cloud Platform (GCP) Deployment

Both interactive showcase websites are deployed live on **Google Cloud App Engine**:

1. 💳 **Cathay United Bank Credit Cards Demo Platform**:
   - **Live Production URL**: [https://gen-lang-client-0954299193.de.r.appspot.com/](https://gen-lang-client-0954299193.de.r.appspot.com/)
   - **Local URL**: `http://localhost:8080/index.html`

2. 📱 **Google Pixel 11 Pro Flagship Launch Showcase**:
   - **Live Production URL**: [https://gen-lang-client-0954299193.de.r.appspot.com/pixel11.html](https://gen-lang-client-0954299193.de.r.appspot.com/pixel11.html)
   - **Local URL**: `http://localhost:8080/pixel11.html`

---

## 🌟 Showcase Demos Overview

### 1. 💳 Cathay United Bank Credit Cards Platform (`index.html`)
- **Theme**: Commercial Banking & Credit Card Selection Platform based on official data from Cathay United Bank.
- **Featured Cards**: CUBE卡 (3.3% 小樹點無上限), 亞洲萬里通 (NT$10=1里), 蝦皮購物 (26% 蝦幣), 世界卡 (米其林5折), 長榮航空 (官網9折).
- **Features**: Theme-matched credit card renders, online card application drawer, category filter pills, non-official disclaimer system.

### 2. 📱 Google Pixel 11 Pro Flagship Launch Showcase (`pixel11.html`)
- **Theme**: Commercial Smartphone Marketing Landing Page for the Google Pixel 11 Pro.
- **Featured Cards**: Super Actua Pro 144Hz OLED Display, 200MP Quantum Camera, TSMC 3nm Tensor G5 AI, 5000mAh HyperCharge, Titan M3 Security.
- **Features**: Photorealistic 8K product graphic renders, dual photo galleries per card, pre-order modal drawer.

---

## 🚀 Key Framework Features

- **⚡ 60fps Scroll Overlap Physics**: Utilizes `requestAnimationFrame` and passive scroll listeners to calculate card overlap ratios, dynamically driving:
  - **Scale**: `scale(1.0 -> 0.95)`
  - **Opacity**: `opacity(1.0 -> 0.70)`
  - **Depth Blur**: `blur(0px -> 3px)`
- **📐 Precise Sticky Math**: Employs CSS custom properties `--card-index` to calculate sticky offset locking:
  `top: calc(110px + var(--card-index) * 28px)`
- **🔀 Dual-View Switcher**: Seamlessly toggles between interactive **3D Feature Stack** and **Responsive Grid View**.
- **🎯 Category Filter Pills**: Dynamically filters cards by category (`All`, `Popular`, `Travel`, `Online`, `Luxury`) with instant animation.
- **⚡ Progressive Fallback Hydration**: Cards are pre-rendered directly in HTML to guarantee **100% immediate rendering** on any browser environment before client-side JS executes.
- **🔊 WebAudio UI Synth Engine**: Custom WebAudio sound engine producing futuristic tactile click and card-sliding audio feedback.
- **⚖️ Educational & Portfolio Disclaimer System**: Top warning banner and footer disclaimer box clarifying non-official demo status and immediate takedown policy.

---

## 📁 Repository Structure

```text
web_design3/
├── app.yaml                     # Google Cloud App Engine deployment configuration
├── index.html                   # Cathay United Bank Credit Cards Demo Site
├── pixel11.html                 # Google Pixel 11 Pro Marketing Demo Site
├── css/
│   └── styles.css               # Core CSS sticky math, backdrop filters, animations
├── js/
│   ├── app.js                   # Universal scroll physics, view mode & modal engine
│   ├── cardsData.js             # Datasets for Cathay Cards & Pixel 11 Cards
│   └── sound.js                 # WebAudio synthesis sound engine
├── assets/
│   └── images/                  # High-resolution photorealistic product & card graphics
├── .agents/
│   └── skills/
│       └── stacking-cards-design/
│           └── SKILL.md         # Antigravity skill for recreating this web design
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

1. Edit [`js/cardsData.js`](file:///C:/Users/wesle/Desktop/antigravity/web_design3/js/cardsData.js) and add your product details:

```javascript
window.myProductCardsData = [
  {
    id: "feature-1",
    number: "01",
    category: "popular",
    badge: "FEATURE CATEGORY",
    title: "Your Feature Title",
    description: "Detailed description of your product feature...",
    metrics: [
      { label: "METRIC 1", value: "100%" },
      { label: "METRIC 2", value: "24/7" }
    ],
    image: "assets/images/your_feature_image.jpg"
  }
];
```

2. Duplicate `index.html` or `pixel11.html` and update the pre-rendered HTML cards in `#cards-stack-wrapper`.

---

## 📜 License & Disclaimer

This framework is created for **educational, portfolio, and UI/UX demonstration purposes**. Trademarks, logos, and product names (such as Cathay United Bank and Google Pixel) belong to their respective copyright holders and are used solely for illustrative mockup purposes.
