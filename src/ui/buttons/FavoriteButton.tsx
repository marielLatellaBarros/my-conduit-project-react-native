import React from "react";
import { View, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "./FavoriteButton.styles";
import { Colors } from "../../styles/_colors";

type Props = {
  favoritesCount: number;
}

export const FavoriteButton: React.FunctionComponent<Props> = ({ favoritesCount }): JSX.Element => {
  return (
    <TouchableHighlight style={styles.container} underlayColor={Colors.primary} onPress={() => console.log('Favorited!')}>
      <View style={styles.row}>
        <Icon name="heart" color={Colors.primary}/>
        <Text style={styles.text}>&nbsp;{favoritesCount}</Text>
      </View>
    </TouchableHighlight>
  );
};
