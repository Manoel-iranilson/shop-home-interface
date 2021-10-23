import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import styled from 'styled-components';
import {LinearGradient} from 'linear-gradient';

export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(View)`
  margin-bottom: -90;
  flex: 1;
  justify-content: center;
`;
export const ContainerInput = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 290;
  height: 300;
`;
export const Input = styled(TextInput)`
  background-color: white;
  width: 290;
  margin-bottom: 10;
  color: black;
  font-size: 20;
  border-radius: 10;
`;

export const BtnSubmit = styled(TouchableOpacity)`
  background-color: #000000;
  width: 290;
  height: 40;
  align-items: center;
  justify-content: center;
  border-radius: 10;
`;

export const BtnRegister = styled(TouchableOpacity)`
  background-color: #4f4f4f;
  width: 290;
  height: 40;
  align-items: center;
  justify-content: center;
  border-radius: 10;
  margin-top: 10;
`;

export const TextBtn = styled(Text)`
  font-size: 18;
  color: white;
`;
