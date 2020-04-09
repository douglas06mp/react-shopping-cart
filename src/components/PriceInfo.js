import React, { useContext } from 'react';
import { CartContext } from '../context/cart.context';

export default function PriceInfo() {
  const carts = useContext(CartContext);

  const price = carts.reduce((acc, next) => {
    const { price, amount } = next;
    return price * amount + acc;
  }, 0);

  return (
    <div className="w-1/6 h-64 bg-orange-200 rounded shadow-lg text-center py-10">
      <i className="fas fa-shopping-cart text-6xl text-orange-500"></i>
      <p className="font-bold mt-10">Tatal Cost:</p>
      <p className="font-bold text-2xl">${price}</p>
    </div>
  );
}
