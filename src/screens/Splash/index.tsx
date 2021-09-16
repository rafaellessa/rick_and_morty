import React from 'react';
import {RFPercentage} from 'react-native-responsive-fontsize';
import RickLogo from '../../assets/rick.svg';
import {Background, Container, SvgWrapper} from './styles';

const Splash: React.FC = () => {
  return (
    <Container>
      <Background />
      <SvgWrapper>
        <RickLogo width={RFPercentage(45)} />
      </SvgWrapper>
    </Container>
  );
};

export default Splash;
