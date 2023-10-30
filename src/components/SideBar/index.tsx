import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Container } from './styles';
import { ReactComponent as BurguerIcon } from '../../assets/burger.svg';
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg';
import { ReactComponent as BebidasIcon } from '../../assets/soda.svg';
import { ReactComponent as SorveteIcon } from '../../assets/ice-cream.svg';
import menuImg from '../../assets/menu.svg';

const SideBar = () => {
  const [menuOpen, setOpenMenu] = useState(false);

  const handleToggleMenu = () => setOpenMenu(!menuOpen);

  return (
    <Container isMenuOpen={menuOpen}>
      <button type='button' onClick={handleToggleMenu}>
        <img src={menuImg} alt='Abrir e fechar' />
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              <BurguerIcon />
              <span>Hambúrgueres</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='pizzas'>
              <PizzaIcon />
              <span>Pizzas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='bebidas'>
              <BebidasIcon />
              <span>Bebidas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='sorvetes'>
              <SorveteIcon />
              <span>Sorvetes</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default SideBar;
