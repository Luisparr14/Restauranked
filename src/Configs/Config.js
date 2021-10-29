/* eslint-disable prettier/prettier */
import axios from 'axios';

let urls = [
  'https://restauranked.herokuapp.com',
  'http://192.168.56.1:3001',
  'http://192.168.122.1:3001',
  'http://192.168.1.13:3001',
  'http://192.168.122.1:3001',
];

var ruta = '';

export const url = () => {
  for (let i = 0; i < urls.length; i++) {
    const requestUrl = urls[i];
    axios(requestUrl)
      .then(res => {
        if (res !== undefined) {
          ruta = res.request.responseURL;
        }
      })
      .catch(() => {
        console.log('error');
       });
  }
  return ruta + 'api';
};


