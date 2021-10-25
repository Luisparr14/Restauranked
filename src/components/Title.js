import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title = () => {
  return (
    <Text style={styles.title}>
      Restau<Text style={styles.title2}>RANKED</Text>
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#345',
    padding: 10,
    margin: 10,
    fontSize: 40,
    color: '#000',
  },
  title2: {
    color: '#fff',
  },
});
