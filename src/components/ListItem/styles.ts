import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(70)}px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const InfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageItem = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
`;

export const Title = styled.Text`
  margin-left: 10px;
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.primary}; ;
`;

export const LikeIconWrapper = styled.TouchableOpacity``;
