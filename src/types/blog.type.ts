export interface BlogPost {
  id: string | number;
  title: string;
  content: string;
  thumbnail?: string | null;
  types?: string[];
  views: number;
  _count?: {
    comments: number;
  };
  isFeatured?: boolean;
}
