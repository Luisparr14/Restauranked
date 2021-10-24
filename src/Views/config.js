const urls = [
  'https://restauranked-api.herokuapp.com/api',
  'http://192.168.56.1:3001/api',
  'http://192.168.122.1:3001/api',
  'http://192.168.1.13:3001/api',
  'http://192.168.122.1:3001/api',
];

const uri = async () => {
  let direccion;
  for (let i = 0; i < urls.length; i++) {
    console.log(urls.length, i);
    let e = urls[i];
    e = e.replace('/api', '');
    console.log(e);
    try {
      let res = await window.fetch(e);
      console.log(res.ok);
      if (res.ok) {
        direccion = e;
        break;
      }
    } catch (error) {
      continue;
    }
  }
  return direccion;
};
var enlace;
(() => {
  uri().then(res => {
    enlace = res;
  });
})();

export const url = () => {
  return enlace + '/api';
};
