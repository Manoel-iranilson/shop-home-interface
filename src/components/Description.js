import React from 'react';
import {Text, View} from 'react-native';

// import { Container } from './styles';

const Description = () => {
  return (
    <View style={{width: 400}}>
      <Text style={{fontSize: 17}}>
        DESIGN QUE CELEBRA O ANO DE OURO DO CLUBE{'\n'}
        Foi um ano em que o CR Flamengo dominou o futebol continental e mundial.
        Por isso, a adidas inspirou-se na camisa do clube de 1981 ao desenvolver
        a camisa oficial desta temporada. Criada para manter os torcedores
        confortáveis, ela tem tecnologia AEROREADY que afasta o suor. As cavas
        largas, o escudo extragrande e a inscrição "Ano de Ouro" marcam o 40°
        aniversário daquele{'\n'} ano dourado.
      </Text>
    </View>
  );
};

export default Description;
