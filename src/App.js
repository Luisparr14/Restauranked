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
import { StatusBar, Alert } from 'react-native';
import AddRestaurant from './Views/AddRestaurant';
import RateRestaurant from './Views/RateRestaurant';
import { ImageButton } from './components/Buttons';
import LogOutImage from './assets/icons/LogOut.png';

const Drawer = createDrawerNavigator();
function MyDrawer({ route, navigation }) {
  const { username } = route.params;

  const LogOut = () => {
    Alert.alert('Cerrar sesion', '¿Esta seguro que quiere cerrar sesion?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      { text: 'YES', onPress: () => navigation.replace('Login') },
    ]);
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        headerRight: () => (
          <ImageButton handlePress={LogOut} image={LogOutImage} />
        ),
      }}>
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
        name="Por nombre"
        component={Index}
      />
      <Drawer.Screen
        initialParams={{ username }}
        options={{}}
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
