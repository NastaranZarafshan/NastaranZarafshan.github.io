/* =============================================================================
   content.js  —  Single source of truth for the whole site.
   Edit the values below to make this site your own. No other file needs to
   change for typical edits (bio, publications, projects, links, etc.).
   ============================================================================= */

window.PROFILE = {
  // -- Identity ---------------------------------------------------------------
  name: "Nastaran Zarafshan",
  honorific: "",
  initials: "NZ",
  title: "AI & Machine Learning Researcher",
  affiliation: "Machine Learning and Computer Vision Research Lab",
  affiliationShort: "MLVL",
  location: "Tehran, Iran",
  pronouns: "she/her",
  email: "nstrn.zarafshan@gmail.com"

  // -- Copy -------------------------------------------------------------------
  shortBio:
    "I am a Ph.D. student in Artificial Intelligence at Shahrood University of Technology, with research interests in large language models, model compression, AI-driven bioinformatics, protein modeling, and financial markets.",
  longBio: [
    "I am a Ph.D. student in Artificial Intelligence at Shahrood University of Technology and a member of the Machine Learning and Computer Vision Research Lab. My academic background combines genetic engineering and artificial intelligence, providing an interdisciplinary perspective on developing intelligent computational methods for complex scientific and real-world problems.",
    "My research interests include large language models (LLMs), efficient deep learning, and model compression, with a particular focus on developing computationally efficient and practical AI systems. I am also interested in applying machine learning to bioinformatics and computational biology, especially protein modeling and the analysis of biological data. My background in genetic engineering motivates me to explore how advances in artificial intelligence can contribute to understanding complex biological systems.",
    "Another area of my research interest is the application of artificial intelligence to financial markets, including financial time-series modeling, predictive analytics, and data-driven decision-making. I am particularly interested in exploring how advanced machine learning methods can identify complex patterns across different domains. My broader research goal is to develop reliable, efficient, and generalizable AI models that bridge methodological advances with practical applications in biology, finance, and beyond.",
  ],

  // -- Links ------------------------------------------------------------------
  githubUrl: "https://github.com/NastaranZarafshan",
  linkedinUrl: "https://www.linkedin.com/in/nastaranzarafshan/",

  // -- Quick stats (hero) -----------------------------------------------------
  // stats: [
  //   { label: "Publications", value: "27" },
  //   { label: "Citations", value: "4.1k" },
  //   { label: "h-index", value: "21" },
  //   { label: "Students mentored", value: "14" },
  // ],

  // -- Research interests -----------------------------------------------------
  researchInterests: [
    {
      title: "Large Language Models",
      description:
        "Investigating the architectures, learning mechanisms, and reasoning capabilities of large language models, with a focus on improving their performance, generalization, and ability to understand and generate natural language.",
      keywords: [
        "Transformers",
        "Language Modeling",
        "Reasoning",
        "Natural Language Processing",
      ],
    },
    {
      title: "LLM Compression",
      description:
        "Exploring techniques for reducing the computational and memory requirements of large language models while preserving their capabilities, with an emphasis on developing efficient, lightweight, and deployable language models.",
      keywords: [
        "Knowledge Distillation",
        "Quantization",
        "Model Pruning",
        "Efficient Inference",
      ],
    },
    {
      title: "AI for Bioinformatics",
      description:
        "Applying machine learning and deep learning to biological data analysis, with a particular interest in protein structure modeling, sequence representation, and understanding complex biological systems through computational methods.",
      keywords: [
        "Protein Modeling",
        "Computational Biology",
        "Biological Sequence Analysis",
        "Protein Language Models",
      ],
    },
    {
      title: "AI for Financial Markets",
      description:
        "Investigating machine learning approaches for financial time-series analysis, market forecasting, and data-driven decision-making, with a focus on identifying complex patterns and modeling dynamic financial systems.",
      keywords: [
        "Financial Time Series",
        "Market Prediction",
        "Deep Learning",
        "Quantitative Finance",
      ],
    },
  ]

  // -- Publications -----------------------------------------------------------
  // publications: [
  //  {
  //    id: "biabani2026-transformer",
  //    title:
  //      "An effective knowledge-distilled transformer for intent detection and slot filling in Persian language",
  //    authors:
  //      "Saeed Biabani Mahalli, Jamshid Pirgazi, Ali Ghanbari Sorkhi",
  //    venue: "The Journal of Supercomputing (Springer Nature)",
  //    year: 2026,
  //    type: "Journal",
  //    abstract:
  //      "This paper presents an efficient Transformer-based framework for joint intent classification and slot filling in Persian, addressing the challenges of low-resource and imbalanced datasets. The proposed architecture incorporates Multi-Head Attention, RMSNorm, and SwiGLU, along with an HPC-accelerated training pipeline and hard sample mining. Through knowledge distillation, a compact student model achieves approximately 75% parameter reduction with minimal performance degradation, enabling efficient and reliable natural language understanding.",
  //    links: [
  //      {
  //        label: "Paper",
  //        url: "https://doi.org/10.1007/s11227-026-08432-6",
  //      },
  //      {
  //        label: "Springer",
  //        url: "https://link.springer.com/article/10.1007/s11227-026-08432-6",
  //      },
  //      {
  //        label: "BibTeX",
  //        url: "https://citation-needed.springer.com/v2/references/10.1007/s11227-026-08432-6?format=bibtex",
  //      },
  //    ],
  //    highlighted: true,
  //  },
  // ],

  // -- Experience & Education timeline ---------------------------------------
  experience: [
    {
      period: "2025 — Present",
      role: "Ph.D. Student in Artificial Intelligence",
      organization: "Shahrood University of Technology",
      description:
        "Doctoral research in artificial intelligence, with interests in large language models, model compression, AI for bioinformatics and protein modeling, and machine learning applications in financial markets.",
      kind: "education"
    },
    {
      period: "2023 — 2025",
      role: "M.Sc. in Artificial Intelligence",
      organization: "Mazandaran University of Science and Technology",
      description:
        "Graduate studies in Artificial Intelligence, with a focus on machine learning, deep learning, and large language models. Research interests include model compression, bioinformatics, and the application of AI to complex real-world problems.",
      kind: "education"
    },
  ],

  // -- Open-source projects ---------------------------------------------------
  projects: [
    {
      name: "LLM From Scratch",
      tagline: "Building a GPT-Style Transformer from First Principles",
      description:
        "A decoder-only GPT-style Transformer implemented from scratch in PyTorch, featuring byte-level tokenization, causal multi-head self-attention, and autoregressive text generation. Trained on Tiny Shakespeare with approximately 826K parameters, achieving a sampled evaluation perplexity of 5.86. The project includes training and evaluation pipelines, attention visualization, and text generation with temperature and top-k sampling.",
      tags: [
        "PyTorch",
        "Large Language Models",
        "Transformers",
        "Causal Self-Attention",
        "Autoregressive Generation"
      ],
      url: "https://github.com/NastaranZarafshan/gpt-from-scratch",
      stars: "1"
    },
    {
      name: "LLM Compression Benchmark",
      tagline: "Evaluating Efficiency–Performance Trade-offs in LLM Compression",
      description:
        "A reproducible benchmarking framework for comparing quantization, pruning, knowledge distillation, and hybrid compression techniques on Pythia language models. The framework evaluates model size, GPU memory, inference latency, throughput, accuracy, and perplexity under a consistent experimental protocol. Knowledge distillation achieved a 56.6% reduction in model size and a 44.5% reduction in latency, while combining quantization and distillation achieved a 2.66× compression ratio.",
      tags: [
        "Large Language Models",
        "Model Compression",
        "Knowledge Distillation",
        "Quantization",
        "Benchmarking"
      ],
      url: "https://github.com/NastaranZarafshan/LLM-Compression-Benchmark",
      stars: "2"
    },
    {
      name: "CIFAR-10 Image Classification",
      tagline: "CNN-Based Image Classification with PyTorch",
      description:
        "A PyTorch-based image classification project on the CIFAR-10 dataset, featuring convolutional neural networks, data augmentation, and systematic model evaluation. The project achieves approximately 87% test accuracy and includes optimizer comparisons, confusion matrix analysis, and t-SNE visualization of learned feature representations.",
      tags: [
        "PyTorch",
        "Computer Vision",
        "CNN",
        "Image Classification",
        "Feature Visualization"
      ],
      url: "https://github.com/NastaranZarafshan/CIFAR-10-Image-Classification",
      stars: "1"
    },
  ],

  // -- Teaching ---------------------------------------------------------------
  // teaching: [
  //   { code: "CS-780", name: "Reliable Machine Learning", role: "Instructor", institution: "ETH Zürich", year: "Spring 2025", description: "Graduate course on alignment, interpretability, evaluation, and deployment safety. 120 students, project-based final." },
  //   { code: "CS-780", name: "Reliable Machine Learning", role: "Co-instructor", institution: "ETH Zürich", year: "Spring 2023", description: "Designed and taught the interpretability and evaluation modules; restructured the project track." },
  //   { code: "CS-421", name: "Deep Learning", role: "Teaching Assistant", institution: "ETH Zürich", year: "Autumn 2020", description: "Led problem sessions and grading for 300 students; co-authored the transformer practical." },
  // ],

  // service: [
  //   "Program Committee / Reviewer: NeurIPS, ICML, ICLR (2020–present)",
  //   "Area Chair: NeurIPS Datasets & Benchmarks (2024)",
  //   "Co-organizer: Mechanistic Interpretability Workshop @ NeurIPS (2023, 2024)",
  //   "Advisor: Open Evaluation Foundation (2023–present)",
  //   "Editorial board: Machine Learning Evaluation Journal (2024–present)",
  // ],

  // -- Navigation -------------------------------------------------------------
  navItems: [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "publications", label: "Publications" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "teaching", label: "Teaching" },
    { id: "contact", label: "Contact" },
  ],

  // -- AI research assistant (optional) --------------------------------------
  // The widget stays hidden unless `assistant.enabled` is true.
  // To make it live, deploy a backend that accepts { message, history } and
  // returns { reply }, then set `apiUrl` to its URL. See README.md for a
  // ready-to-use serverless example using z-ai-web-dev-sdk.
  assistant: {
    enabled: true,
    apiUrl: "", // e.g. "https://your-backend.example.com/api/assistant"
    name: "ARIA",
    greeting:
      "Hi — I'm ARIA, {{first}}'s research assistant. Ask me about his publications, research directions, teaching, or how to get in touch.",
    suggestions: [
      "What are your main research interests?",
      "Summarize your most cited work.",
      "Are you open to taking on students?",
      "How can I collaborate with you?",
    ],
    // Shown when no backend is configured or the request fails.
    fallbackReply:
      "I'm a demo assistant running in static mode. To enable live answers, set assistant.apiUrl in content.js to a backend endpoint (see README.md). Meanwhile, reach {{first}} directly via the Contact section.",
  },
};