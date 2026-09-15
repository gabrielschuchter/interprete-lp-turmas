import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const requiredFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "public/brand/wordmark-amaranto.svg",
  "public/assets/interprete/caderno-origem.png",
  "public/assets/interprete/documento-pergunta.png",
  "public/assets/interprete/leitura-em-camadas.png",
  "public/assets/interprete/mapa-decisao.png",
  "public/assets/interprete/comunidade.png"
];
const requiredMarkers = [
  ["index.html", "<main id=\"conteudo\">"],
  ["index.html", "9 meses"],
  ["index.html", "Prática Baseada em Evidências"],
  ["index.html", "Nutrição"],
  ["index.html", "id=\"percurso\""],
  ["index.html", "id=\"entrada\""],
  ["index.html", "id=\"faq\""],
  ["styles.css", "prefers-reduced-motion"],
  ["script.js", "const product ="]
];

for (const relativePath of requiredFiles) {
  await readFile(path.join(root, relativePath));
}

for (const [relativePath, marker] of requiredMarkers) {
  const content = await readFile(path.join(root, relativePath), "utf8");
  if (!content.includes(marker)) {
    throw new Error(`Marcador ausente em ${relativePath}: ${marker}`);
  }
}

const index = await readFile(path.join(root, "index.html"), "utf8");
const h1Count = (index.match(/<h1\b/g) ?? []).length;
if (h1Count !== 1) {
  throw new Error(`Esperava exatamente um h1, encontrei ${h1Count}`);
}

console.log(`OK: ${requiredFiles.length} arquivos essenciais e ${requiredMarkers.length} marcadores verificados.`);
