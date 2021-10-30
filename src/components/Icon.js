import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';

const Icon = ({ icon }) => {
  return (
    <Text style={styles.imageText}>
      <Text> </Text>
      <Image style={styles.icon} source={icon} />
      <Text> </Text>
    </Text>
  );
};
export default Icon;

const styles = StyleSheet.create({
  imageText: {
    margin: 5,
  },
  icon: {
    width: 15,
    height: 15,
  },
});
