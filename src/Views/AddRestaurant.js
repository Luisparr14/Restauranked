/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import RestaurantList from '../components/RestaurantList';
import { url } from './Config';

const AddRestaurant = ({ navigation }) => {

  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {

  }, []);

  return (
      <SafeAreaView onTouchStart="" style={{ minHeight: '100%', backgroundColor:'#443' }}>
          <Text>Hola</Text>
      </SafeAreaView>
  );
};

export default AddRestaurant;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f00',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
