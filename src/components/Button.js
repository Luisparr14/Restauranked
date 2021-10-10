import React, {Component} from 'react';
import {StyleSheet, TouchableWithoutFeedback, Text, View} from 'react-native';

class Button extends Component {
  render() {
    return (
      <View style={styles.button}>
        <TouchableWithoutFeedback onPress={this.props.handlePress}>
          <Text>{this.props.title}</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Button;

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 30,
    backgroundColor: '#FFF',
    margin: '2%',
    borderRadius: 6,
    width: '35%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
