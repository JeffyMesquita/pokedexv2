import React from 'react';
import Provider from './contexts/';

import GlobalStyle,  { Container } from '../src/styles/globals'

import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Provider>   
      <GlobalStyle />
      <Container>
        <Home /> 
      </Container>           
    </Provider>
  );
}

export default App;
