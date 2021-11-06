import React from 'react';
import {useAppContext} from '../../contexts/AppContext'

import { Container } from './styles';

import Button from '../Button';

const Header: React.FC = () => {
  const {handleNextPage, handlePreviousPage} = useAppContext();
  return (
    <Container>
      <Button title="Previous" onClick={handlePreviousPage} />
      <h1>Pokedex</h1>
      <Button title="Next" onClick={handleNextPage} />
    </Container>
  );
};

export default Header;
