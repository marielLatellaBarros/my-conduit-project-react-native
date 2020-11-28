import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { createStore, applyMiddleware } from 'redux';
import ArticleDetailPage from './src/pages/ArticleDetail';
import ArticlesListPage from './src/pages/ArticlesList';
import reducer from './src/reducks';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

export default function App() {

  const Stack = createStackNavigator({ //Sort component, reason for capital letter
    Home: { 
      screen: ArticlesListPage //Use the redux store 
    },
    Article: {
      screen: ArticleDetailPage
    }
  });
  //Create a redux store by using redux's 'createStore' function and passing our reducer from src/reducks as arg
  //Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the function's body once the asynchronous operations have been completed.
  const store = createStore(reducer, applyMiddleware(thunk)); //new store
  const AppContainer = createAppContainer(Stack); //Add stack navigation to project

  //Replace the <View> wrapper with react'redux's <Provider> wrapper, passing the store as single prop to use the store
  //This links the store to the application
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}


