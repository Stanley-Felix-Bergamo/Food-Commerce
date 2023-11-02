import Head from '../../components/Head';
import SnackTitle from '../../components/SnackTitle';
import Snacks from '../../components/Snacks';
import { UseSnack } from '../../hooks/useSnack';

const Pizzas = () => {
  const { pizza } = UseSnack();

  return (
    <>
      <Head title='Pizzas' description='Nossos melhores Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizza}></Snacks>
    </>
  );
};

export default Pizzas;
