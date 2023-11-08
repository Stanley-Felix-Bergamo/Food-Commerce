import { currecyFormat } from '../../helpers/currecyFormat';
import { useCart } from '../../hooks/useCart';
import { Container } from './styles';

interface Props {
  texto: string;
}

const ComfirmOrder = ({ texto }: Props) => {
  const { cart } = useCart();
  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0);

  return (
    <Container>
      <button type='submit'>{texto}</button>
      <span>
        Total <strong>{currecyFormat(totalAmount)}</strong>
      </span>
    </Container>
  );
};

export default ComfirmOrder;
