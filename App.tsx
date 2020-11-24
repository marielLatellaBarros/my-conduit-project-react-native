import React from 'react';
import {StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { ArticlesList } from './src/pages/ArticlesList';

export default function App() {
  //Sort component, reason for capital letter
  const Stack = createStackNavigator({
    Home: {
      screen: ArticlesList
    }
  });

  const AppContainer = createAppContainer(Stack);


  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});


