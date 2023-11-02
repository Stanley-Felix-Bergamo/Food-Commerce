import { useContext } from 'react';
import Head from '../../components/Head';
import SnackTitle from '../../components/SnackTitle';
import Snacks from '../../components/Snacks';
import { SnackContext } from '../../App';

const Pizzas = () => {
  const { pizza } = useContext(SnackContext);
  return (
    <>
      <Head title='Pizzas' description='Nossos melhores Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizza}></Snacks>
    </>
  );
};

export default Pizzas;
