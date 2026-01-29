export interface BlogPost {
  tags: any;
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
