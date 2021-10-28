/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './Views/Login';
import Register from './Views/Register';
import Index from './Views/Index';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'react-native';
import AddRestaurant from './Views/AddRestaurant';
import RateRestaurant from './Views/RateRestaurant';

const Drawer = createDrawerNavigator();
function MyDrawer({ route }) {
  const { username } = route.params;
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        initialParams={{ username }}
        name="Todos"
        component={Index}
      />
      <Drawer.Screen
        initialParams={{ username }}
        name="Por puntuacion"
        component={Index}
      />
      <Drawer.Screen
        initialParams={{ username }}
        name="Agregar restaurante"
        component={AddRestaurant}
      />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function AppContent() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: 'Ingreso', headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        name="Inicio"
        component={MyDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Raterestaurant"
        options={{ headerShown: false }}
        component={RateRestaurant}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#dd222200"
        barStyle="dark-content"
        hidden={true}
      />
      <AppContent />
    </NavigationContainer>
  );
};

export default App;
