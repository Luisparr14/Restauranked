import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';

const Button = ({ title, handlePress, width }) => {
  return (
    <View style={[styles.button, { width: width || '40%' }]}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Text>{title}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 30,
    backgroundColor: '#FFF',
    margin: 5,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
