import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/global/theme';
import store from './src/redux/store';
import Home from './src/screens/Home';

const App: React.FC = () => {
  if (__DEV__) {
    import('./ReactoTron').then(() => console.log('Reactotron Configurado'));
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <Home />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
