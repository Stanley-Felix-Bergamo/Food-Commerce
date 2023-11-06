import { Container, Button } from './styles';
import ManAndBurgerImg from '../../assets/man-and-burger.svg';

interface EmptyCartProps {
  title: string;
}

const EmptyCart = ({ title }: EmptyCartProps) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Button to='/'>Checar o cardápio</Button>
      <img src={ManAndBurgerImg} alt='Homem com hambúrguer' />
    </Container>
  );
};

export default EmptyCart;
