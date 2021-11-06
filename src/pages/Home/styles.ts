import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;

  @media only screen and (max-width: 360px) {
    margin: 0 auto;
  }
`;

export const Footer = styled.footer`
  display: flex;
	flex-direction: row;
	justify-content: space-between;  
  margin-bottom: 20px;
`;
