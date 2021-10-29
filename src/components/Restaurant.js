/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from './Button';
import { url } from '../Configs/Config';
const Restaurant = ({
  id,
  image,
  name,
  stars,
  location,
  username,
  navigation,
}) => {
  const [showRate, setShowRate] = React.useState(false);
  const [inRate, setInRate] = React.useState(false);
  async function getRate() {
    await axios
      .get(`${url()}/calificaciones/${id}/${username}`)
      .then(res => {
        const { routeNames } = navigation.getState();
        let a = routeNames.includes('Raterestaurant');
        if (a) {
          setShowRate(false);
          setInRate(true);
        } else {
          setShowRate(res.data.show);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  getRate();

  return (
    <View
      style={[
        styles.container,
        { maxHeight: !showRate && inRate ? 210 : 150 },
      ]}>
      <View
        style={[
          styles.containerImage,
          { flex: !showRate && inRate ? 0.5 : 0.5 },
        ]}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>
      <View
        style={[
          styles.containerInfo,
          { flex: !showRate && inRate ? 0.5 : 0.5 },
        ]}>
        <Text style={styles.text}>Nombre: {name}</Text>
        <Text style={styles.text}>
          Puntuacion: {stars}
          <Image
            style={{
              width: 15,
              height: 15,
              alignSelf: 'flex-start',
              padding: 5,
            }}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/616/616489.png',
            }}
          />
        </Text>
        <Text style={styles.text}>Ubicacion: {location}</Text>
        {showRate && (
          <Button
            title="Calificar"
            width="90%"
            handlePress={() =>
              navigation.navigate('Raterestaurant', {
                username,
                id,
                image,
                name,
                stars,
                location,
              })
            }
          />
        )}
      </View>
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#d22',
    margin: 7,
    padding: 8,
    borderRadius: 10,
  },
  containerImage: {
    width: '100%',
    height: '100%',
  },
  containerInfo: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: '100%',
    fontSize: 17,
    padding: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
