import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`` as unknown as typeof FlatList;
