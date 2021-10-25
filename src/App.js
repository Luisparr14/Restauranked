/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from './Views/Login';
import Register from './Views/Register';
import Index from './Views/Index';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StatusBar} from 'react-native';

const Drawer = createDrawerNavigator();

function MyDrawer({navigation}) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Todos" component={Index} />
      <Drawer.Screen name="Por puntuacion" component={Index} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#dd222200"
        barStyle="dark-content"
        hidden={true}
      />
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
        <Stack.Screen
          name="Inicio"
          component={MyDrawer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
