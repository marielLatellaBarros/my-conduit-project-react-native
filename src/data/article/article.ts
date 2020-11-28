import { Author } from "../author/author";

export type Article = {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
};

export type ArticleForCreate = {
  title: string;
  description: string;
  body: string;
  tagList?: string[]
}