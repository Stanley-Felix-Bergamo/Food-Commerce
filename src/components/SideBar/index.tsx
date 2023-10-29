import { useState } from 'react';
import { Container } from './styles';
import { ReactComponent as BurguerIcon } from '../../assets/burger.svg';
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg';
import { ReactComponent as BebidasIcon } from '../../assets/soda.svg';
import { ReactComponent as SorveteIcon } from '../../assets/ice-cream.svg';
import menuImg from '../../assets/menu.svg';

const SideBar = () => {
  const [menuOpen, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!menuOpen);
  };

  return (
    <Container isMenuOpen={menuOpen}>
      <button type='button' onClick={handleToggleMenu}>
        <img src={menuImg} alt='Abrir e fechar' />
      </button>
      <nav>
        <ul>
          <li>
            <a href='#' className='active'>
              <BurguerIcon />
              <span>Hambúrgueres</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <PizzaIcon />
              <span>Pizzas</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <BebidasIcon />
              <span>Bebidas</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <SorveteIcon />
              <span>Sorvetes</span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default SideBar;
