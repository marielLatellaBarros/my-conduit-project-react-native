import React, { useEffect } from "react";
import { View, Text } from 'react-native';
import { useNavigation } from '../hooks/navigation';
import { ARTICLES } from '../../assets/articles.js';
import { Article } from '../data/article/article';
import { styles } from './ArticleDetail.styles';
import { ArticleHeader } from '../ui/article/ArticleHeader';
import { NavigationStackOptions } from "react-navigation-stack";
import { connect } from "react-redux";
import { getArticle } from "../reducks/article";

//1. Create new props for ArticleDetail (2 props: article, getArticle)
type Props = {
  article: Article;
  getArticle: any;
};

// export const ArticleDetail = () => {
  const ArticleDetail: React.FunctionComponent<Props> & {
    navigationOptions?: NavigationStackOptions;
  } = (props): JSX.Element => {
    const navigation = useNavigation();
    const {slug} = navigation.state.params; //object destructuring
    // const slug2 = navigation.state.params.slug; //std manier om data te krijgen
    useEffect(() => {
      props.getArticle(slug);
    }, [slug]);
    return (
      <View>
        {!props.article ? (
          <Text>Loading</Text>
        ) : (
          <>
            <ArticleHeader {...props.article} />
            <Text style={styles.bodyContainer}>{props.article.body}</Text>
          </>
        )}
      </View>
  );
};


    // const article = (ARTICLES as Article[]).find(article => article.slug === slug);
    // return (
    //     <View>
    //         <ArticleHeader {...article} />
    // <Text style={styles.bodyContainer}>{article.body}</Text>
    //     </View>
    // );

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

  const mapStateToProps = (state) => ({ article: state.article.detail });
const mapDispatchToProps = (dispatch) => ({
  getArticle: (slug: string) => dispatch(getArticle(slug)),
});

const ArticleDetailPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetail);
export default ArticleDetailPage;