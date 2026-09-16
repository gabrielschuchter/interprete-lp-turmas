const assetRoot = "public/assets/approved/assets";

const product = {
  duration: "9 meses",
  ctaLabel: "Quero entrar na próxima turma",
  ctaUrl: "#entrada",
  nextCohort: "A definir",
  meetingSchedule: "A definir",
  investment: "A definir",
  installments: "A definir",
  spots: "A definir",
  curriculum: {
    base: [
      { month: "01", title: "Fundamentos da evidência", summary: "Pergunta clínica, desenhos de estudo, associação e causalidade.", image: "ementa_artigo_pergunta.png", alt: "Artigo com a pergunta clínica destacada." },
      { month: "02", title: "Busca de evidências", summary: "Bases de dados, estratégias de busca, filtros e triagem.", image: "ementa_pubmed.png", alt: "Busca no PubMed com filtros de evidência." },
      { month: "03", title: "Interpretação de resultados", summary: "Medidas de efeito, intervalos de confiança, valor de p e relevância clínica.", image: "ementa_forest_plot.png", alt: "Forest plot com estimativas de efeito." },
      { month: "04", title: "Validade e certeza", summary: "Risco de viés, confusão, randomização, revisões e GRADE.", image: "ementa_risco_certeza.png", alt: "Tabela de risco de viés e certeza da evidência." },
      { month: "05", title: "Aplicação clínica", summary: "Aplicabilidade, benefícios e danos, custo, viabilidade e preferências.", image: "ementa_venn_aplicabilidade.png", alt: "Diagrama de aplicabilidade entre paciente, evidência e contexto." },
      { month: "06", title: "Prática guiada", summary: "Leitura de artigos completos, casos e discussão de decisões baseadas em evidências.", image: "ementa_anotacoes_pratica.png", alt: "Anotações de uma discussão prática sobre artigo." }
    ],
    nutrition: [
      { month: "07", title: "Metabolismo e saúde cardiometabólica", summary: "Obesidade, diabetes, dislipidemias, hipertensão e intervenções dietéticas.", image: "ementa_metabolismo_foto.png", alt: "Composição de alimentos em um prato." },
      { month: "08", title: "Nutrição clínica e fases da vida", summary: "Saúde gastrointestinal, saúde da mulher, materno-infantil e envelhecimento.", image: "ementa_fases_vida_foto.png", alt: "Pessoa adulta com criança em uma composição editorial." },
      { month: "09", title: "Suplementação, exercício e performance", summary: "Suplementos, ergogênicos, hipertrofia, desempenho e controvérsias.", image: "ementa_performance_foto.png", alt: "Halter em uma composição editorial sobre performance." },
      { month: "10", title: "Controvérsias em Nutrição", summary: "Diretrizes conflitantes, estudos que viralizam, desfechos substitutos e temas sem respostas simples.", image: "ementa_diretrizes_foto.png", alt: "Nota editorial sobre diretrizes e prática no mundo real." }
    ]
  },
  practice: [
    { title: "Preparar", summary: "Você estuda o material antes do encontro e chega com dúvidas e anotações.", image: "pratica_preparar.png", alt: "Caderno com perguntas para preparar a leitura." },
    { title: "Discutir", summary: "Nos encontros ao vivo, os estudos são analisados em grupo, com diferentes pontos de vista.", image: "pratica_discutir.png", alt: "Discussão em grupo sobre um artigo." },
    { title: "Interpretar", summary: "Você aprende a avaliar resultados, risco de viés, certeza da evidência e aplicabilidade.", image: "pratica_interpretar.png", alt: "Ficha com interpretação de risco e efeito." },
    { title: "Aplicar", summary: "O método é levado para casos reais da Nutrição, com discussão de condutas e cenários.", image: "pratica_aplicar.png", alt: "Artigo marcado com uma anotação sobre aplicação." },
    { title: "Evoluir", summary: "Você recebe feedback, acompanhamento e continua praticando ao longo da formação.", image: "pratica_evoluir.png", alt: "Lista de acompanhamento de evolução na formação." }
  ],
  results: [
    "Ler artigos com mais clareza e identificar o que realmente importa.",
    "Encontrar evidências relevantes quando surge uma nova dúvida.",
    "Interpretar resultados e entender o que eles significam na prática.",
    "Avaliar o risco de viés e a certeza da evidência.",
    "Reconhecer a aplicabilidade para o seu paciente.",
    "Discutir e justificar suas decisões com base em evidências.",
    "Lidar melhor com incertezas e evitar conclusões precipitadas.",
    "Manter uma prática baseada em evidências de forma contínua."
  ],
  teachers: [
    { name: "Gabriel Schuchter Pereira", description: "Nutricionista, pesquisador e professor de Prática Baseada em Evidências.", image: "autoridade_gabriel.png", alt: "Retrato editorial de Gabriel Schuchter Pereira." },
    { name: "Vitória Queiroz", description: "Nutricionista, pesquisadora e professora de Nutrição Baseada em Evidências.", image: "autoridade_vitoria.png", alt: "Retrato editorial de Vitória Queiroz." },
    { name: "Caio Victor", description: "Nutricionista, pesquisador e professor de Epidemiologia e Bioestatística.", image: "autoridade_caio.png", alt: "Retrato editorial de Caio Victor." }
  ],
  reviews: [
    { text: "Depoimento oficial validado da turma.", name: "Conteúdo real da turma", role: "publicação após autorização" },
    { text: "A prova social entra aqui com contexto, autoria e autorização — sem frases inventadas.", name: "Depoimento oficial validado", role: "conteúdo a confirmar" },
    { text: "Este espaço preserva o desenho aprovado até que o relato real esteja pronto para publicação.", name: "Depoimento oficial validado", role: "conteúdo a confirmar" }
  ],
  faq: [
    { icon: "graduation", question: "Preciso saber estatística?", answer: "Não. Os conceitos necessários são ensinados ao longo da formação, de forma prática e aplicada. Você não precisa chegar sabendo calcular, mas precisa estar disposto a entender o que os resultados significam." },
    { icon: "person", question: "Preciso já atender pacientes?", answer: "A formação é voltada tanto para quem está começando quanto para profissionais que já atendem e querem tornar suas decisões mais baseadas em evidências." },
    { icon: "users", question: "A formação é só para nutricionistas?", answer: "Os seis primeiros meses trabalham competências gerais de Prática Baseada em Evidências. Os últimos são direcionados à aplicação em Nutrição. A elegibilidade da próxima edição será informada na abertura." },
    { icon: "video", question: "Os encontros são ao vivo?", answer: "Sim. A formação inclui encontros ao vivo, com discussão de estudos, casos e aplicação prática. As regras de eventuais gravações serão informadas com a próxima edição." },
    { icon: "clock", question: "Quanto tempo preciso estudar por semana?", answer: "A carga semanal será informada no cronograma da próxima turma. Ela deve considerar leitura prévia, encontros e atividades práticas — não apenas o tempo de transmissão." },
    { icon: "calendar", question: "E se eu perder um encontro?", answer: "As regras de reposição e o acesso a eventuais gravações ainda precisam ser definidos para a edição. A experiência principal continua sendo o encontro ao vivo." },
    { icon: "book", question: "Por quanto tempo tenho acesso aos materiais?", answer: "O período de acesso aos materiais será informado junto com as condições da próxima edição, antes da abertura das inscrições." },
    { icon: "card", question: "Quais são as formas de pagamento?", answer: "As condições de pagamento serão publicadas quando o investimento da próxima edição estiver definido. Nenhum valor ou parcelamento fictício é exibido aqui." },
    { icon: "question", question: "Ainda ficou com alguma dúvida?", answer: "A equipe poderá esclarecer as dúvidas no canal de contato indicado quando a próxima turma for aberta." }
  ]
};

window.INTERPRETE_PRODUCT = product;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function icon(name, className = "icon") {
  return `<svg class="${className}" aria-hidden="true"><use href="#icon-${escapeHtml(name)}"></use></svg>`;
}

function renderCurriculum(targetId, modules) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = modules.map((module) => `
    <article class="module-row">
      <span class="module-number">${escapeHtml(module.month)}</span>
      <div class="module-copy"><h4>${escapeHtml(module.title)}</h4><p>${escapeHtml(module.summary)}</p></div>
      <img class="module-art" src="${assetRoot}/dobra-05-ementa/${escapeHtml(module.image)}" alt="${escapeHtml(module.alt)}" width="200" height="130" loading="lazy" />
    </article>
  `).join("");
}

function renderPractice() {
  const target = document.getElementById("practice-steps");
  if (!target) return;
  target.innerHTML = product.practice.map((step, index) => `
    <article class="practice-step">
      <div class="practice-step-head"><b>${index + 1}</b><h3>${escapeHtml(step.title)}</h3></div>
      <p>${escapeHtml(step.summary)}</p>
      <img src="${assetRoot}/dobra-06-pratica/${escapeHtml(step.image)}" alt="${escapeHtml(step.alt)}" width="215" height="205" loading="lazy" />
    </article>
  `).join("");
}

function renderResults() {
  const target = document.getElementById("results-checklist");
  if (!target) return;
  target.innerHTML = product.results.map((item) => `<li>${icon("check")}<span>${escapeHtml(item)}</span></li>`).join("");
}

function renderTeachers() {
  const target = document.getElementById("teachers-grid");
  if (!target) return;
  target.innerHTML = product.teachers.map((teacher) => `
    <article class="teacher-card">
      <img src="${assetRoot}/dobra-08-autoridade-prova/${escapeHtml(teacher.image)}" alt="${escapeHtml(teacher.alt)}" width="200" height="290" loading="lazy" />
      <div class="teacher-rule"></div>
      <h3>${escapeHtml(teacher.name)}</h3>
      <p>${escapeHtml(teacher.description)}</p>
    </article>
  `).join("");
}

function renderReviews() {
  const target = document.getElementById("reviews-grid");
  if (!target) return;
  target.innerHTML = product.reviews.map((review) => `
    <article class="review-card">
      <span class="review-mark" aria-hidden="true">“</span>
      <blockquote>${escapeHtml(review.text)}</blockquote>
      <div class="review-status"><strong>${escapeHtml(review.name)}</strong><small>${escapeHtml(review.role)}</small></div>
    </article>
  `).join("");
}

function renderFaq() {
  const target = document.getElementById("faq-list");
  if (!target) return;
  target.innerHTML = product.faq.map((item) => `
    <details class="faq-card" open>
      <summary><span class="faq-symbol">${icon(item.icon)}</span><span>${escapeHtml(item.question)}</span><span class="faq-toggle" aria-hidden="true">+</span></summary>
      <div class="faq-answer"><p>${escapeHtml(item.answer)}</p></div>
    </details>
  `).join("");
}

function applyProductConfiguration() {
  document.querySelectorAll("[data-duration]").forEach((node) => { node.textContent = product.duration; });
  document.querySelectorAll("[data-next-cohort]").forEach((node) => { node.textContent = product.nextCohort; });
  document.querySelectorAll("[data-meeting]").forEach((node) => { node.textContent = product.meetingSchedule; });
  document.querySelectorAll("[data-investment]").forEach((node) => { node.textContent = product.investment; });
  document.querySelectorAll("[data-installments]").forEach((node) => { node.textContent = product.installments; });
  document.querySelectorAll("[data-spots]").forEach((node) => { node.textContent = product.spots; });
  document.querySelectorAll("[data-cta]").forEach((node) => {
    node.setAttribute("href", product.ctaUrl);
  });
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -5% 0px", threshold: 0.02 });
  items.forEach((item) => observer.observe(item));
}

renderCurriculum("curriculum-base", product.curriculum.base);
renderCurriculum("curriculum-nutrition", product.curriculum.nutrition);
renderPractice();
renderResults();
renderTeachers();
renderReviews();
renderFaq();
applyProductConfiguration();
setupReveal();
