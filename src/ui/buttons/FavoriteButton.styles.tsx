import { StyleSheet } from "react-native";
import { Colors } from "../../styles/_colors";

export const styles = StyleSheet.create({
  container: {
    margin: 2,
    width: "auto",
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 4
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    color: Colors.primary
  }
});