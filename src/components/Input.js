import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({ placeholder, onChange, value, pass }) => {
  return (
    <TextInput
      style={styles.inputs}
      placeholder={placeholder}
      placeholderTextColor="#000"
      onChangeText={onChange}
      value={value}
      secureTextEntry={pass || false}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  inputs: {
    alignSelf: 'center',
    width: '70%',
    borderRadius: 2,
    backgroundColor: '#fff',
    margin: '2%',
    paddingLeft: 5,
    color: '#000',
  },
});
