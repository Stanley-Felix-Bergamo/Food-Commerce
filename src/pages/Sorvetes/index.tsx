import Head from '../../components/Head';
import SnackTitle from '../../components/SnackTitle';
import Snacks from '../../components/Snacks';

const Sorvetes = () => {
  const data = [
    {
      id: 1,
      snack: 'Sorvete',
      name: 'Chocolate',
      description: 'Sabor chocolate',
      price: 9.9,
      image: 'https://images.pexels.com/photos/2846337/pexels-photo-2846337.jpeg',
    },
    {
      id: 2,
      snack: 'Sorvete',
      name: 'Cascão de Morango',
      description: 'Sabor Morango',
      price: 6.5,
      image:
        'https://images.pexels.com/photos/1309583/pexels-photo-1309583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      snack: 'Sorvete',
      name: 'Combo gelado ',
      description: 'Cascão e pote',
      price: 15.2,
      image:
        'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
  return (
    <>
      <Head title='Sorvetes' description='Nossos melhores Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  );
};

export default Sorvetes;
