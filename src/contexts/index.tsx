import React from 'react';
import { AppProvider } from './AppContext';

const Provider: React.FC = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};

export default Provider;
