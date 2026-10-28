/**
 * DAVID CHEGE MUNGAI — PORTFOLIO INTERACTION & AI STORYTELLER ENGINE
 * Story-driven narrative architecture, project explorer, and AI assistant
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. DATA REPOSITORY: PROJECT STORIES & KNOWLEDGE BASE
  // =========================================================================
  const projectStories = {
    'kalro-biosuite': {
      title: 'KALRO Bio-Suite — Integrated Organizational Management System',
      subtitle: 'Unifying Research Operations & Workflow Coordination into a Digital Environment',
      badge: 'Organizational Suite Concept • KALRO Kenya',
      badgeClass: 'badge-commercial',
      spark: `In complex agricultural and livestock research organizations like KALRO, multidisciplinary teams face challenges coordinating diverse departmental activities, field trials, livestock records, and research documentation across distributed stations. David contributed to the vision of KALRO Bio-Suite: an integrated software concept designed to bring organizational activities into a single coordinated digital workspace.`,
      vibeCoding: `Applying technical problem-solving and software development knowledge to organizational needs, David worked on system architecture blueprints, relational database schema models, and data workflows. The platform concept focuses on real-time trial telemetry, asset tracking, livestock and crop analytics, and structured information retrieval to minimize reporting bottlenecks.`,
      architecture: `Software Development | Systems Integration | Relational Database Management (MySQL) | Workflow Telemetry | Information Architecture | Enterprise Research Operations.`,
      commercialScale: `Large-scale research institutes and agricultural organizations require unified digital environments to replace fragmented spreadsheets. The KALRO Bio-Suite concept demonstrates David's capability to understand institutional needs and contribute to high-impact organizational software solutions.`
    },
    'marketmed-ai': {
      title: 'MarketMed AI — AI-Powered Marketing Platform',
      subtitle: 'Intelligent Digital Tools & AI-Assisted Workflows for Business Growth',
      badge: 'AI & Digital Solutions Platform',
      badgeClass: 'badge-moonshot',
      spark: `Modern businesses, institutions, and marketing teams face rising demands for continuous digital content, visual campaigns, and data-informed promotions, yet traditional agency workflows are slow and prohibitively expensive. David conceptualized MarketMed AI to explore how artificial intelligence can empower business processes and streamline marketing activities through smart digital tools.`,
      vibeCoding: `David designed MarketMed AI utilizing AI-assisted development workflows in Cursor and VS Code. He engineered the platform architecture around automated campaign asset planning, content generation pipelines, and multi-channel asset distribution, reflecting his passion for applying artificial intelligence to real-world business processes and digital marketing.`,
      architecture: `AI-Assisted Workflows | Node.js & Express.js | Digital Marketing Automation | Asset Generation Engine | Multi-Platform Digital Delivery | Content Workflow Coordination.`,
      commercialScale: `AI-driven marketing platforms represent one of the fastest-growing sectors in the global digital economy. MarketMed AI showcases David's forward-looking initiative to build tools that lower operational costs and democratize digital marketing capabilities for businesses.`
    },
    'vibestream': {
      title: 'VibeStream — Music Streaming Web Application',
      subtitle: 'Frictionless Music Search, Audio Streaming & Media Downloads',
      badge: 'Web Application • Media Streaming',
      badgeClass: 'badge-moonshot',
      spark: `Media streaming users in developing markets frequently experience bandwidth throttling, heavy app payloads, and intrusive interfaces. David asked: What if you could build a snappy, responsive web application that enables fast music search, smooth audio streaming, and seamless media downloads directly in the browser without bloat?`,
      vibeCoding: `Using modern JavaScript, Node.js, Express.js, and SQLite, David built an agile media web app. He implemented low-latency audio indexing, real-time player state controls, efficient local caching, and media download pipelines, optimizing delivery for both desktop and mobile web experiences.`,
      architecture: `JavaScript (ES6+) | Node.js & Express.js Backend | SQLite Caching | Audio Processing Services | Real-Time Player Telemetry | Responsive Web UI.`,
      commercialScale: `Digital audio and media consumption continues to surge across East Africa and emerging markets. Lightweight web-based streaming platforms offer low barrier-to-entry distribution for creators, educational content, and digital audio platforms.`
    },
    'zenith-management': {
      title: 'Zenith Management System — Client Software Project',
      subtitle: 'Streamlining Business Management Processes & Operational Integrity',
      badge: 'Client Management System • Kenya',
      badgeClass: 'badge-commercial',
      spark: `Individual commercial clients frequently struggle with disjointed operational processes, insecure staff access, and disorganized record keeping. For Zenith Management System, David was tasked with providing technical development support to translate practical business requirements into a dependable, secure software solution.`,
      vibeCoding: `David led requirements analysis, architectural modeling, and endpoint validation. Built with Node.js and Express with MySQL/SQLite database persistence, he implemented role-based permissions, secure administrative access, and verified system reliability through comprehensive testing and documentation.`,
      architecture: `Node.js & Express.js Core | Role-Based Access Control | MySQL & SQLite Storage | API Verification & Testing | Requirements Documentation | Business Logic Layer.`,
      commercialScale: `Custom business management systems empower SMEs to safeguard operational data, coordinate staff activities, and automate routine administrative workflows without costly recurring enterprise licenses.`
    },
    'aaban-hospital': {
      title: 'Aaban Hospital Management System',
      subtitle: 'Healthcare Management Software Supporting Clinical Operations',
      badge: 'Healthcare Management Project • Live Netlify Demo',
      badgeClass: 'badge-live',
      spark: `Healthcare clinics and community hospitals struggle with manual paper records, leading to medication stockouts, unnoticed batch expiries, lost sales receipts, and delayed patient care. David developed this healthcare management project to digitize hospital workflows and optimize information organization.`,
      vibeCoding: `Focusing on database normalization in MySQL and practical user flows, David built intuitive modules for patient records, pharmaceutical stock tracking with automated expiry alerts, sales receipt generation, and daily financial ledgers using PHP, JavaScript, and HTML5/CSS3.`,
      architecture: `PHP & MySQL Backend | Vanilla JavaScript Logic | HTML5 & CSS3 Responsive UI | Automated Stock Ledger & Receipt Generation | Live Netlify Deployment.`,
      commercialScale: `Reliable healthcare management systems provide essential infrastructure for clinics, chemists, and community health centers, proving David's ability to turn high-stakes domain requirements into working software.`
    },
    'real-estate-systems': {
      title: 'Real Estate Management Systems',
      subtitle: 'Property Business Processes & Information Organization',
      badge: 'Property Platform Project • Kenya',
      badgeClass: 'badge-commercial',
      spark: `Property managers and landlords face recurring headaches managing unit vacancies, scattered tenant lease agreements, overdue rent follow-ups, and maintenance contractor requests. David worked on software projects designed to support property-related business processes and improve information organization.`,
      vibeCoding: `David translated property management requirements into a structured database architecture. He developed relational schemas for units, tenants, leases, and payments, enabling automated occupancy tracking, rental payment telemetry, and maintenance issue logging.`,
      architecture: `Relational Database Schemas (MySQL) | Systems Development | Requirements Gathering | Lease Lifecycle Management | Client Communication & Support.`,
      commercialScale: `Real estate and property management is one of East Africa's most active economic sectors. Purpose-built management software provides landlords with transparent financial reporting and effortless tenant administration.`
    },
    'bwip-studio': {
      title: 'BWIP Barcode Studio — Professional Symbology & Verification Suite',
      subtitle: 'Studio-Grade Utility with Proven Commercial Milestone',
      badge: 'Commercial Milestone • 10 Codes Sold (KSh 1,500)',
      badgeClass: 'badge-live',
      spark: `Businesses and retail shops frequently battle rigid, overpriced software or ad-cluttered generators that only support a couple of basic formats. David built a studio-grade barcode and QR workstation supporting 100+ industrial symbologies, live camera decoding via jsQR, drag-and-drop QR editing, and batch generation.`,
      vibeCoding: `Harnessing bwip-js, Canvas API, and jsQR, David directed AI-assisted engineering sprints to build instant canvas rendering, precise millimetric dimension scaling, color controls, and print-sheet templating, integrated with an activation code licensing mechanism and automated M-Pesa verification.`,
      architecture: `Vanilla JavaScript | bwip-js 100+ Symbologies Engine | jsQR Live Camera Scanning | HTML5 Canvas API | M-Pesa Verification Workflows.`,
      commercialScale: `Validated commercial milestone with 10 activation codes sold directly to users, generating KSh 1,500 in sales before expenses — proving David's ability to package, deploy, market, and monetize a standalone utility.`
    },
    'mnp-marketplace': {
      title: 'Meru National Poly (MNP) Student Marketplace & Systems',
      subtitle: 'Campus Resource Exchange & Foundational Systems',
      badge: 'Academic Innovation & Foundation',
      badgeClass: 'badge-academic',
      spark: `At Meru National Polytechnic during his ICT Level 6 studies, David identified the need for a localized digital platform for students to exchange textbooks, equipment, and campus services.`,
      vibeCoding: `Building this project reinforced David's deep foundation in system troubleshooting, database schema normalization in MySQL, and practical user interface design before modern AI tools even existed — establishing the computer science bedrock he relies on today.`,
      architecture: `PHP & MySQL Backend | Relational Database Schemas | Practical Institutional Workflows | User Authentication.`,
      commercialScale: `Localized campus platforms solve real distribution problems in academic institutions while providing foundational experience in stakeholder-driven software engineering.`
    }
  };

  // General questions the AI Storyteller can answer
  const generalAnswers = {
    'why-hire': {
      title: 'Why David Chege Mungai is a Valuable Asset for Your Team',
      text: `<p>David Chege Mungai combines <strong>practical IT support expertise</strong>, <strong>hands-on software development</strong>, and <strong>AI-assisted workflow acceleration</strong>.</p>
      <ul class="modal-points-list">
        <li><strong>Comprehensive IT &amp; Infrastructure Support:</strong> Practical experience supporting computer systems, software configurations, network troubleshooting, and IT resource maintenance in research organizations like <strong>KALRO</strong> and <strong>KEFRI</strong>.</li>
        <li><strong>Proven Management Systems Development:</strong> Built practical management systems for healthcare (<strong>Aaban Hospital Management System</strong>), real estate (<strong>Real Estate Management Systems</strong>), business operations (<strong>Zenith Management System</strong>), and research coordination (<strong>KALRO Bio-Suite</strong>).</li>
        <li><strong>Modern AI Velocity &amp; Data Quality:</strong> Leverages modern tools like Cursor AI, VS Code, and Google Gemini to build rapidly, test thoroughly, and maintain high standards across AI training, evaluation, and data quality.</li>
        <li><strong>Client &amp; Stakeholder Problem-Solving:</strong> Skilled in requirements gathering, client communication, system testing, technical documentation, and ongoing support.</li>
      </ul>`
    },
    'vibe-coding': {
      title: 'How David Leverages AI-Assisted Development & Workflows',
      text: `<p>David uses modern AI development tools (Cursor AI, VS Code, Google Gemini) not as passive shortcuts, but as an <strong>architectural accelerator</strong>.</p>
      <p style="margin-top: 14px;">His workflow combines technical discipline with AI velocity:</p>
      <ol class="modal-steps-list">
        <li><strong>Requirements &amp; Data Architecture:</strong> He establishes database schemas, API contracts, and user requirements before generating code.</li>
        <li><strong>Precision AI Direction:</strong> He decomposes complex system features into modular prompts, directing AI tools with explicit constraints and patterns.</li>
        <li><strong>Rigorous Testing &amp; Verification:</strong> Every endpoint, SQL query, and user workflow is tested, audited for security, and verified against client needs.</li>
      </ol>
      <p style="margin-top: 14px; color: var(--accent-emerald); font-weight: 600;">The result: practical, dependable digital solutions delivered with exceptional efficiency and code quality.</p>`
    },
    'billion-scale': {
      title: 'David\'s High-Impact Projects & Systems',
      text: `<p>David has contributed to both enterprise organizational systems and high-leverage digital applications:</p>
      <ol class="modal-steps-list">
        <li><strong>KALRO Bio-Suite (Organizational Suite):</strong> An integrated software concept designed to coordinate diverse agricultural and livestock research workflows, data collection, and asset tracking into a unified digital environment.</li>
        <li><strong>MarketMed AI (AI Marketing Platform):</strong> An AI-powered platform concept designed to automate marketing content creation, ad assets, and business campaigns.</li>
        <li><strong>Aaban Hospital &amp; Real Estate Management Systems:</strong> Operational systems designed to solve concrete business headaches in healthcare inventory and property record management.</li>
        <li><strong>VibeStream (Media Application):</strong> A responsive music streaming and media download web application built on Node.js, Express.js, and SQLite.</li>
      </ol>`
    },
    'origin-story': {
      title: 'David Chege Mungai\'s Journey: Problem Solver & Builder',
      text: `<p>Based in <strong>Kiambu, Kenya</strong>, David's tech career was built on hands-on practical problem-solving. During his <strong>Information and Communication Technology (ICT) Level 6</strong> diploma training at Meru National Polytechnic, he mastered hardware diagnostics, operating systems (Windows and Linux), networking, and software engineering (HTML, CSS, JavaScript, PHP, MySQL).</p>
      <p style="margin-top: 14px;">He broadened his experience supporting IT operations and software initiatives at major Kenyan research institutions — the <strong>Kenya Forestry Research Institute (KEFRI)</strong> and the <strong>Kenya Agricultural and Livestock Research Organization (KALRO)</strong>, contributing to the <strong>KALRO Bio-Suite</strong>.</p>
      <p style="margin-top: 14px;">As an independent ICT consultant, he has delivered custom management systems for healthcare, real estate, and business clients (Zenith, Aaban Hospital, Real Estate Systems). Today, he applies modern AI-assisted development and data evaluation to build impactful digital solutions.</p>`
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
