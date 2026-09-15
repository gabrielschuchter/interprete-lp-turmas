const product = {
  duration: "9 meses",
  ctaLabel: "Quero entrar na próxima turma",
  ctaUrl: "#entrada",
  nextCohort: "[a definir]",
  investment: "[a definir]",
  spots: "[a definir]",
  includes: [
    "Seis meses de Prática Baseada em Evidências",
    "Três meses de aplicação em Nutrição",
    "Encontros síncronos ao vivo",
    "Leitura prévia e materiais de apoio",
    "Discussões e prática guiada",
    "Feedback e comunidade de turma"
  ],
  curriculum: {
    base: [
      {
        month: "Mês 1",
        title: "Pergunta antes da evidência",
        summary: "Ciência, pergunta clínica e os limites do que uma conclusão pode dizer.",
        topics: ["anatomia de artigos", "hierarquia da evidência", "pergunta clínica"]
      },
      {
        month: "Mês 2",
        title: "Desenhos que respondem perguntas diferentes",
        summary: "Como desenho, causalidade, população e desfecho mudam a leitura de um estudo.",
        topics: ["desenhos de estudo", "causalidade", "desfechos"]
      },
      {
        month: "Mês 3",
        title: "Encontrar sem se perder",
        summary: "Da pergunta às bases: buscar, filtrar e priorizar o que merece leitura.",
        topics: ["PubMed e bases", "operadores", "triagem"]
      },
      {
        month: "Mês 4",
        title: "Ler números com contexto",
        summary: "Estimativas de efeito, precisão e relevância clínica sem separar número de significado.",
        topics: ["risco relativo e absoluto", "odds ratio", "intervalo de confiança", "valor de p"]
      },
      {
        month: "Mês 5",
        title: "Quanto confiar — e por quê",
        summary: "Vieses, confusão e certeza: reconhecer o que enfraquece ou sustenta uma inferência.",
        topics: ["randomização e perdas", "RoB", "GRADE", "meta-análises"]
      },
      {
        month: "Mês 6",
        title: "Da evidência à conduta",
        summary: "Aplicabilidade, benefícios, danos e preferências em problemas reais de prática.",
        topics: ["transitividade", "decisão compartilhada", "journal clubs", "comunicação de incerteza"]
      }
    ],
    nutrition: [
      {
        month: "Mês 7",
        title: "Metabolismo, cardiometabolismo e composição corporal",
        summary: "Aplicar o método a perguntas frequentes sobre metabolismo, obesidade e composição corporal.",
        topics: ["metabolismo", "saúde cardiometabólica", "obesidade"]
      },
      {
        month: "Mês 8",
        title: "Nutrição clínica, gastrointestinal e ciclos da vida",
        summary: "Ler evidência em nutrição clínica, saúde gastrointestinal, saúde da mulher e materno-infantil.",
        topics: ["nutrição clínica", "saúde gastrointestinal", "saúde da mulher", "materno-infantil"]
      },
      {
        month: "Mês 9",
        title: "Controvérsias, diretrizes e decisões possíveis",
        summary: "Examinar suplementação, exercício, envelhecimento e controvérsias sem perder o contexto.",
        topics: ["suplementação", "performance", "envelhecimento", "diretrizes"]
      }
    ]
  },
  faq: [
    {
      question: "Preciso saber estatística?",
      answer: "Não é preciso dominar estatística antes de começar. Os conceitos aparecem dentro do raciocínio e são explicados à medida que se tornam necessários."
    },
    {
      question: "Preciso já atender pacientes?",
      answer: "A primeira fase trabalha a base do raciocínio em saúde; a aplicação final é voltada para problemas de Nutrição. O público e eventuais pré-requisitos da edição devem ser confirmados no cronograma oficial."
    },
    {
      question: "É apenas para nutricionistas?",
      answer: "A formação termina aplicando o método a grandes áreas da Nutrição. A elegibilidade para cada turma é uma informação editável e será apresentada junto com a próxima abertura."
    },
    {
      question: "Como funcionam os encontros?",
      answer: "A turma combina leitura prévia, encontros síncronos ao vivo, discussão, prática guiada e feedback. A experiência não é uma videoteca de aulas gravadas."
    },
    {
      question: "E se eu perder um encontro?",
      answer: "As regras de reposição e o acesso a eventuais gravações ainda precisam ser definidos para a edição. Não tratamos gravação como substituta do encontro ao vivo."
    },
    {
      question: "Quanto tempo preciso dedicar por semana?",
      answer: "A carga semanal será informada no cronograma da próxima turma. Ela deve considerar leitura prévia, encontro e prática — não apenas o tempo de transmissão."
    },
    {
      question: "Quando começa e quanto custa?",
      answer: "Calendário, investimento e quantidade de vagas ainda estão a definir. Os campos aparecem de forma explícita na entrada da turma e serão atualizados antes da publicação."
    }
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

function renderCurriculum(targetId, modules, offset = 0) {
  const target = document.getElementById(targetId);
  if (!target) return;

  target.innerHTML = modules
    .map((module, index) => {
      const number = String(index + 1 + offset).padStart(2, "0");
      const topics = module.topics.map((topic) => `<li>${escapeHtml(topic)}</li>`).join("");
      return `
        <details class="module" ${index === 0 ? "open" : ""}>
          <summary>
            <span class="module-index">${number}</span>
            <span>
              <span class="module-summary__month">${escapeHtml(module.month)}</span>
              <span class="module-summary__title">${escapeHtml(module.title)}</span>
            </span>
            <span class="module-toggle" aria-hidden="true">+</span>
          </summary>
          <div class="module-details">
            <p>${escapeHtml(module.summary)}</p>
            <ul class="module-tags">${topics}</ul>
          </div>
        </details>
      `;
    })
    .join("");
}

function renderIncluded() {
  const target = document.getElementById("included-list");
  if (!target) return;
  target.innerHTML = product.includes.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderFaq() {
  const target = document.getElementById("faq-list");
  if (!target) return;
  target.innerHTML = product.faq
    .map(
      (item) => `
        <details class="faq-item">
          <summary>
            <span>${escapeHtml(item.question)}</span>
            <span class="faq-toggle" aria-hidden="true">+</span>
          </summary>
          <div class="faq-answer"><p>${escapeHtml(item.answer)}</p></div>
        </details>
      `
    )
    .join("");
}

function applyProductConfiguration() {
  document.querySelectorAll("[data-duration]").forEach((element) => {
    element.textContent = product.duration;
  });
  document.querySelectorAll("[data-next-cohort]").forEach((element) => {
    element.textContent = product.nextCohort;
  });
  document.querySelectorAll("[data-investment]").forEach((element) => {
    element.textContent = product.investment;
  });
  document.querySelectorAll("[data-spots]").forEach((element) => {
    element.textContent = product.spots;
  });
  document.querySelectorAll("[data-cta]").forEach((element) => {
    element.setAttribute("href", product.ctaUrl);
    if (!element.classList.contains("header-cta")) {
      element.textContent = product.ctaLabel;
    }
  });
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  items.forEach((item) => observer.observe(item));
}

renderCurriculum("curriculum-base", product.curriculum.base);
renderCurriculum("curriculum-nutrition", product.curriculum.nutrition, 6);
renderIncluded();
renderFaq();
applyProductConfiguration();
setupMenu();
setupReveal();
