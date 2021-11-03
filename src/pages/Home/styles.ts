import styled from 'styled-components';

export const Container = styled.section`  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;  
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 { 
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
  }
`;