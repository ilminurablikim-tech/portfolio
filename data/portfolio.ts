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

  publication: {
    citation: "Zhang, H., Abulikemu, Y., & Zhou, W. (2026). Measurement and Classification of Piezoelectric Actuator Motion Using Heterodyne Interferometry and Large Language Models.",
    venue: "Full paper · presented at ASME MSEC 2026",
  },

  research: [
    {
      title: "Digital Twin",
      lab: "Smart Sensing and Robotics Lab · MTSU",
      period: "Aug 2025 – present",
      text: "A physics-informed digital twin of a piezoelectric actuator, pairing calibrated hysteresis modeling with a Mamba network that learns the physics model's residual error. Plus a Transformer-based classifier that identifies actuator motion from heterodyne interferometry with nanometer-level precision."
    },
    {
      title: "sTF-TWAS",
      lab: "Guo Lab · Vanderbilt University Medical Center",
      period: "Aug 2026 – Nov 2026",
      text: "Curating 20 human TF motif profiles from JASPAR and processing epithelial scATAC-seq peak data (GRCh38) to identify candidate TF-binding sites for a TF-informed TWAS study."
    },
  ],

  education: [
    {
      school: "Middle Tennessee State University",
      degree: "M.S. in Data Science",
      period: "Aug 2025 – present",
      place: "TN",
      lines: ["Coursework: Data Mining, Predictive Modeling, Applied Statistical Methods, Model Optimization & Deployment", "MTSU International Merit Scholarship (2025–2026)"],
    },
    {
      school: "Shanghai University of Finance and Economics",
      degree: "B.A. in Data Journalism",
      period: "Sep 2021 – Jun 2025",
      place: "Shanghai, China",
      lines: ["Coursework: Computer Programming, Calculus, Data Mining, Statistical Software, Business Data Analysis", "SUFE Inspirational Scholarship (2021–2024)"],
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
    { kind: "work", role: "Data Science Intern", org: "The Journey Home (non-profit)", period: "Aug 2026 – present", text: "Designing a database-backed intake platform to replace paper-based client intake at a homeless-services nonprofit." },
    { kind: "work", role: "Graduate Assistant", org: "Jones College of Business IT Services, MTSU", period: "May 2026 – present", text: "Build and maintain 10+ Power BI dashboards that support reporting across 6 college departments. Develop web portals and Python/JavaScript automation scripts that streamline administrative workflows." },
    { kind: "project", role: "AscendFi", org: "VandyHacks · Python, FastAPI, Claude API, OpenAI API, Vue/Nuxt, Supabase", period: "Mar 2026", text: "Built a full-stack AI finance platform with a multi-agent system for risk prediction and debt optimization." },
    { kind: "research", role: "Research Assistant", org: "Neuromarketing & AI Lab, MTSU", period: "Jan 2026 – present", text: "Helped build a workflow that merges reaction-time files into analysis-ready datasets for 700+ participants, with quality-control checks." },
    { kind: "project", role: "Proto Space", org: "HackMT · Unity, Meta Quest 3", period: "Jan 2026", text: "Developed an augmented-reality CAD visualizer with hand-gesture interaction for inspecting imported 3D models." },
    { kind: "work", role: "EDGE Data & Technology Intern", org: "Publicis Groupe, Shanghai", period: "Nov 2024 – Jan 2025", text: "Automated data pipelines in Python and SQL for client brands L'Oréal and Lindt. Designed 6 interactive Tableau dashboards tracking KPIs across multiple markets. Synthesized cross-brand performance data into executive reports whose recommendations informed budget allocation." },
    { kind: "work", role: "Brand Strategy Analysis Intern", org: "Inditex (Shanghai)", period: "Aug 2023 – Nov 2023", text: "Analyzed social media datasets to deliver evidence-based recommendations for digital marketing strategy." },
  ],
};
