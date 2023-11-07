import { currecyFormat } from '../../helpers/currecyFormat';
import { useCart } from '../../hooks/useCart';
import { Container } from './styles';

interface Props {
  texto: string;
}

const ComfirmOrder = ({ texto }: Props) => {
  const { cart, payOrder } = useCart();
  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0);

  return (
    <Container>
      <button type='button' onClick={payOrder}>
        {texto}
      </button>
      <span>
        Total <strong>{currecyFormat(totalAmount)}</strong>
      </span>
    </Container>
  );
};

export default ComfirmOrder;
