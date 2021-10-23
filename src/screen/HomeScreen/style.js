import {View, Text, Image} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  background-color: white;
  flex: 1;
`;

export const Inputarea = styled(View)`
  flex: 1;
  background-color: #fff;
  border-color: #eee;
  border-bottom-width: 2px;
  border-right-width: 2px;
  border-left-width: 2px;
  border-top-width: 2px;
  margin-top: 10px;
  margin-left: 20;
  margin-right: 20;
  border-radius: 90;
`;

export const Header = styled(View)`
  background-color: white;
  border-radius: 5px;
  border-color: #eee;
  border-left-color: #000;
  border-bottom-width: 5px;
  border-right-width: 2px;
  border-left-width: 2px;
  margin-right: -5;
  padding-top: 16px;
  padding-bottom: 16px;
  flex-direction: row;
`;

export const TextHead = styled(Text)`
  font-size: 30;
  color: red;
  align-content: center;
  left: 10;
`;

export const Detail = styled(View)`
  right: 30;
  width: 400;
  margin-left: 30px;
  margin-top: 15px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: white;
`;

export const TitleDetail = styled(Text)`
  font-size: 30;
  left: 25;
`;

export const ImageHeader = styled(Image)`
  height: 100;
  width: 120;
  margin-top: -20;
  margin-bottom: -25;
`;
