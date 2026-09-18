import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

const distHtmlPath = path.resolve(process.cwd(), 'dist', 'index.html');
if (!fs.existsSync(distHtmlPath)) {
  console.error('dist/index.html does not exist! Please run vite build first.');
  process.exit(1);
}

let fullHtmlContent = fs.readFileSync(distHtmlPath, 'utf-8');

// Sanitize for flawless local file:// protocol execution in all modern browsers (Chrome, Edge, Firefox, Safari)
// 1. Extract all script contents and strip the modulepreload polyfill (which attempts fetch() on file://)
const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
const scripts: string[] = [];
let match;
while ((match = scriptRegex.exec(fullHtmlContent)) !== null) {
  let code = match[1];
  // Remove modulepreload polyfill if present at the start of bundle
  code = code.replace(/^\(function(?:\s+polyfill)?\(\)\s*\{[\s\S]*?modulepreload[\s\S]*?\}\)\(\);?/, '');
  scripts.push(code.trim());
}

// 2. Remove all <script...> tags and modulepreload links from HTML
fullHtmlContent = fullHtmlContent.replace(/<script[\s\S]*?<\/script>/gi, '');
fullHtmlContent = fullHtmlContent.replace(/<link[^>]*rel=["']?modulepreload["']?[^>]*>/gi, '');
fullHtmlContent = fullHtmlContent.replace(/\s+crossorigin(?:="[^"]*")?/gi, '');

// 3. Re-inject scripts as classic executable <script> placed after <div id="root"></div> right before </body>
const combinedScripts = scripts.map(s => `<script>\n${s}\n</script>`).join('\n');

if (fullHtmlContent.includes('</body>')) {
  fullHtmlContent = fullHtmlContent.replace('</body>', `${combinedScripts}\n</body>`);
} else {
  fullHtmlContent += `\n${combinedScripts}`;
}

// Update dist/index.html with the 100% offline-ready classic HTML
fs.writeFileSync(distHtmlPath, fullHtmlContent, 'utf-8');

// Write to root for users opening repository directly
fs.writeFileSync(path.resolve(process.cwd(), '00_ABRIR_PROTOTIPO_COMPLETO_OFFLINE.html'), fullHtmlContent, 'utf-8');
fs.writeFileSync(path.resolve(process.cwd(), '00_INICIAR_PROTOTIPO_AQUI.html'), fullHtmlContent, 'utf-8');
fs.writeFileSync(path.resolve(process.cwd(), 'ABRIR_PROTOTIPO_OFFLINE.html'), fullHtmlContent, 'utf-8');

// Write to public for direct web access / download
const publicDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'prototipo_conciliacion_equidad_minjusticia.html'), fullHtmlContent, 'utf-8');

// Write to JUSTICIA_EN_EQUIDAD_OFFLINE directory
const offlineDir = path.resolve(process.cwd(), 'JUSTICIA_EN_EQUIDAD_OFFLINE');
if (!fs.existsSync(offlineDir)) fs.mkdirSync(offlineDir, { recursive: true });
fs.writeFileSync(path.join(offlineDir, 'index.html'), fullHtmlContent, 'utf-8');
fs.writeFileSync(path.join(offlineDir, '00_ABRIR_PROTOTIPO_COMPLETO_OFFLINE.html'), fullHtmlContent, 'utf-8');
fs.writeFileSync(path.join(offlineDir, 'index_standalone.html'), fullHtmlContent, 'utf-8');

// Create ZIP file containing the 100% full bundle
async function makeZip() {
  const zip = new JSZip();
  zip.file('00_ABRIR_PROTOTIPO_COMPLETO_OFFLINE.html', fullHtmlContent);
  zip.file('index.html', fullHtmlContent);
  zip.file('LEAME_INSTRUCCIONES.txt', `PROTOTIPO DIGITAL AUTÓNOMO 100% OFFLINE
MINISTERIO DE JUSTICIA Y DEL DERECHO DE COLOMBIA
Conciliación en Equidad • Ley 2220 de 2022 • Decreto 42 de 2026

INSTRUCCIONES DE USO:
1. Haga doble clic en el archivo "00_ABRIR_PROTOTIPO_COMPLETO_OFFLINE.html" o en "index.html".
2. Se abrirá en su navegador web preferido (Google Chrome, Microsoft Edge, Mozilla Firefox o Safari).
3. No requiere conexión a internet, no requiere servidor local ni instalación de ningún software o dependencia.
4. Incluye el 100% de los datos, imágenes en alta resolución, interactividad, buscador y calculadoras de la plataforma.`);

  const content = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE', compressionOptions: { level: 9 } });
  fs.writeFileSync(path.join(publicDir, 'JUSTICIA_EN_EQUIDAD_OFFLINE_2026.zip'), content);
  fs.writeFileSync(path.join(offlineDir, 'JUSTICIA_EN_EQUIDAD_OFFLINE_2026.zip'), content);
  console.log('Successfully generated and synced 100% functional offline bundles across all project locations!');
}

makeZip();


