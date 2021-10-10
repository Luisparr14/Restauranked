import React, {Component} from 'react';
import {StyleSheet, TextInput} from 'react-native';

class Input extends Component {
  render() {
    return (
      <TextInput
        style={styles.inputs}
        placeholder={this.props.placeholder}
        onChangeText={this.props.onChange}
        value={this.props.value}
        secureTextEntry={this.props.pass || false}
      />
    );
  }
}

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
