import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


export const Container = styled.li`
  height: 135px;
  width: 300px;
  list-style: none;
  padding: 5px;
  margin: 15px 15px;
  color: #222;
  text-align: left;
  border-radius: 4px;
  position: relative;
  box-shadow: 7px 4px 3px -1px rgba(0, 0, 0, 0.65);  
  cursor: pointer;

  &::after {    
    content: "";
    display: block;
    width: 40%;
    height: 55%;
    border-radius: 100%;
    background-color: #fff;
    opacity: .85;
    position: absolute;
    top: 35%;
    left: 57%;
  }

  &:hover {
    animation: bounce 0.9s linear;
    box-shadow: 9px 6px 19px -3px rgba(0, 0, 0, 0.82);

    @keyframes bounce {
      20% {
        transform: translateY(-10px);
      }
      40% {
        transform: translateY(0px);
      }

      80% {
        transform: translateY(-4px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;

export const CardImage = styled.img`
  height: 125px;
  width: 100px;
  position: absolute;
  top: 11%;
  left: 62%;
  z-index: 1;
`;

export const Title = styled.h2`
  text-transform: capitalize;
  margin-bottom: 0px;
  font-size: 24px;
  font-weight: normal;
  position: absolute;
  left: 3%;
  bottom: 67%;
`;

export const Subtitle = styled.p`  
  font-size: 10px;
  color: #fafafa;
  font-weight: normal;
  position: absolute;
  left: 3%;
  top: 73%;
`;
