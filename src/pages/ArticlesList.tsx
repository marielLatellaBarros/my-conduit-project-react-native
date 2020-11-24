import React from 'react';
import { FlatList, View } from 'react-native';
import { ArticlePreview } from '../../src/ui';
import { Article } from '../data';
import { styles } from './ArticlesList.styles';
import { NavigationStackOptions } from 'react-navigation-stack';
import { useNavigation } from '../hooks';
import { connect } from 'react-redux';

  //nieuwe properties verzienen, wordt niet geexporteerd, gebruikt voor het gemaak 
  //Create new props for ArticlesList (1 prop: articles)
  type Props = {
    articles: Article[]
  }

//Customize navigation options via navigationOptions
//Props will be of type articles in the end
const ArticlesList: React.FunctionComponent<Props> & {navigationOptions?: NavigationStackOptions} = (props): JSX.Element => {
  const navigation = useNavigation();
  const navigateArticle = (slug: string) => navigation.navigate('Article', {slug: slug});
  
//Remove static articles, die gaan door Redux binnen komen
   // const articles: Article[] = ARTICLES;
const renderItem = ({ item }: { item: Article }): JSX.Element => {
  return (
    <View style={styles.articleContainer}>
      <ArticlePreview {...item} navigateArticle = {navigateArticle} />
    </View>
  );
};

const RenderSeparator = () => <View style={styles.separator}></View>;

return (
    <FlatList data={props.articles} renderItem={renderItem} ItemSeparatorComponent={RenderSeparator} keyExtractor={article => article.slug} />
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

//Create a `mapStateToProps` function that takes a `state` as param and returns a Props object. Link props to state.
//Read the state and return an object of type props (articles) and link it to the state article that overeenkomt met article reducer (reducks.article.ts) die standard een lijst van articles heeft =>  state = { list: articles }.

const mapStateToProps = (state) => ({articles: state.article.list});

//Use react-redux's `connect()` function to bind the Redux store to our component. **TIP**: use export default connect()
const ArticlesListPage = connect(mapStateToProps)(ArticlesList);
export default ArticlesListPage;