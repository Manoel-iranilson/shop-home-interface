import React from 'react';
import {Text, View} from 'react-native';

// import { Container } from './styles';

const Infor = () => {
  return (
    <View style={{width: 400}}>
      <Text style={{fontSize: 17}}>
        Nome: Camisa Flamengo Jogo 1 Adidas 2021 {'\n'}Marca: Adidas {'\n'}{' '}
        Gênero: Masculino{'\n'} Composição: Poliéster{'\n'} Garantia: Contra
        defeito de fabricação{'\n'}
        Modelagem padrão {'\n'}Gola V canelada{'\n'} Mock eyelet 100% poliéster
        reciclado{'\n'} Tecido antissuor Punhos canelados{'\n'} Escudo do C R
        Flamengo bordado{'\n'} "Ano de Ouro" abaixo da gola traseira ilhós
      </Text>
    </View>
  );
};

export default Infor;
