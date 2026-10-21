// ═══════════════════════════════════════════════════════
// DOM Elements
// ═══════════════════════════════════════════════════════
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

// ═══════════════════════════════════════════════════════
// TRANSLATIONS DICTIONARY
// ═══════════════════════════════════════════════════════
const translations = {
  fr: {
    "meta.title": "Gonçalvès Cédrick | Développeur Web & Mobile Fullstack",
    "meta.description": "Portfolio professionnel de Gonçalvès Cédrick, développeur Web & Mobile spécialisé Laravel, Flutter, React, Architecture logicielle, et CMS (WordPress, Strapi).",
    "meta.og_title": "Gonçalvès Cédrick | Développeur Web & Mobile",
    "meta.og_description": "Développeur Web & Mobile Fullstack spécialisé Laravel, Flutter, React, Architecture logicielle, CMS.",
    "nav.accueil": "Accueil",
    "nav.projets": "Projets",
    "nav.competences": "Compétences",
    "nav.parcours": "Parcours",
    "nav.contact": "Contact",
    "nav.cv": "CV",
    "nav.download_cv": "Télécharger mon CV",
    "hero.badge": "Disponible pour opportunités & recrutement",
    "hero.title": "Je conçois des applications Web & Mobile qui résolvent de <span class=\"bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400\">vrais problèmes.</span>",
    "hero.description": "Développeur Fullstack — Laravel · Flutter · React — j'ai conçu la plateforme de gestion des dossiers pour la Brigade de lutte contre la cybercriminalité (BCLCC) et des applications médicales sécurisées.",
    "hero.cta_projects": "Découvrir mes réalisations",
    "hero.cta_contact": "Me contacter",
    "hero.role": "Développeur Web & Mobile Fullstack",
    "hero.metric_projects": "Projets livrés",
    "hero.metric_platforms": "Plateformes (Web, Mobile, CMS)",
    "hero.metric_lang": "Bilingue",
    "skills.kicker": "Compétences Techniques",
    "skills.title": "Un socle technique solide, taillé pour le Web et le Mobile.",
    "skills.card1.title": "Backend & APIs",
    "skills.card2.title": "Mobile & Cross-Platform",
    "skills.card3.title": "Frontend & CMS",
    "skills.card4.title": "Systèmes, BDD & Outils",
    "skills.systems": "Réseaux & Systèmes",
    "skills.uml": "Modélisation UML",
    "skills.db_modeling": "Modélisation BDD (Merise/UML)",
    "skills.maintenance": "Maintenance & Diagnostic",
    "skills.security": "Sécurité & Audit",
    "skills.responsive_ui": "UI Responsive",
    "skills.agile": "Agile / Scrum",
    "projects.kicker": "Réalisations",
    "projects.title": "Des projets concrets, des problèmes résolus.",
    "projects.filter.all": "Tous",
    "projects.filter.backend": "Laravel / Backend",
    "projects.filter.frontend": "React / Frontend",
    "projects.filter.mobile": "Mobile (Flutter)",
    "projects.view_details": "🔎 Voir les détails",
    "projects.details": "Détails du projet",
    "projects.code": "Code",
    "projects.demo": "Démo live",
    "projects.featured": "Projet phare",
    "project1.label": "Application métier Laravel — Stage BCLCC",
    "project1.title": "Gestion des Dossiers & Plaintes — BCLCC",
    "project1.context": "Plateforme sécurisée pour la Brigade de lutte contre la cybercriminalité : suivi des plaintes, courriers, scellés, assistance technique et traçabilité d'audit.",
    "project1.highlight1": "Sécurité RBAC, journal d'audit & traçabilité complète",
    "project1.highlight2": "Gestion des dossiers, plaintes, courriers & scellés",
    "project2.label": "Application Web PHP & MySQL",
    "project2.title": "Clinique — Gestion Médicale",
    "project2.context": "Plateforme de gestion des dossiers patients, rendez-vous médicaux et accès sécurisés multi-utilisateurs.",
    "project2.highlight1": "Authentification sécurisée & gestion des rôles (RBAC)",
    "project2.highlight2": "Interface responsive pour la prise de rendez-vous",
    "project3.label": "Application Web React & Vite",
    "project3.title": "Clever-Group",
    "project3.context": "Site web vitrine interactif et moderne pour Clever-Group, entreprise de services digitaux.",
    "project3.highlight1": "Design responsive & animations fluides",
    "project3.highlight2": "Composants React réutilisables & performants",
    "project4.label": "Frontend HTML/CSS/JS",
    "project4.title": "ACE Tech",
    "project4.context": "Site web entreprise valorisant l'offre de services informatiques d'ACE Tech.",
    "project4.highlight1": "Interface moderne, épurée et responsive",
    "project4.highlight2": "Optimisation des performances front-end",
    "project5.label": "Application Mobile Flutter & API",
    "project5.title": "PulseMobile",
    "project5.context": "Application mobile cross-platform avec gestion d'état, stockage local et consommation d'API REST.",
    "project5.highlight1": "UI moderne et fluide pour iOS & Android",
    "project5.highlight2": "Architecture propre & consommation d'APIs REST",
    "parcours.kicker": "Parcours & Formation",
    "parcours.title": "Une progression alliant développement logiciel, réseaux et systèmes.",
    "parcours.item1.date": "27 Fév. 2026 – 27 Mai 2026",
    "parcours.item1.title": "Stage Développeur Web & Support — BCLCC",
    "parcours.item1.desc": "Brigade Centrale de Lutte Contre la Cybercriminalité. Conception et développement d'une application web Laravel de gestion des dossiers, plaintes, courriers, scellés et assistance technique. Sécurité RBAC, audit et diagnostic matériel/logiciel.",
    "parcours.item2.date": "2023 – 2026",
    "parcours.item2.title": "Licence en Réseaux et Systèmes Informatiques (RSI)",
    "parcours.item2.desc": "Institut Supérieur de Technologies (IST), Ouagadougou. Cursus axé sur l'architecture réseaux, systèmes d'exploitation, modélisation de bases de données relationnelles, algorithmique et ingénierie logicielle.",
    "parcours.item3.date": "2022 – 2023",
    "parcours.item3.title": "Baccalauréat Scientifique",
    "parcours.item3.desc": "Complexe Scolaire les Elites, Ouagadougou. Formation scientifique approfondie, rigueur analytique, logique mathématique et esprit de synthèse.",
    "contact.kicker": "Contact",
    "contact.title": "Disponible pour un poste, un stage ou un projet.",
    "contact.desc": "Je suis prêt à rejoindre votre équipe et contribuer à vos projets Web & Mobile. Écrivez-moi directement ou utilisez le formulaire ci-contre.",
    "contact.phone_label": "Téléphone / WhatsApp",
    "contact.whatsapp_label": "WhatsApp Direct",
    "contact.whatsapp_action": "Démarrer une discussion instantanée",
    "contact.location_label": "Localisation",
    "contact.location_value": "Ouagadougou, Burkina Faso",
    "contact.form.name": "Nom & Prénom",
    "contact.form.name_placeholder": "Votre nom",
    "contact.form.email": "Email",
    "contact.form.email_placeholder": "votre@email.com",
    "contact.form.subject": "Sujet",
    "contact.form.subject_placeholder": "Opportunité de recrutement / projet",
    "contact.form.message": "Message",
    "contact.form.message_placeholder": "Décrivez votre proposition...",
    "contact.form.submit": "Envoyer le message",
    "contact.form.sending": "Envoi en cours...",
    "contact.form.hint": "Vos messages me parviennent directement sur goncalvescedrick32@gmail.com.",
    "contact.feedback.sending": "Préparation de l'envoi email pour {name}...",
    "contact.feedback.success": "✔ Votre application email s'ouvre pour envoyer le message.",
    "contact.feedback.sent_success": "✔ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.",
    "contact.feedback.fallback": "✔ Ouverture de votre application email pour finaliser l'envoi...",
    "contact.feedback.error": "❌ Impossible d'envoyer directement. Veuillez utiliser le lien email ci-dessus.",
    "contact.toast.email_copied": "✔ Adresse email copiée dans le presse-papier !",
    "contact.toast.phone_copied": "✔ Numéro de téléphone copié !",
    "contact.toast.copied": "✔ Copié dans le presse-papier !",
    "footer.copy": "© 2026 Gonçalvès Cédrick. Tous droits réservés.",
    "modal.key_tech": "Technologies clés :",
    "modal.demo": "Voir la Démo",
    "modal.code": "Code Source"
  },
  en: {
    "meta.title": "Gonçalvès Cédrick | Fullstack Web & Mobile Developer",
    "meta.description": "Professional portfolio of Gonçalvès Cédrick, Web & Mobile developer specialized in Laravel, Flutter, React, Software Architecture, and CMS (WordPress, Strapi).",
    "meta.og_title": "Gonçalvès Cédrick | Web & Mobile Developer",
    "meta.og_description": "Fullstack Web & Mobile Developer specialized in Laravel, Flutter, React, Software Architecture, CMS.",
    "nav.accueil": "Home",
    "nav.projets": "Projects",
    "nav.competences": "Skills",
    "nav.parcours": "Journey",
    "nav.contact": "Contact",
    "nav.cv": "Resume",
    "nav.download_cv": "Download my Resume",
    "hero.badge": "Available for opportunities & hiring",
    "hero.title": "I build Web & Mobile applications that solve <span class=\"bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400\">real problems.</span>",
    "hero.description": "Fullstack Developer — Laravel · Flutter · React — I designed the case management platform for the Central Cybercrime Investigation Brigade (BCLCC) and secure medical applications.",
    "hero.cta_projects": "See my work",
    "hero.cta_contact": "Contact me",
    "hero.role": "Fullstack Web & Mobile Developer",
    "hero.metric_projects": "Projects delivered",
    "hero.metric_platforms": "Platforms (Web, Mobile, CMS)",
    "hero.metric_lang": "Bilingual",
    "skills.kicker": "Technical Skills",
    "skills.title": "A solid technical foundation built for Web and Mobile.",
    "skills.card1.title": "Backend & APIs",
    "skills.card2.title": "Mobile & Cross-Platform",
    "skills.card3.title": "Frontend & CMS",
    "skills.card4.title": "Systems, Databases & Tools",
    "skills.systems": "Networks & Systems",
    "skills.uml": "UML Modeling",
    "skills.db_modeling": "Database Modeling (Merise/UML)",
    "skills.maintenance": "Hardware & Software Support",
    "skills.security": "Security & Audit",
    "skills.responsive_ui": "Responsive UI",
    "skills.agile": "Agile / Scrum",
    "projects.kicker": "Portfolio",
    "projects.title": "Real projects, real problems solved.",
    "projects.filter.all": "All",
    "projects.filter.backend": "Laravel / Backend",
    "projects.filter.frontend": "React / Frontend",
    "projects.filter.mobile": "Mobile (Flutter)",
    "projects.view_details": "🔎 View details",
    "projects.details": "Project Details",
    "projects.code": "Code",
    "projects.demo": "Live Demo",
    "projects.featured": "Featured",
    "project1.label": "Laravel Business Application — BCLCC Internship",
    "project1.title": "Case & Complaints Management — BCLCC",
    "project1.context": "Secure platform for the Cybercrime Investigation Brigade: tracking complaints, official mail, evidence seals, technical assistance, and audit logs.",
    "project1.highlight1": "Secure RBAC, audit logging & full action traceability",
    "project1.highlight2": "Management of cases, complaints, official mail & evidence seals",
    "project2.label": "PHP & MySQL Web App",
    "project2.title": "Clinique — Medical Management",
    "project2.context": "Patient records management platform with medical appointments and secure multi-user access.",
    "project2.highlight1": "Secure authentication & role-based access control (RBAC)",
    "project2.highlight2": "Responsive interface for appointment booking",
    "project3.label": "React & Vite Web App",
    "project3.title": "Clever-Group",
    "project3.context": "Modern and interactive showcase website for Clever-Group, a digital services company.",
    "project3.highlight1": "Responsive design & fluid animations",
    "project3.highlight2": "Reusable & performant React components",
    "project4.label": "Frontend HTML/CSS/JS",
    "project4.title": "ACE Tech",
    "project4.context": "Corporate website showcasing ACE Tech's IT services offering.",
    "project4.highlight1": "Modern, clean, and responsive interface",
    "project4.highlight2": "Front-end performance optimization",
    "project5.label": "Flutter Mobile App & API",
    "project5.title": "PulseMobile",
    "project5.context": "Cross-platform mobile app with state management, local storage, and REST API consumption.",
    "project5.highlight1": "Modern and fluid UI for iOS & Android",
    "project5.highlight2": "Clean architecture & REST API consumption",
    "parcours.kicker": "Path & Education",
    "parcours.title": "A career combining software engineering, networking, and systems.",
    "parcours.item1.date": "Feb 27, 2026 – May 27, 2026",
    "parcours.item1.title": "Web Developer & IT Support Intern — BCLCC",
    "parcours.item1.desc": "Central Cybercrime Investigation Brigade. Design and development of a Laravel web app managing case files, complaints, official mail, evidence seals, and technical support. RBAC security, audit logging, and hardware/software diagnostics.",
    "parcours.item2.date": "2023 – 2026",
    "parcours.item2.title": "Bachelor in Networks & Computer Systems",
    "parcours.item2.desc": "Higher Institute of Technologies (IST), Ouagadougou. Curriculum covering network architecture, operating systems, relational database modeling, algorithms, and software engineering.",
    "parcours.item3.date": "2022 – 2023",
    "parcours.item3.title": "Scientific Baccalaureate",
    "parcours.item3.desc": "Complexe Scolaire les Elites, Ouagadougou. Strong scientific foundation, analytical rigor, mathematical logic, and critical thinking.",
    "contact.kicker": "Contact",
    "contact.title": "Available for a position, internship, or project.",
    "contact.desc": "I'm ready to join your team and contribute to your Web & Mobile projects. Reach out directly or use the form.",
    "contact.phone_label": "Phone / WhatsApp",
    "contact.whatsapp_label": "Direct WhatsApp",
    "contact.whatsapp_action": "Start an instant conversation",
    "contact.location_label": "Location",
    "contact.location_value": "Ouagadougou, Burkina Faso",
    "contact.form.name": "Full Name",
    "contact.form.name_placeholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.email_placeholder": "your@email.com",
    "contact.form.subject": "Subject",
    "contact.form.subject_placeholder": "Hiring opportunity / project",
    "contact.form.message": "Message",
    "contact.form.message_placeholder": "Describe your proposal...",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.hint": "Your messages reach me directly at goncalvescedrick32@gmail.com.",
    "contact.feedback.sending": "Preparing email for {name}...",
    "contact.feedback.success": "✔ Your email app is opening to send the message.",
    "contact.feedback.sent_success": "✔ Message sent successfully! I will get back to you as soon as possible.",
    "contact.feedback.fallback": "✔ Opening your email app to finalize sending...",
    "contact.feedback.error": "❌ Unable to send directly. Please use the direct email link above.",
    "contact.toast.email_copied": "✔ Email address copied to clipboard!",
    "contact.toast.phone_copied": "✔ Phone number copied!",
    "contact.toast.copied": "✔ Copied to clipboard!",
    "footer.copy": "© 2026 Gonçalvès Cédrick. All rights reserved.",
    "modal.key_tech": "Key Technologies:",
    "modal.demo": "View Demo",
    "modal.code": "Source Code"
  }
};

let currentLang = localStorage.getItem("lang") || "fr";

// ═══════════════════════════════════════════════════════
// 1. DARK / LIGHT THEME TOGGLE
// ═══════════════════════════════════════════════════════
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

// ═══════════════════════════════════════════════════════
// 2. MOBILE MENU TOGGLE
// ═══════════════════════════════════════════════════════
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

// ═══════════════════════════════════════════════════════
// 3. UNIFIED SCROLL HANDLER (progress bar + scrollspy + back-to-top)
// ═══════════════════════════════════════════════════════
let ticking = false;

function onScroll() {
  if (ticking) return;
  ticking = true;

  requestAnimationFrame(() => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Scroll Progress Bar
    if (scrollProgress && height > 0) {
      scrollProgress.style.width = ((winScroll / height) * 100) + "%";
    }

    // ScrollSpy — Active Navigation Link
    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = winScroll + 180;

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

    // Back to Top Button
    if (backToTopBtn) {
      backToTopBtn.classList.toggle("is-visible", winScroll > 400);
    }

    ticking = false;
  });
}

window.addEventListener("scroll", onScroll, { passive: true });

// ═══════════════════════════════════════════════════════
// 4. REVEAL ANIMATIONS (IntersectionObserver)
// ═══════════════════════════════════════════════════════
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

// ═══════════════════════════════════════════════════════
// 5. TYPEWRITER EFFECT
// ═══════════════════════════════════════════════════════
const typewriterPhrases = {
  fr: [
    "Développeur Fullstack — Laravel · Flutter · React",
    "Licence Réseaux & Systèmes Informatiques (IST)",
    "Plateformes sécurisées & traçabilité BCLCC",
    "Modélisation de bases de données & architecture logicielle",
    "Applications mobiles cross-platform Flutter",
  ],
  en: [
    "Fullstack Developer — Laravel · Flutter · React",
    "Networks & Systems Graduate (IST)",
    "Secure business platforms & BCLCC audit trails",
    "Database modeling & software architecture",
    "Cross-platform mobile apps with Flutter",
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
    typeSpeed = 2200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 400;
  }

  typewriterTimeout = setTimeout(typeEffect, typeSpeed);
}

// ═══════════════════════════════════════════════════════
// 6. PROJECT FILTERS
// ═══════════════════════════════════════════════════════
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

// ═══════════════════════════════════════════════════════
// 7. PROJECT MODAL DETAILED VIEW (Accessible & Focus-Trapped)
// ═══════════════════════════════════════════════════════
let lastFocusedElement = null;

function getModalFocusableElements() {
  if (!projectModal) return [];
  const focusableSelectors = [
    "button:not([disabled])",
    "a[href]",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])"
  ];
  return Array.from(projectModal.querySelectorAll(focusableSelectors.join(",")))
    .filter(el => el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0);
}

function handleModalKeyDown(e) {
  if (!projectModal?.classList.contains("is-open")) return;

  if (e.key === "Escape") {
    e.preventDefault();
    closeModal();
    return;
  }

  if (e.key === "Tab") {
    const focusable = getModalFocusableElements();
    if (focusable.length === 0) {
      e.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
}

function openModal(card, triggerButton = null) {
  if (!card) return;

  // Remember the trigger element to restore focus when closing
  lastFocusedElement = triggerButton || document.activeElement;

  document.querySelectorAll(".project-card").forEach(c => c.classList.remove("is-active"));
  card.classList.add("is-active");

  const title = currentLang === "fr" ? card.getAttribute("data-title-fr") : card.getAttribute("data-title-en");
  const img = card.getAttribute("data-img");
  const desc = currentLang === "fr" ? card.getAttribute("data-desc-fr") : card.getAttribute("data-desc-en");
  const tech = card.getAttribute("data-tech");
  const category = card.getAttribute("data-category");
  const demo = card.getAttribute("data-demo");
  const code = card.getAttribute("data-code") || "#";

  if (modalTitle) modalTitle.textContent = title;
  if (modalImg) modalImg.src = img;
  if (modalDesc) modalDesc.textContent = desc;
  if (modalTechBadge) modalTechBadge.textContent = category;

  // Demo button — only show if a real demo link exists
  if (modalDemoBtn) {
    if (demo && demo !== "#") {
      modalDemoBtn.setAttribute("href", demo);
      modalDemoBtn.setAttribute("target", "_blank");
      modalDemoBtn.classList.remove("hidden");
    } else {
      modalDemoBtn.classList.add("hidden");
    }
  }

  if (modalCodeBtn) {
    modalCodeBtn.setAttribute("href", code);
    if (code === "#") modalCodeBtn.removeAttribute("target");
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

  // Set inert on background containers for full accessibility
  document.querySelector("header")?.setAttribute("inert", "");
  document.querySelector("main")?.setAttribute("inert", "");
  document.querySelector("footer")?.setAttribute("inert", "");
  backToTopBtn?.setAttribute("inert", "");

  projectModal?.classList.add("is-open");
  projectModal?.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Focus trap: focus the close button
  setTimeout(() => {
    modalClose?.focus();
  }, 50);
}

function closeModal() {
  projectModal?.classList.remove("is-open");
  projectModal?.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  document.querySelectorAll(".project-card").forEach(c => c.classList.remove("is-active"));

  // Remove inert on background containers
  document.querySelector("header")?.removeAttribute("inert");
  document.querySelector("main")?.removeAttribute("inert");
  document.querySelector("footer")?.removeAttribute("inert");
  backToTopBtn?.removeAttribute("inert");

  // Restore focus to original element
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

document.querySelectorAll(".btn-open-modal").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const card = btn.closest(".project-card");
    openModal(card, btn);
  });
});

modalClose?.addEventListener("click", closeModal);

projectModal?.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    closeModal();
  }
});

document.addEventListener("keydown", handleModalKeyDown);

// ═══════════════════════════════════════════════════════
// 8. CONTACT FORM SUBMISSION (Serverless Web3Forms + Fallback)
// ═══════════════════════════════════════════════════════
const formSubmitBtn = document.querySelector("#form-submit-btn");
const formSubmitText = document.querySelector("#form-submit-text");

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = (formData.get("name") || "").toString().trim();
  const email = (formData.get("email") || "").toString().trim();
  const subject = (formData.get("subject") || "").toString().trim();
  const message = (formData.get("message") || "").toString().trim();
  const accessKey = (formData.get("access_key") || "").toString().trim();

  // Basic validation
  if (!name || !email || !subject || !message) {
    if (formFeedback) {
      formFeedback.className = "p-4 rounded-lg text-sm font-medium bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200";
      formFeedback.textContent = currentLang === "fr" ? "Veuillez renseigner tous les champs obligatoires." : "Please fill in all required fields.";
      formFeedback.classList.remove("hidden");
    }
    return;
  }

  // Update button state to loading
  if (formSubmitBtn) formSubmitBtn.disabled = true;
  if (formSubmitText) formSubmitText.textContent = translations[currentLang]["contact.form.sending"] || "Envoi en cours...";

  if (formFeedback) {
    formFeedback.className = "p-4 rounded-lg text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200";
    formFeedback.classList.remove("hidden");
    const preparingMsg = (translations[currentLang]["contact.feedback.sending"] || "").replace("{name}", name);
    formFeedback.textContent = preparingMsg || "Envoi en cours...";
  }

  // If a valid Web3Forms access key is configured, send via AJAX fetch
  if (accessKey && accessKey !== "VOTRE_CLE_WEB3FORMS_ICI") {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          subject: subject,
          message: message,
          from_name: "Portfolio Cédrick Gonçalvès"
        })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        if (formFeedback) {
          formFeedback.className = "p-4 rounded-lg text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200";
          formFeedback.textContent = translations[currentLang]["contact.feedback.sent_success"];
        }
        contactForm.reset();
        showToast(translations[currentLang]["contact.feedback.sent_success"]);
        return;
      }
    } catch (err) {
      console.warn("Échec de l'envoi direct Web3Forms, bascule vers le client email", err);
    } finally {
      if (formSubmitBtn) formSubmitBtn.disabled = false;
      if (formSubmitText) formSubmitText.textContent = translations[currentLang]["contact.form.submit"] || "Envoyer le message";
    }
  }

  // Fallback to mailto protocol
  const recipient = "goncalvescedrick32@gmail.com";
  const body = `Bonjour Cédrick,%0D%0A%0D%0ANom: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;

  setTimeout(() => {
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;
    if (formFeedback) {
      formFeedback.className = "p-4 rounded-lg text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200";
      formFeedback.textContent = translations[currentLang]["contact.feedback.fallback"] || translations[currentLang]["contact.feedback.success"];
    }
    if (formSubmitBtn) formSubmitBtn.disabled = false;
    if (formSubmitText) formSubmitText.textContent = translations[currentLang]["contact.form.submit"] || "Envoyer le message";
  }, 400);
});

// ═══════════════════════════════════════════════════════
// 9. BACK TO TOP BUTTON
// ═══════════════════════════════════════════════════════
backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ═══════════════════════════════════════════════════════
// 10. QUICK COPY TO CLIPBOARD + TOAST NOTIFICATION
// ═══════════════════════════════════════════════════════
const toastNotify = document.querySelector("#toast-notify");
const toastText = document.querySelector("#toast-text");
let toastTimeout;

function showToast(message) {
  if (!toastNotify || !toastText) return;
  toastText.textContent = message;
  toastNotify.classList.remove("opacity-0", "pointer-events-none", "translate-y-3");
  toastNotify.classList.add("opacity-100", "pointer-events-auto", "translate-y-0");

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastNotify.classList.remove("opacity-100", "pointer-events-auto", "translate-y-0");
    toastNotify.classList.add("opacity-0", "pointer-events-none", "translate-y-3");
  }, 2600);
}

document.querySelectorAll(".btn-copy-clipboard").forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const textToCopy = btn.getAttribute("data-copy");
    if (!textToCopy) return;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }

      // Visual feedback on button icon
      const iconUse = btn.querySelector(".icon-copy-state use");
      if (iconUse) {
        iconUse.setAttribute("href", "#icon-check");
        setTimeout(() => {
          iconUse.setAttribute("href", "#icon-copy");
        }, 2000);
      }

      const msg = textToCopy.includes("@")
        ? (translations[currentLang]["contact.toast.email_copied"] || "Email copié !")
        : (translations[currentLang]["contact.toast.phone_copied"] || "Numéro copié !");
      showToast(msg);
    } catch (err) {
      console.error("Erreur de copie dans le presse-papier", err);
    }
  });
});

// ═══════════════════════════════════════════════════════
// 11. MULTILINGUAL (i18n) SYSTEM
// ═══════════════════════════════════════════════════════
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

// ═══════════════════════════════════════════════════════
// 12. DEVELOPER CLI TERMINAL (Ctrl+K / Interactive Shell)
// ═══════════════════════════════════════════════════════
const cliTerminalModal = document.querySelector("#cli-terminal-modal");
const terminalWindow = document.querySelector("#terminal-window");
const terminalOutput = document.querySelector("#terminal-output");
const terminalForm = document.querySelector("#terminal-form");
const terminalInput = document.querySelector("#terminal-input");
const terminalCloseBtn = document.querySelector("#terminal-close-btn");
const terminalMaximizeBtn = document.querySelector("#terminal-maximize-btn");
const terminalTriggerBtn = document.querySelector("#terminal-trigger-btn");

let commandHistory = [];
let historyCursor = -1;
let terminalInitialized = false;

const AVAILABLE_COMMANDS = [
  "help",
  "about",
  "whoami",
  "skills",
  "stack",
  "projects",
  "ls",
  "bclcc",
  "contact",
  "cv",
  "download-cv",
  "theme",
  "lang",
  "matrix",
  "clear",
  "cls",
  "sudo",
  "exit",
  "quit"
];

function printTerminalBanner() {
  if (!terminalOutput) return;
  const isFr = currentLang === "fr";
  const banner = `
<div class="text-blue-400 font-bold leading-tight select-none">
  ____ _____ ____  ____  ___ ____ _  __<br>
 / ___| ____|  _ \\|  _ \\|_ _/ ___| |/ /<br>
| |   |  _| | | | | |_) || | |   | ' / <br>
| |___| |___| |_| |  _ < | | |___| . \\ <br>
 \\____|_____|____/|_| \\_\\___\\____|_|\\_\\
</div>
<div class="text-slate-400 text-xs mt-2 space-y-1">
  <p><span class="text-emerald-400 font-bold">[+]</span> Gonçalvès Cédrick — <span class="text-slate-200 font-semibold">Web & Mobile Fullstack / RSI (IST)</span></p>
  <p><span class="text-blue-400 font-bold">[i]</span> ${isFr ? "Système interactif BCLCC CyberSec Shell v2.6" : "Interactive BCLCC CyberSec Shell v2.6"}</p>
  <p><span class="text-amber-400 font-bold">[?]</span> ${isFr ? "Tapez <span class='text-cyan-300 font-bold'>help</span> pour la liste des commandes ou <span class='text-cyan-300 font-bold'>bclcc</span> pour le focus sécurité." : "Type <span class='text-cyan-300 font-bold'>help</span> for commands or <span class='text-cyan-300 font-bold'>bclcc</span> for security focus."}</p>
</div>
<hr class="border-slate-800 my-2">`;
  terminalOutput.innerHTML = banner;
}

function openTerminal() {
  if (!cliTerminalModal) return;
  cliTerminalModal.classList.add("is-open");
  cliTerminalModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (!terminalInitialized) {
    printTerminalBanner();
    terminalInitialized = true;
  }

  setTimeout(() => {
    terminalInput?.focus();
  }, 100);
}

function closeTerminal() {
  if (!cliTerminalModal) return;
  cliTerminalModal.classList.remove("is-open");
  cliTerminalModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function toggleTerminal() {
  if (cliTerminalModal?.classList.contains("is-open")) {
    closeTerminal();
  } else {
    openTerminal();
  }
}

function appendTerminalLine(html) {
  if (!terminalOutput) return;
  const line = document.createElement("div");
  line.className = "text-xs sm:text-sm leading-relaxed";
  line.innerHTML = html;
  terminalOutput.appendChild(line);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function executeCommand(rawCommand) {
  const trimmed = rawCommand.trim();
  if (!trimmed) return;

  commandHistory.push(trimmed);
  historyCursor = commandHistory.length;

  // Print command line prompt
  appendTerminalLine(`<div class="flex items-center gap-1.5 text-slate-400 mt-2"><span class="text-emerald-400 font-bold">cedrick@sec:~$</span> <span class="text-white font-semibold">${escapeHtml(trimmed)}</span></div>`);

  const parts = trimmed.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);
  const isFr = currentLang === "fr";

  switch (cmd) {
    case "help":
      appendTerminalLine(`
<div class="space-y-1.5 text-slate-300 mt-1">
  <p class="text-cyan-400 font-bold uppercase tracking-wider text-xs">${isFr ? "Commandes disponibles :" : "Available commands:"}</p>
  <div class="grid grid-cols-[140px_1fr] gap-x-2 gap-y-1 text-xs">
    <span class="text-emerald-400 font-bold">help</span><span>${isFr ? "Affiche cette aide" : "Display this help list"}</span>
    <span class="text-emerald-400 font-bold">about / whoami</span><span>${isFr ? "Profil & présentation de Cédrick" : "Profile & bio of Cédrick"}</span>
    <span class="text-emerald-400 font-bold">skills / stack</span><span>${isFr ? "Stack technique (Laravel, Flutter, React, Réseaux)" : "Tech stack details"}</span>
    <span class="text-emerald-400 font-bold">projects / ls</span><span>${isFr ? "Liste des projets réalisés" : "List of featured projects"}</span>
    <span class="text-emerald-400 font-bold">bclcc</span><span>${isFr ? "Spécial BCLCC : Sécurité RBAC & audit trails" : "BCLCC security & audit highlights"}</span>
    <span class="text-emerald-400 font-bold">contact</span><span>${isFr ? "Coordonnées (WhatsApp, Email, GitHub, LinkedIn)" : "Contact details"}</span>
    <span class="text-emerald-400 font-bold">cv / download-cv</span><span>${isFr ? "Ouvre le CV (PDF)" : "Open resume (PDF)"}</span>
    <span class="text-emerald-400 font-bold">theme [dark|light]</span><span>${isFr ? "Bascule ou définit le thème" : "Switch or set theme"}</span>
    <span class="text-emerald-400 font-bold">lang [fr|en]</span><span>${isFr ? "Change la langue du portfolio" : "Switch site language"}</span>
    <span class="text-emerald-400 font-bold">matrix</span><span>${isFr ? "Effet visuel Matrix" : "Matrix visual effect"}</span>
    <span class="text-emerald-400 font-bold">clear / cls</span><span>${isFr ? "Efface l'écran du terminal" : "Clear the terminal screen"}</span>
    <span class="text-emerald-400 font-bold">exit</span><span>${isFr ? "Ferme le terminal" : "Close terminal"}</span>
  </div>
</div>`);
      break;

    case "about":
    case "whoami":
      appendTerminalLine(`
<div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1 text-slate-300">
  <p><strong class="text-white">Gonçalvès Cédrick</strong> — ${isFr ? "Développeur Web & Mobile Fullstack" : "Fullstack Web & Mobile Developer"}</p>
  <p>📍 Ouagadougou, Burkina Faso</p>
  <p>🎓 ${isFr ? "Licence Réseaux et Systèmes Informatiques (IST)" : "Bachelor in Networks & Computer Systems (IST)"}</p>
  <p>🛡️ ${isFr ? "Stage développeur à la Brigade Centrale de Lutte Contre la Cybercriminalité (BCLCC)" : "Developer Intern at Central Cybercrime Investigation Brigade (BCLCC)"}</p>
  <p class="text-slate-400">${isFr ? "Concepteur de plateformes métier sécurisées (Laravel, Flutter, React, MySQL) et architectures logicielles fiables." : "Designer of secure enterprise platforms (Laravel, Flutter, React, MySQL) with robust architecture."}</p>
</div>`);
      break;

    case "skills":
    case "stack":
      appendTerminalLine(`
<div class="space-y-2 text-xs mt-1">
  <div><span class="text-blue-400 font-bold">● Backend & APIs:</span> <span class="text-slate-200">Laravel 11/12, PHP 8, APIs REST, MySQL, PostgreSQL, Eloquent ORM, Node.js, Auth RBAC</span></div>
  <div><span class="text-indigo-400 font-bold">● Mobile:</span> <span class="text-slate-200">Flutter, Dart, SQLite, Provider / BLoC, Consommation REST, Offline-First</span></div>
  <div><span class="text-purple-400 font-bold">● Frontend & CMS:</span> <span class="text-slate-200">React, Tailwind CSS, JavaScript ES6+, Vite, Strapi CMS, WordPress</span></div>
  <div><span class="text-emerald-400 font-bold">● Systèmes & Sécurité:</span> <span class="text-slate-200">Réseaux & Systèmes (RSI), Modélisation BDD (Merise/UML), Git/GitHub, Audit & Traçabilité</span></div>
</div>`);
      break;

    case "projects":
    case "ls":
      appendTerminalLine(`
<div class="space-y-1.5 text-xs mt-1">
  <div class="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-slate-800">
    <span class="text-emerald-400 font-bold">1. BCLCC</span>
    <span class="text-slate-300">${isFr ? "Gestion des dossiers, plaintes & scellés (Laravel, RBAC, Audit)" : "Case files & evidence management (Laravel, RBAC, Audit)"}</span>
    <span class="text-blue-400">[Phare]</span>
  </div>
  <div class="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-slate-800">
    <span class="text-emerald-400 font-bold">2. Clinique</span>
    <span class="text-slate-300">${isFr ? "Plateforme médicale de dossiers patients (PHP, MySQL)" : "Medical clinic management (PHP, MySQL)"}</span>
  </div>
  <div class="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-slate-800">
    <span class="text-emerald-400 font-bold">3. Clever-Group</span>
    <span class="text-slate-300">${isFr ? "Site vitrine digital interactif (React, Vite, Tailwind)" : "Modern digital showcase (React, Vite, Tailwind)"}</span>
  </div>
  <div class="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-slate-800">
    <span class="text-emerald-400 font-bold">4. ACE Tech</span>
    <span class="text-slate-300">${isFr ? "Site entreprise services informatiques (HTML5, CSS3, JS)" : "IT services platform (HTML5, CSS3, JS)"}</span>
  </div>
  <div class="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-slate-800">
    <span class="text-emerald-400 font-bold">5. PulseMobile</span>
    <span class="text-slate-300">${isFr ? "Application mobile cross-platform (Flutter, Dart, API REST)" : "Cross-platform mobile app (Flutter, Dart, REST API)"}</span>
  </div>
</div>`);
      break;

    case "bclcc":
      appendTerminalLine(`
<div class="p-3 rounded-lg bg-slate-900 border border-blue-900/50 text-xs space-y-2 text-slate-300">
  <div class="flex items-center gap-2 text-blue-400 font-bold">
    <svg class="w-4 h-4"><use href="#icon-shield" /></svg>
    <span>${isFr ? "Projet Phare : Brigade Centrale de Lutte Contre la Cybercriminalité" : "Featured Case Study: Cybercrime Investigation Brigade"}</span>
  </div>
  <p>${isFr ? "Application métier Laravel conçue pour numériser et sécuriser l'intégralité du traitement des dossiers d'infractions numériques :" : "Laravel enterprise web app designed to digitize and secure the full digital crime workflow:"}</p>
  <ul class="list-disc list-inside space-y-1 text-slate-300">
    <li><strong class="text-white">${isFr ? "Sécurité RBAC stricte :" : "Strict RBAC Security:"}</strong> ${isFr ? "Cloisonnement des accès entre enquêteurs, chefs d'unités et officiers de police judiciaire." : "Access partitioning across investigators, unit heads, and judicial officers."}</li>
    <li><strong class="text-white">${isFr ? "Chaîne de conservation des scellés :" : "Chain of Custody Tracking:"}</strong> ${isFr ? "Traçabilité physique et numérique des éléments de preuve." : "Physical and digital evidence custody tracking."}</li>
    <li><strong class="text-white">${isFr ? "Journal d'audit inviolable :" : "Tamper-Evident Audit Trail:"}</strong> ${isFr ? "Horodatage et enregistrement de chaque consultation, modification ou export." : "Timestamping and logging of every view, edit, and export."}</li>
    <li><strong class="text-white">${isFr ? "Assistance technique :" : "Technical Assistance:"}</strong> ${isFr ? "Diagnostic matériel et logiciel des supports compromis." : "Hardware and software diagnostics on seized devices."}</li>
  </ul>
</div>`);
      break;

    case "contact":
      appendTerminalLine(`
<div class="space-y-1 text-xs text-slate-300 mt-1">
  <p><span class="text-emerald-400 font-bold">WhatsApp:</span> <a href="https://wa.me/22606196835" target="_blank" class="text-cyan-300 underline">+226 06 19 68 35</a></p>
  <p><span class="text-emerald-400 font-bold">Email:</span> <a href="mailto:goncalvescedrick32@gmail.com" class="text-cyan-300 underline">goncalvescedrick32@gmail.com</a></p>
  <p><span class="text-emerald-400 font-bold">GitHub:</span> <a href="https://github.com/Goncalvescedrick" target="_blank" class="text-cyan-300 underline">github.com/Goncalvescedrick</a></p>
  <p><span class="text-emerald-400 font-bold">LinkedIn:</span> <a href="https://www.linkedin.com/in/goncalvescedrick" target="_blank" class="text-cyan-300 underline">linkedin.com/in/goncalvescedrick</a></p>
  <p><span class="text-emerald-400 font-bold">Location:</span> Ouagadougou, Burkina Faso</p>
</div>`);
      break;

    case "cv":
    case "download-cv":
      appendTerminalLine(`<div class="text-emerald-400 text-xs">${isFr ? "✔ Ouverture du CV dans un nouvel onglet..." : "✔ Opening resume in a new tab..."}</div>`);
      window.open("assets/cv/CV_Goncalves_Cedrick.pdf", "_blank", "noopener");
      break;

    case "theme":
      if (args[0] === "dark") {
        setTheme("dark");
        appendTerminalLine(`<div class="text-xs text-blue-400">${isFr ? "Thème défini sur : Sombre" : "Theme set to: Dark"}</div>`);
      } else if (args[0] === "light") {
        setTheme("light");
        appendTerminalLine(`<div class="text-xs text-blue-400">${isFr ? "Thème défini sur : Clair" : "Theme set to: Light"}</div>`);
      } else {
        const next = htmlElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        setTheme(next);
        appendTerminalLine(`<div class="text-xs text-blue-400">${isFr ? `Thème basculé sur : ${next}` : `Theme toggled to: ${next}`}</div>`);
      }
      break;

    case "lang":
      if (args[0] === "fr" || args[0] === "en") {
        currentLang = args[0];
      } else {
        currentLang = currentLang === "fr" ? "en" : "fr";
      }
      localStorage.setItem("lang", currentLang);
      applyTranslations(currentLang);
      appendTerminalLine(`<div class="text-xs text-blue-400">${currentLang === "fr" ? "Langue définie sur : Français (FR)" : "Language set to: English (EN)"}</div>`);
      break;

    case "matrix":
      appendTerminalLine(`<div class="text-emerald-500 font-mono text-xs overflow-hidden leading-tight">
01000011 01100101 01100100 01110010 01101001 01100011 01101011<br>
01010011 01100101 01100011 01110101 01110010 01101001 01110100<br>
Wake up, Neo... The Matrix has you. Follow the white rabbit 🐇.
</div>`);
      break;

    case "sudo":
      appendTerminalLine(`
<div class="p-2 rounded bg-red-950/70 border border-red-800 text-red-300 text-xs">
  <strong>[ALERTE SÉCURITÉ BCLCC]</strong> ${isFr ? "Tentative d'escalade de privilèges non autorisée. Incident consigné dans le journal d'audit horodaté." : "Unauthorized privilege escalation detected. Incident logged in tamper-evident security audit."}
</div>`);
      break;

    case "clear":
    case "cls":
      if (terminalOutput) terminalOutput.innerHTML = "";
      break;

    case "exit":
    case "quit":
      closeTerminal();
      break;

    default:
      appendTerminalLine(`
<div class="text-xs text-rose-400">
  ${isFr ? `Commande inconnue: <span class="font-bold text-white">${escapeHtml(cmd)}</span>. Tapez <span class="text-cyan-300 font-bold">help</span> pour la liste des commandes.` : `Command not found: <span class="font-bold text-white">${escapeHtml(cmd)}</span>. Type <span class="text-cyan-300 font-bold">help</span> to view all commands.`}
</div>`);
      break;
  }
}

function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Terminal Form Submit
terminalForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!terminalInput) return;
  const val = terminalInput.value;
  terminalInput.value = "";
  executeCommand(val);
});

// Terminal Keyboard Navigation (History + Tab Autocompletion)
terminalInput?.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    e.preventDefault();
    if (commandHistory.length > 0 && historyCursor > 0) {
      historyCursor--;
      terminalInput.value = commandHistory[historyCursor];
    }
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (historyCursor < commandHistory.length - 1) {
      historyCursor++;
      terminalInput.value = commandHistory[historyCursor];
    } else {
      historyCursor = commandHistory.length;
      terminalInput.value = "";
    }
  } else if (e.key === "Tab") {
    e.preventDefault();
    const currentVal = terminalInput.value.trim().toLowerCase();
    if (!currentVal) return;
    const match = AVAILABLE_COMMANDS.find(c => c.startsWith(currentVal));
    if (match) {
      terminalInput.value = match;
    }
  }
});

// Global shortcut: Ctrl+K / Cmd+K to toggle terminal
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    toggleTerminal();
  } else if (e.key === "Escape" && cliTerminalModal?.classList.contains("is-open")) {
    e.preventDefault();
    closeTerminal();
  }
});

// Event Listeners for Terminal controls
terminalTriggerBtn?.addEventListener("click", openTerminal);
terminalCloseBtn?.addEventListener("click", closeTerminal);

terminalMaximizeBtn?.addEventListener("click", () => {
  terminalWindow?.classList.toggle("is-maximized");
});

cliTerminalModal?.addEventListener("click", (e) => {
  if (e.target === cliTerminalModal) {
    closeTerminal();
  }
});

// ═══════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
});
