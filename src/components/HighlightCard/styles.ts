import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: ${RFValue(90)}px;
  height: ${RFValue(98)}px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.white};
  margin-left: 10px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-family: ${({theme}) => theme.fonts.regular};
`;
