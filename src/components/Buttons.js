/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const Button = ({ title, handlePress, width, height, background, disable }) => {
  return (
    <TouchableOpacity
      disabled={disable}
      activeOpacity={0.7}
      style={[
        styles.button,
        {
          width: width || '40%',
          height: height || 30,
          backgroundColor: disable ? '#666' : background || '#FFF',
        },
      ]}
      onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const ImageButton = ({ image, handlePress, width, height }) => {
  return (
    <TouchableWithoutFeedback activeOpacity={0.7} onPress={handlePress}>
      <Image
        source={image}
        style={[
          styles.buttonImage,
          {
            width: width || 30,
            height: height || 30,
          },
        ]}
      />
    </TouchableWithoutFeedback>
  );
};

export { Button, ImageButton };

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    margin: 5,
    borderRadius: 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    justifyContent: 'center',
    marginRight: 7,
  },
  text: {
    textAlign: 'center',
    color: '#000',
    textAlignVertical: 'center',
    height: '100%',
  },
});
