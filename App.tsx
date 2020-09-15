import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/auth';
import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar hidden barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
