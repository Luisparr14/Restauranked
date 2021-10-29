import React from 'react';
import { View, StyleSheet } from 'react-native';
import RateButton from '../components/rateButton';
import Restaurant from '../components/Restaurant';

const RateRestaurant = ({ route, navigation }) => {
  const { id, image, name, location, stars, username } = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Restaurant
          key={id}
          id={id}
          image={image}
          name={name}
          location={location}
          stars={stars}
          username={username}
          navigation={navigation}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RateButton number="1" />
        <RateButton number="2" />
        <RateButton number="3" />
        <RateButton number="4" />
        <RateButton number="5" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  buttonContainer: {
    display: 'flex',
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default RateRestaurant;
