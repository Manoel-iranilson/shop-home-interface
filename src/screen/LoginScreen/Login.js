import React from 'react';
import {Image, TextInput} from 'react-native';
import {
  Container,
  ContainerInput,
  Logo,
  Input,
  BtnSubmit,
  BtnRegister,
  TextBtn,
} from './loginStyle';
import {useNavigation} from '@react-navigation/core';
import {signin} from '../../services/auth';
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  const navigation = useNavigation();

  async function handleSignin() {
    const response = await signin();

    alert('Você Fez o Loggin');
    console.log(response);
    navigation.navigate('Home');
  }
  return (
    <LinearGradient
      colors={['#000000', '#cc3333', '#880000']}
      style={{flex: 1}}>
      <Container>
        <Logo>
          <Image source={require('../../assets/Logo.png')} />
        </Logo>
        <ContainerInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            onChangeText={() => {}}
          />
          <Input
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={() => {}}
            segureTextEntry={true}
          />
          <BtnSubmit onPress={handleSignin}>
            <TextBtn>Entrar</TextBtn>
          </BtnSubmit>
          <BtnRegister>
            <TextBtn>Criar conta</TextBtn>
          </BtnRegister>
        </ContainerInput>
      </Container>
    </LinearGradient>
  );
};

export default Login;
