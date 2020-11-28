import { Reducer } from "react";
import { ARTICLES } from "../../assets/articles.js";
import { Article } from "../data";

const articles = ARTICLES;

// 1. Action Type for getting article detail
const LOAD_ARTICLE_DETAIL = "conduit/article/LOAD_ARTICLE_DETAIL";

//TODO: How does this fit in the story?
type GetDetailAction = {
  type: typeof LOAD_ARTICLE_DETAIL;
  payload: { slug: string };
};

type ActionTypes = GetDetailAction;

// State Type
type ArticleState = {
  list: Article[];
  detail: Article;
};

//boilerplate code for a reducer:
//fun tion that accepts a state, the root state, and gets an action. Depending on the action, we will later decide how to change the state. Up till now, there are no actions yet, only returns the state. Later on we will define action types, like "fetchArticles" and the eg, the "loading" indicator will be displayed. After data is binnen, then lading is uitgezet and the data is opgeladen with the articles.
//We can only give one reducer, that's why the export underneath.
// const reducer: Reducer<any, any> = (state = { list: articles }, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };
//2. Add reducer case for handling the article detail getter
const reducer: Reducer<ArticleState, ActionTypes> = (
  state = { list: articles, detail: null },
  action
) => {
  switch (action.type) {
    case LOAD_ARTICLE_DETAIL: {
      const article = state.list.find(
        (article) => article.slug === action.payload.slug
      );
      return { ...state, detail: article };
    }
    default:
      return state;
  }
};

// 3. Action Creators. Action creator for the article detail action type (getArticle). this is a regular function that accepts an optional payload and returns an Action = {type: string, payload: Object}
export const getArticle = (slug: string): ActionTypes => {
  return {
    type: LOAD_ARTICLE_DETAIL,
    payload: { slug },
  };
};


//with export default I can the import without {} => import article from "./article" in index.ts
//We do this to be sure the reducer is the only thing we can export from here.
export default reducer;
