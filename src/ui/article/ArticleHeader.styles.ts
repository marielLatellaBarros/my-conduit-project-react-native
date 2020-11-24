import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    marginHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#BBB'
  },
  authorRow: {
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonRow: {
    flex: 1,
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});
