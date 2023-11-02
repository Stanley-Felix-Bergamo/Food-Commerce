import { useContext } from 'react';
import Head from '../../components/Head';
import SnackTitle from '../../components/SnackTitle';
import Snacks from '../../components/Snacks';
import { SnackContext } from '../../App';

const Burgers = () => {
  const { burges } = useContext(SnackContext);

  return (
    <>
      <Head title='Hambúrgueres' description='Nossos melhores burguers' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burges}></Snacks>
    </>
  );
};

export default Burgers;
