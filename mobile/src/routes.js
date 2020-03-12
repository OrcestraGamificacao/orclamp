import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from './pages/Main';
import LoginPage from './pages/Main/LoginPage';

const Routes = () => (
  <NavigationContainer>
    <Main />
  </NavigationContainer>
);

export default Routes;
