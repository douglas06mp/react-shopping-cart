import React from 'react';
import { useInputState } from '../hooks/useInputState';

export default function Product({ id, name, img, price }) {
  const [amount, changeAmount, reset] = useInputState(1);

  const increment = (e) => {
    e.preventDefault();
    console.log(id, amount);
    reset();
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={img} alt="Sunset in the mountains" />
      <div className="px-4 py-4">
        <div className="flex justify-between">
          <div className="font-bold text-l mb-2">{name}</div>
          <div className="">${price}</div>
        </div>
        <form className="flex justify-between" onSubmit={increment}>
          <input
            type="number"
            className="w-3/4"
            value={amount}
            onChange={changeAmount}
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-3 rounded"
          >
            <i className="fas fa-cart-plus"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
