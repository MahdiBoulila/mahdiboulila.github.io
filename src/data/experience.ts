export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "May - September 2025",
    title: "Applied Researcher - Embedded Machine Learning",
    company: "CompScience",
    description:
      "Engineered a production-ready MVP for an embedded AI system capable of deploying a vision-language model on-device. Researched and implemented LLM-focused quantization and CLIP-based pruning to enable 4GB on-device vision-language deployment, achieving 40 tokens/second throughput",
     companyUrl: "https://www.compscience.com/",
  },
  {
    date: "May - September 2024",
    title: "Large Language Model Research Intern",
    company: "National Renewal Energy Laboratory",
    description:
      "researched techniques in agent-chaining, chain-of-thought pipelines, and retrieval-augmented generation (RAG) using knowledge graphs to enhance knowledge transfer and interpretability in large language model agents.",
     companyUrl: "https://www.nrel.gov/",
  },
  {
    date: "May - September 2023",
    title: "Google Summer of Code",
    company: "Google",
  },
];
