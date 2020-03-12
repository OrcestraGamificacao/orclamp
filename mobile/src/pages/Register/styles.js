import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: '10%',
    flex: 1
  },
  container_logo: {
    alignItems: 'center',
    height: 136,
    top: 50,
  },
  container_text: {

    alignItems: 'center',
    top: 70,
  },
  welcome: {
      fontSize: 32,
      color: '#384F7D'
  },
  text: {
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#384f7d',
    paddingTop: '5%',
    paddingBottom: '12%'
  },
  input_title: {
    fontSize: 12,
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
    paddingLeft: '5%',
    color: '#445984'
  },
  input: {
    borderRadius: 10,
    width: '90%',
    paddingBottom: '10%'
  },
  button_register:{
    width: '80%'
  }
});

export default styles;