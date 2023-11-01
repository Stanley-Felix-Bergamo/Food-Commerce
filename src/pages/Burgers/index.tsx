import { useState, useEffect } from 'react';
import Head from '../../components/Head';
import SnackTitle from '../../components/SnackTitle';
import Snacks from '../../components/Snacks';
import { getBurgers } from '../../services/api';

const Burgers = () => {
  const [burges, setBurges] = useState([]);

  useEffect(() => {
    (async () => {
      const burgerRequest = await getBurgers();
      setBurges(burgerRequest.data);
    })();
  }, []);

  return (
    <>
      <Head title='Hambúrgueres' description='Nossos melhores burguers' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burges}></Snacks>
    </>
  );
};

export default Burgers;
