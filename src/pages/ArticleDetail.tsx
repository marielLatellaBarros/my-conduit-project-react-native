import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '../hooks/navigation';
import { ARTICLES } from '../../assets/articles.js';
import { Article } from '../data/article/article';
import { styles } from './ArticleDetail.styles';
import { ArticleHeader } from '../ui/article/ArticleHeader';

export const ArticleDetail = () => {
    const navigation = useNavigation();
    const {slug} = navigation.state.params; //object destructuring
    // const slug2 = navigation.state.params.slug; //std manier om data te krijgen
    const article = (ARTICLES as Article[]).find(article => article.slug === slug);
    return (
        <View>
            <ArticleHeader {...article} />
    <Text style={styles.bodyContainer}>{article.body}</Text>
        </View>
    );
}

ArticleDetail.navigationOptions = {
    title: 'Article',
    headerStyle: {
      backgroundColor: '#333'
    },
    headerTitleStyle: {
      color: '#FFF'
    },
    headerBackTitleStyle: {
      color: '#FFF'
    }
  };