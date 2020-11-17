import React from "react";
import { View, Text } from "react-native";
import { AuthorMeta } from "../author/AuthorMeta";

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
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "stretch",
      }}
    >
      {/* FIRST ROW image | email and created at | likes */}
      {/* Standard direction is column, so need to define row */}
      {/* If you have two elements, two columns, then put space-between: as much space as possible between the two elements. Space-evenly takes the borders into consideration  */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        {/* Define image, username and createdAt) in its own component, with its own style => AuthorMeta  */}
        <AuthorMeta {...props} {...props.author}></AuthorMeta>

        {/* Likes */}
        <Text>{props.favoritesCount}</Text>
        {/* End of first row */}
      </View>

      {/* SECOND ROW: title and description*/}
      <View>
        <Text>{props.title}</Text>
        <Text>{props.description}</Text>
      </View>

      {/* THIRD ROW: Read more... | array of tags */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 8,
        }}
      >
        {/* Read more */}
        <Text>Read more...</Text>

        {/* Array of tags: for each element of tagList create a Text element with the tag and space */}
        <View style={{ flex: 0, flexDirection: "row" }}>
          {props.tagList.map((tag) => (
            <Text key={tag}>{tag}&nbsp;</Text>
          ))}
        </View>

        {/* End of thrid row */}
      </View>

      {/* End of MAin component View */}
    </View>
  );
};
