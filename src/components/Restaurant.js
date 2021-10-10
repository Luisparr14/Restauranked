import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const Restaurant = ({profile, name, stars, location}) => (
  <View style={styles.container}>
    <View style={{flex: 0.4, width: '100%', height: '100%'}}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://i.pinimg.com/originals/a9/93/ce/a993ce4bc3df14a1a724741542b698ee.jpg',
        }}
      />
    </View>
    <View style={{flex: 0.6}}>
      <Text>Nombre: {name}</Text>
      <Text>
        Puntuacion: {stars}
        <Image
          style={{width: 15, height: 15, alignSelf: 'flex-start'}}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/616/616489.png',
          }}
        />
      </Text>
      <Text>Ubicacion: {location}</Text>
    </View>
  </View>
);

export default Restaurant;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7,
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
