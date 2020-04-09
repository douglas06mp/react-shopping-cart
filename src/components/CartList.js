import React, { useContext } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { CartContext } from '../context/cart.context';
import Cart from './Cart';
import PriceInfo from './PriceInfo';

export default function CartList() {
  const carts = useContext(CartContext);

  return (
    <div className="container mx-auto mt-4 p-4 flex justify-between">
      <TransitionGroup className="w-4/5 grid grid-cols-2 gap-8" appear>
        {carts.length > 0 &&
          carts.map(({ id, name, img, price, amount }) => (
            <CSSTransition key={id} classNames="slide" timeout={300}>
              <Cart
                id={id}
                key={id}
                name={name}
                img={img}
                price={price}
                amount={amount}
              />
            </CSSTransition>
          ))}
      </TransitionGroup>
      <PriceInfo />
    </div>
  );
}
