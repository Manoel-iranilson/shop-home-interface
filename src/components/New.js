import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Container} from '../screen/HomeScreen/style';
import {Shirts, Tou, TexCamisa} from './styleNew';

const New = props => {
  return (
    <Tou onPress={props.onPress}>
      <Image source={props.cover} style={style.cover} />
      <View>
        <TexCamisa>{props.name} </TexCamisa>
      </View>
      <View>
        <Text>{props.descrition}</Text>
      </View>

      <View style={{left: 2}}>
        <Text style={style.price}>R$350</Text>
      </View>
    </Tou>
  );
};

const style = StyleSheet.create({
  cover: {
    width: 170,
    borderRadius: 40,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  price: {
    fontSize: 20,
    color: '#cc3345',
  },
});

export default New;
