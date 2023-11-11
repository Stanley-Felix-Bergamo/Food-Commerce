import { useState, createContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { SnackData } from '../interfaces/SnackData';
import { toast } from 'react-toastify';
import { snackEmoji } from '../helpers/snackEmoji';
import { CustomerData } from '../interfaces/CustomerData';

interface Snack extends SnackData {
  quantity: number;
  subtotal: number;
}

interface RemoveSnackFromCart {
  id: number;
  snack: string;
}

interface UpdateCartProps {
  id: number;
  snack: string;
  newQuantity: number;
}

interface CartContextProps {
  cart: Snack[];
  addSnackIntoCart: (snack: SnackData) => void;
  removeSnackFromCart: (snack: Snack) => void;
  snackCartIncrement: (snack: Snack) => void;
  snackCartDecrement: (snack: Snack) => void;
  confirmOrder: () => void;
  payOrder: (custumer: CustomerData) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

const localStorageKey = '@FoodCommerce:cart';

export function CartProvider({ children }: CartProviderProps) {
  const navigate = useNavigate();
  const [cart, setCart] = useState<Snack[]>(() => {
    const value = localStorage.getItem(localStorageKey);
    if (value) return JSON.parse(value);
    return [];
  });

  const saveCart = (items: Snack[]) => {
    setCart(items);
    localStorage.setItem(localStorageKey, JSON.stringify(items));
  };

  const clearCart = () => {
    localStorage.removeItem(localStorageKey);
  };

  const updateSnackQuantity = (snack: Snack, newQuantity: number) => {
    if (newQuantity <= 0) return;

    const snackExistentInCart = cart.find(
      (item) => item.id === snack.id && item.snack === snack.snack,
    );

    if (!snackExistentInCart) return;

    const newCart = cart.map((item) => {
      if (item.id === snackExistentInCart.id && item.snack === snackExistentInCart.snack) {
        return { ...item, quantity: newQuantity, subtotal: item.price * newQuantity };
      }
      return item;
    });
    saveCart(newCart);
  };

  const removeSnackFromCart = (snack: Snack): void => {
    const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack));
    saveCart(newCart);
  };

  const snackCartIncrement = (snack: Snack) => {
    updateSnackQuantity(snack, snack.quantity + 1);
  };

  const snackCartDecrement = (snack: Snack) => {
    updateSnackQuantity(snack, snack.quantity - 1);
  };

  const addSnackIntoCart = (snack: SnackData): void => {
    //Busca
    const SnackExistentInCart = cart.find(
      (item) => item.snack === snack.snack && item.id === snack.id,
    );
    //Atualizar
    if (SnackExistentInCart) {
      const newCart = cart.map((item) => {
        if (item.id === snack.id) {
          const quantity = item.quantity + 1;
          const subtotal = item.price * quantity;
          return { ...item, quantity, subtotal };
        }
        return item;
      });

      toast.success(`Outro(a) ${snackEmoji(snack.snack)} ${snack.name} adicionado no pedidos!`);
      setCart(newCart);
      return;
    }

    const newSnack = { ...snack, quantity: 1, subtotal: snack.price };
    const newCart = [...cart, newSnack];
    toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado no pedidos!`);

    setCart(newCart);
  };

  const confirmOrder = () => {
    navigate('/payment');
  };
  const payOrder = (customer: CustomerData) => {
    clearCart();
    return;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addSnackIntoCart,
        removeSnackFromCart,
        snackCartIncrement,
        snackCartDecrement,
        confirmOrder,
        payOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
