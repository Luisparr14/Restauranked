/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import ProgressBar from 'react-native-progress/Bar';
import { launchImageLibrary } from 'react-native-image-picker';
import { url } from '../Configs/Config';
import { app } from '../Configs/firebase';
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from 'firebase/storage';

const storage = getStorage(app);

const AddRestaurant = ({ navigation, route }) => {
  const { username } = route.params;
  const [restaurantName, setRestaurantName] = useState('');
  const [location, setLocation] = useState('');

  const [file, setFile] = useState([]);
  const [imageSelected, setimageSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const handleChangeRestaurantName = e => {
    setRestaurantName(e);
  };

  const handleChangeLocation = e => {
    setLocation(e);
  };

  const uploadImage = async () => {
    let urlImage = '';
    try {
      const refFile = ref(
        storage,
        `restaurantes/${restaurantName} - ${location}`,
      );
      const blob = await (await fetch(file.uri)).blob(); //get blob from uri
      const uploadTask = uploadBytesResumable(refFile, blob);
      uploadTask.on(
        'state_changed',
        snapshot => {
          const actualProgress =
            snapshot.bytesTransferred / snapshot.totalBytes.toFixed(2);
          setProgress(actualProgress);
        },
        error => {
          console.error('error', error);
        },
      );
      await uploadTask;
      await getDownloadURL(refFile).then(res => {
        urlImage = res;
      }); //get url from blob
      return urlImage;
    } catch (error) {
      Alert.alert('Error al subir imagen'); //show alert if error
      setimageSelected(false); //change state imageSelected
      return error;
    }
  };

  const handleSubmit = async () => {
    if (restaurantName === '' || location === '') {
      Alert.alert('Todos los campos son obligatorios');
    } else {
      if (!imageSelected) {
        Alert.alert('Seleccione una imagen');
      } else {
        try {
          setProgress(0);
          setLoading(true);
          const response = await axios.post(`${url}/restaurantes`, {
            name: restaurantName,
            location,
            image: '',
          });
          if (response.data.ok) {
            let urlImage = await uploadImage();
            await axios
              .put(`${url}/restaurantes/${response.data.data.id}`, {
                name: restaurantName,
                location,
                image: urlImage,
              })
              .then(res => {
                if (res.data.ok) {
                  Alert.alert('Exito', 'Restaurante agregado correctamente', [
                    {
                      text: 'OK',
                      onPress: () => navigation.replace('Inicio', { username }),
                    },
                  ]);
                }
              })
              .catch(err => {
                Alert.alert('Error', err);
              });

            setRestaurantName('');
            setLocation('');
            setimageSelected(false); //change state imageSelected
            setFile([]); //change state file
            setLoading(false);
          } else {
            setLoading(false);
            setimageSelected(false); //change state imageSelected
            Alert.alert('Error al agregar el restaurante');
          }
        } catch (error) {
          setLoading(false);
          setimageSelected(false); //change state imageSelected
          console.error(error);
          Alert.alert('Error al agregar el restaurante');
        }
      }
    }
  };

  const selectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, res => {
      if (res.didCancel) {
        Alert.alert('Has cancelado la selección de imagen');
      } else {
        setFile(res.assets[0]);
        setimageSelected(true);
      }
    });
  };

  return (
    <View style={styles.container}>
      {imageSelected && (
        <Image style={styles.image} source={{ uri: file.uri }} />
      )}
      <View>
        <Input
          onChange={handleChangeRestaurantName}
          placeholder="Restaurant Name"
          value={restaurantName}
        />
        <Input
          value={location}
          onChange={handleChangeLocation}
          placeholder="Ubicacion"
        />
      </View>
      {loading && (
        <View style={styles.progress}>
          <View>
            <ProgressBar progress={progress} width={150} />
          </View>
          <View>
            <Text style={{ marginLeft: 10 }}>
              {(progress * 100).toFixed(2)}%
            </Text>
          </View>
        </View>
      )}
      <View>
        <Button title="Select Image" handlePress={selectImage} />
        <Button title="Agregar restaurante" handlePress={handleSubmit} />
      </View>
    </View>
  );
};

export default AddRestaurant;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#443',
  },

  progress: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '90%',
    height: '40%',
    maxHeight: '50%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
