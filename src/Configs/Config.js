/* eslint-disable prettier/prettier */
import axios from 'axios';
let url = '';

let urls = [
  'http://192.168.1.13:3101',
  'http://192.168.1.13:3001',
  'https://restauranked.herokuapp.com',
];

const getUrl = () => {
  let i = 0;
  while (i < urls.length) {
    const element = urls[i];
    axios.get(element).then(res => {
      if (url === '') {
        url = element + '/api';
      }
    // eslint-disable-next-line handle-callback-err
    }).catch(err => {
      // console.error(err);
    });
    i++;
  }
};

export { url, getUrl };


// const getUrl = () => {
//   for (let i = 0; i < urls.length; i++) {
//     console.log(url);
//     const element = urls[i];
//     axios.get(element).then(res => {
//       if (url === '') {
//         console.error(url, i);
//         url = element + '/api';
//       }
//     }).catch(err => {
//       console.log(err);
//     });
//   }
// };
