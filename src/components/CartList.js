import React from 'react';
import Cart from './Cart';
import PriceInfo from './PriceInfo';

export default function CartList() {
  return (
    <div className="container mx-auto mt-4 p-4 flex justify-between">
      <div className="w-4/5 grid grid-cols-2 gap-8">
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
      <PriceInfo />
    </div>
  );
}
