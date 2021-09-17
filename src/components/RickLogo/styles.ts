import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${RFValue(-10)}px;
`;
