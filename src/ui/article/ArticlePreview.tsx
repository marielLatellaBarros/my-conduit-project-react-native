import React from "react";
import { View, Text } from "react-native";
import { AuthorMeta } from "../author/AuthorMeta";
import { ArticlePreviewBody } from "./ArticlePreviewBody";
import { styles } from './ArticlePreview.styles';

//Define properties by looking at assets/articles.js
type Article = {
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

type Author = {
  username: string;
  bio?: string; //optional
  image?: string; //optional
  following: boolean;
};

//export the function Pascalcase and give props
export const ArticlePreview = (props: Article) => {
  //export const ArticlePreview: React.FunctionComponent<Article> = (article): JSX.Element => {
  //export const ArticlePreview =  ( article: Article ) => { // : JSX.Element this const returns a jsx element'
  return (
    // Main component View
    <View style={ styles.container}>

      <View style={ styles.header}>
        {/* Define image, username and createdAt in its own component, with its own style => AuthorMeta  */}
        <AuthorMeta {...props} {...props.author}></AuthorMeta>
        {/* Likes */}
        <Text>{props.favoritesCount}</Text>
      </View>

      {/* SECOND ROW: title and description and THIRD ROW: Read more... | array of tags => BODY */}
      <ArticlePreviewBody {...props}></ArticlePreviewBody>

    </View>
  );
};
