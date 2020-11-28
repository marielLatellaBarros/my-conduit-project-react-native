//import all reducers and combine them into a single rootReducer (exported as default) to be used by our store
//then you can import directly from reducks

import article from "./article";
import { combineReducers } from 'redux'; //import function that combines reducers into a single rootReducer
import user from "./user";

//export default combineReducers({article: article, test1: test1, ...});
//key of the feature and value: the reducer for the feature article: articleReducer
//Here the article is linked to the reducer
export default combineReducers({user: user, article: article});