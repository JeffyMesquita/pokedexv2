import styled from 'styled-components';

export const Loader = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Spinner = styled.article`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #00000022;
  border-left-color: #000000;
  border-top-color: #000000;
  animation: spin 1s linear infinite;

  img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Text = styled.h1`
  font-size: 10px;
`;

export const Point = styled.span`
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 4s steps(10) 1s normal both;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 35px;
    }
  }
`;
