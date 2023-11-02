import { useContext } from 'react';
import Head from '../../components/Head';
import SnackTitle from '../../components/SnackTitle';
import Snacks from '../../components/Snacks';
import { SnackContext } from '../../contexts/SnackContext';


const Sorvetes = () => {
  const { sorvete } = useContext(SnackContext);
  return (
    <>
      <Head title='Sorvetes' description='Nossos melhores Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={sorvete}></Snacks>
    </>
  );
};

export default Sorvetes;
