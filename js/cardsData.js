/**
 * Combined Data Module for Stacking Cards Effect
 * Contains datasets for Google Pixel 11 Pro, Cathay United Bank, and NEXUS Creative Design Agency.
 */

// 1. NEXUS Creative Design Agency Dataset
window.agencyCardsData = [
  {
    id: "aether-ai",
    number: "01",
    category: "uiux",
    badge: "SPATIAL UI/UX ｜ AWARD WINNER",
    title: "AETHER — Next-Gen AI OS",
    subtitle: "Spatial AI Operating System & Gesture Interaction",
    tagline: "Redefining human-computer interaction for the spatial computing era.",
    color: "from-purple-500 via-indigo-500 to-pink-500",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    image: "assets/images/agency_aether.jpg",
    promoImage: "assets/images/agency_aether_demo.jpg",
    promoBadge: "RED DOT DESIGN AWARD 2026",
    metrics: [
      { label: "USER ENGAGEMENT", value: "+340%" },
      { label: "LATENCY", value: "0.4ms Sub-pixel" },
      { label: "AWARD", value: "Red Dot Best" }
    ],
    tags: ["Spatial UI", "Gesture AI", "Design System", "Multimodal OS"],
    description: "NEXUS designed AETHER, a revolutionary spatial operating system blending voice, eye-tracking, and zero-latency air gestures. Architected for next-generation spatial hardware headsets and smart environments.",
    deepDive: {
      headline: "The future of ambient software interaction.",
      details: "Built an adaptive glassmorphic design language with fluid spatial physics that dynamically scales UI elements based on user gaze intent and hand velocity.",
      specs: [
        "Complete 3D spatial design system with over 200+ modular UI components",
        "Sub-millisecond eye-gaze targeting and micro-gesture feedback loop",
        "Awwwards Site of the Year nominee & Red Dot Best of the Best 2026",
        "Designed for Apple Vision Pro, Meta Quest Ultra, and WebXR"
      ]
    }
  },
  {
    id: "hyperion-hud",
    number: "02",
    category: "3d",
    badge: "3D MOTION ｜ AUTOMOTIVE AR",
    title: "HYPERION — 3D Hypercar HUD",
    subtitle: "Autonomous Electric Hypercar Real-Time AR Cockpit",
    tagline: "Ultra-fast 120 FPS Augmented Reality heads-up display for track telemetry.",
    color: "from-teal-400 via-emerald-500 to-cyan-400",
    badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    image: "assets/images/agency_hyperion.jpg",
    promoImage: "assets/images/agency_hyperion_demo.jpg",
    promoBadge: "IF DESIGN GOLD 2026",
    metrics: [
      { label: "RENDER SPEED", value: "120 FPS AR" },
      { label: "DISTRACTION", value: "Zero Delay" },
      { label: "AWARD", value: "iF Gold Award" }
    ],
    tags: ["3D Realtime", "Automotive HUD", "Unreal Engine 5", "AR Telemetry"],
    description: "Created an immersive 3D AR heads-up display for HYPERION EV Hypercar. Renders real-time track trajectory, thermal tire telemetry, and collision avoidance vectors directly onto the windshield.",
    deepDive: {
      headline: "High-speed precision real-time 3D telemetry.",
      details: "Utilized Unreal Engine 5 custom shaders to project high-contrast HUD graphics that maintain 100% legibility under direct sunlight and high-speed track maneuvers.",
      specs: [
        "Unreal Engine 5 realtime GPU shader pipeline rendering at 120 FPS",
        "Zero-distraction focal depth positioning mapped to driver eye-level",
        "iF Design Gold Award winner for Automotive & Mobility 2026",
        "Integrated into 500+ production electric hypercar cockpits"
      ]
    }
  },
  {
    id: "lumina-fintech",
    number: "03",
    category: "fintech",
    badge: "FINTECH & WEB3 ｜ $4.2B VOLUME",
    title: "LUMINA — Web3 DeFi Protocol",
    subtitle: "Institutional Asset Protocol & Neo-Banking App",
    tagline: "Democratizing global liquidity through elegant, secure interface design.",
    color: "from-blue-400 via-indigo-500 to-cyan-400",
    badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    image: "assets/images/agency_lumina.jpg",
    promoImage: "assets/images/agency_lumina_demo.jpg",
    promoBadge: "4.9 APP STORE RATING",
    metrics: [
      { label: "VOLUME PROCESSED", value: "$4.2 Billion" },
      { label: "APP STORE RATING", value: "4.9 ★★★★★" },
      { label: "COMPLIANCE", value: "SOC2 Type II" }
    ],
    tags: ["DeFi Protocol", "Neo-Banking", "iOS & Android", "Design System"],
    description: "Reimagined institutional wealth management. LUMINA transforms complex cross-chain liquidity and yield protocols into an intuitive, one-tap mobile neo-banking experience.",
    deepDive: {
      headline: "Complex financial primitives rendered effortless.",
      details: "Streamlined multi-signature vault approvals, automated portfolio rebalancing, and real-time yield analytics into a clean, reassuring UI.",
      specs: [
        "Processed over $4.2 Billion in total volume within 6 months of launch",
        "Maintained 4.9 App Store rating across 150,000+ active investor reviews",
        "Biometric hardware security integration with instant zero-knowledge proofs",
        "FWA Site of the Day & UX Design Awards Winner"
      ]
    }
  },
  {
    id: "valkyrie-brand",
    number: "04",
    category: "brand",
    badge: "SPATIAL E-COMMERCE ｜ +180% CONVERSION",
    title: "VALKYRIE — Haute Couture",
    subtitle: "Interactive 3D Avatar Fitting Room & Brand Experience",
    tagline: "Blending Parisian luxury fashion with cutting-edge 3D WebGL rendering.",
    color: "from-rose-400 via-pink-500 to-red-500",
    badgeColor: "bg-rose-500/10 text-rose-300 border-rose-500/20",
    image: "assets/images/agency_valkyrie.jpg",
    promoImage: "assets/images/agency_valkyrie_demo.jpg",
    promoBadge: "AWWWARDS SITE OF THE MONTH",
    metrics: [
      { label: "CHECKOUT CONV.", value: "+180%" },
      { label: "3D CLOTH SIM", value: "60 FPS WebGL" },
      { label: "AWARD", value: "Awwwards SOTM" }
    ],
    tags: ["3D E-Commerce", "WebGL Cloth Sim", "Luxury Branding", "Spatial Store"],
    description: "Designed a digital flagship store for luxury fashion house VALKYRIE. Shoppers customize 3D photorealistic avatars and preview real-time fabric physics on digital runways.",
    deepDive: {
      headline: "The future of high-fashion digital retail.",
      details: "Developed a custom Three.js cloth simulation engine that runs smoothly in browser windows on mobile devices without plugins.",
      specs: [
        "Boosted online checkout conversion rate by +180% year-over-year",
        "Real-time Three.js WebGL GPU cloth simulation & ray-traced lighting",
        "Awwwards Site of the Month & Webby Award Winner for Best Shopping Experience",
        "Seamless Shopify Plus & headless 3D catalog architecture"
      ]
    }
  },
  {
    id: "nova-saas",
    number: "05",
    category: "saas",
    badge: "ENTERPRISE SAAS ｜ 100K+ TEAMS",
    title: "NOVA — Quantum Cloud System",
    subtitle: "High-Frequency Data Visualization & Real-time Edge Monitoring",
    tagline: "Empowering engineering teams with sub-millisecond cloud observability.",
    color: "from-amber-400 via-orange-500 to-yellow-400",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    image: "assets/images/agency_nova.jpg",
    promoImage: "assets/images/agency_nova_demo.jpg",
    promoBadge: "FWA SITE OF THE DAY",
    metrics: [
      { label: "ACTIVE TEAMS", value: "100,000+" },
      { label: "STREAMING", value: "<1ms Latency" },
      { label: "AWARD", value: "FWA SOTD" }
    ],
    tags: ["SaaS Dashboard", "Data Viz", "Edge Monitoring", "Design System"],
    description: "Crafted an enterprise observability platform for NOVA Systems. Visualizes millions of distributed server metrics, traces, and AI anomaly alerts in a single dark-mode canvas.",
    deepDive: {
      headline: "Scaling complex data visualization to 100,000+ teams.",
      details: "Built an ultra-fast Canvas2D chart rendering engine capable of displaying 1,000,000 live data points at 60 FPS.",
      specs: [
        "Adopted by over 100,000+ DevOps and engineering teams globally",
        "Canvas2D GPU accelerated charting engine handling 1M+ live telemetry points",
        "FWA Site of the Day & CSS Design Awards Special Kudos",
        "Custom dark-mode accessibility color palette with high-contrast alert modes"
      ]
    }
  }
];

// 2. Google Pixel 11 Pro Marketing Dataset
window.pixelCardsData = [
  {
    id: "design-display",
    number: "01",
    category: "design",
    badge: "DISPLAY & BUILD",
    title: "Super Actua Pro 144Hz OLED",
    subtitle: "3,500 Nits Peak Brightness & Anti-Reflective Armor",
    tagline: "The brightest, most color-accurate smartphone display ever made.",
    color: "from-amber-400 via-orange-500 to-rose-500",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    image: "assets/images/pixel11_display.jpg",
    promoImage: "assets/images/pixel11_gaming_display.jpg",
    promoBadge: "144FPS GAMING & SUNLIGHT BOOST",
    metrics: [
      { label: "PEAK BRIGHTNESS", value: "3,500 Nits" },
      { label: "REFRESH RATE", value: "1 - 144Hz" },
      { label: "GLASS ARMOR", value: "Anti-Reflect" }
    ],
    tags: ["144Hz LTPO OLED", "3500 Nits Peak", "Gorilla Glass Armor", "Titanium Frame"],
    description: "The Pixel 11 Pro Super Actua display features a revolutionary 144Hz adaptive refresh rate and Gorilla Glass Armor anti-reflective surface for flawless outdoor visibility under direct sun.",
    deepDive: {
      headline: "Engineered for uncompromising visual brilliance.",
      details: "Custom-calibrated LTPO OLED panel dynamically shifts between 1Hz for ambient Always-On display and 144Hz for ultra-smooth gaming physics.",
      specs: [
        "6.8-inch Quad HD+ (3120 x 1440) OLED panel at 512 ppi",
        "1Hz to 144Hz LTPO adaptive sync technology",
        "Gorilla Glass Armor with 75% reduced reflection",
        "100% DCI-P3 color gamut with 10-bit HDR10+ support"
      ]
    }
  },
  {
    id: "pro-camera",
    number: "02",
    category: "camera",
    badge: "200MP QUANTUM CAMERA",
    title: "200MP Quad-Lens System",
    subtitle: "50x Super Res Zoom & Night Sight 3.0 Video Engine",
    tagline: "Unmatched photographic fidelity powered by Google Quantum ISP.",
    color: "from-cyan-400 via-teal-500 to-emerald-400",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    image: "assets/images/pixel11_camera.jpg",
    promoImage: "assets/images/pixel11_camera_sample.jpg",
    promoBadge: "NIGHT SIGHT 3.0 SAMPLE PHOTO",
    metrics: [
      { label: "MAIN SENSOR", value: "200MP f/1.5" },
      { label: "TELEPHOTO ZOOM", value: "50x Super Res" },
      { label: "VIDEO ENGINE", value: "8K 60FPS" }
    ],
    tags: ["200MP Quantum", "10x Optical Periscope", "Night Sight 3.0", "8K Video Boost"],
    description: "Capture true-to-life 200MP photos and zoom up to 50x with Super Res Zoom. AI-powered Night Sight 3.0 brings cinematic clarity even in low-light environments.",
    deepDive: {
      headline: "Professional studio imaging inside your pocket.",
      details: "Next-gen 1/1.12-inch main sensor paired with periscope telephoto lens and real-time generative AI image reconstruction.",
      specs: [
        "200MP main camera with Quad-PD OIS (f/1.5, 1/1.12\" sensor)",
        "48MP ultra-wide lens with macro focus capability",
        "50MP periscope telephoto with 5x optical & 50x Super Res Zoom",
        "8K 60FPS Video Boost with Night Sight Video 3.0"
      ]
    }
  },
  {
    id: "tensor-ai",
    number: "03",
    category: "ai",
    badge: "TENSOR G5 & GEMINI 2.0",
    title: "Google Tensor G5 & Gemini",
    subtitle: "TSMC 3nm Node & On-Device Multimodal AI Processing",
    tagline: "The world's first smartphone chip custom designed for Gemini 2.0.",
    color: "from-indigo-500 via-violet-500 to-purple-400",
    badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    image: "assets/images/pixel11_tensor.jpg",
    promoImage: "assets/images/pixel11_gemini_demo.jpg",
    promoBadge: "GEMINI 2.0 LIVE ASSISTANT",
    metrics: [
      { label: "CHIPSET", value: "Tensor G5 3nm" },
      { label: "RAM MEMORY", value: "20GB LPDDR5X" },
      { label: "AI ENGINE", value: "Gemini 2.0" }
    ],
    tags: ["TSMC 3nm", "20GB RAM", "Gemini 2.0 Live", "Pixel Studio Pro"],
    description: "Co-designed with Google DeepMind on 3nm TSMC node. Handles real-time voice conversations, live translation, and prompt-based image generation directly on your phone.",
    deepDive: {
      headline: "Unprecedented machine intelligence at your fingertips.",
      details: "Dedicated TPU core runs billion-parameter Gemini models locally with zero latency and full privacy protection.",
      specs: [
        "TSMC 3nm process node with 35% higher energy efficiency",
        "Next-generation Google TPU designed for multimodal AI",
        "20GB LPDDR5X high-speed unified memory system",
        "Pixel Studio Pro on-device generative image synthesis"
      ]
    }
  },
  {
    id: "battery-power",
    number: "04",
    category: "battery",
    badge: "POWER & HYPERCHARGE",
    title: "5000mAh & 65W Fast Charge",
    subtitle: "30+ Hours All-Day Battery & 50W Qi2 Wireless Dock",
    tagline: "All-day performance with hyper-fast wireless charging.",
    color: "from-emerald-400 via-green-500 to-teal-400",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    image: "assets/images/pixel11_battery.jpg",
    promoImage: "assets/images/pixel11_charging_stand.jpg",
    promoBadge: "QI2 50W MAGNETIC DOCK",
    metrics: [
      { label: "BATTERY LIFE", value: "30+ Hours" },
      { label: "HYPERCHARGE", value: "65W Wired" },
      { label: "WIRELESS", value: "50W Qi2" }
    ],
    tags: ["5000mAh", "65W Fast Charge", "50W Qi2 Wireless", "Reverse Share"],
    description: "Recharge up to 70% in just 20 minutes with 65W HyperCharge. 50W Qi2 magnetic wireless charging allows cable-free power with reverse power sharing.",
    deepDive: {
      headline: "Intelligent battery architecture built for longevity.",
      details: "Silicon-anode battery chemistry delivers 1,500 full charge cycles with under 10% capacity degradation.",
      specs: [
        "5,000mAh high-density silicon-anode battery cell",
        "65W PPS fast wired charging (0 to 70% in 20 minutes)",
        "50W Qi2 magnetic wireless charging alignment",
        "Battery Extreme Saver 2.0 extending uptime to 100 hours"
      ]
    }
  },
  {
    id: "security-support",
    number: "05",
    category: "design",
    badge: "TITAN M3 & LONGEVITY",
    title: "Titan M3 & 7-Year OS Support",
    subtitle: "Post-Quantum Cryptography & Satellite SOS Emergency 2.0",
    tagline: "Industry-leading security with 7 full years of Android OS updates.",
    color: "from-sky-400 via-indigo-500 to-blue-600",
    badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    image: "assets/images/pixel11_security.jpg",
    promoImage: "assets/images/pixel11_hero.jpg",
    promoBadge: "SATELLITE SOS 2.0 & VPN",
    metrics: [
      { label: "OS SUPPORT", value: "7 Years" },
      { label: "SECURITY CHIP", value: "Titan M3" },
      { label: "SATELLITE", value: "SOS 2.0" }
    ],
    tags: ["Titan M3", "7 Years Support", "Post-Quantum", "Satellite SOS 2.0"],
    description: "Protected by Titan M3 coprocessor with post-quantum encryption standards. Includes 7 years of OS upgrades, security patches, and quarterly Feature Drops.",
    deepDive: {
      headline: "Your data stays private. Your device stays new.",
      details: "Hardware-level memory tagging and post-quantum encryption protect your authentication credentials against future quantum threats.",
      specs: [
        "Titan M3 hardware security coprocessor",
        "7 years of OS, security updates, and Feature Drops through 2033",
        "Satellite SOS 2.0 for off-grid emergency communication",
        "Built-in Google One VPN and end-to-end encrypted passkeys"
      ]
    }
  }
];

// 3. Cathay United Bank Credit Cards Dataset
window.cathayCardsData = [
  {
    id: "cube-card",
    number: "01",
    category: "popular",
    badge: "熱門主打｜權益隨切隨換",
    title: "國泰世華 CUBE 卡",
    subtitle: "玩數位｜樂饗購｜趣旅行｜集精選｜慶生月",
    tagline: "自由切換五大權益，享最高 3.3% 小樹點回饋無上限。",
    color: "from-emerald-400 via-teal-500 to-cyan-500",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    image: "assets/images/cathay_cube.jpg",
    promoImage: "assets/images/cathay_cube_reward.jpg",
    promoBadge: "最高 3.3% 小樹點回饋無上限",
    metrics: [
      { label: "回饋率", value: "3.3% 無上限" },
      { label: "權益方案", value: "5 大隨心切" },
      { label: "點數折抵", value: "即時 1:1 折抵" }
    ],
    tags: ["小樹點回饋", "權益天天切", "即時折抵", "指定通路加碼"],
    description: "CUBE卡獨創自由切換權益模式！玩數位、樂饗購、趣旅行、集精選與慶生月，每天可透過國泰世華CUBE App切換最適合的方案，指定消費享最高 3.3% 小樹點(信用卡)回饋無上限。",
    deepDive: {
      headline: "聰明消費，點數回饋最即時。",
      details: "刷卡獲得的小樹點(信用卡)可於CUBE App內直接折抵帳單或兌換豐富禮券、航空哩程，1點等於NT$1元。",
      specs: [
        "玩數位：指定網購、串流影音、線上遊戲最高 3.3% 回饋",
        "樂饗購：指定百貨、國內餐飲、美食外送最高 3.3% 回饋",
        "趣旅行：海外實體消費、指定航空公司與旅行社最高 3.3% 回饋",
        "集精選：指定量販超商、加油站、停車與全聯消費最高 2% 回饋"
      ]
    }
  },
  {
    id: "asia-miles",
    number: "02",
    category: "flight",
    badge: "哩程回饋｜環球飛行尊榮",
    title: "亞洲萬里通聯名卡",
    subtitle: "哩程加速器最優 NT$10 = 1 里",
    tagline: "生日當月哩程 2 倍贈，機場接送與國泰航空購票 92 折。",
    color: "from-blue-400 via-indigo-500 to-cyan-400",
    badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    image: "assets/images/cathay_asiamiles.jpg",
    promoImage: "assets/images/cathay_asiamiles_travel.jpg",
    promoBadge: "生日月哩程 2 倍速飆升",
    metrics: [
      { label: "哩程回饋", value: "NT$10 = 1里" },
      { label: "生日加碼", value: "2 倍哩程贈" },
      { label: "機票優惠", value: "國泰航空92折" }
    ],
    tags: ["哩程加速器", "生日2倍哩", "機場貴賓室", "國泰航空優惠"],
    description: "專為愛旅遊與飛行族群打造！國內外指定消費享「哩程加速器」最優 NT$10 = 1 里，生日當月消費更享 2 倍驚喜回饋，輕鬆兌換全球航空公司免費機票。",
    deepDive: {
      headline: "加速哩程累積，飛向世界每個角落。",
      details: "尊享免費機場外圍停車、每年免費機場接送服務及全球機場貴賓室禮遇，購票享國泰航空官網專屬優惠。",
      specs: [
        "哩程加速器指定通路最優 NT$10 累積 1 亞洲萬里通里數",
        "生日當月於哩程加速器通路消費享 2 倍贈里",
        "購買國泰航空指定航線機票享專屬 92 折起優惠",
        "刷卡支付全額機票享最高 NT$3,500 萬旅遊平安險"
      ]
    }
  },
  {
    id: "shopee-card",
    number: "03",
    category: "online",
    badge: "網購神卡｜蝦幣狂飆",
    title: "蝦皮購物聯名卡",
    subtitle: "消費最高 26% 蝦幣回饋，月月贈免運券",
    tagline: "網購族必備，海外消費免手續費，蝦皮購物專屬折扣。",
    color: "from-orange-400 via-amber-500 to-red-500",
    badgeColor: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    image: "assets/images/cathay_shopee.jpg",
    promoImage: "assets/images/cathay_shopee_shopping.jpg",
    promoBadge: "最高 26% 蝦幣回饋 + 月月免運",
    metrics: [
      { label: "蝦幣回饋", value: "最高 26%" },
      { label: "海外消費", value: "免手續費" },
      { label: "免運禮遇", value: "月月贈免運券" }
    ],
    tags: ["26%蝦幣", "月月免運券", "海外免手續費", "站內消費回饋"],
    description: "蝦皮購物買家最強刷卡神器！站內消費享有高額蝦幣回饋，搭配促銷活動最高可達 26% 蝦幣，且月月消費達標即贈蝦皮免運券，海外網購再享免手續費優惠。",
    deepDive: {
      headline: "蝦皮購物專屬優惠，消費賺蝦幣最划算。",
      details: "累積蝦幣可於蝦皮購物全站折抵消費，1 蝦幣等於 NT$1 元，搭配超級品牌日再享加碼折扣券。",
      specs: [
        "蝦皮購物站內消費基本享最高 5.5% 蝦幣回饋",
        "超級品牌日或促銷大檔活動期間最高享 26% 蝦幣回饋",
        "月月消費滿額送蝦皮購物全站免運券",
        "海外消費免收 1.5% 刷卡手續費優惠"
      ]
    }
  },
  {
    id: "world-card",
    number: "04",
    category: "cash",
    badge: "頂級旗艦｜尊榮奢華",
    title: "國泰世華 世界卡",
    subtitle: "米其林美饌 2 人 5 折，頂級飯店 95 折",
    tagline: "黑卡級尊榮禮遇，財富管理貴賓加碼享頂級服務。",
    color: "from-amber-300 via-yellow-500 to-amber-600",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    image: "assets/images/cathay_world_card.jpg",
    promoImage: "assets/images/cathay_world_dining.jpg",
    promoBadge: "米其林美饌 2 人 5 折禮遇",
    metrics: [
      { label: "美饌優惠", value: "2人行 5折" },
      { label: "頂級飯店", value: "尊榮 95折" },
      { label: "財富管理", value: "VIP加碼禮" }
    ],
    tags: ["米其林5折", "頂級飯店禮遇", "麗晶黑卡禮遇", "財富管理VIP"],
    description: "頂尖品味人士的標誌！國泰世華世界卡提供頂級飯店與米其林星級美饌 2 人同行 5 折起優惠，並享有麗晶精品黑卡禮遇及專屬 24 小時頂級秘書服務。",
    deepDive: {
      headline: "頂級尊榮生活，享受無界奢華體驗。",
      details: "為層峰人士量身訂製，包含國內外頂級飯店住宿升等、高爾夫球場優惠，以及高額旅遊保障。",
      specs: [
        "全台指定頂級飯店與米其林推薦餐廳 2 人同行最高 5 折",
        "國內外指定頂級度假飯店預訂享專屬 95 折與房間升等禮遇",
        "麗晶精品黑卡貴賓尊榮購物禮遇與專屬停車位",
        "免費享高額旅遊平安險及國際機場高爾夫接送特惠"
      ]
    }
  },
  {
    id: "eva-air",
    number: "05",
    category: "flight",
    badge: "長榮聯名｜機艙升等",
    title: "長榮航空聯名卡",
    subtitle: "倍速哩遇最優 NT$10 = 1 哩，購票 9 折",
    tagline: "官網購票 9 折起，尊享機場接送與機艙升等禮遇。",
    color: "from-emerald-500 via-teal-400 to-cyan-400",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    image: "assets/images/cathay_eva_card.jpg",
    promoImage: "assets/images/cathay_eva_flight.jpg",
    promoBadge: "長榮官網購票 9 折優惠",
    metrics: [
      { label: "倍速哩遇", value: "NT$10 = 1哩" },
      { label: "機票優惠", value: "長榮9折起" },
      { label: "尊榮升等", value: "25,000哩換升等" }
    ],
    tags: ["長榮9折", "倍速哩遇", "免費機場接送", "尊榮機艙升等"],
    description: "長榮航空商務與旅遊飛行首選！指定海外消費與長榮官網購票享「倍速哩遇」最優 NT$10 = 1 哩，消費達檻再享 25,000 哩優惠兌換長榮尊榮機艙升等。",
    deepDive: {
      headline: "飛躍雲端，體驗長榮航空尊榮禮遇。",
      details: "享長榮航空免費貴賓室入場、優先辦理登機手續及行李託運加碼優惠，讓每一次飛行都是絕佳享受。",
      specs: [
        "長榮航空官網購票、海外消費與指定通路享最優 NT$10 累積 1 哩",
        "於長榮航空官網購買指定航線機票專享 9 折起優惠",
        "消費達檻享 25,000 哩優惠兌換長榮航空尊榮機艙升等",
        "尊享免費機場接送、長榮貴賓室禮遇與優先託運行李"
      ]
    }
  }
];
