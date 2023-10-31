import Head from '../../components/Head';
import SnackTitle from '../../components/SnackTitle';
import Snacks from '../../components/Snacks';

const Bebidas = () => {
  const data = [
    {
      id: 1,
      snack: 'Bebidas',
      name: 'Coca-Cola 2L',
      description: 'Coca',
      price: 12,
      image:
        'https://images.pexels.com/photos/1904262/pexels-photo-1904262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      snack: 'Bebidas',
      name: 'Guaraná Antártica',
      description: 'Guaraná',
      price: 6.5,
      image:
        'https://oportorestaurante.com.br/site2/wp-content/webp-express/webp-images/uploads/2022/04/guarana-antarctica.jpg.webp',
    },
    {
      id: 3,
      snack: 'Bebidas',
      name: 'Suco de laranja',
      description: 'Suco',
      price: 6.5,
      image:
        'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <>
      <Head title='Bebidas' description='Nossos melhores Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  );
};

export default Bebidas;
