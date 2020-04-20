import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_logo: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '10%',
  },
  container_input_data: {
    paddingTop: '5%',
  },
  signin: {
    fontSize: 32,
    alignSelf: 'flex-start',
    paddingLeft: '5%'
  },
  input_username_title: {
    paddingTop: '5%',
    paddingLeft: '5%',
  },
  input_username: {
    alignSelf: 'center',
    paddingTop: '2%',
    width: '95%',
  },
  input_password_title: {
    paddingTop: '7%',
    paddingLeft: '5%',
  },
  input_password: {
    alignSelf: 'center',
    paddingTop: '2%',
    width: '95%'
  },
  container_button: {
    paddingTop: '10%',
  },
  button_login: {
    alignSelf: 'center',
    height: 56,
    width: '80%',
    backgroundColor: '#7AC14E',
  },
  button_create_account: {
    alignSelf: 'center',
    paddingTop: '2%',
  }
});

export default styles;
