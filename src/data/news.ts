export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "November 2025",
    title: "Paper under-review at DATE 2026",
    description: "My work on quantization and pruning is under-review at ICML.",
    link: "https://icml.cc/",
  },
  {
    date: "September 2024",
    title: "How to get a Ph.D. in the US for free!",
    description: "Presented a virtual talk on navigating US PhD admissions covering application fee waivers, funding opportunities, and strategic planning.",
    link: "https://www.linkedin.com/company/openmindsproject-org/posts/",
  }
];
