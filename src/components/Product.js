import React from 'react';

export default function Product({ id, name, img, price }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={img} alt="Sunset in the mountains" />
      <div className="px-4 py-4">
        <div className="flex justify-between">
          <div className="font-bold text-l mb-2">{name}</div>
          <div className="">${price}</div>
        </div>
        <form className="flex justify-between">
          <input type="number" className="w-3/4" value="0" />
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-3 rounded">
            <i className="fas fa-cart-plus"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
