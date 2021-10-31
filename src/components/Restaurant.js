/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from './Button';
import { url } from '../Configs/Config';
import Icon from './Icon';
//ICONS
import Name from '../assets/icons/Name.png';
import Star from '../assets/icons/Star.png';
import Location from '../assets/icons/Location.png';

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
        {/* //Name */}
        <Text style={styles.text}>
          <Icon icon={Name} />
          {name}
        </Text>
        {/* //Rate */}
        <Text style={styles.text}>
          <Icon icon={Star} />
          {stars}
        </Text>
        {/* //Location */}
        <Text style={styles.text}>
          <Icon icon={Location} />
          {location}
        </Text>
        {/* //RateButton */}
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
    borderRadius: 2,
  },
  containerImage: {
    width: '100%',
    height: '100%',
  },
  containerInfo: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    width: '100%',
    fontSize: 13,
    paddingLeft: 5,
    color: '#000',
    textAlignVertical: 'center',
    textTransform: 'uppercase',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
