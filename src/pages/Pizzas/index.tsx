import Head from '../../components/Head';
import SnackTitle from '../../components/SnackTitle';
import Snacks from '../../components/Snacks';

const Pizzas = () => {
  const data = [
    {
      id: 1,
      snack: 'Pizzas',
      name: 'Bella',
      description: 'Pizza do Cheff',
      price: 69.9,
      image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
    },
    {
      id: 2,
      snack: 'Italiana',
      name: 'Pizza tradicional',
      description: 'Pizza Italiana',
      price: 68.5,
      image:
        'https://images.pexels.com/photos/5593192/pexels-photo-5593192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      snack: 'Pizzas',
      name: 'Lombo canadense',
      description: 'Pizza canadense',
      price: 78.2,
      image:
        'https://images.pexels.com/photos/10875297/pexels-photo-10875297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <>
      <Head title='Pizzas' description='Nossos melhores Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  );
};

export default Pizzas;
