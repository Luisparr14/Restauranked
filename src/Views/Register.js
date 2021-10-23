import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import Title from '../components/Title';
import axios from 'axios';

import url from './config';

export const Register = ({ navigation }) => {

  const [username, setUsername] = useState(null)
  const [name, setName] = useState(null)
  const [password, setPassword] = useState(null)


  const handleChangeUsername = e => {
    setUsername(e)
  };

  const handleChangeName = e => {
    setName(e)
  };
  const handleChangePass = e => {
    setPassword(e)
  };

  const handleSubmit = () => {

    let header = {
      "Content-Type": "Application/json"
    }

    let data = {
      username,
      name,
      password
    }

    axios
      .post(`${url}/register`, data, header)
      .then(function (response) {
        if (response.data.ok) {
          Alert.alert(
            'Genial!!',
            `${response.data.user.name} su registro fue exitoso`,
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'OK', onPress: () => navigation.replace('Login') },
            ],
          );
        } else {
          Alert.alert(
            'Error',
            `${response.data.msg}`,
            [
              { text: 'Intentar de nuevo' },
            ],
          );
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.loginForm}>
        <Input
          onChange={handleChangeUsername}
          placeholder="Nombre de usuario"
        />
        <Input onChange={handleChangeName} placeholder="Nombre" />
        <Input
          pass={true}
          onChange={handleChangePass}
          placeholder="Contraseña"
        />
      </View>
      <View style={styles.buttons}>
        <Button handlePress={handleSubmit} title="Registrarse" />
      </View>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
  },
  title2: {
    color: '#fff',
  },
  loginForm: {
    width: '100%',
  },
  buttoncontainer: {
    top: '30%',
    backgroundColor: '#FFF',
    margin: '2%',
    width: '30%',
    height: '100%',
    borderRadius: 10,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
});
