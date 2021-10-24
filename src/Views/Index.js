/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import RestaurantList from '../components/RestaurantList';
import {url} from './config';

const Index = ({ navigation }) => {
  const [restaurantes, setRestaurantes] = useState(null);

  React.useEffect(() => {
    let index = navigation.getState().index;
    navigation.addListener('focus', () => {
      getResource(index);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const getResource = async (index) => {
    try {
      const data = await axios(
        `${url()}/restaurantes/${index}`
      );
      setRestaurantes(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ minHeight: 600 }}>
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
