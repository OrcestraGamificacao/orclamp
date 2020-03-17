import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';
import Main from './pages/Main';
import Splash from './pages/Splash';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();


/* As telas deverão ser inseridas neste Navigator */
const MainApp = () => (
  <Tab.Navigator>
        <Tab.Screen name="Main" component={Main} />
  </Tab.Navigator>
);


class Routes extends React.Component {

  componentDidMount()
  {
    Font.loadAsync({'Fjalla-One': require('../assets/fonts/FjallaOne-Regular.ttf')});
  }

  render()
  {
    return(
    <NavigationContainer>
      <Stack.Navigator headerMode='none' >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Main" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
};

export default Routes;
