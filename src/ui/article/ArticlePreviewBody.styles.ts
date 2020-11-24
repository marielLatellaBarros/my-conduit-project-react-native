import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  tags: { flex: 0, flexDirection: 'row' },
  articleTitle: {
    fontSize: 16,
    fontWeight: "500"
  },
  articleDescription: {
    color: "#999"
  },
  callToAction: {
    fontSize: 12,
    color: '#BBB'
  }
});