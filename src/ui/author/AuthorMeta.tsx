import React from 'react';
import { View, Text } from 'react-native';
import { CircledImage } from '../CircledImage';
import { styles } from './AuthorMeta.styles';

type AuthorMeta = {
  username: string;
  image?: string;
  createdAt: string;
}

export const AuthorMeta = (props: AuthorMeta) => {

  return (
    <View style={styles.container}>
      <CircledImage size={36} uri={props.image} />
      <View>
        <Text>{props.username}</Text>
        <Text>{props.createdAt}</Text>
      </View>
    </View>
  );
};