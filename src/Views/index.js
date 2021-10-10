import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import axios from 'axios';
import url from './config';
import RestaurantList from '../components/RestaurantList';

const Index = () => {
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/restaurantes`)
      .then(function (response) {
        console.log(response.data);
        setRestaurantes(response.data);
        console.log('restaurantes', restaurantes);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <RestaurantList restaurant={restaurantes} />
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
