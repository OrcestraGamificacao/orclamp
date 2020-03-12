import React from 'react';
import { Image, View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';

import styles from './styles';

function Register() {
  return (
    <View style={styles.container}>
        <View style={styles.container_logo}>
          <Image source={require('../../../assets/Logo.png')} />
        </View>
        <View style={styles.container_text}>
          <Text style={styles.welcome}>
            Bem-Vindo!
            </Text>
          <Text style={styles.text}>
            Crie sua conta para começar. Depois disso, você pode criar ou entrar para projetos.
            </Text>
          <Text style={styles.input_title}> Email </Text>
          <Input containerStyle={styles.input}
            placeholder="a@a.com"
          />
          <Text style={styles.input_title}> Password </Text>
          <Input containerStyle={styles.input}
            placeholder="********"
          />
          <Text style={styles.input_title}> Confirm Password </Text>
          <Input containerStyle={styles.input}
            placeholder="********"
          />
          <Button containerStyle={styles.button_register}
            buttonStyle={styles.button_register}
            title='SIGN UP'
            color='#7AC14E'
          />
          <Text> Já tem uma conta? Login</Text>
        </View>
        
    </View>
  );
}

export default Register;
