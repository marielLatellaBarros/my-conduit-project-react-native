import React from "react";
import { View, Text } from "react-native";
import { CircledImage } from "../CircledImage";
import { styles } from "./AuthorMeta.styles";

type AuthorMeta = {
  username: string;
  image?: string;
  createdAt: string;
};

type Props = {
  username: string;
  image?: string;
  createdAt: string;
};

export const AuthorMeta: React.FunctionComponent<Props> = (
  meta
): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <CircledImage size={36} uri={meta.image} />
      </View>
      <View>
        <Text style={styles.username}>{meta.username}</Text>
        <Text style={styles.createdAt}>{meta.createdAt}</Text>
      </View>
    </View>
  );
};
