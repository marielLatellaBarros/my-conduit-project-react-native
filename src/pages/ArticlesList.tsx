import React from 'react';
import { FlatList, View } from 'react-native';
import { ArticlePreview } from '../../src/ui/article/ArticlePreview';
import { ARTICLES } from '../../assets/articles';
import { styles } from './ArticlesList.styles';
import { NavigationStackOptions } from 'react-navigation-stack';
import { useNavigation } from '../hooks/navigation';

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

//Customize navigation options via navigationOptions
export const ArticlesList: React.FunctionComponent & {navigationOptions?: NavigationStackOptions} = (): JSX.Element => {
  const navigation = useNavigation();

  const navigateArticle = (slug: string) => navigation.navigate('Article', {slug: slug});

    const articles: Article[] = ARTICLES;
const renderItem = ({ item }: { item: Article }): JSX.Element => {
  return (
    <View style={styles.articleContainer}>
      <ArticlePreview {...item} navigateDetail = {navigateArticle} />
    </View>
  );
};

const RenderSeparator = () => <View style={styles.separator}></View>;

return (
    <FlatList data={articles} renderItem={renderItem} ItemSeparatorComponent={RenderSeparator} keyExtractor={article => article.slug} />
  );
};

ArticlesList.navigationOptions = {
  title: 'Conduit',
  headerStyle: {
    backgroundColor: '#5CB85C'
  },
  headerTitleStyle: {
    color: '#FFF'
  }
};