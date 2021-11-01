import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View, Text, BackHandler } from 'react-native';
import axios from 'axios';
import { url, getUrl } from '../Configs/Config';
import Button from '../components/Button';
import Input from '../components/Input';
import Title from '../components/Title';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Salir', '¿Estas seguro que quiere salir de la app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const handleChangePass = e => {
    setPassword(e);
  };

  const handleChangeUser = e => {
    setUsername(e);
  };

  const handleLogin = () => {
    let header = {
      'Content-Type': 'Application/json',
    };

    let data = {
      username,
      password,
    };

    if (username === '' || password === '') {
      Alert.alert('Error!!', 'Llene todos los campos por favor', [
        { text: 'OK' },
      ]);
    } else {
      axios
        .post(`${url}/login`, data, header)
        .then(function (response) {
          if (response.data.passwordV) {
            Alert.alert('Genial!!', `${response.data.msg}`, [
              {
                text: 'OK',
                onPress: () =>
                  navigation.replace('Inicio', {
                    username,
                  }),
              },
            ]);
          } else {
            Alert.alert('Error!!', `${response.data.msg}`, [{ text: 'OK' }]);
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  return (
    <View
      onTouchStart={() => {
        getUrl();
      }}
      style={styles.container}>
      <Text>{url}</Text>
      <Title />
      <View style={styles.loginForm}>
        <Input placeholder="Usuario" onChange={handleChangeUser} />
        <Input
          pass={true}
          placeholder="Contraseña"
          onChange={handleChangePass}
        />
      </View>
      <View style={styles.buttons}>
        <Button title="Ingresar" handlePress={handleLogin} />
        <Button
          handlePress={() => navigation.navigate('Register')}
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
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
});
