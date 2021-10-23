import React from 'react';
import {Image, Switch, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {Slade} from '../screen/DetailScreen/styleDetail';
// import { Container } from './styles';

const SwiperComponents = () => {
  return (
    <Swiper
      dotStyle={{
        backgroundColor: '#000',
        borderColor: '#000',
        borderWidth: 1,
        width: 10,
        height: 10,
        borderColor: 10,
      }}
      activeDotColor="#fff"
      activeDotStyle={{
        borderColor: '#FFF',
        borderWidth: 1,
        width: 10,
        height: 10,
        borderColor: 10,
      }}>
      <Slade>
        <Image source={require('../assets/tetse/Frente.jpg')} />
      </Slade>
      <Slade>
        <Image source={require('../assets/tetse/Costa.jpg')} />
      </Slade>
      <Slade>
        <Image source={require('../assets/tetse/Patrocinio.jpg')} />
      </Slade>
      <Slade>
        <Image source={require('../assets/tetse/Escudo.jpg')} />
      </Slade>
    </Swiper>
  );
};

export default SwiperComponents;
