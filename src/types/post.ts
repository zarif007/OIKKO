import { JsonValue } from "@prisma/client/runtime/library";

export interface Location {
  district: string;
  area: string;
}

interface IPost {
  id: string;
  title: string;
  content: string | null;
  author: string;
  from: Date;
  to: Date;
  category: string;
  location?: Location | JsonValue;
  images: string[];
  upVote: number;
  downVote: number;
  createdAt: Date;
  updatedAt: Date;
}

export default IPost;
