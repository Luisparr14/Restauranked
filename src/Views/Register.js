import React, {Component} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import Title from '../components/Title';
import axios from 'axios';

import url from './config';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: '',
        name: '',
        password: '',
      },
    };
  }

  componentDidUpdate() {
    console.log(this.state.form);
  }

  render() {
    const {navigation} = this.props;

    const handleChangeUsername = e => {
      this.setState({
        form: {
          ...this.state.form,
          username: e,
        },
      });
    };

    const handleChangeName = e => {
      this.setState({
        form: {
          ...this.state.form,
          name: e,
        },
      });
    };
    const handleChangePass = e => {
      this.setState({
        form: {
          ...this.state.form,
          password: e,
        },
      });
    };

    const handleSubmit = () => {
      axios
        .post(`${url}/user`, this.state.form)
        .then(function (response) {
          Alert.alert(
            'Genial!!',
            `${response.data.user.name} su registro fue exitoso`,
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => navigation.replace('Inicio')},
            ],
          );
        })
        .catch(function (error) {
          console.log(error);
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
