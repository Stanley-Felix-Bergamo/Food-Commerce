import { currecyFormat } from '../../helpers/currecyFormat';
import { useCart } from '../../hooks/useCart';
import { Container } from './styles';
import plusImg from '../../assets/circle-plus.svg';
import minusImg from '../../assets/circle-minus.svg';
import { FaTrashAlt } from 'react-icons/fa';
import ComfirmOrder from '../ComfirmOrder';

const TableDesktop = () => {
  const { cart, removeSnackFromCart, snackCartDecrement, snackCartIncrement } = useCart();
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lanches</th>
            <th>Quantidade</th>
            <th>SubTotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={`${item.snack}-${item.id}`}>
              <td>
                <img src={item.image} alt={item.snack} />
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{currecyFormat(item.price)}</span>
              </td>
              <td>
                <div>
                  <button type='button' onClick={() => snackCartDecrement(item)}>
                    <img src={minusImg} alt='Remover quantidade' />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, '0')}</span>
                  <button type='button' onClick={() => snackCartIncrement(item)}>
                    <img src={plusImg} alt='Adicionar quantidade' />
                  </button>
                </div>
              </td>
              <td>
                <h5>{currecyFormat(item.subtotal)}</h5>
              </td>
              <td>
                <button type='button' onClick={() => removeSnackFromCart(item)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ComfirmOrder />
    </Container>
  );
};

export default TableDesktop;
