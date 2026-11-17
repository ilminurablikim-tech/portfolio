export const portfolio = {
  name: "Ilminur Ablikim",
  legalName: "Yilimeinuer Abulikemu",
  email: "ilminurablikim@gmail.com",
  links: {
    // Add your real profile URLs here. A folder only shows on the site when its URL is filled in.
    linkedin: "https://www.linkedin.com/in/ilminur-abulikemu",
    github: "https://github.com/ilminurablikim-tech",
    cv: "/Ilminur_Ablikim_CV.pdf",
  },
  facts: ["M.S. Data Science", "Based in TN", "Researcher & builder", "Always learning"],
  // Short, human things. The "Beyond" section appears when this has entries.
  funFacts: [
    "I'm currently very into hojicha. If you know a good café for it, I want to hear about it.",
    "Pop and R&B are always on, and K-pop, K-dramas and a good movie are how I switch off.",
    "French and Japanese are the two languages I most want to learn next. I haven't properly started yet, but they're at the top of my list.",
    "I love any trip that gets me outdoors, and I enjoy hiking whenever I get the chance.",
    "I'll happily plan part of a trip around a good meal or a coffee shop.",
  ] as string[],
  languages: "English (fluent), Mandarin (native), Uyghur (native) and Korean (intermediate)",

  publications: [
    {
      citation: "Abulikemu, Y., Zhang, H., & Zhou, W. (2027). A Digital Twin of a Piezoelectric Actuator and Implication for Precision Manufacturing.",
      venue: "ASME MSEC 2027 · abstract accepted, full paper in preparation",
    },
    {
      citation: "Zhang, H., Abulikemu, Y., & Zhou, W. (2026). Measurement and Classification of Piezoelectric Actuator Motion Using Heterodyne Interferometry and Large Language Models.",
      venue: "Full paper · presented at ASME MSEC 2026",
    },
  ],

  research: [
    {
      title: "Digital Twin",
      lab: "Smart Sensing and Robotics Lab · MTSU",
      period: "Aug 2025 – present",
      text: "A physics-informed digital twin of a piezoelectric actuator, pairing a calibrated hysteresis model with a Mamba-based network that learns the residual dynamics. Plus an LLM-based framework and Transformer classifier that classify actuator motion patterns and generate natural-language waveform descriptions from nanometer-scale heterodyne-interferometry data."
    },
    {
      title: "sTF-TWAS",
      lab: "Guo Lab · Vanderbilt University Medical Center",
      period: "Aug 2026 – Oct 2026",
      text: "Curated 20 human TF motif profiles from JASPAR and processed epithelial scATAC-seq peak data (GRCh38) to identify candidate TF-binding sites for a TF-informed TWAS study."
    },
  ],

  education: [
    {
      school: "Middle Tennessee State University",
      degree: "M.S. in Data Science",
      period: "Aug 2025 – May 2027",
      place: "Murfreesboro, TN",
      lines: ["Coursework: Data Mining, Predictive Modeling, Advanced Mathematical Statistics, Model Optimization", "MTSU International Merit Scholarship (2025–2026)"],
    },
    {
      school: "Shanghai University of Finance and Economics",
      degree: "B.A. in Data Journalism",
      period: "Sep 2021 – Jun 2025",
      place: "Shanghai, China",
      lines: ["Coursework: Computer Programming, Calculus, Data Mining, Statistical Software, Business Data Analysis", "SUFE Encouragement Scholarship (three consecutive years, 2021–2024)"],
    },
    {
      school: "NEOMA Business School",
      degree: "Exchange Program",
      period: "Jan – Jun 2024",
      place: "Paris, France",
      lines: ["Coursework: Luxury Marketing, Sustainability and Strategy, Business Ethics"],
    },
  ],
  skills: [
    { label: "programming", value: "Python (PyTorch, scikit-learn, pandas), SQL, R, JavaScript, HTML, Git" },
    { label: "ml & ai", value: "Transformers, Mamba, LLMs & multi-agent systems, NLP, physics-informed modeling, predictive modeling" },
    { label: "analytics & bi", value: "Power BI, Tableau, Excel, SPSS, statistical analysis, relational data modeling, ETL pipelines" },
  ],
  experience: [
    { kind: "work", role: "Data Science Intern", org: "The Journey Home (non-profit)", period: "Aug 2026 – Dec 2026", text: "Designing a digital intake platform to replace paper-based client intake at a homeless-services nonprofit. Drafted guidelines for handling sensitive client data and a step-by-step plan for launching the platform." },
    { kind: "work", role: "Graduate Assistant", org: "Jones College of Business IT Services, MTSU", period: "May 2026 – Dec 2026", text: "Build and maintain 10+ Power BI dashboards for cross-departmental reporting and automate survey-data refreshes with Python/JS. Provide IT support to faculty and staff, including PC configuration and hardware setup; help organize college events and run on-site technical support." },
    { kind: "project", role: "AscendFi", org: "VandyHacks · Python, FastAPI, Claude API, Vue/Nuxt, Supabase", period: "Mar 2026", text: "Built a full-stack AI finance platform with a multi-agent system for risk prediction and debt optimization." },
    { kind: "research", role: "Research Assistant", org: "Neuromarketing & AI Lab, MTSU", period: "Jan 2026 – Jul 2026", text: "Developed a data-processing workflow that consolidates participant-level reaction-time records across experimental conditions into analysis-ready datasets for studies with 700+ participants. Established participant-tracking and data-quality procedures to improve traceability and reproducibility." },
    { kind: "project", role: "Proto Space", org: "HackMT · Unity, Meta Quest 3", period: "Jan 2026", text: "Developed an augmented-reality CAD viewer for Meta Quest 3, enabling users to inspect imported 3D models through hand-gesture interaction." },
    { kind: "work", role: "EDGE Data & Technology Intern", org: "Publicis Groupe, Shanghai", period: "Nov 2024 – Jan 2025", text: "Automated data pipelines in Python and SQL for client brands L'Oréal and Lindt. Designed 6 interactive Tableau dashboards tracking KPIs across multiple markets. Synthesized cross-brand performance data into executive reports whose recommendations informed budget allocation." },
    { kind: "work", role: "Brand Strategy Analysis Intern", org: "Inditex (Shanghai)", period: "Aug 2023 – Nov 2023", text: "Analyzed social media datasets to deliver evidence-based recommendations for digital marketing strategy. Supported promotional shoots and helped organize biweekly events." },
  ],
};
