/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, SafeAreaView, ScrollView } from 'react-native';
import RestaurantList from '../components/RestaurantList';
import { url } from '../Configs/Config';

const Index = ({ navigation, route }) => {
  const { username } = route.params;
  const [restaurantes, setRestaurantes] = useState([]);
  const [direccion, setdireccion] = useState(`${url}/restaurantes/${navigation.getState().index}`);

  useEffect(() => {
    getResource();
    const backAction = () => {
      Alert.alert('Salir', 'Esta seguro que quiere salir de la app', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getResource = () => {
    setdireccion(`${url}/restaurantes/${navigation.getState().index}`);
    try {
      axios(direccion).then((res => {
        setRestaurantes(res.data);
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView onTouchStart={getResource} style={{ minHeight: '90%' }}>
      <ScrollView>
        {restaurantes &&
          <RestaurantList
            username={username}
            restaurant={restaurantes}
            navigation={navigation}
          />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f00',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
