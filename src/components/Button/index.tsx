import React, { BaseHTMLAttributes } from 'react';
import { useAppContext } from '../../contexts/AppContext';

import { Container } from './styles';

interface ButtonProps extends BaseHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  const { handleNextPage, handlePreviousPage } = useAppContext();

  return (
    <Container {...rest}>
      {title}
    </Container>
  );
};

export default Button;