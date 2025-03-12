export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Mahdi Boulila",
  title: "Ph.D. Candidate",
  institution: "Brown University",
  // Note that links work in the description
  description:
    "I'm a second-year Computer Engineering <a href='https://www.brown.edu'>PhD candidate</a> working at the intersection of hardware acceleration and efficient machine learning. My research focuses on efficient deep learning, exploring neural network compression techniques such as quantization and sparsification to optimize models for deployment on edge devices. I have worked on multi-task learning, large language model optimization, and knowledge transfer. I aim to develop scalable, energy-efficient AI systems.",
  email: "mahdi_boulila[at]brown.edu",
  imageUrl:
    "https://media.licdn.com/dms/image/v2/D4D03AQGtJj3AyT7jkg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721669648722?e=1747267200&v=beta&t=PO121MbkEyxRfFmsLIfe12cjNt6Dvnq9R88Q59qR8ss",
  googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "MahdiBoulila",
  linkedinUsername: "mahdiboulila",
  twitterUsername: "boulila_mahdi",
  blogUrl: "https://",
  cvUrl: "https://",
  institutionUrl: "https://www.brown.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
