/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Login from './Views/Login';
import Register from './Views/Register';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{title: 'Ingreso'}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{title: 'Registro', headerTitleAlign: 'center'}}
          name="Register"
          component={Register}
        />
        {/* <Stack.Screen
          name="Inicio"
          component={MyDrawer}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
