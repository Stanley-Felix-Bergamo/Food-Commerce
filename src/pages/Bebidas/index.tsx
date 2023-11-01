import { useState, useEffect } from 'react';
import Head from '../../components/Head';
import SnackTitle from '../../components/SnackTitle';
import Snacks from '../../components/Snacks';
import { getBebidas } from '../../services/api';

const Bebidas = () => {
  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    (async () => {
      const BebidasReq = await getBebidas();
      setBebidas(BebidasReq.data);
    })();
  }, []);

  return (
    <>
      <Head title='Bebidas' description='Nossos melhores Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={bebidas}></Snacks>
    </>
  );
};

export default Bebidas;
