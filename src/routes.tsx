import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/Main';
import Burgers from './pages/Burgers';
import Pizzas from './pages/Pizzas';
import Sorvetes from './pages/Sorvetes';
import Bebidas from './pages/Bebidas';
import MyCart from './pages/MyCart';
import Payment from './pages/Payment';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Burgers />} />
        <Route path='pizzas' element={<Pizzas />} />
        <Route path='sorvetes' element={<Sorvetes />} />
        <Route path='bebidas' element={<Bebidas />} />
      </Route>
      <Route path='cart' element={<MyCart />} />
      <Route path='payment' element={<Payment />} />
    </Routes>
  );
}
