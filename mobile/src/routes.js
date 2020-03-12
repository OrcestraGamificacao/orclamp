import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from './pages/Main';
import Register from './pages/Register';

const Routes = () => (
  <NavigationContainer>
    <Register />
  </NavigationContainer>
);

export default Routes;
