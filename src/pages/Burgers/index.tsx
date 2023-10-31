import Head from '../../components/Head';
import SnackTitle from '../../components/SnackTitle';
import Snacks from '../../components/Snacks';
const Burgers = () => {
  const data = [
    {
      id: 1,
      snack: 'burguer',
      name: 'Mega',
      description: 'O artesanal tamanho familía com três carnes',
      price: 23.5,
      image: 'https://i.imgur.com/upjIUnG.jpg',
    },
    {
      id: 2,
      snack: 'burguer',
      name: 'Extra bacon',
      description: 'O artesanal para amantes de bacon',
      price: 23.5,
      image: 'https://i.imgur.com/B4J04AJ.jpg',
    },
  ];

  return (
    <>
      <Head title='Hambúrgueres' description='Nossos melhores burguers' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  );
};

export default Burgers;
