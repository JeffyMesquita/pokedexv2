import React from 'react';
import Provider from './contexts/';
import Home from './pages/Home';
import { Container } from './styles';




const App: React.FC = () => {
  return (
    <Provider>
      <Container>      
        <Home />
      </Container>      
    </Provider>
  );
}

export default App;
