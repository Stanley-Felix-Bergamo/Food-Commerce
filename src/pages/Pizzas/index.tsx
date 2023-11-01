import { useState, useEffect } from 'react';
import Head from '../../components/Head';
import SnackTitle from '../../components/SnackTitle';
import Snacks from '../../components/Snacks';
import { getPizzas } from '../../services/api';

const Pizzas = () => {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    (async () => {
      const pizzaReq = await getPizzas();
      setPizzas(pizzaReq.data);
    })();
  }, []);

  return (
    <>
      <Head title='Pizzas' description='Nossos melhores Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  );
};

export default Pizzas;
