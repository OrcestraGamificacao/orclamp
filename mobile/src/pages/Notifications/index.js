import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import Header from '../../components/Header';
import Notification from '../../components/notification';

import styles from './styles';

const Notifications = () => {
  const [notifications, updateNotifications] = useState([
    {
      name: 'Ateldy Brasil',
      type: 'NOTIFICATION_PROJECT_ACCEPTED',
      date: '10/04/2020',
      project: 'Ada Bot',
    },
    {
      name: 'João Vitor',
      type: 'NOTIFICATION_MESSAGE',
      date: '12/04/2020',
      project: 'Hub Care',
    },
    {
      name: 'Alan Marques',
      type: 'NOTIFICATION_PROJECT_REQUEST',
      date: '11/04/2020',
      project: 'IFB',
    },
  ]);

  return (
    <View style={styles.container}>
      <Header title="Notificações" />
      <Text style={styles.subtitle}>PROJETOS DISPONÍVEIS</Text>
      <FlatList
        style={styles.list}
        keyExtractor={(item, index) => index.toString()}
        data={notifications}
        renderItem={(notification) => (
          <Notification
            name={notification.item.name}
            type={notification.item.type}
            project={notification.item.project}
          />
        )}
      />
    </View>
  );
};

export default Notifications;
