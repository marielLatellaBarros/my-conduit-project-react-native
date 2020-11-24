import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 2,
    paddingHorizontal: 4
  }
});

type Tag = {
  value: string;
  borderColor: string;
  textColor: string;
  backgroundColor: string;
}

export const Tag: React.FunctionComponent<Tag> = (tag): JSX.Element => {
  return (
    <View
      style={{
        ...styles.container,
        borderColor: tag.borderColor,
        backgroundColor: tag.backgroundColor
      }}
    >
      <Text style={{ color: tag.textColor }}>{tag.value}</Text>
    </View>
  );
};


type LightTag = {
  value: string;
}
export const LightTag: React.FunctionComponent<LightTag> = (tag): JSX.Element => {
  const styles = {
    borderColor: '#BBB',
    backgroundColor: '#FFF',
    textColor: '#BBB'
  }
  return (
    <Tag value={tag.value} {...styles} />
  )
}

