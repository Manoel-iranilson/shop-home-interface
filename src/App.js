import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import Login from './routes/Routes';
import AuthContext from './contexts/authContext';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <NavigationContainer>
        <AuthContext.Provider value={{signin: true}}>
          <Login />
        </AuthContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
