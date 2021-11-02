import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { primaryColor } from '../Configs/Const';

const Title = ({ subtitle }) => {
  return (
    <View style={styles.containerTitle}>
      <Text style={styles.title}>
        Restau<Text style={styles.title2}>RANKED</Text>
      </Text>
      <Text style={styles.subTitle}>{subtitle}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  containerTitle: {
    position: 'absolute',
    top: 30,
  },
  subTitle: {
    color: primaryColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  title: {
    padding: 10,
    margin: 10,
    fontSize: 40,
    color: '#000',
  },
  title2: {
    color: primaryColor,
  },
});
