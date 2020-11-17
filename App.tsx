import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ArticlePreview } from './src/ui/article/ArticlePreview';
import { ARTICLES } from './assets/articles';


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
  bio?: string;
  image?: string;
  following: boolean;
};

export default function App() {
  const articles: Article[] = ARTICLES;
  const renderItem = ({ item }: { item: Article }): JSX.Element => {
    return (
      <View style={{margin: 8}}>
        <ArticlePreview {...item} />
      </View>
    );
  };

  const RenderSeparator = () => <View style={{ marginHorizontal: 8, borderBottomWidth: 1, borderBottomColor: '#CCC' }}></View>;


  return (
    <View style={styles.container}>
      <FlatList 
      data={articles} 
      renderItem={renderItem} 
      ItemSeparatorComponent={RenderSeparator} 
      keyExtractor={article => article.slug} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});


