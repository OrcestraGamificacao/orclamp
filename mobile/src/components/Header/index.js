import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

const Header = ({ title, onPressBack }) => (
  <LinearGradient
    colors={['#7AC14E', '#5A8D3B']}
    style={styles.top}
  >
    {onPressBack ? <Icon onPress={onPressBack} name="arrow-left" size={24} color="#ffffff" style={styles.back} /> : null}
    <Text style={styles.pageTitle}>{title}</Text>
  </LinearGradient>
);

export default Header;
