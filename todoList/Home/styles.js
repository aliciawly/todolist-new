import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 22,
    // justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tableCell: {
    flex: 1,
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  actionText: {
    fontSize: 10,
  },
  onPress: {
    borderRadius: 30,
    backgroundColor: '#3480e3',
    alignItems: 'flex-end',
    paddingVertical: 25,
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: 'center', // Align items at the bottom
  },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#b3bbc9',
    opacity: 0.3,
    borderRadius: 5,
    marginRight: 15,
  },
  icon: {
    width: 20,
    height: 20,
  },
  textSize: {
    fontSize: 18,
  },
});
