import React from 'react';
import Background from '../../components/Background';
import Logo from '../../components/RickLogo';
import {Container} from './styles';

const Splash: React.FC = () => {
  return (
    <Container>
      <Background />
      <Logo />
    </Container>
  );
};

export default Splash;
