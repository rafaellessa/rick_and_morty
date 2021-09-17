import {FlatList} from 'react-native';
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
  margin-top: ${RFPercentage(10)}px;
  flex: 1;
`;

export const ListTitle = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  margin-bottom: 14px;
`;

export const PersonList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`` as unknown as typeof FlatList;
