import { Title } from './styles';
import { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}
const SnackTitle = ({ children }: TitleProps) => {
  return <Title>{children}</Title>;
};

export default SnackTitle;
