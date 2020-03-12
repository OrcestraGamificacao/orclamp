import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

function Register() {
  return (
    <View style={styles.container}>
        <View style={styles.container_logo}>
          <Image source={require('../../../assets/Logo.png')} />
        </View>
        <View style={styles.container_text}>
          <Text style={styles.text}>Bem-Vindo!</Text>
        </View>
    </View>
  );
}

export default Register;
