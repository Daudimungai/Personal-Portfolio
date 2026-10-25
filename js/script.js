/**
 * DAVID CHEGE MUNGAI — PORTFOLIO INTERACTION & AI STORYTELLER ENGINE
 * Story-driven narrative architecture, project explorer, and AI assistant
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. DATA REPOSITORY: PROJECT STORIES & KNOWLEDGE BASE
  // =========================================================================
  const projectStories = {
    'bwip-studio': {
      title: 'BWIP Barcode Studio — Professional Symbology & Verification Suite',
      subtitle: 'From Industrial Utility to First Proven Commercial Revenue',
      badge: 'Commercial Milestone • 10 Codes Sold (KSh 1,500)',
      badgeClass: 'badge-live',
      spark: `Businesses, retail shops, and inventory managers frequently battle rigid, overpriced desktop software or sketchy ad-ridden generators that only support a couple basic formats. David saw an urgent commercial need: a studio-grade, responsive barcode and QR workstation supporting 100+ industrial symbologies, paired with real-time camera decoding, drag-and-drop QR editing, and specialized compliance formats like AAMVA PDF417 for driver licenses.`,
      vibeCoding: `Harnessing the power of bwip-js and jsQR, David directed modern AI-assisted engineering sprints to build an all-in-one studio: instant canvas rendering, precise millimetric dimension scaling, color/transparency controls, batch generation, and print-sheet templating. He integrated an activation code licensing mechanism with automated M-Pesa verification workflows.`,
      architecture: `Vanilla JavaScript | bwip-js 100+ Symbologies Engine | jsQR Live Camera Scanning | HTML5 Canvas API | CSS3 Custom Properties (Dark/Light) | GitHub Pages CI/CD | Node.js & M-Pesa Daraja Integration.`,
      commercialScale: `Crucially, this is David's first demonstrated commercial software sales milestone: selling 10 activation codes directly to users at KSh 150 each, generating KSh 1,500 in sales before expenses. It proves his ability to package, deploy, market, and monetize a standalone digital utility.`
    },
    'marketmed-ai': {
      title: 'MarketMed AI — AI Video & Image Generation for Business Marketing',
      subtitle: 'Your Brand\'s AI-Powered Creative Studio for Ads, Promotions & Campaigns',
      badge: 'SaaS Platform • Enterprise & Institutional Focus',
      badgeClass: 'badge-commercial',
      spark: `Every business, institution, and organization needs marketing content — but producing professional promotional videos and images is expensive, slow, and requires specialized creative agencies. David saw the gap: What if any business, from a Nairobi SME to a multinational corporation, could generate broadcast-quality marketing videos and promotional images in minutes, not weeks? MarketMed AI was born to answer that question.`,
      vibeCoding: `David architected MarketMed AI as a purpose-built creative SaaS for the enterprise marketing world. Using Vibe Coding workflows — directing AI tools with precision across product design, API integration planning, and UX flows — he designed the full product: an AI image and video generation engine with a business-first interface. The platform enables marketing managers, digital agencies, and institutions to produce ad creatives, product promos, and brand campaigns without hiring a production team. Critically, David designed a built-in student referral ecosystem: students earn 10% of every first subscription they refer — turning the platform into an income opportunity for young Kenyans while growing the product virally.`,
      architecture: `AI Image Generation Engine | AI Video Generation & Storyboarding | Campaign Asset Library | Multi-Format Export (Instagram Reels, YouTube, LinkedIn, TikTok) | Brand Hub (Logos, Fonts, Voice) | Student Referral & Commission Engine | Subscription & Billing System.`,
      commercialScale: `The global AI marketing content market is projected to surpass $100 billion by 2030. MarketMed AI targets the massive underserved segment of African and emerging-market businesses that cannot afford traditional creative agencies. The referral program creates a viral, student-powered distribution network — combining SaaS recurring revenue with community-driven growth. This is not just a tool — it is a marketing infrastructure play.`
    },
    'vibestream': {
      title: 'VibeStream — High-Performance Media & Streaming Architecture',
      subtitle: 'The Quest for Frictionless, High-Scale Audio Streaming',
      badge: 'Billion-Dollar Potential Media Platform',
      badgeClass: 'badge-moonshot',
      spark: `The music streaming industry is dominated by walled gardens with heavy apps, invasive data tracking, and severe latency in emerging markets. David asked: What if you could build a lightning-fast, zero-friction web audio engine that seamlessly indexes media, transcodes on-the-fly, and synchronizes playback across any device without bloated app installs?`,
      vibeCoding: `Leveraging modern "Vibe Coding" workflows in Cursor, Windsurf, and Gemini, David accelerated backend pipeline development by 5x. Instead of getting bogged down in boilerplate, he directed AI agents to scaffold a dual-tier architecture: a snappy Node.js/Express API with SQLite caching paired with an asynchronous Python FastAPI microservice utilizing FFmpeg and yt-dlp for media processing and real-time WebSocket state distribution.`,
      architecture: `Node.js & Express.js Core | Vanilla JS Single Page App | SQLite Caching | Python FastAPI Media Microservice | WebSocket Real-Time Synchronization | FFmpeg & yt-dlp Audio Pipelines | iTunes & YouTube Search APIs.`,
      commercialScale: `Global audio streaming is a $40B+ market. As mobile bandwidth continues to surge in Africa, Southeast Asia, and Latin America, low-overhead, decentralized media streaming engines represent immense consumer and enterprise value — from ad-supported consumer streaming to white-labeled audio delivery for regional creators.`
    },
    'ai-trading': {
      title: 'AI Trading Analyzer — Algorithmic Vision for Financial Markets',
      subtitle: 'Multi-Timeframe Visual Intelligence for Retail Traders',
      badge: 'Fintech SaaS Moonshot',
      badgeClass: 'badge-moonshot',
      spark: `Over 80% of retail forex and equity traders lose capital due to cognitive bias and timeframe conflict — for example, buying a 15-minute bullish breakout right into a Daily major resistance level. David recognized that human traders process charts visually, but fail under emotional stress. He conceived an AI vision analyzer where a trader simply uploads a chart screenshot, and the engine evaluates indicator confluence, candle structures, and multi-timeframe risk in seconds.`,
      vibeCoding: `David utilized rapid AI prototyping to design the analytical prompt pipelines, multi-factor scoring algorithms, and a sleek dark-mode trading cockpit. He used Gemini and AI-assisted workflows to model technical indicator edge-cases (RSI divergences, Bollinger squeezes, moving average crossovers) and synthesize them into straightforward, probabilistic scenarios (Buy / Sell / Wait) with strict risk-reward guidance.`,
      architecture: `Multi-Timeframe Vision Ingestion | Confluence Weighting Engine | Dynamic Risk/Reward Calculator | Technical Indicator Evaluation | Modern Interactive Dashboard.`,
      commercialScale: `Retail trading software and algorithmic signals represent an enormous global market. A streamlined subscription SaaS helping millions of independent traders eliminate emotional errors has massive recurring revenue and acquisition potential.`
    },
    'smartphone-store': {
      title: 'Global Smartphone E-Commerce & Dual-Gateway Platform',
      subtitle: 'Premium Consumer Tech Retail with Frictionless Regional Checkout',
      badge: 'High-Scale Commercial Retail',
      badgeClass: 'badge-commercial',
      spark: `High-end electronics shoppers expect the minimalist luxury of Apple or Samsung flagship stores, but e-commerce in emerging markets frequently fails at the checkout stage due to rigid international card forms that ignore local payment realities. David set out to build an aspirational, world-class storefront featuring Apple, Samsung, and Xiaomi flagships that unifies international credit cards with Africa's dominant mobile money standard: M-Pesa STK Push.`,
      vibeCoding: `Using rapid component prototyping, David crafted a high-converting, distraction-free buying experience. He architected dynamic multi-currency display (USD and KES), modular device specification comparators, and designed clean integration flows for PayPal and the Safaricom Daraja M-Pesa STK Push API.`,
      architecture: `Responsive Catalog Architecture | Dual Payment Pipeline Concept (M-Pesa Daraja STK Push + International PayPal/Cards) | Multi-Currency Engine | High-Fidelity Tech Retail UI.`,
      commercialScale: `Consumer electronics is Kenya and East Africa's fastest-growing retail sector. A trustworthy, premium digital channel capable of automated instant mobile payments unlocks massive high-ticket inventory turnover.`
    },
    'afya-bora': {
      title: 'Afya Bora Pharmacy Management System',
      subtitle: 'Solving Real-World Healthcare Bottlenecks with Computerized Records',
      badge: 'Production Deployed System',
      badgeClass: 'badge-live',
      spark: `In community pharmacies, manual paper ledgers lead to disastrous outcomes: expired medications sitting on shelves, unaccounted cash sales, stockouts of critical drugs, and patients waiting in long queues. David built Afya Bora as a practical, reliable business solution to digitize and automate daily pharmacy operations.`,
      vibeCoding: `Focusing on robust relational database design and intuitive user workflows, David developed a full-featured management portal. He tackled database normalization in MySQL, built modular PHP backend endpoints, and ensured rapid search indexing so that pharmacy attendants can look up medicine dosages, stock levels, and generate sales receipts in seconds.`,
      architecture: `PHP & MySQL Backend | Vanilla JavaScript Logic | HTML5 & CSS3 Responsive UI | Automated Stock Ledger & Receipt Generation | Live Netlify Deployment.`,
      commercialScale: `Community healthcare businesses require affordable, dependable operational software without monthly cloud lock-in. Afya Bora demonstrates David's ability to take a messy business problem and turn it into working, tested software.`
    },
    'zenith-sync': {
      title: 'Zenith Sync — Secure Concurrency Event Engine',
      subtitle: 'Scalable Attendee Registration & Access Management',
      badge: 'Backend Architecture & Security',
      badgeClass: 'badge-commercial',
      spark: `Modern events suffer from chaotic ticket registration surges, token spoofing, and disjointed attendee coordination. Zenith Sync was designed to provide a hardened, authenticated event orchestration backend capable of handling concurrent participant check-ins and session workflows.`,
      vibeCoding: `David focused on backend security and API resilience. He implemented JWT (JSON Web Token) authentication, environment-segregated configuration, and established strict route guards in Node.js/Express, validating every single endpoint through automated Postman testing collections.`,
      architecture: `Node.js & Express REST API | JWT Stateless Authentication | Role-Based Access Control | Postman Automated Test Suites | Clean Environment Configurations.`,
      commercialScale: `Secure ticketing, conference pass verification, and access credentials form the backbone of the global corporate events and seminar industry.`
    },
    '100-days-strategy': {
      title: '100 Days of Strategy Compass',
      subtitle: 'Visual Productivity & Strategic Milestone Tracking',
      badge: 'Live Production Web App',
      badgeClass: 'badge-live',
      spark: `Long-term goals fail without daily accountability and visual momentum. David created 100 Days of Strategy to help ambitious builders track, calibrate, and accomplish quarterly strategic objectives through progressive visualization.`,
      vibeCoding: `Developed and deployed live on Netlify using React and modular CSS, this app showcases David's frontend precision, state management, and user-centric design principles.`,
      architecture: `React SPA | Netlify Continuous Deployment | LocalStorage State Persistence | Interactive Visual Progress Analytics.`,
      commercialScale: `Productivity and habit-tracking apps represent one of the highest-retaining mobile and web software categories worldwide.`
    },
    'mnp-marketplace': {
      title: 'Meru National Poly (MNP) Student Marketplace & Systems',
      subtitle: 'Campus Resource Exchange & Institutional Software',
      badge: 'Academic Innovation & Foundation',
      badgeClass: 'badge-academic',
      spark: `At Meru National Polytechnic during his ICT Level 6 studies, David noticed students and departments lacked a safe, localized digital board to exchange textbooks, equipment, and campus services. He stepped up to build a prototype campus exchange platform.`,
      vibeCoding: `Building this project reinforced David's deep foundation in system troubleshooting, database schema design, and user authentication before modern AI tools even existed — giving him the foundational computer science knowledge needed to evaluate AI-generated code critically today.`,
      architecture: `Relational Database Schemas | Full-Stack Web Development | Practical Institutional Workflows.`,
      commercialScale: `Localized campus marketplaces and student resource platforms solve real distribution problems in higher education institutions.`
    }
  };

  // General questions the AI Storyteller can answer
  const generalAnswers = {
    'why-hire': {
      title: 'Why David Chege is an Irresistible Hire for Your Team',
      text: `<p>David is that rare combination of a <strong>technically grounded ICT professional</strong>, a <strong>rapid-velocity "Vibe Coder"</strong>, and a <strong>commercial business thinker</strong>.</p>
      <ul class="modal-points-list">
        <li><strong>Speed &amp; Modern Velocity:</strong> Through AI-assisted engineering (Cursor, Windsurf, Gemini, Lovable), David delivers in days what traditional developers take weeks to build — while maintaining strict code verification and architectural standards.</li>
        <li><strong>Commercial &amp; Business Instinct:</strong> Having served as Head of Digital Marketing at Ngao Roofing Ltd and worked with Harvey Home Depot Ltd, he understands customer psychology, brand presentation, and revenue generation. He doesn't just write code; he builds solutions that make businesses money.</li>
        <li><strong>Full-Spectrum Problem Solver:</strong> From low-level hardware diagnostics, network setup, and Linux troubleshooting to Node.js microservices, PHP/MySQL databases, and modern frontend SPAs, David can step into any tech environment and deliver immediate value.</li>
      </ul>`
    },
    'vibe-coding': {
      title: 'What is David\'s "Vibe Coding" Superpower?',
      text: `<p>"Vibe Coding" is the modern discipline of pairing human intuition, taste, and system architecture with AI code generation engines (Cursor, Windsurf, Bolt.new, Gemini) to build software at unprecedented speed.</p>
      <p style="margin-top: 14px;">Instead of typing boilerplate syntax by hand, David acts as the <strong>lead architect and director</strong>:</p>
      <ol class="modal-steps-list">
        <li><strong>Architectural Blueprints:</strong> He designs data schemas, API contracts, and user journeys first.</li>
        <li><strong>AI Direction &amp; Prompt Orchestration:</strong> He directs AI tools with precision, decomposing complex requirements into bite-sized implementation sprints.</li>
        <li><strong>Human Verification &amp; Hardening:</strong> He tests every endpoint, audits security vulnerabilities (JWT, SQL injection, input sanitization), verifies edge cases, and polishes the user experience.</li>
      </ol>
      <p style="margin-top: 14px; color: var(--accent-emerald); font-weight: 600;">The result? Production-ready, beautiful digital products delivered at 5x to 10x traditional speed.</p>`
    },
    'billion-scale': {
      title: 'Which Projects Have Billion-Dollar Potential?',
      text: `<p>David has conceptualized and built architectures for high-scale global markets:</p>
      <ol class="modal-steps-list">
        <li><strong>VibeStream (Media Engine):</strong> An ultra-lightweight, decentralized streaming pipeline pairing Node.js with Python FastAPI audio transcoding and real-time WebSockets, designed to bring high-fidelity audio to bandwidth-constrained emerging markets.</li>
        <li><strong>AI Trading Analyzer (Fintech Vision):</strong> An AI-driven chart vision tool that removes emotional bias for retail traders by evaluating multi-timeframe candlestick and indicator confluence in seconds.</li>
        <li><strong>Global Tech Retail &amp; Dual-Gateway Platform:</strong> Bridging international consumer tech (Apple, Samsung, Xiaomi) with localized M-Pesa STK Push and global payment rails, capturing high-ticket electronics growth in East Africa.</li>
      </ol>`
    },
    'origin-story': {
      title: 'David Chege\'s Origin Story: The Builder\'s Journey',
      text: `<p>David's tech journey began with raw curiosity and hands-on grit: disassembling computer hardware, troubleshooting operating systems, setting up networks, and learning fundamental programming (C, C++, VB.NET, MySQL) during his ICT training at Meru National Polytechnic.</p>
      <p style="margin-top: 14px;">Rather than staying in academic theory, he took on real-world business challenges: developing the <strong>Afya Bora Pharmacy Management System</strong> to computerize messy paper drug ledgers, and stepping into commercial leadership as <strong>Head of Digital Marketing at Ngao Roofing Ltd</strong>, driving digital visibility for NGAO TILE roofing products.</p>
      <p style="margin-top: 14px;">Today, in 2026, David fuses foundational IT support and web engineering with cutting-edge AI-assisted "Vibe Coding", positioning himself at the forefront of modern software creation.</p>`
    }
  };

  // Helper to safely format any residual markdown asterisks to HTML
  function formatMarkdown(content) {
    if (!content) return '';
    return content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }

  // =========================================================================
  // 2. AI STORYTELLER MODAL CONTROLLER
  // =========================================================================
  const aiModal = document.getElementById('aiStoryModal');
  const modalCloseBtn = document.getElementById('closeModalBtn');
  const aiStoryContent = document.getElementById('aiStoryContent');
  const quickPrompts = document.querySelectorAll('.prompt-chip');
  const aiLauncher = document.getElementById('aiLauncherBtn');
  const navAiBtn = document.getElementById('navAiBtn');

  function openStoryModal(storyData) {
    if (!aiModal) return;
    
    // Build story presentation
    let htmlContent = '';
    if (storyData.spark) {
      // It's a project story
      htmlContent = `
        <div class="story-act">
          <div class="act-title"><i class="fas fa-sparkles"></i> Act I: The Origin & The Spark</div>
          <p class="act-text">${formatMarkdown(storyData.spark)}</p>
        </div>
        <div class="story-act">
          <div class="act-title"><i class="fas fa-bolt"></i> Act II: The Vibe Coding Odyssey</div>
          <p class="act-text">${formatMarkdown(storyData.vibeCoding)}</p>
        </div>
        <div class="story-act">
          <div class="act-title"><i class="fas fa-layer-group"></i> Act III: Architecture Under The Hood</div>
          <p class="act-text"><code>${storyData.architecture}</code></p>
        </div>
        <div class="story-act">
          <div class="act-title"><i class="fas fa-rocket"></i> Act IV: The Scale & Market Horizon</div>
          <p class="act-text">${formatMarkdown(storyData.commercialScale)}</p>
        </div>
      `;
      document.getElementById('modalStoryTitle').textContent = storyData.title;
      document.getElementById('modalStorySubtitle').textContent = storyData.subtitle;
    } else {
      // It's a general question
      htmlContent = `
        <div class="story-act">
          <div class="act-title"><i class="fas fa-brain"></i> AI Strategic Assessment</div>
          <div class="act-text">${formatMarkdown(storyData.text)}</div>
        </div>
      `;
      document.getElementById('modalStoryTitle').textContent = storyData.title;
      document.getElementById('modalStorySubtitle').textContent = 'David Chege Portfolio Intelligence';
    }

    aiStoryContent.innerHTML = htmlContent;
    aiModal.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  function closeStoryModal() {
    if (!aiModal) return;
    aiModal.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeStoryModal);
  }

  if (aiModal) {
    aiModal.addEventListener('click', (e) => {
      if (e.target === aiModal) {
        closeStoryModal();
      }
    });
  }

  // Handle ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && aiModal && aiModal.classList.contains('open')) {
      closeStoryModal();
    }
  });

  // Launch AI from Floating or Navbar buttons
  if (aiLauncher) {
    aiLauncher.addEventListener('click', () => {
      openStoryModal(generalAnswers['why-hire']);
    });
  }

  if (navAiBtn) {
    navAiBtn.addEventListener('click', () => {
      openStoryModal(generalAnswers['why-hire']);
    });
  }

  // Quick Prompt Chips in Modal
  quickPrompts.forEach(chip => {
    chip.addEventListener('click', function() {
      const promptKey = this.getAttribute('data-prompt');
      if (generalAnswers[promptKey]) {
        openStoryModal(generalAnswers[promptKey]);
      }
    });
  });

  // Project Card "Tell Project Story" Buttons
  document.querySelectorAll('.btn-story[data-project]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const projKey = this.getAttribute('data-project');
      if (projectStories[projKey]) {
        openStoryModal(projectStories[projKey]);
      }
    });
  });

  // =========================================================================
  // 3. PROJECT CATEGORY FILTERING
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active from all
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filterValue = this.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // =========================================================================
  // 4. NAVBAR SCROLL & ACTIVE LINK SPY
  // =========================================================================
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Navbar backdrop elevation
    if (navbar) {
      if (scrollPos > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to top visibility
    if (backToTop) {
      if (scrollPos > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    // Scroll spy for navigation
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // =========================================================================
  // 5. MOBILE HAMBURGER MENU
  // =========================================================================
  const hamburger = document.querySelector('.hamburger');
  const mobileNavLinks = document.querySelector('.nav-links');

  if (hamburger && mobileNavLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNavLinks.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });

    // Close mobile menu on link click
    mobileNavLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNavLinks.classList.remove('active');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  // =========================================================================
  // 6. CONTACT FORM HANDLING WITH FEEDBACK
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      // Display real-time success feedback to user
      if (formStatus) {
        formStatus.innerHTML = `
          <strong>Thank you, ${name}!</strong> Your message has been prepared. You can also reach David directly via WhatsApp or email for instant turnaround!
        `;
        formStatus.className = 'form-status success';
      }

      // Pre-fill mailto link as direct fallback so no message is ever lost
      const mailtoUrl = `mailto:daudimungai8@gmail.com?subject=${encodeURIComponent(subject || 'Inquiry from Portfolio')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      // Open mailto fallback after 1 second if on desktop/mobile
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 800);

      contactForm.reset();
    });
  }

  // =========================================================================
  // 7. CURRENT YEAR DYNAMIC UPDATE
  // =========================================================================
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
