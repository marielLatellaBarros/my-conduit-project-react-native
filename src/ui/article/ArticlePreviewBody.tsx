import React from 'react';
import { View, Text } from 'react-native';
import { LightTag } from '..';
import { styles } from './ArticlePreviewBody.styles';

// type ArticlePreviewBody = {
//   title: string;
//   description: string;
//   tagList: string[];
// }

type Props = {
  title: string;
  description: string;
  tagList: string[];
}

export const ArticlePreviewBody: React.FunctionComponent<Props> = (article): JSX.Element => {
  return (
    <View>
      <Text style={styles.articleTitle}>{article.title}</Text>
      <Text style={styles.articleDescription}>{article.description}</Text>
      
      <View style={styles.row}>
      <Text style={styles.callToAction}>Read more...</Text>
        <View style={styles.tags}>
          {article.tagList.map(tag => (
            <LightTag key={tag} value={tag}></LightTag>
          ))}
        </View>
      </View>
    </View>
  );
};