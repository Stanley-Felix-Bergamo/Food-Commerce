import Head from '../../components/Head';
import SnackTitle from '../../components/SnackTitle';
import Snacks from '../../components/Snacks';
import { UseSnack } from '../../hooks/useSnack';

const Bebidas = () => {
  const { bebidas } = UseSnack();
  return (
    <>
      <Head title='Bebidas' description='Nossos melhores Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={bebidas}></Snacks>
    </>
  );
};

export default Bebidas;
