import React, { useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import { ArticlePreview } from "../../src/ui";
import { Article } from "../data";
import { styles } from "./ArticlesList.styles";
import { FunctionNavigationOptions, useNavigation } from "../hooks";
import { connect } from "react-redux";
import { getArticleList } from "../reducks/article";

//Add loading prop to Props type and mapStatetoProps
type Props = {
  articles: Article[];
  isLoading: boolean;
  //Add list getter to props
  getArticleList: () => (dispatch: any) => Promise<void>;
};

//Customize navigation options via navigationOptions
//Props will be of type articles in the end
const ArticlesList: React.FunctionComponent<Props> & FunctionNavigationOptions = (props): JSX.Element => {

  const navigation = useNavigation();
  const navigateArticle = (slug: string) =>
    navigation.navigate("Article", { slug: slug });

  // Use useEffect hook to load data
  useEffect(() => {
    props.getArticleList();
  });

  //Remove static articles, die gaan door Redux binnen komen
  // const articles: Article[] = ARTICLES;
  const renderItem = ({ item }: { item: Article }): JSX.Element => {
    return (
      <View style={styles.articleContainer}>
        <ArticlePreview {...item} navigateArticle={navigateArticle} />
      </View>
    );
  };

  const RenderSeparator = () => <View style={styles.separator}></View>;

  // return (
  //   <FlatList
  //     data={props.articles}
  //     renderItem={renderItem}
  //     ItemSeparatorComponent={RenderSeparator}
  //     keyExtractor={(article) => article.slug}
  //   />
  // );
  // Use conditional with loading prop to display a loading message or articles list
  return (
    <View>
      {props.isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={props.articles}
          renderItem={renderItem}
          ItemSeparatorComponent={RenderSeparator}
          keyExtractor={article => article.slug}
        />
      )}
    </View>
  );
};

ArticlesList.navigationOptions = {
  title: "Conduit",
  headerStyle: {
    backgroundColor: "#5CB85C",
  },
  headerTitleStyle: {
    color: "#FFF",
  },
};

//Create a `mapStateToProps` function that takes a `state` as param and returns a Props object. Link props to state.
//Read the state and return an object of type props (articles) and link it to the state article that overeenkomt met article reducer (reducks.article.ts) die standard een lijst van articles heeft =>  state = { list: articles }.


//Add mapDispatchToProps to bind the articles getter
const mapStateToProps = state => ({ articles: state.article.list, loading: state.article.isLoadingList });
const mapDispatchToProps = dispatch => ({ getArticleList: () => dispatch(getArticleList()) });
const ArticlesListPage = connect(mapStateToProps, mapDispatchToProps)(ArticlesList);

export default ArticlesListPage;
