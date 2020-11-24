import React from 'react';
import { Author } from "../../data";
import { View, Text } from "react-native";
import { AuthorMeta } from '../author/AuthorMeta';
import { styles } from './ArticleHeader.styles';
import { H1 } from '../TextHeaders';
import { FavoriteButton } from '../buttons/FavoriteButton';
import { FollowButton } from '../buttons/FollowButton';

type Props = {
  title: string;
  createdAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

export const ArticleHeader: React.FunctionComponent<Props> = (headerInfo): JSX.Element => {
  return (
    <View style={styles.header}>
      <H1>{headerInfo.title}</H1>
      <View style={styles.authorRow}>
        <AuthorMeta {...headerInfo.author} createdAt={headerInfo.createdAt} />
        <View style={styles.buttonRow}>
          <FollowButton username={headerInfo.author.username} />
          <FavoriteButton favoritesCount={headerInfo.favoritesCount} />
        </View>
      </View>
    </View>
  );
};