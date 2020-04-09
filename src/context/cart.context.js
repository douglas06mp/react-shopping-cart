import React, { createContext } from 'react';
import { cartReducer } from './cartReducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

const initCart = [];

export const CartContext = createContext();
export const DispatchContext = createContext();

export function CartProvider({ children }) {
  const [cart, dispatch] = useLocalStorageReducer(
    'carts',
    initCart,
    cartReducer
  );

  return (
    <CartContext.Provider value={cart}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </CartContext.Provider>
  );
}
