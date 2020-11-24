import React from 'react';
import {StyleSheet, View } from 'react-native';
import { ArticlesList } from './src/pages/ArticlesList';

export default function App() {

  return (
    <View style={styles.container}>
      <ArticlesList />
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


