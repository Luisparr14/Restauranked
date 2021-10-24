/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const Restaurant = ({image, name, stars, location}) => (
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
    </View>
  </View>
);

export default Restaurant;

const styles = StyleSheet.create({
  container: {
    height: 140,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#d22',
    margin: 7,
    padding: 5,
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
