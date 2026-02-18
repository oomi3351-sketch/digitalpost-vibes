export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
};

export const categories = [
  "All",
  "Celebrity News",
  "Life Hacks",
  "Shocking Stories",
  "Tech",
  "Entertainment",
  "Health & Wellness",
  "Travel",
] as const;

export const blogPosts: BlogPost[] = [];
