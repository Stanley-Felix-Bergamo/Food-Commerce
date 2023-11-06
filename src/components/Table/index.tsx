import { useCart } from '../../hooks/useCart';
import TableDesktop from '../TableDesktop';

const Table = () => {
  const { cart } = useCart();
  if (cart.length === 0) {
    return <h1>Ops! não há pedios no carrinho</h1>;
  }
  return <TableDesktop />;
};

export default Table;
