import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const requiredFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "public/brand/wordmark-amaranto.svg",
  "public/assets/approved/assets/dobra-01-hero-problema-v1/hero_visual_busto_artigo.png",
  "public/assets/approved/assets/dobra-03-metodo/metodo_pergunta_postit.png",
  "public/assets/approved/assets/dobra-04-como-funciona/como_funciona_cena_completa-clinical.png",
  "public/assets/approved/assets/dobra-05-ementa/ementa_busto.png",
  "public/assets/approved/assets/dobra-06-pratica/pratica_cena_estudo.png",
  "public/assets/approved/assets/dobra-07-resultados/resultados_livros_caneca.png",
  "public/assets/approved/assets/dobra-08-autoridade-prova/autoridade_gabriel.png",
  "public/assets/approved/assets/dobra-09-oferta/oferta_busto_painel.png",
  "public/assets/approved/assets/dobra-10-faq/faq_busto_citacao.png",
  "public/assets/approved/assets/dobra-11-fechamento/fechamento_laptop_completo.png"
];
const requiredMarkers = [
  ["index.html", "<main id=\"conteudo\">"],
  ["index.html", "Aprenda a tomar"],
  ["index.html", "Prática Baseada em Evidências"],
  ["index.html", "Nutrição"],
  ["index.html", "id=\"metodo\""],
  ["index.html", "id=\"ementa\""],
  ["index.html", "id=\"pratica\""],
  ["index.html", "id=\"resultados\""],
  ["index.html", "id=\"autoridade\""],
  ["index.html", "id=\"entrada\""],
  ["index.html", "id=\"faq\""],
  ["styles.css", "prefers-reduced-motion"],
  ["script.js", "const product ="],
  ["script.js", "nextCohort: \"A definir\""],
  ["script.js", "investment: \"A definir\""]
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
