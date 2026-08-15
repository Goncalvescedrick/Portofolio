// DOM Elements
const htmlElement = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const themeIconSun = document.querySelector("#theme-icon-sun");
const themeIconMoon = document.querySelector("#theme-icon-moon");
const scrollProgress = document.querySelector("#scroll-progress");

const menuToggle = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");
const navLinks = document.querySelectorAll(".nav-link");

const typewriterElement = document.querySelector("#typewriter");
const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

const filterButtons = document.querySelectorAll("#project-filters .filter-btn");
const projectCards = document.querySelectorAll(".project-card");

const projectModal = document.querySelector("#project-modal");
const modalClose = document.querySelector("#modal-close");
const modalImg = document.querySelector("#modal-img");
const modalTitle = document.querySelector("#modal-title");
const modalDesc = document.querySelector("#modal-desc");
const modalTechBadge = document.querySelector("#modal-tech-badge");
const modalTechList = document.querySelector("#modal-tech-list");
const modalDemoBtn = document.querySelector("#modal-demo-btn");
const modalCodeBtn = document.querySelector("#modal-code-btn");

const langToggle = document.querySelector("#lang-toggle");
const backToTopBtn = document.querySelector("#back-to-top");

// --- TRANSLATIONS DICTIONARY ---
const translations = {
  fr: {
    "meta.title": "Gonçalvès Cédrick | Développeur Web & Mobile Fullstack",
    "meta.description": "Portfolio professionnel de Gonçalvès Cédrick, développeur Web & Mobile spécialisé Laravel, Flutter, React, Architecture logicielle, et CMS (WordPress, Strapi).",
    "meta.og_title": "Gonçalvès Cédrick | Développeur Web & Mobile",
    "meta.og_description": "Développeur Web & Mobile Fullstack spécialisé Laravel, Flutter, React, Architecture logicielle, CMS.",
    "nav.accueil": "Accueil",
    "nav.apropos": "À propos",
    "nav.competences": "Compétences",
    "nav.projets": "Projets",
    "nav.experiences": "Expériences",
    "nav.contact": "Contact",
    "nav.cv": "CV",
    "nav.download_cv": "Télécharger mon CV",
    "hero.badge": "Disponible pour opportunités & recrutement",
    "hero.greeting": "Bonjour, je suis",
    "hero.description": "Je conçois des applications web et mobiles modernes, fluides et performantes avec Laravel, Flutter, React, Dart, MySQL & PostgreSQL, ainsi que l'intégration de CMS comme WordPress et Strapi.",
    "hero.cta_projects": "Voir mes projets",
    "hero.cta_contact": "Me contacter",
    "hero.cta_cv": "CV PDF",
    "hero.networks": "Réseaux :",
    "hero.role": "Développeur Web & Mobile Fullstack",
    "about.kicker": "À propos de moi",
    "about.title": "Développeur rigoureux, autonome et axé sur la qualité logicielle.",
    "about.p1": "Passionné par la création de solutions digitales complètes, je développe des applications <strong>Web & Mobiles</strong> performantes en combinant <strong>Laravel</strong>, <strong>React</strong> et <strong>Flutter</strong>. Rigoureux et orienté pratique, j'apporte une attention particulière à l'architecture logicielle, la modélisation de bases de données (UML/MCD) et l'intégration de <strong>CMS</strong> (WordPress, Strapi) pour répondre efficacement aux besoins métier.",
    "about.card1.title": "Web & Backend",
    "about.card1.desc": "Applications web (Laravel, PHP), APIs REST robustes et architecture MVC propre.",
    "about.card2.title": "Mobile Cross-Platform",
    "about.card2.desc": "Applications mobiles réactives (Flutter/Dart) pour iOS & Android avec UI soignée.",
    "about.card3.title": "Frontend & CMS",
    "about.card3.desc": "Interfaces dynamiques avec React & Tailwind CSS, intégration WordPress et Strapi.",
    "skills.kicker": "Compétences Techniques",
    "skills.title": "Un socle technique solide taillé pour le Web et le Mobile.",
    "skills.card1.title": "Backend & APIs",
    "skills.card2.title": "Mobile & Cross-Platform",
    "skills.card3.title": "Frontend & CMS",
    "skills.card4.title": "Architecture & Outils",
    "skills.arch_mvc": "Architecture MVC",
    "skills.uml": "Modélisation UML",
    "skills.db_modeling": "Merise MCD/MLD",
    "skills.responsive_ui": "UI Responsive",
    "skills.agile": "Méthodes Agiles / Scrum",
    "skills.autonomy": "Autonomie & Rigueur",
    "projects.kicker": "Réalisations",
    "projects.title": "Mes Projets Web & Mobile",
    "projects.filter.all": "Tous",
    "projects.filter.backend": "Laravel / PHP",
    "projects.filter.frontend": "React / Frontend",
    "projects.filter.mobile": "Mobile (Flutter)",
    "projects.view_details": "🔎 Voir les détails",
    "projects.details": "Détails du projet",
    "projects.code": "Code Source",
    "project1.label": "Application Web PHP & MySQL",
    "project1.title": "Clinique - Gestion Médicale",
    "project1.desc": "Plateforme web de gestion des dossiers patients, des rendez-vous médicaux et des accès multi-utilisateurs.",
    "project1.bullet1": "Authentification sécurisée & gestion des rôles (RBAC).",
    "project1.bullet2": "Interface responsive pour la prise de rendez-vous.",
    "project2.label": "Application Laravel & BDD",
    "project2.title": "Gestion des Dossiers BCLCC",
    "project2.desc": "Application web métier de gestion centralisée des dossiers et du suivi des plaintes.",
    "project2.bullet1": "Suivi des dossiers & statistiques analytiques.",
    "project2.bullet2": "Structure orientée objet et requêtes SQL optimisées.",
    "project3.label": "Application Web React & Vite",
    "project3.title": "Clever-Group",
    "project3.desc": "Site web vitrine interactif et moderne pour l'entreprise Clever-Group.",
    "project3.bullet1": "Site web responsive & animations fluides.",
    "project3.bullet2": "Design moderne et composants réutilisables.",
    "project4.label": "Frontend React & Tailwind CSS",
    "project4.title": "ACE Tech",
    "project4.desc": "Site web entreprise pour ACE Tech, valorisant l'offre de services informatiques.",
    "project4.bullet1": "Interface moderne, épurée et responsive.",
    "project4.bullet2": "Optimisation des performances avec Vite.",
    "project5.label": "Application Mobile Flutter & API",
    "project5.title": "PulseMobile - Application Mobile",
    "project5.desc": "Application mobile cross-platform avec gestion d'état, stockage local et consommation d’API REST.",
    "project5.bullet1": "Interface moderne et fluide pour iOS & Android.",
    "project5.bullet2": "Architecture propre et consommation d'APIs REST.",
    "experiences.kicker": "Parcours & Formation",
    "experiences.title": "Une progression axée sur le développement logiciel et la pratique.",
    "experiences.item1.date": "En cours",
    "experiences.item1.title": "Études en Informatique & Génie Logiciel",
    "experiences.item1.desc": "Formation approfondie en développement Web & Mobile, modélisation des architectures logicielles (UML, MCD) et bases de données.",
    "experiences.item2.date": "Projets Fullstack & Mobiles",
    "experiences.item2.title": "Conception d'Applications Web & Mobiles",
    "experiences.item2.desc": "Développement d'applications complètes avec Laravel, React et Flutter, conception d'APIs REST et modélisation relationnelle.",
    "experiences.item3.date": "CMS & Projets Pro",
    "experiences.item3.title": "Intégration CMS & Déploiement",
    "experiences.item3.desc": "Déploiement de solutions sur mesure avec WordPress et Strapi, gestion de versions Git et méthodologies agiles.",
    "contact.kicker": "Contact",
    "contact.title": "Discutons d’une opportunité ou d’un projet.",
    "contact.desc": "Je suis disponible pour rejoindre votre équipe et contribuer activement à vos projets Web & Mobile. Contactez-moi par formulaire ou par email !",
    "contact.form.name": "Nom & Prénom",
    "contact.form.name_placeholder": "Votre nom",
    "contact.form.email": "Email",
    "contact.form.email_placeholder": "votre@email.com",
    "contact.form.subject": "Sujet",
    "contact.form.subject_placeholder": "Opportunité de recrutement / projet",
    "contact.form.message": "Message",
    "contact.form.message_placeholder": "Décrivez votre proposition...",
    "contact.form.submit": "Envoyer le message",
    "contact.feedback.sending": "Préparation de l'envoi email pour {name}...",
    "contact.feedback.success": "✔ Votre application email s'ouvre pour envoyer le message.",
    "footer.copy": "© 2026 Gonçalvès Cédrick. Tous droits réservés.",
    "modal.key_tech": "Technologies clés :",
    "modal.demo": "Voir la Démo",
    "modal.code": "Code Source",
    "modal.not_online": "Pas encore mis en ligne",
    "projects.demo": "Démo"
  },
  en: {
    "meta.title": "Gonçalvès Cédrick | Fullstack Web & Mobile Developer",
    "meta.description": "Professional portfolio of Gonçalvès Cédrick, Web & Mobile developer specialized in Laravel, Flutter, React, Software Architecture, and CMS (WordPress, Strapi).",
    "meta.og_title": "Gonçalvès Cédrick | Web & Mobile Developer",
    "meta.og_description": "Fullstack Web & Mobile Developer specialized in Laravel, Flutter, React, Software Architecture, CMS.",
    "nav.accueil": "Home",
    "nav.apropos": "About",
    "nav.competences": "Skills",
    "nav.projets": "Projects",
    "nav.experiences": "Experience",
    "nav.contact": "Contact",
    "nav.cv": "Resume",
    "nav.download_cv": "Download my Resume",
    "hero.badge": "Available for opportunities & hiring",
    "hero.greeting": "Hi, I am",
    "hero.description": "I design modern, fluid, and high-performance web and mobile applications using Laravel, Flutter, React, Dart, MySQL & PostgreSQL, as well as CMS integration (WordPress, Strapi).",
    "hero.cta_projects": "View my projects",
    "hero.cta_contact": "Contact me",
    "hero.cta_cv": "PDF Resume",
    "hero.networks": "Networks:",
    "hero.role": "Fullstack Web & Mobile Developer",
    "about.kicker": "About me",
    "about.title": "Rigorous, autonomous developer focused on software quality.",
    "about.p1": "Passionate about creating end-to-end digital solutions, I build high-performance <strong>Web & Mobile</strong> applications combining <strong>Laravel</strong>, <strong>React</strong>, and <strong>Flutter</strong>. Thorough and practice-driven, I pay special attention to software architecture, database modeling (UML/MCD), and <strong>CMS</strong> integration (WordPress, Strapi) to address business needs.",
    "about.card1.title": "Web & Backend",
    "about.card1.desc": "Web applications (Laravel, PHP), robust REST APIs, and clean MVC architecture.",
    "about.card2.title": "Cross-Platform Mobile",
    "about.card2.desc": "Responsive mobile apps (Flutter/Dart) for iOS & Android with sleek UI.",
    "about.card3.title": "Frontend & CMS",
    "about.card3.desc": "Dynamic user interfaces with React & Tailwind CSS, WordPress & Strapi integration.",
    "skills.kicker": "Technical Skills",
    "skills.title": "A solid technical foundation built for Web and Mobile.",
    "skills.card1.title": "Backend & APIs",
    "skills.card2.title": "Mobile & Cross-Platform",
    "skills.card3.title": "Frontend & CMS",
    "skills.card4.title": "Architecture & Tools",
    "skills.arch_mvc": "MVC Architecture",
    "skills.uml": "UML Modeling",
    "skills.db_modeling": "MCD/MLD Modeling",
    "skills.responsive_ui": "Responsive UI",
    "skills.agile": "Agile / Scrum Methods",
    "skills.autonomy": "Autonomy & Thoroughness",
    "projects.kicker": "Portfolio",
    "projects.title": "My Web & Mobile Projects",
    "projects.filter.all": "All",
    "projects.filter.backend": "Laravel / PHP",
    "projects.filter.frontend": "React / Frontend",
    "projects.filter.mobile": "Mobile (Flutter)",
    "projects.view_details": "🔎 View details",
    "projects.details": "Project Details",
    "projects.code": "Source Code",
    "project1.label": "PHP & MySQL Web App",
    "project1.title": "Clinique - Medical Management",
    "project1.desc": "Web platform for patient records, medical appointments, and multi-user access.",
    "project1.bullet1": "Secure authentication & role-based access control (RBAC).",
    "project1.bullet2": "Responsive interface for appointment booking.",
    "project2.label": "Laravel & Database Application",
    "project2.title": "BCLCC Case Management",
    "project2.desc": "Centralized web application for investigation cases and complaints management.",
    "project2.bullet1": "Case tracking & analytical statistics.",
    "project2.bullet2": "Object-oriented design and optimized SQL queries.",
    "project3.label": "React & Vite Web App",
    "project3.title": "Clever-Group",
    "project3.desc": "Modern and interactive showcase website for Clever-Group.",
    "project3.bullet1": "Responsive website & fluid animations.",
    "project3.bullet2": "Modern design & reusable components.",
    "project4.label": "React & Tailwind CSS Frontend",
    "project4.title": "ACE Tech",
    "project4.desc": "Corporate showcase website for ACE Tech highlighting IT services.",
    "project4.bullet1": "Modern, clean, and responsive interface.",
    "project4.bullet2": "Performance optimization using Vite.",
    "project5.label": "Flutter Mobile App & API",
    "project5.title": "PulseMobile - Mobile App",
    "project5.desc": "Cross-platform mobile application with state management, local storage, and REST API consumption.",
    "project5.bullet1": "Modern and fluid UI for iOS & Android.",
    "project5.bullet2": "Clean architecture and REST API consumption.",
    "experiences.kicker": "Path & Education",
    "experiences.title": "A progression focused on software engineering and hands-on practice.",
    "experiences.item1.date": "Ongoing",
    "experiences.item1.title": "Computer Science & Software Engineering Studies",
    "experiences.item1.desc": "In-depth training in Web & Mobile development, software architecture modeling (UML, MCD), and database design.",
    "experiences.item2.date": "Fullstack & Mobile Projects",
    "experiences.item2.title": "Web & Mobile Applications Design",
    "experiences.item2.desc": "Development of fullstack apps with Laravel, React, and Flutter, REST API design, and relational database modeling.",
    "experiences.item3.date": "CMS & Pro Projects",
    "experiences.item3.title": "CMS Integration & Deployment",
    "experiences.item3.desc": "Deployment of custom solutions with WordPress and Strapi, Git version control, and agile workflows.",
    "contact.kicker": "Contact",
    "contact.title": "Let's discuss an opportunity or a project.",
    "contact.desc": "I am available to join your team and actively contribute to your Web & Mobile projects. Contact me via the form or email!",
    "contact.form.name": "Full Name",
    "contact.form.name_placeholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.email_placeholder": "your@email.com",
    "contact.form.subject": "Subject",
    "contact.form.subject_placeholder": "Hiring opportunity / project",
    "contact.form.message": "Message",
    "contact.form.message_placeholder": "Describe your proposal...",
    "contact.form.submit": "Send Message",
    "contact.feedback.sending": "Preparing email submission for {name}...",
    "contact.feedback.success": "✔ Your email app is opening to send the message.",
    "footer.copy": "© 2026 Gonçalvès Cédrick. All rights reserved.",
    "modal.key_tech": "Key Technologies:",
    "modal.demo": "View Demo",
    "modal.code": "Source Code",
    "modal.not_online": "Not deployed yet",
    "projects.demo": "Demo"
  }
};

let currentLang = localStorage.getItem("lang") || "fr";

// --- 1. DARK / LIGHT THEME TOGGLE ---
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

  setTheme(initialTheme);
}

function setTheme(theme) {
  if (theme === "dark") {
    htmlElement.classList.add("dark");
    htmlElement.setAttribute("data-theme", "dark");
    themeIconSun?.classList.remove("hidden");
    themeIconMoon?.classList.add("hidden");
  } else {
    htmlElement.classList.remove("dark");
    htmlElement.setAttribute("data-theme", "light");
    themeIconSun?.classList.add("hidden");
    themeIconMoon?.classList.remove("hidden");
  }
  localStorage.setItem("theme", theme);
}

themeToggle?.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(currentTheme);
});

initTheme();

// --- 2. MOBILE MENU TOGGLE ---
menuToggle?.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("hidden") === false;
  menuToggle.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// --- 3. SCROLL PROGRESS BAR & SCROLLSPY ---
window.addEventListener("scroll", () => {
  // Scroll Progress Width
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  if (scrollProgress) {
    scrollProgress.style.width = scrolled + "%";
  }

  // Active Navigation Link on Scroll (ScrollSpy)
  const sections = document.querySelectorAll("section[id]");
  const scrollPosition = window.scrollY + 180;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
      mobileLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// --- 4. REVEAL ANIMATIONS (IntersectionObserver) ---
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

// --- 5. TYPEWRITER EFFECT ---
const typewriterPhrases = {
  fr: [
    "Développeur Web & Mobile Fullstack",
    "Spécialiste Laravel & Flutter",
    "Applications React & Tailwind CSS",
    "Architecture Logicielle & BDD",
    "Intégration CMS : WordPress & Strapi",
  ],
  en: [
    "Fullstack Web & Mobile Developer",
    "Laravel & Flutter Specialist",
    "React & Tailwind CSS Applications",
    "Software & Database Architecture",
    "CMS Integration: WordPress & Strapi",
  ]
};

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterTimeout;

function typeEffect() {
  if (!typewriterElement) return;

  const phrases = typewriterPhrases[currentLang];
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentPhrase.length) {
    typeSpeed = 2200; // Pause at end of phrase
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 400;
  }

  typewriterTimeout = setTimeout(typeEffect, typeSpeed);
}

// --- 6. PROJECT FILTERS ---
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.style.display = "flex";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 50);
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(15px)";
        setTimeout(() => {
          card.style.display = "none";
        }, 200);
      }
    });
  });
});

// --- 7. PROJECT MODAL DETAILED VIEW ---
function openModal(card) {
  if (!card) return;

  // Mark card as active so we can reference it if language changes
  document.querySelectorAll(".project-card").forEach(c => c.classList.remove("is-active"));
  card.classList.add("is-active");

  const title = currentLang === "fr" ? card.getAttribute("data-title-fr") : card.getAttribute("data-title-en");
  const img = card.getAttribute("data-img");
  const desc = currentLang === "fr" ? card.getAttribute("data-desc-fr") : card.getAttribute("data-desc-en");
  const tech = card.getAttribute("data-tech");
  const category = card.getAttribute("data-category");
  const demo = card.getAttribute("data-demo") || "#";
  const code = card.getAttribute("data-code") || "#";

  if (modalTitle) modalTitle.textContent = title;
  if (modalImg) modalImg.src = img;
  if (modalDesc) modalDesc.textContent = desc;
  if (modalTechBadge) modalTechBadge.textContent = category;
  if (modalDemoBtn) {
    modalDemoBtn.setAttribute("href", demo);
    if(demo === "#") modalDemoBtn.removeAttribute("target");
    else modalDemoBtn.setAttribute("target", "_blank");
  }
  if (modalCodeBtn) {
    modalCodeBtn.setAttribute("href", code);
    if(code === "#") modalCodeBtn.removeAttribute("target");
    else modalCodeBtn.setAttribute("target", "_blank");
  }

  // Render Tech Badges in Modal
  if (modalTechList && tech) {
    modalTechList.innerHTML = "";
    const techArray = tech.split(",");
    techArray.forEach((t) => {
      const span = document.createElement("span");
      span.className =
        "border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300 text-xs font-bold px-3 py-1 rounded-full";
      span.textContent = t.trim();
      modalTechList.appendChild(span);
    });
  }

  projectModal?.classList.add("is-open");
  projectModal?.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  projectModal?.classList.remove("is-open");
  projectModal?.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  document.querySelectorAll(".project-card").forEach(c => c.classList.remove("is-active"));
}

document.querySelectorAll(".btn-open-modal").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const card = btn.closest(".project-card");
    openModal(card);
  });
});

modalClose?.addEventListener("click", closeModal);

projectModal?.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && projectModal?.classList.contains("is-open")) {
    closeModal();
  }
});

// --- 8. CONTACT FORM SUBMISSION & FEEDBACK ---
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (formFeedback) {
    formFeedback.classList.remove("hidden", "bg-red-100", "text-red-700", "bg-emerald-100", "text-emerald-700");
    formFeedback.classList.add("bg-blue-100", "text-blue-800", "dark:bg-blue-950", "dark:text-blue-200");
    const preparingMsg = translations[currentLang]["contact.feedback.sending"].replace("{name}", name);
    formFeedback.textContent = preparingMsg;
  }

  const recipient = "goncalvescedrick32@gmail.com";
  const body = `Bonjour Cédrick,%0D%0A%0D%0ANom: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

  setTimeout(() => {
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;
    if (formFeedback) {
      formFeedback.classList.remove("bg-blue-100", "text-blue-800");
      formFeedback.classList.add("bg-emerald-100", "text-emerald-800", "dark:bg-emerald-950", "dark:text-emerald-200");
      formFeedback.textContent = translations[currentLang]["contact.feedback.success"];
    }
  }, 400);
});

// --- 9. BACK TO TOP BUTTON ---
window.addEventListener("scroll", () => {
  if (backToTopBtn) {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("is-visible");
    } else {
      backToTopBtn.classList.remove("is-visible");
    }
  }
});

backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// --- 10. MULTILINGUAL (i18n) SYSTEM ---
function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((elem) => {
    const key = elem.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key] !== undefined) {
      const translation = translations[lang][key];
      if (translation.includes("<") && translation.includes(">")) {
        elem.innerHTML = translation;
      } else {
        elem.textContent = translation;
      }
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((elem) => {
    const key = elem.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key] !== undefined) {
      elem.setAttribute("placeholder", translations[lang][key]);
    }
  });

  document.querySelectorAll("[data-i18n-content]").forEach((elem) => {
    const key = elem.getAttribute("data-i18n-content");
    if (translations[lang] && translations[lang][key] !== undefined) {
      elem.setAttribute("content", translations[lang][key]);
    }
  });

  // Update HTML lang attribute
  htmlElement.setAttribute("lang", lang);

  // Update Lang toggle button text (show opposite option)
  if (langToggle) {
    langToggle.textContent = lang === "fr" ? "EN" : "FR";
    langToggle.setAttribute("aria-label", lang === "fr" ? "Change to English" : "Changer en Français");
  }

  // Reload modal if open to change its language dynamically
  if (projectModal?.classList.contains("is-open")) {
    const activeCard = document.querySelector(".project-card.is-active");
    if (activeCard) {
      openModal(activeCard);
    }
  }

  // Reset and restart typewriter animation
  if (typewriterTimeout) clearTimeout(typewriterTimeout);
  phraseIndex = 0;
  charIndex = 0;
  isDeleting = false;
  if (typewriterElement) typewriterElement.textContent = "";
  setTimeout(typeEffect, 300);
}

langToggle?.addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  localStorage.setItem("lang", currentLang);
  applyTranslations(currentLang);
});

// --- 11. HANDLE EMPTY LINKS ---
function showToast(message) {
  const existingToast = document.getElementById("empty-link-toast");
  if (existingToast) existingToast.remove();

  const toast = document.createElement("div");
  toast.id = "empty-link-toast";
  toast.className = "fixed bottom-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 px-6 py-3 rounded-xl shadow-2xl z-[100] transition-opacity duration-300 font-medium text-sm flex items-center gap-3 opacity-0";
  
  toast.innerHTML = `
    <svg class="w-5 h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
    <span>${message}</span>
  `;
  
  document.body.appendChild(toast);
  
  // Fade in
  setTimeout(() => toast.style.opacity = "1", 10);
  
  // Fade out
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function handleEmptyLink(e, btnElement) {
  const btn = btnElement || e.currentTarget;
  const href = btn.getAttribute("href");
  if (!href || href === "#" || href.endsWith("/#") || href.endsWith("index.html#")) {
    e.preventDefault();
    showToast(translations[currentLang]["modal.not_online"]);
  }
}

// Initial binding for modal buttons
document.querySelectorAll("#modal-demo-btn, #modal-code-btn").forEach(btn => {
  btn.addEventListener("click", (e) => handleEmptyLink(e, btn));
});

// We can delegate for project cards since they are static
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-action-code, .btn-action-demo");
  if (btn) {
    handleEmptyLink(e, btn);
  }
});

// Remove target='_blank' from any static button with href='#'
document.querySelectorAll('.btn-action-code, .btn-action-demo').forEach(btn => {
  if(btn.getAttribute('href') === '#') {
    btn.removeAttribute('target');
  }
});

// Initializations on page load
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
});
