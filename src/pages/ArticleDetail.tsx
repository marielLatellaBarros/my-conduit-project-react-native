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

//Add loading prop to Props type and mapStatetoProps
type Props = {
  article: Article;
  getArticle: any;
  isLoading: boolean;
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
    // Use loading prop to show Loading message or Detail Component
    return (
      <View>
      {props.isLoading ? (
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

  const mapStateToProps = state => ({ article: state.article.detail, isLoading: state.article.isLoadingDetail });
const mapDispatchToProps = (dispatch) => ({
  getArticle: (slug: string) => dispatch(getArticle(slug)),
});

const ArticleDetailPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetail);
export default ArticleDetailPage;