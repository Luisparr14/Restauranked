/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from './Button';

const Restaurant = ({ image, name, stars, location, username }) => {
  if (image === null) {
    image = 'https://cdn-icons.flaticon.com/png/512/2182/premium/2182242.png';
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.containerInfo}>
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
        <Text style={{ fontSize: 3 }}>{username}</Text>
        <Button title="Calificar" width="90%" />
      </View>
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  container: {
    maxHeight: 150,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#d22',
    margin: 7,
    padding: 8,
    borderRadius: 10,
  },
  containerImage: {
    flex: 0.4,
    width: '100%',
    height: '100%',
  },
  containerInfo: {
    flex: 0.6,
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
