import React from 'react';
import { FlatList, View } from 'react-native';
import { ArticlePreview } from '../../src/ui/article/ArticlePreview';
import { ARTICLES } from '../../assets/articles';
import { styles } from './ArticlesList.styles';

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


export const ArticlesList: React.FunctionComponent = (): JSX.Element => {
    const articles: Article[] = ARTICLES;
const renderItem = ({ item }: { item: Article }): JSX.Element => {
  return (
    <View style={styles.articleContainer}>
      <ArticlePreview {...item} />
    </View>
  );
};

const RenderSeparator = () => <View style={styles.separator}></View>;

return (
    <FlatList data={articles} renderItem={renderItem} ItemSeparatorComponent={RenderSeparator} keyExtractor={article => article.slug} />
  );
};