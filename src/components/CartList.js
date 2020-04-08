import React, { useContext } from 'react';
import { CartContext } from '../context/cart.context';
import Cart from './Cart';
import PriceInfo from './PriceInfo';

export default function CartList() {
  const carts = useContext(CartContext);

  return (
    <div className="container mx-auto mt-4 p-4 flex justify-between">
      <div className="w-4/5 grid grid-cols-2 gap-8">
        {carts.length > 0 &&
          carts.map(({ id, name, img, price, amount }) => (
            <Cart
              id={id}
              key={id}
              name={name}
              img={img}
              price={price}
              amount={amount}
            />
          ))}
      </div>
      <PriceInfo />
    </div>
  );
}
