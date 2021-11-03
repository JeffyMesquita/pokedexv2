import styled, { createGlobalStyle } from 'styled-components';
import  EightBit  from '../../src/assets/fonts/EightBit.ttf';
import  PokemonHollow  from '../../src/assets/fonts/PokemonHollow.ttf';
import  PokemonSolid  from '../../src/assets/fonts/PokemonSolid.ttf';

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
    font-family: 'PokemonSolid';
  }

  html, body, #root {
    height: 100%;
  }

`;

export const Container = styled.main`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom,#D41938, #DC0A2F);
	color: white;
	margin: 0;
	padding: 0;
	font-family: "Pokemon Solid";
`;