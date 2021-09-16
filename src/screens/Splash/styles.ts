import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import background from '../../assets/bg.jpeg';

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled.ImageBackground.attrs({
  source: background,
})`
  flex: 1;
`;

export const SvgWrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${RFValue(-10)}px;
`;
