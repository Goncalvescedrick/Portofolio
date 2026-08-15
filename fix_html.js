const fs = require('fs');

const path = 'c:\\Users\\Fredson\\Desktop\\Portofolio\\portfolio\\index.html';
let content = fs.readFileSync(path, 'utf8');

// Fix Clinique
content = content.replace(
  /data-demo="#" data-code="#">\s*<div class="relative overflow-hidden group">\s*<img src="assets\/projects\/clinique1\.png"/,
  'data-demo="#" data-code="https://github.com/Goncalvescedrick/gestion_clinique">\n            <div class="relative overflow-hidden group">\n              <img src="assets/projects/clinique1.png"'
);

// Fix ACE Tech
content = content.replace(
  /data-demo="#" data-code="#">\s*<div class="relative overflow-hidden group">\s*<img src="assets\/projects\/ace\.png"/,
  'data-demo="#" data-code="https://goncalvescedrick.github.io/Site-Ace/">\n            <div class="relative overflow-hidden group">\n              <img src="assets/projects/ace.png"'
);

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed index.html links!');
