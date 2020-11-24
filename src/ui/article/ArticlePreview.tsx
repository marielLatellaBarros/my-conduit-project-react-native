import React from "react";
import { View, Text } from "react-native";
import { AuthorMeta } from "../author/AuthorMeta";
import { ArticlePreviewBody } from "./ArticlePreviewBody";
import { styles } from './ArticlePreview.styles';
import { TouchableOpacity } from "react-native-gesture-handler";

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

//Inherits all the properties of Article and adds navigateDetail property with a function that gets a slug (what it returns it doesn't matter)
type ArticleProps = Article & {navigateDetail: (slug: string) => any };

type Author = {
  username: string;
  bio?: string; //optional
  image?: string; //optional
  following: boolean;
};

//export the function Pascalcase and give props
// export const ArticlePreview = (props: Article) => {
  export const ArticlePreview: React.FunctionComponent<ArticleProps> = (article): JSX.Element => {
  //export const ArticlePreview =  ( article: Article ) => { // : JSX.Element this const returns a jsx element'
  return (
    // Main component View
    <View style={ styles.container}>
      <View style={ styles.header}>
        <AuthorMeta {...article} {...article.author}></AuthorMeta>
        <Text>{article.favoritesCount}</Text>
      </View>
      {/* Always use callback! */}
      <TouchableOpacity onPress={() => article.navigateDetail(article.slug)}> 
      <ArticlePreviewBody {...article}></ArticlePreviewBody>
      </TouchableOpacity>
    </View>
  );
};
