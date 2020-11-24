import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { createStore } from 'redux';
import { ArticleDetail } from './src/pages/ArticleDetail';
import ArticlesListPage from './src/pages/ArticlesList';
import reducer from './src/reducks';
import { Provider } from 'react-redux';

export default function App() {

  const Stack = createStackNavigator({ //Sort component, reason for capital letter
    Home: { 
      screen: ArticlesListPage //Use the redux store 
    },
    Article: {
      screen: ArticleDetail
    }
  });
  //Create a redux store by using redux's 'createStore' function and passing our reducer from src/reducks as arg
  const store = createStore(reducer); //new store
  const AppContainer = createAppContainer(Stack); //Add stack navigation to project

  //Replace the <View> wrapper with react'redux's <Provider> wrapper, passing the store as single prop to use the store
  //This links the store to the application
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}


