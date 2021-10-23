import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Stars from 'react-native-stars';

export const Container = styled(View)`
  background-color: white;
  flex: 1;
`;
export const Header = styled(View)`
  background-color: white;
  border-radius: 5px;
  border-color: #eee;
  border-bottom-width: 5px;
  border-right-width: 2px;
  border-left-width: 2px;
  margin-right: -5;
  padding-top: 16px;
  padding-bottom: 16px;
  flex-direction: row;
  justify-content: space-around;
`;

export const TextHead = styled(Text)`
  font-size: 30;
  color: red;
`;
export const Slade = styled(View)`
  flex-direction: row;
  height: 450;
  align-items: center;
  justify-content: center;
`;

export const Titledetais = styled(Text)`
  font-size: 22;
`;
export const Price = styled(Text)`
  width: 60%;
  font-size: 21;
  color: red;
  padding-top: 10;
`;

export const MyStarStyles = styled(Stars)`
  color: #e7a74e;
  background-color: 'transparent';
`;

export const Description = styled(Text)`
  font-size: 20;
  color: gray;
`;

export const BtnDetail = styled(TouchableOpacity)`
  background-color: red;
  border-radius: 10;
`;
export const TextBtn = styled(Text)`
  font-size: 20;
  color: black;
`;
