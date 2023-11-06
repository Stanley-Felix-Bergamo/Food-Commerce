import { useEffect, useState } from 'react';
import { useCart } from '../../hooks/useCart';
import TableDesktop from '../TableDesktop';
import TableMobile from '../TableMobile';
import EmptyCart from '../EmptyCart';

const Table = () => {
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);
  const { cart } = useCart();

  useEffect(() => {
    const updateTableComponentBasedInWidth = () => {
      const currentWidth = document.documentElement.clientWidth;
      setWindowWidth(currentWidth);
    };
    window.addEventListener('resize', updateTableComponentBasedInWidth);

    return () => {
      window.removeEventListener('resize', updateTableComponentBasedInWidth);
    };
  }, []);

  if (cart.length === 0) {
    return <EmptyCart title='Ops! não há pedios no carrinho' />;
  }
  return windowWidth > 768 ? <TableDesktop /> : <TableMobile />;
};

export default Table;
