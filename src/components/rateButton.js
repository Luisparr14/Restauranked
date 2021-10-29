import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const RateButton = ({ number, background, active }) => {
  if (active) {
    background = '#43bb91';
  }
  return (
    <View style={[styles.button, { backgroundColor: background || '#433432' }]}>
      <TouchableOpacity>
        <Text style={styles.text}>{number}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RateButton;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    textAlignVertical: 'center',
    height: '100%',
  },
});
