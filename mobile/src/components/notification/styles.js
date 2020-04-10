import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    height: 85,
    width: 300,
    borderRadius: 8,
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  name: {
    fontFamily: 'Fjalla-One',
    fontSize: 14,
    marginVertical: 5,
    marginLeft: 65,
  },
  quit: {
    padding: 30,
  },
  description: {
    fontFamily: 'Fjalla-One',
    fontSize: 12,
    color: '#888888',
    marginLeft: 65,
    width: 150,
  },
});

export default styles;
