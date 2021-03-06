import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.secondary};
  height: ${RFValue(245)}px;
  width: 100%;
`;

export const ContentWrapper = styled.View`
  margin-top: ${getStatusBarHeight() + RFValue(16)}px;
  padding: 10px 24px;
  flex-direction: row;
  align-items: center;
`;

export const UserWrapper = styled.View`
  margin-left: 10px;
`;

export const UserName = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const UserGreeting = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;
