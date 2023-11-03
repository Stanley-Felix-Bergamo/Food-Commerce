import logo from '../../assets/logo.svg';
import SideBar from '../../components/SideBar';
import { Container } from './styles';
import { Outlet } from 'react-router-dom';
import MyOrder from '../../components/MyOrder';

export default function Main() {
  return (
    <Container>
      <SideBar />
      <section>
        <img src={logo} alt='Logo' />
        <Outlet />
      </section>
      <MyOrder />
    </Container>
  );
}
