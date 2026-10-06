export const portfolio = {
  name: "Ilminur Ablikim",
  // Uyghur name above; legal name on Chinese documents below.
  legalName: "Yilimeinuer Abulikemu",
  location: "Murfreesboro, TN",
  email: "ilminurablikim@gmail.com",
  // TODO: replace with your real profile URLs.
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    scholar: "https://scholar.google.com",
  },
  facts: ["Ilminur Ablikim", "M.S. Data Science", "MTSU · GPA 3.95", "Murfreesboro, TN", "Researcher & builder", "Always learning"],
  languages: "English (fluent) · Mandarin (native) · Uyghur (native) · Korean (intermediate)",

  publication: {
    citation: "Zhang, H., Abulikemu, Y., & Zhou, W. (2026). Measurement and Classification of Piezoelectric Actuator Motion Using Heterodyne Interferometry and Large Language Models.",
    venue: "ASME MSEC 2026",
  },
  interests: ["physics-informed machine learning", "sequence models (Mamba, Transformers)", "LLMs for scientific measurement", "computational genomics"],

  research: [
    {
      title: "Digital Twin",
      lab: "Smart Sensing and Robotics Lab · MTSU",
      period: "Aug 2025 – present",
      text: "A physics-informed digital twin of a piezoelectric actuator, pairing calibrated hysteresis modeling with a Mamba network that learns the physics model's residual error. Plus a Transformer-based classifier that identifies actuator motion from heterodyne interferometry with nanometer-level precision.",
      image: "/img/project-1.svg",
    },
    {
      title: "sTF-TWAS",
      lab: "Guo Lab · Vanderbilt University Medical Center",
      period: "Aug 2026 – present",
      text: "Curating 20 human TF motif profiles from JASPAR and processing epithelial scATAC-seq peak data (GRCh38) to identify candidate TF-binding sites for a TF-informed TWAS study.",
      image: "/img/project-4.svg",
    },
    {
      title: "Reaction Times",
      lab: "Neuromarketing & AI Lab · MTSU",
      period: "Jan 2026 – present",
      text: "A data pipeline that merges raw per-participant reaction-time files into analysis-ready datasets for 700+ participants, with quality-control and tracking procedures for reproducible data.",
      image: "/img/project-5.svg",
    },
  ],

  education: [
    { school: "Middle Tennessee State University", degree: "M.S. in Data Science · GPA 3.95", period: "2025 – present", note: "International Merit Scholarship (2025–2026)" },
    { school: "Shanghai University of Finance and Economics", degree: "B.A. in Data Journalism · GPA 3.53", period: "2021 – 2025", note: "Inspirational Scholarship, three consecutive years" },
  ],
  skills: [
    { label: "programming", value: "Python (PyTorch, scikit-learn, pandas), R, SQL, JavaScript, Git" },
    { label: "ml & analytics", value: "Transformers, Mamba, LLMs, NLP, physics-informed modeling, statistics, Power BI, Tableau" },
  ],
  experience: [
    { role: "Data Science Intern", org: "The Journey Home (non-profit)", period: "Aug 2026 –", text: "Designing a database-backed intake platform to replace paper-based client intake." },
    { role: "Graduate Assistant", org: "Jones College of Business IT, MTSU", period: "May 2026 –", text: "Building 10+ Power BI dashboards and Python/JS automation tools." },
    { role: "Hackathon: AscendFi", org: "VandyHacks", period: "Mar 2026", text: "Full-stack AI finance platform with a multi-agent system (Python, FastAPI, Claude API, Nuxt)." },
    { role: "Hackathon: Proto Space", org: "HackMT", period: "Jan 2026", text: "AR CAD visualizer with hand-gesture interaction on Meta Quest 3 (Unity)." },
  ],
};
