import { currecyFormat } from '../../helpers/currecyFormat';
import { useCart } from '../../hooks/useCart';
import { Container } from './styles';

const ComfirmOrder = () => {
  const { cart } = useCart();
  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0);

  return (
    <Container>
      <button type='button'>Finalizar Pedido</button>
      <span>
        Total <strong>{currecyFormat(totalAmount)}</strong>
      </span>
    </Container>
  );
};

export default ComfirmOrder;
