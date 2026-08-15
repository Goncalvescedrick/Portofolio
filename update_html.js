const fs = require('fs');

const path = 'c:\\Users\\Fredson\\Desktop\\Portofolio\\portfolio\\index.html';
let content = fs.readFileSync(path, 'utf8');

const demoBtn = '\n                <a href=\"#\" target=\"_blank\" rel=\"noopener\" class=\"btn-action-demo btn-outline bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-2 rounded-lg font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700\" aria-label=\"Voir la démo\" data-i18n=\"projects.demo\">Démo</a>\n';

// Replace the old block without demo btn with demo btn inside. 
// We know what it looks like:
// <div class="project-actions">
//   <button class="btn-open-modal btn-action-modal" data-i18n="projects.details">Détails du projet</button>
//   <a href="URL" target="_blank" rel="noopener" class="btn-action-code" aria-label="Voir le code" data-i18n="projects.code">Code</a>
// </div>

content = content.replace(
  /<button class=\"btn-open-modal btn-action-modal\" data-i18n=\"projects.details\">Détails du projet<\/button>/g,
  '<button class=\"btn-open-modal btn-action-modal\" data-i18n=\"projects.details\">Détails du projet</button>' + demoBtn
);

fs.writeFileSync(path, content, 'utf8');
console.log('Done modifying index.html!');
