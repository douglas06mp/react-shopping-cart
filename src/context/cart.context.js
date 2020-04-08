import React, { createContext, useReducer } from 'react';

const initCart = [];

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
