import { useContext } from 'react';
import Head from '../../components/Head';
import SnackTitle from '../../components/SnackTitle';
import Snacks from '../../components/Snacks';
import { SnackContext } from '../../App';

const Bebidas = () => {
  const { bebidas } = useContext(SnackContext);
  return (
    <>
      <Head title='Bebidas' description='Nossos melhores Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={bebidas}></Snacks>
    </>
  );
};

export default Bebidas;
