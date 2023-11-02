import { useContext } from 'react';
import { SnackContext } from '../contexts/SnackContext';

export const UseSnack = () => {
  return useContext(SnackContext);
};
