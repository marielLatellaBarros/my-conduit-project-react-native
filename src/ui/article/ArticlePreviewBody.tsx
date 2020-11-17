import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './ArticlePreviewBody.styles';

type ArticlePreviewBody = {
  title: string;
  description: string;
  tagList: string[];
}

export const ArticlePreviewBody = (props: ArticlePreviewBody) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>{props.description}</Text>
      
      <View style={styles.row}>
        <Text>Read more...</Text>
        <View style={styles.tags}>
          {props.tagList.map(tag => (
            <Text key={tag}>{tag}&nbsp;</Text>
          ))}
        </View>
      </View>
    </View>
  );
};