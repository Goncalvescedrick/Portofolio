const fs = require('fs');

const path = 'c:\\Users\\Fredson\\Desktop\\Portofolio\\portfolio\\js\\script.js';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /"modal\.code": "Code Source"/g,
  '"modal.code": "Code Source",\n    "modal.not_online": "Pas encore mis en ligne",\n    "projects.demo": "Démo"'
);

content = content.replace(
  /"modal\.code": "Source Code"/g,
  '"modal.code": "Source Code",\n    "modal.not_online": "Not deployed yet",\n    "projects.demo": "Demo"'
);

const newCode = `// --- 11. HANDLE EMPTY LINKS ---
function showToast(message) {
  const existingToast = document.getElementById("empty-link-toast");
  if (existingToast) existingToast.remove();

  const toast = document.createElement("div");
  toast.id = "empty-link-toast";
  toast.className = "fixed bottom-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 px-6 py-3 rounded-xl shadow-2xl z-[100] transition-opacity duration-300 font-medium text-sm flex items-center gap-3 opacity-0";
  
  toast.innerHTML = \`
    <svg class="w-5 h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
    <span>\${message}</span>
  \`;
  
  document.body.appendChild(toast);
  
  // Fade in
  setTimeout(() => toast.style.opacity = "1", 10);
  
  // Fade out
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function handleEmptyLink(e) {
  const href = e.currentTarget.getAttribute("href");
  if (!href || href === "#") {
    e.preventDefault();
    showToast(translations[currentLang]["modal.not_online"]);
  }
}

// Initial binding for modal buttons
document.querySelectorAll("#modal-demo-btn, #modal-code-btn").forEach(btn => {
  btn.addEventListener("click", handleEmptyLink);
});

// We can delegate for project cards since they are static
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-action-code, .btn-action-demo");
  if (btn) {
    handleEmptyLink({ currentTarget: btn, preventDefault: () => e.preventDefault() });
  }
});

// Initializations on page load`;

content = content.replace('// Initializations on page load', newCode);

fs.writeFileSync(path, content, 'utf8');
console.log('Done!');
