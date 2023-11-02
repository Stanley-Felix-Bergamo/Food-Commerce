import Head from '../../components/Head';
import SnackTitle from '../../components/SnackTitle';
import Snacks from '../../components/Snacks';
import { UseSnack } from '../../hooks/useSnack';

const Burgers = () => {
  const { burges } = UseSnack();

  return (
    <>
      <Head title='Hambúrgueres' description='Nossos melhores burguers' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burges}></Snacks>
    </>
  );
};

export default Burgers;
