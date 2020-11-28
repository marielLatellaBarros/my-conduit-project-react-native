import { Reducer } from "react";
import { ARTICLES } from "../../assets/articles.js";
import { Article } from "../data";

const articles = ARTICLES;

// 1. Action Types
const LOAD_ARTICLE_LIST = 'conduit/article/LOAD_ARTICLE_LIST';
const LOAD_ARTICLE_LIST_SUCCESS = 'conduit/article/LOAD_ARTICLE_LIST_SUCCESS';
const LOAD_ARTICLE_LIST_FAIL = 'conduit/article/LOAD_ARTICLE_LIST_FAIL';
const LOAD_ARTICLE_DETAIL = 'conduit/article/LOAD_ARTICLE_DETAIL';
const LOAD_ARTICLE_DETAIL_SUCCESS = 'conduit/article/LOAD_ARTICLE_DETAIL_SUCCESS';
const LOAD_ARTICLE_DETAIL_FAIL = 'conduit/article/LOAD_ARTICLE_LIST_FAIL';

type GetListAction = {
  type: typeof LOAD_ARTICLE_LIST,
  payload: any
};

type GetListActionSuccess = {
  type: typeof LOAD_ARTICLE_LIST_SUCCESS,
  payload: { data: Article[] }
}

type GetListActionFail = {
  type: typeof LOAD_ARTICLE_LIST_FAIL,
  payload: []
}

// (optional) create typescript types for each action
type GetDetailAction = {
  type: typeof LOAD_ARTICLE_DETAIL,
  payload: { slug: string }
};

type GetDetailActionSuccess = {
  type: typeof LOAD_ARTICLE_DETAIL_SUCCESS,
  payload: { data: Article }
}

type GetDetailActionFail = {
  type: typeof LOAD_ARTICLE_DETAIL_FAIL,
  payload: {}
}

type ActionTypes = GetListAction | GetListActionSuccess | GetListActionFail | GetDetailAction | GetDetailActionSuccess | GetDetailActionFail;

// State Type
// Add loading state for both list and detail (TIP: isLoadingList, isLoadingDetail) and make sure to set their initial state to true (in reducer constructor)
type ArticleState = {
  list: Article[],
  isLoadingList: boolean,
  detail: Article,
  isLoadingDetail: boolean
}

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
// Reducer
// TODO: Define reducers for all 5 actions
const reducer: Reducer<ArticleState, ActionTypes> = (
  state = { list: [], isLoadingList: true, detail: null, isLoadingDetail: true }, action
) => {
  switch (action.type) {
    case LOAD_ARTICLE_LIST: {
      return { ...state, isLoadingList: true };
    }
    case LOAD_ARTICLE_LIST_SUCCESS: {
      return { ...state, list: action.payload.data, isLoadingList: false }
    }
    case LOAD_ARTICLE_LIST_FAIL: {
      return { ...state, isLoadingList: false }
    }
    case LOAD_ARTICLE_DETAIL: {
      return { ...state, isLoadingDetail: true };
    }
    case LOAD_ARTICLE_DETAIL_SUCCESS: {
      return { ...state, detail: action.payload.data, isLoadingDetail: false }
    }
    case LOAD_ARTICLE_LIST_FAIL: {
      return { ...state, isLoadingDetail: false }
    }
    default: return state;
  }
};

// 4a. Define action creators for the SUCCESS & FAIL actions and thunks for the LOAD actions
export const getArticleList = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://conduit.productionready.io/api/articles`);
      const body: { articles: Article[] } = await response.json();
      dispatch(getArticleListSuccess(body.articles));
    } catch (error) {
      dispatch(getArticleListFail())
    }
  }
}

//4b. Define thunks for LOAD actions
const getArticleListSuccess = (articles: Article[]) => {
  return {
    type: LOAD_ARTICLE_LIST_SUCCESS,
    payload: { data: articles }
  }
}

const getArticleListFail = () => {
  return {
    type: LOAD_ARTICLE_LIST_FAIL,
    payload: {}
  }
}

export const getArticle = (slug: string) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://conduit.productionready.io/api/articles/${slug}`);
      const body: { article: Article } = await response.json();
      dispatch(getArticleSuccess(body.article));
    } catch (error) {
      dispatch(getArticleFail())
    }
  }
}

//4b. Define thunks for LOAD actions
const getArticleSuccess = (article: Article) => {
  return {
    type: LOAD_ARTICLE_DETAIL_SUCCESS,
    payload: { data: article }
  }
}

const getArticleFail = () => {
  return {
    type: LOAD_ARTICLE_DETAIL_FAIL,
    payload: {}
  }
}


//with export default I can the import without {} => import article from "./article" in index.ts
//We do this to be sure the reducer is the only thing we can export from here.
export default reducer;
