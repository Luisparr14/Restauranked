import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { borderRadius, disabledColor, successColor } from '../Configs/Const';

const RateButton = ({ number, background, active, handlePress }) => {
  let textColor;
  if (active) {
    background = successColor;
    textColor = '#000';
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, { backgroundColor: background || disabledColor }]}
      onPress={handlePress}>
      <Text style={[styles.text, { color: textColor || '#aaa' }]}>
        {number}
      </Text>
    </TouchableOpacity>
  );
};

export default RateButton;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: borderRadius,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
  },
});
