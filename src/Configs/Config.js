/* eslint-disable prettier/prettier */
import axios from 'axios';

let urls = [
  'https://restauranked-api.herokuapp.com/api',
  'http://192.168.56.1:3001/api',
  'http://192.168.122.1:3001/api',
  'http://192.168.1.13:3001/api',
  'http://192.168.122.1:3001/api',
];

var ruta = '';

export const url = () => {
  for (let i = 0; i < urls.length; i++) {
    const requestUrl = urls[i].replace('/api', '');
    axios(requestUrl)
      .then(res => {
        if (res !== undefined) {
          ruta = res.request.responseURL;
        }
      })
      .catch(() => { });
    }
  return ruta + 'api';
};


