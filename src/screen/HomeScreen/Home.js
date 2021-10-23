import React from 'react';
import {ScrollView, TextInput, TouchableOpacity, View} from 'react-native';
import {
  Container,
  Header,
  Inputarea,
  TextHead,
  TitleDetail,
  Detail,
  ImageHeader,
} from './style';
import New from '../../components/New';
import {useNavigation} from '@react-navigation/core';
import HomeIcon from '../../assets/Icons/home-solid.svg';
const Home = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <ImageHeader source={require('../../assets/Logo.png')} />
        <TextHead>Flamengo</TextHead>
        <View style={{left: 50}}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <HomeIcon width={40} height={40} />
          </TouchableOpacity>
        </View>
      </Header>
      <ScrollView>
        <Inputarea>
          <TextInput placeholder="-_O que está Procurando?_-" />
        </Inputarea>

        <Detail>
          <TitleDetail>Camisas</TitleDetail>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <New
              cover={require('../../assets/Camisa01.jpg')}
              name="Uniforme 01"
              descrition="Primeiro Uniforme do Flamengo"
              onPress={() => navigation.navigate('Detail')}
            />
            <New
              cover={require('../../assets/Camisa02.jpg')}
              name="Uniforme 02"
              descrition="Segundo Uniforme do Flamengo"
              onPress={() => {}}
            />
            <New
              cover={require('../../assets/Camisa03.jpg')}
              name="Uniforme 03"
              descrition="Terceiro Uniforme do Flamengo"
              onPress={() => {}}
            />
          </ScrollView>
        </Detail>
        <Detail>
          <TitleDetail>Shots</TitleDetail>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <New
              cover={require('../../assets/Shorts01.jpg')}
              name="Uniforme 01"
              descrition="Primeiro Uniforme do Flamengo"
              onPress={() => {}}
            />
            <New
              cover={require('../../assets/Shorts02.jpg')}
              name="Uniforme 02"
              descrition="Segundo Uniforme do Flamengo"
              onPress={() => {}}
            />
            <New
              cover={require('../../assets/Shorts03.jpg')}
              name="Uniforme 03"
              descrition="Terceiro Uniforme do Flamengo"
              onPress={() => {}}
            />
          </ScrollView>
        </Detail>
      </ScrollView>
    </Container>
  );
};

export default Home;
