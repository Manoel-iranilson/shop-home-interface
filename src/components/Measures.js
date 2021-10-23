import React from 'react';
import {Text, View} from 'react-native';

// import { Container } from './styles';

const Measuares = () => {
  return (
    <View style={{width: 400}}>
      <Text style={{fontSize: 17}}>
        Medidas Aproximadas (Comprimento x Largura) {'\n'}P – 70,5 cm x 47,5 cm{' '}
        {'\n'}M – 73 cm x 51 cm{'\n'} G – 75 cm x 55,5 cm {'\n'}GG – 77,5 cm x
        61,5 cm{'\n'} 2GG – 79,5 cm x 66 cm{'\n'} 3GG – 83 cm x 71,5 cm
      </Text>
    </View>
  );
};

export default Measuares;
