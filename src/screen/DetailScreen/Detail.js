import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import SwiperComponents from '../../components/SwiperComponents';
import Stars from 'react-native-stars';
import Ionicons from 'react-native-vector-icons';
import Description from '../../components/Description';
import Infor from '../../components/Infor';
import Measuares from '../../components/Measures';
import BackIcon from '../../assets/Icons/chevron-circle-left-solid.svg';
import {
  Container,
  Header,
  TextHead,
  Slade,
  Price,
  Titledetais,
  MyStarStyles,
  BtnDetail,
  TextBtn,
} from './styleDetail';

const Detail = () => {
  const navigation = useNavigation();
  const [test, setTest] = useState(1);

  function nextDescri() {
    switch (true) {
      case test === 2:
        setTest(() => 1);
        break;
      case test === 3:
        setTest(() => 1);
        break;
      default:
    }
  }
  function nextInfor() {
    switch (true) {
      case test === 1:
        setTest(() => 2);
        break;
      case test === 3:
        setTest(() => 2);
        break;
      default:
    }
  }
  function nextMeasu() {
    switch (true) {
      case test === 1:
        setTest(() => 3);
        break;
      case test === 2:
        setTest(() => 3);
        break;
      default:
    }
  }

  function renderTest() {
    switch (true) {
      case test === 1:
        return <Description />;
      case test === 2:
        return <Infor />;
      case test === 3:
        return <Measuares />;
    }
  }

  return (
    <Container>
      <ScrollView>
        <Header>
          <TextHead>Detalhes </TextHead>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {/* <TextHead style={{paddingRight: -50}}>X</TextHead> */}
            <BackIcon width={40} height={40} />
          </TouchableOpacity>
        </Header>
        <Slade>
          <SwiperComponents></SwiperComponents>
        </Slade>
        <View style={{left: 10}}>
          <Titledetais>Camisa Flamengo Jogo 1 Adidas 2021</Titledetais>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            paddingTop: 10,
            marginLeft: 10,
          }}>
          <Price>R$ 350,00</Price>
          <View style={{right: 40}}>
            <Text>Avalições</Text>
            <Stars
              style={MyStarStyles}
              default={0}
              count={5}
              half={true}
              starSize={30}
              // fullStar={<Ionicons name="md-star" size={24} style={MyStarStyles} />}
              // emptyStar={
              //   <Ionicons name="md-star-outline" size={24} style={MyStarStyles} />
              // }
              // halfStar={
              //   <Ionicons name="md-star-half" size={24} style={MyStarStyles} />
              // }
            />
          </View>
        </View>
        <ScrollView>
          <View style={{paddingTop: 50, marginLeft: 10, marginRight: 10}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <BtnDetail onPress={() => nextDescri()}>
                <TextBtn>Descrição</TextBtn>
              </BtnDetail>
              <BtnDetail onPress={() => nextInfor()}>
                <TextBtn>Informações do Produto</TextBtn>
              </BtnDetail>
              <BtnDetail onPress={() => nextMeasu()}>
                <TextBtn>Medidas</TextBtn>
              </BtnDetail>
            </View>
          </View>
          <View style={{marginLeft: 10, marginRight: 10}}>
            <Text>{renderTest()}</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </Container>
  );
};

export default Detail;
