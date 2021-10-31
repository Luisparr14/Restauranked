import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const RateButton = ({ number, background, active, handlePress }) => {
  if (active) {
    background = '#43bb91';
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, { backgroundColor: background || '#433391' }]}
      onPress={handlePress}>
      <Text style={styles.text}>{number}</Text>
    </TouchableOpacity>
  );
};

export default RateButton;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 2,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    textAlignVertical: 'center',
    height: '100%',
  },
});
