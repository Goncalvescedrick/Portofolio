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
    "contact.form.hint": "Ce formulaire ouvre votre application email pour envoyer le message.",
    "contact.feedback.sending": "Préparation de l'envoi email pour {name}...",
    "contact.feedback.success": "✔ Votre application email s'ouvre pour envoyer le message.",
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
    "contact.form.hint": "This form opens your email app to send the message.",
    "contact.feedback.sending": "Preparing email for {name}...",
    "contact.feedback.success": "✔ Your email app is opening to send the message.",
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
// 7. PROJECT MODAL DETAILED VIEW
// ═══════════════════════════════════════════════════════
function openModal(card) {
  if (!card) return;

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

  projectModal?.classList.add("is-open");
  projectModal?.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Focus trap: focus the close button
  modalClose?.focus();
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

// ═══════════════════════════════════════════════════════
// 8. CONTACT FORM SUBMISSION
// ═══════════════════════════════════════════════════════
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
// 10. MULTILINGUAL (i18n) SYSTEM
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
// INITIALIZATION
// ═══════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
});
