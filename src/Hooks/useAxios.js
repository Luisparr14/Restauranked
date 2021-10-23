/* eslint-disable prettier/prettier */
import axios from 'axios';
import { useEffect, useState } from 'react';
import url from '../Views/config';

const useAxios = (index) => {
  const [restaurantes, setRestaurantes] = useState(null);
  const endPoint = `${url}/restaurantes`;
  useEffect(() => {
    const getResource = async (endpoint) => {
      try {
        const data = await axios(
          `${endpoint}/${index}`
        );
        setRestaurantes(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getResource(endPoint);
  }, [endPoint, index]);

  return restaurantes;
};

export default useAxios;
