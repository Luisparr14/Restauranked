import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';

const Button = ({ title, handlePress, width, height, background }) => {
  return (
    <View
      style={[
        styles.button,
        {
          width: width || '40%',
          height: height || 30,
          backgroundColor: background || '#FFF',
        },
      ]}>
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
    margin: 5,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
