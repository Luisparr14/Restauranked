import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import { launchImageLibrary } from 'react-native-image-picker';
import { url } from '../Configs/Config';
import { app } from '../Configs/firebase';
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';

const storage = getStorage(app);

const AddRestaurant = ({ navigation }) => {
  const [restaurantName, setRestaurantName] = useState('');
  const [location, setLocation] = useState('');

  const [file, setFile] = useState([]);
  const [imageSelected, setimageSelected] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangeRestaurantName = e => {
    setRestaurantName(e);
  };

  const handleChangeLocation = e => {
    setLocation(e);
  };

  const uploadImage = async () => {
    let urlImage = '';
    try {
      const refFile = ref(storage, `restaurantes/${file.fileName}`);
      const blob = await (await fetch(file.uri)).blob(); //get blob from uri
      await uploadBytes(refFile, blob); //upload blob
      await getDownloadURL(refFile).then(res => {
        urlImage = res;
      }); //get url from blob
      Alert.alert('Imagen subida');
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
          setLoading(true);
          const response = await axios.post(`${url()}/restaurantes`, {
            name: restaurantName,
            location,
            image: '',
          });
          if (response.data.ok) {
            let urlImage = await uploadImage();
            await axios.put(`${url()}/restaurantes/${response.data.data.id}`, {
              name: restaurantName,
              location,
              image: urlImage,
            });
            Alert.alert('Restaurante agregado');
            setTimeout(() => {
              navigation.navigate('Todos');
            }, 1000);

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
        console.log(res);
        setFile(res.assets[0]);
        setimageSelected(true);
      }
      console.log(imageSelected, file);
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
      {loading && <Text>Upload image...</Text>}
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

  image: {
    width: '90%',
    height: '40%',
    maxHeight: '50%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});