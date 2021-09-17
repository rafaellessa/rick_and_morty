import styled from 'styled-components/native';
import background from '../../assets/bg.jpeg';

export const Container = styled.ImageBackground.attrs({
  source: background,
})`
  flex: 1;
`;
