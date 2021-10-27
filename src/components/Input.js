import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({ placeholder, onChange, value, pass }) => {
  return (
    <TextInput
      style={styles.inputs}
      placeholder={placeholder}
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
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: '2%',
    paddingLeft: 5,
  },
});
