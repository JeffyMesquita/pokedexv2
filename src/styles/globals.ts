import styled, { createGlobalStyle } from 'styled-components';
import EightBit from '../../src/assets/fonts/EightBit.ttf';
import PokemonHollow from '../../src/assets/fonts/PokemonHollow.ttf';
import PokemonSolid from '../../src/assets/fonts/PokemonSolid.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'EightBit';
    src: url(${EightBit});
  }

  @font-face {
    font-family: 'PokemonHollow';
    src: url(${PokemonHollow});
  }

  @font-face {
    font-family: 'PokemonSolid';
    src: url(${PokemonSolid});
  }

  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  p { 
    font-family: 'EightBit' !important;
  }

  @media only screen and (max-width: 360px) {
    body {
      max-width: 360 !important; 
      padding: 0;
      margin: 0 auto !important;
    }
  }

  body {
    background: linear-gradient(to bottom,#D41938, #DC0A2F);     
  }

`;

export const Container = styled.main`
  background: linear-gradient(to bottom, #d41938, #dc0a2f);
  color: white;
  margin: 0;
  padding: 0;
  font-family: 'Pokemon Solid';
`;
