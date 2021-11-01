import axios from 'axios';
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button } from '../components/Buttons';
import RateButton from '../components/rateButton';
import Restaurant from '../components/Restaurant';
import { url } from '../Configs/Config';

const RateRestaurant = ({ route, navigation }) => {
  const { id, image, name, location, stars, username } = route.params;
  const [activeButton1, setActiveButton1] = React.useState(false);
  const [activeButton2, setActiveButton2] = React.useState(false);
  const [activeButton3, setActiveButton3] = React.useState(false);
  const [activeButton4, setActiveButton4] = React.useState(false);
  const [activeButton5, setActiveButton5] = React.useState(false);
  const [rate, setRate] = useState(0);

  const ActiveButton1 = () => {
    setActiveButton1(true);
    setActiveButton2(false);
    setActiveButton3(false);
    setActiveButton4(false);
    setActiveButton5(false);
    setRate(1);
  };

  const ActiveButton2 = () => {
    setActiveButton1(false);
    setActiveButton2(true);
    setActiveButton3(false);
    setActiveButton4(false);
    setActiveButton5(false);
    setRate(2);
  };

  const ActiveButton3 = () => {
    setActiveButton1(false);
    setActiveButton2(false);
    setActiveButton3(true);
    setActiveButton4(false);
    setActiveButton5(false);
    setRate(3);
  };

  const ActiveButton4 = () => {
    setActiveButton1(false);
    setActiveButton2(false);
    setActiveButton3(false);
    setActiveButton4(true);
    setActiveButton5(false);
    setRate(4);
  };

  const ActiveButton5 = () => {
    setActiveButton1(false);
    setActiveButton2(false);
    setActiveButton3(false);
    setActiveButton4(false);
    setActiveButton5(true);
    setRate(5);
  };

  const handleSubmit = () => {
    if (rate === 0) {
      Alert.alert('Por favor selecciona una puntuacion');
    } else {
      const data = {
        username,
        restaurant: id,
        rate,
      };
      axios
        .post(`${url}/calificar`, data)
        .then(calificar => {
          if (calificar.status === 200) {
            Alert.alert('Exito', 'Tu calificacion se ha completado con exito', [
              {
                text: 'OK',
                onPress: () => navigation.replace('Inicio', { username }),
              },
            ]);
          } else {
            Alert.alert('Error', 'Ah ocurrido un error');
          }
        })
        .catch(err => {
          console.error(err);
          Alert.alert('Error', 'Ah ocurrido un error');
        });
    }
  };

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
      <View>
        <View style={styles.buttonContainer}>
          <RateButton
            handlePress={ActiveButton1}
            number="1"
            active={activeButton1}
          />
          <RateButton
            handlePress={ActiveButton2}
            number="2"
            active={activeButton2}
          />
          <RateButton
            handlePress={ActiveButton3}
            number="3"
            active={activeButton3}
          />
          <RateButton
            handlePress={ActiveButton4}
            number="4"
            active={activeButton4}
          />
          <RateButton
            handlePress={ActiveButton5}
            number="5"
            active={activeButton5}
          />
        </View>
        <Button
          title="Enviar calificación"
          background="#4565a3"
          width="80%"
          height={45}
          handlePress={handleSubmit}
        />
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
