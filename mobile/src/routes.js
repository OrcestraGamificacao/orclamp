import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Font from 'expo-font';
import { Text } from 'react-native';
import Main from './pages/Main';
import LoginPage from './pages/Main/LoginPage';
import Splash from './pages/Splash';
import Projects from './pages/Projects';
import Notifications from './pages/Notifications';


const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


/* As telas deverão ser inseridas neste Navigator */
const MainApp = () => (
  <Tab.Navigator
    shifting={false}
    initialRouteName="Feed"
    activeColor="#384F7D"
    inactiveColor="rgba(200,200,200, .7)"
    barStyle={{ backgroundColor: '#ffffff' }}
  >
    <Tab.Screen
      name="Feed"
      component={Main}
      options={{
        tabBarLabel: 'Feed',
        tabBarIcon: ({ color }) => (<Icon name="ios-home" color={color} size={26} />),
      }}
    />

    <Tab.Screen
      name="Meus Projetos"
      component={Projects}
      options={{
        tabBarLabel: 'Meus Projetos',
        tabBarIcon: ({ color }) => (<Icon name="ios-paper" color={color} size={26} />),
      }}
    />
    <Tab.Screen
      name="Notificações"
      component={Notifications}
      options={{
        tabBarLabel: 'Notificações',
        tabBarIcon: ({ color }) => (<Icon name="ios-notifications" color={color} size={26} />),
      }}
    />
    <Tab.Screen
      name="Perfil"
      component={() => <Text>Meu perfil</Text>}
      options={{
        tabBarLabel: 'Perfil',
        tabBarIcon: ({ color }) => (<Icon name="ios-person" color={color} size={26} />),
      }}
    />
  </Tab.Navigator>

);


class Routes extends React.Component {
  componentDidMount() {
    Font.loadAsync({ 'Fjalla-One': require('../assets/fonts/FjallaOne-Regular.ttf') });
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Main" component={MainApp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Routes;
