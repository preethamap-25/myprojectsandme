export const projects = [
  {
    name: "AushadX",
    time: "Oct 2025 – Nov 2025",
    link: "https://github.com/preethamap-25/AushadX",
    bullets: [
      "AI-based medicine management system using OCR and NLP to read and interpret medicine labels.",
      "Integrated a Raspberry Pi for real-time, voice-guided reminders with multilingual alerts.",
      "Built secure data-sharing and doctor-discovery features to improve day-to-day engagement.",
    ],
    stack: ["React Native", "Python", "MongoDB", "Raspberry Pi", "OCR"],
  },
  {
    name: "Honest Deck",
    time: "Ongoing",
    link: null,
    bullets: [
      "Real-time fact-checking API built on a LangChain ReAct agent (Groq Llama 3.3 70B) with five autonomous tools — web search, article scraping, domain-credibility scoring, prior-verdict lookup, and verdict finalization.",
      "RAG layer using sentence-transformers and Qdrant, kept fresh with hourly re-ingestion from a live news API.",
      "MongoDB for persistence, with a conditional query path for live and sports-event fact-checks.",
    ],
    stack: ["FastAPI", "LangChain", "Qdrant", "MongoDB", "RAG"],
  },
  {
    name: "Seekhan",
    time: "Oct 2024 – Feb 2025",
    link: "https://github.com/preethamap-25/projectseekhan",
    bullets: [
      "Quiz generation engine using Retrieval-Augmented Generation over lecture audio and PDF content.",
      "Lecture-to-quiz pipeline that takes audio input straight through to a finished quiz.",
      "Topic-based generation with configurable difficulty and question types.",
    ],
    stack: ["MERN", "Python", "RAG", "Fine-tuned LLMs"],
  },
  {
    name: "Shadow",
    time: "Research project",
    link: "https://github.com/ShadowbyAgentFlow/Shadow",
    bullets: [
      "Automated program repair using CodeT5+, trained and evaluated on the FixEval dataset.",
      "Explored model-driven code correction as a research problem, not just a demo notebook.",
    ],
    stack: ["Python", "PyTorch", "CodeT5+"],
  },
  {
    name: "JanSampark",
    time: "Mar 2024 – Sep 2024",
    link: "https://github.com/preethamap-25/JanSampark",
    bullets: [
      "Civic grievance platform for reporting and tracking local issues, built for real citizen use.",
      "Backend services that route complaints to the correct government department.",
      "Mobile UI with live complaint-status tracking.",
    ],
    stack: ["Flutter", "Express.js", "MongoDB"],
  },
];

export const skills = [
  { title: "Languages", tags: ["Python", "Java", "JavaScript"] },
  { title: "Backend", tags: ["FastAPI", "Flask", "Node.js", "Express.js"] },
  { title: "AI / ML Frameworks", tags: ["PyTorch", "TensorFlow", "HuggingFace"] },
  { title: "LLM & Agent Tools", tags: ["LangChain", "Ollama", "RAG", "Vector DBs"] },
  { title: "Data", tags: ["MySQL", "MongoDB"] },
  { title: "Tooling", tags: ["Git / GitHub", "AWS", "Postman", "Docker"] },
];

export const achievements = [
  {
    title: "Winner — KMIT Project Expo 2024",
    org: "JanSampark",
    desc: "Recognized for a civic grievance platform that routes citizen reports to the right local department.",
  },
  {
    title: "Top 10 Finalist — VNR VJIET Hackathon 2025",
    org: "100+ teams",
    desc: "Ranked among the top 10 for an AI-based solution built under hackathon time constraints.",
  },
];

export const leadership = [
  {
    title: "PR & Digital Head",
    org: "Street Cause — KMIT Chapter, 2024–25",
    desc: "Led branding and digital outreach for major college events — managing social media and promotional campaigns that grew student engagement.",
  },
  {
    title: "Coordinator",
    org: "Street Cause — KMIT Chapter, 2023–24",
    desc: "Organized awareness initiatives and student engagement activities, working across teams to run social-impact campaigns.",
  },
];

export const facts = [
  { k: "Education", v: "B.Tech CSE — AI & ML, KMIT / 2022–2026" },
  { k: "Focus", v: "AI/ML systems, backend, RAG, agents" },
  { k: "Looking for", v: "Entry-level AI/ML & backend roles" },
  { k: "Based in", v: "Hyderabad, open to Bangalore" },
  { k: "Phone", v: "+91 97049 47159" },
];

export const contactLinks = [
  { label: "Email", href: "mailto:preetham.aap@gmail.com" },
  { label: "Phone", href: "tel:+919704947159" },
  { label: "GitHub", href: "https://github.com/preethamap-25" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/preetham-a-annadanam/" },
];
