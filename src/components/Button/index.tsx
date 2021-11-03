import React, { BaseHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends BaseHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      {title}
    </Container>
  );
};

export default Button;