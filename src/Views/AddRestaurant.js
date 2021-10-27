import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import { launchImageLibrary } from 'react-native-image-picker';
// import { url } from '../configs/Config';
import { app } from '../Configs/firebase';
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from 'firebase/storage';

const storage = getStorage(app);

const AddRestaurant = ({ navigation }) => {
  const [imageRestaurantUrl, setImageRestaurantUrl] = useState();
  const [archivo, setArchivo] = useState([]);
  const [seleccionado, setSeleccionado] = useState(false);
  const [loading, setLoading] = useState(false);

  async function uploadImage() {
    if (seleccionado) {
      try {
        setLoading(true);
        const refFile = ref(storage, `restaurantes/${archivo.fileName}`);
        console.log(archivo);
        const blob = await (await fetch(archivo.uri)).blob(); //Obtener blob de la imagen
        await uploadBytesResumable(refFile, blob); //Subir imagen
        const urlFile = await getDownloadURL(refFile); //Obtener url de la imagen
        console.log(urlFile);
        setLoading(false); //Cambiar estado de loading
        setImageRestaurantUrl(urlFile); //Cambiar estado de url de la imagen
        setSeleccionado(false); //Cambiar estado de seleccionado
        setArchivo([]); //Cambiar estado de archivo
        Alert.alert('Imagen subida');
      } catch (error) {
        console.error(error);
        setLoading(false); //Cambiar estado de loading
        setSeleccionado(false); //Cambiar estado de seleccionado
      }
    } else {
      Alert.alert('No se ha seleccionado ninguna imagen');
    }
  }

  const selectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, res => {
      setArchivo(res.assets[0]);
      setSeleccionado(true);
      console.log(seleccionado);
    });
  };

  return (
    <View style={styles.container}>
      {seleccionado && (
        <Image style={styles.image} source={{ uri: archivo.uri }} />
      )}
      <View>
        <Input placeholder="Restaurant Name" />
        <Input placeholder="Ubicacion" />
      </View>
      {loading && <Text>Upload image...</Text>}
      <View>
        <Button title="Select Image" handlePress={selectImage} />
        <Button title="Agregar restaurante" handlePress={uploadImage} />
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
