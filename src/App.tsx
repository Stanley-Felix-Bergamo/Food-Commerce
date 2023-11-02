import { useState, useEffect, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Theme } from './styles/Theme';
import { GlobalStyle } from './styles/global';
import { Normalize } from 'styled-normalize';
import { SnackData } from './interfaces/SnackData';
import { getBebidas, getBurgers, getPizzas, getSorvetes } from './services/api';

interface SnackContextProps {
  burges: SnackData[];
  pizza: SnackData[];
  sorvete: SnackData[];
  bebidas: SnackData[];
}

export const SnackContext = createContext({} as SnackContextProps);

export default function App() {
  const [burges, setBurges] = useState<SnackData[]>([]);
  const [sorvete, setSorvete] = useState<SnackData[]>([]);
  const [pizza, setPizza] = useState<SnackData[]>([]);
  const [bebidas, setBebidas] = useState<SnackData[]>([]);

  useEffect(() => {
    (async () => {
      const burgerRequest = await getBurgers();
      const SorveteReq = await getSorvetes();
      const bebidasReq = await getBebidas();
      const pizzasReq = await getPizzas();

      setBurges(burgerRequest.data);
      setSorvete(SorveteReq.data);
      setBebidas(bebidasReq.data);
      setPizza(pizzasReq.data);
    })();
  }, []);

  return (
    <BrowserRouter>
      <Theme>
        <SnackContext.Provider value={{ burges, sorvete, pizza, bebidas }}>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </SnackContext.Provider>
      </Theme>
    </BrowserRouter>
  );
}
