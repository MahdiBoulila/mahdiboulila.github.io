export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2023—Present",
    institution: "Brown University",
    degree: "Ph.D. in Electrical and Computer Engineering",
    advisor: "Prof. Sherief Reda",
  },
  {
    year: "2020—2023",
    institution: "Clark University",
    degree: "B.A. in Mathematics, Computer Science.",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
