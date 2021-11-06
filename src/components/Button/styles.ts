import styled from 'styled-components';

export const Container = styled.button`
  margin: 0 20px;
  color: #ffffff;
  font-size: 14px;
  font-family: 'Pokemon solid';
  width: 70px;
  height: 70px;
  border-radius: 4px;
  border: 0;
  background: linear-gradient(315deg, #d41938, #dc0a2f);
  box-shadow: 7px 7px 14px #a1132b, -7px -7px 14px #ff1f45;

  &:hover {
    color: #d3d3d3;
    background: linear-gradient(315deg, #bf1732, #e31b3c);
    box-shadow: -7px -7px 14px #a1132b, 7px 7px 14px #ff1f45;
  }
`;
