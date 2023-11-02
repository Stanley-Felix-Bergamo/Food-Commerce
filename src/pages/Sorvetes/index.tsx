import Head from '../../components/Head';
import SnackTitle from '../../components/SnackTitle';
import Snacks from '../../components/Snacks';
import { UseSnack } from '../../hooks/useSnack';

const Sorvetes = () => {
  const { sorvete } = UseSnack();
  return (
    <>
      <Head title='Sorvetes' description='Nossos melhores Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={sorvete}></Snacks>
    </>
  );
};

export default Sorvetes;
