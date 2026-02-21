export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  author: string;
  date: string;
  image: string;
}

export type Category = "All" | "Startups" | "Tech" | "Finance" | "Interviews";
