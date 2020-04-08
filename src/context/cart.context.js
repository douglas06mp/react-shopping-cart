import React, { createContext, useReducer } from 'react';
import steak from '../imgs/steak.jpg';

const initCart = [
  { id: '1', name: 'Steak', img: steak, price: 125, amount: 2 },
];

const cartReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const CartContext = createContext();
export const DispatchContext = createContext();

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initCart);

  return (
    <CartContext.Provider value={cart}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </CartContext.Provider>
  );
}
