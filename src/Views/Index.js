/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import RestaurantList from '../components/RestaurantList';
import { url } from '../Configs/Config';

const Index = ({ navigation }) => {
  const [restaurantes, setRestaurantes] = useState([]);
  const [direccion, setdireccion] = useState(`${url()}/restaurantes/${navigation.getState().index}`);

  useEffect(() => {
    getResource();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getResource = () => {
    setdireccion(`${url()}/restaurantes/${navigation.getState().index}`);
    try {
      axios(direccion).then((res => {
        setRestaurantes(res.data);
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <SafeAreaView onTouchStart={getResource} style={{ minHeight: '100%' }}>
        <ScrollView>
          {restaurantes && <RestaurantList restaurant={restaurantes} />}
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
