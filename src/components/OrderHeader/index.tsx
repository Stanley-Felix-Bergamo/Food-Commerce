import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { Container } from './styles';
import { useCart } from '../../hooks/useCart';
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';

const OrderHeader = () => {
  const { cart } = useCart();
  return (
    <Container>
      <Link to={'/'}>
        <img src={logoImg} alt='Logo' />
      </Link>
      <div>
        <div>
          <h3>Meus Pedidos</h3>
          <span>
            <strong>{`${cart.length}`.padStart(2, '0')}</strong> pedidos(s)
          </span>
        </div>
        <CartIcon />
      </div>
    </Container>
  );
};

export default OrderHeader;
