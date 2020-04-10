import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import styles from './styles';

const Description = (type, name) => {
  switch (type) {
    case 'NOTIFICATION_MESSAGE':
      return (<Text style={styles.description}>{`${name} te enviou uma mensangem`}</Text>);
    case 'NOTIFICATION_PROJECT_ACCEPTED':
      return (<Text style={styles.description}>{`${name} te aceitou no projeto`}</Text>);
    case 'NOTIFICATION_PROJECT_REQUEST':
      return (<Text style={styles.description}>{`${name} pediu para fazer parte do seu projeto`}</Text>);
    case 'NOTIFICATION_PROJECT_INVITE':
      return (<Text style={styles.description}>{`${name} pediu para fazer parte deste projeto`}</Text>);
    default:
      return null;
  }
};

const Notification = ({ name, type }) => (
  <View style={styles.card}>
    <View>
      <Text style={styles.name}>{name}</Text>
      {Description(type, name)}
    </View>
    <Icon size={20} name="close" style={styles.quit} />
  </View>
);

export default Notification;
