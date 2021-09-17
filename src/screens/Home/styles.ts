import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const HighlightCardsWrapper = styled.View`
  position: absolute;
  margin-top: ${RFPercentage(29)}px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const ContentWrapper = styled.View`
  padding: 0 24px;
`;

export const ListTitle = styled.Text`
  margin-top: ${RFPercentage(10)}px;
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
`;
