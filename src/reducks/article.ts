import { Reducer } from "react";
import { ARTICLES } from '../../assets/articles.js';

const articles = ARTICLES;

//boilerplate code for a reducer: 
//fun tion that accepts a state, the root state, and gets an action. Depending on the action, we will later decide how to change the state. Up till now, there are no actions yet, only returns the state. Later on we will define action types, like "fetchArticles" and the eg, the "loading" indicator will be displayed. After data is binnen, then lading is uitgezet and the data is opgeladen with the articles.
//We can only give one reducer, that's why the export underneath.
const reducer: Reducer<any, any> = (state = { list: articles }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
//with export default I can the import without {} => import article from "./article" in index.ts
//We do this to be sure the reducer is the only thing we can export from here.
export default reducer;
