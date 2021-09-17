import React from 'react';

import {ThemeProvider} from 'styled-components/native';
import theme from './src/global/theme';
import Splash from './src/screens/Splash';
import {StatusBar} from 'react-native';
import Home from './src/screens/Home';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Home />
    </ThemeProvider>
  );
};

export default App;
