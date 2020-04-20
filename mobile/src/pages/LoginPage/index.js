import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { Button, Input } from 'react-native-elements';

import styles from './styles';

function LoginPage() {
  return (
    <View style={styles.container}>
      <View style={styles.container_logo}>
        <Image source={require('../../../assets/Logo.png')} />
      </View>
      <View style={styles.container_input_data}>
        <Text style={styles.signin}>
          Sign in
        </Text>
        <Text style={styles.input_username_title}>
          GitHub Username
        </Text>
        <Input containerStyle={styles.input_username} placeholder="GitHub Username" />
        <Text style={styles.input_password_title}>
          Password
        </Text>
        <Input containerStyle={styles.input_password} placeholder="********" />
      </View>
      <View style={styles.container_button}>
        <Button
          contanerStyle={styles.button_login}
          buttonStyle={styles.button_login}
          title="SIGN IN"
        />
        <TouchableOpacity
          style={styles.button_create_account}
          onPress={() => {}}
        >
          <Text>Novo aqui? Crie uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginPage;
