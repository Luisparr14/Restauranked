import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import Title from '../components/Title';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.loginForm}>
        <Input placeholder="Usuario" />
        <Input pass={true} placeholder="Contraseña" />
      </View>
      <View style={styles.buttons}>
        <Button title="Ingresar" />
        <Button
          handlePress={() => navigation.replace('Register')}
          title="Registrarse"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginForm: {
    width: '100%',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
});
