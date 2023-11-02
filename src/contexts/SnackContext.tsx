import { useState, useEffect, createContext, ReactNode } from 'react';
import { SnackData } from '../interfaces/SnackData';
import { getBebidas, getBurgers, getPizzas, getSorvetes } from '../services/api';

interface SnackContextProps {
  burges: SnackData[];
  pizza: SnackData[];
  sorvete: SnackData[];
  bebidas: SnackData[];
}

interface SnackProviderProps {
  children: ReactNode;
}

export const SnackContext = createContext({} as SnackContextProps);

export function SnackProvider({ children }: SnackProviderProps) {
  const [burges, setBurges] = useState<SnackData[]>([]);
  const [sorvete, setSorvete] = useState<SnackData[]>([]);
  const [pizza, setPizza] = useState<SnackData[]>([]);
  const [bebidas, setBebidas] = useState<SnackData[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const burgerRequest = await getBurgers();
        const SorveteReq = await getSorvetes();
        const bebidasReq = await getBebidas();
        const pizzasReq = await getPizzas();

        setBurges(burgerRequest.data);
        setSorvete(SorveteReq.data);
        setBebidas(bebidasReq.data);
        setPizza(pizzasReq.data);
      } catch (e) {
        console.error('Erro na requisição', e);
      }
    })();
  }, []);

  return (
    <SnackContext.Provider value={{ burges, sorvete, pizza, bebidas }}>
      {children}
    </SnackContext.Provider>
  );
}
