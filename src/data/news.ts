export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "March 2024",
    title: "Paper under-review at ICML 2025",
    description: "Our work on quantization and pruning is under-review at ICML.",
    link: "https://icml.cc/",
  }
];
