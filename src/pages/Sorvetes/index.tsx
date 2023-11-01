import { useEffect, useState } from 'react';
import Head from '../../components/Head';
import SnackTitle from '../../components/SnackTitle';
import Snacks from '../../components/Snacks';
import { getSorvetes } from '../../services/api';

const Sorvetes = () => {
  const [sorvete, setSorvete] = useState([]);

  useEffect(() => {
    (async () => {
      const SorveteReq = await getSorvetes();
      setSorvete(SorveteReq.data);
    })();
  }, []);

  return (
    <>
      <Head title='Sorvetes' description='Nossos melhores Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={sorvete}></Snacks>
    </>
  );
};

export default Sorvetes;
