import React from 'react';
import steak from '../imgs/steak.jpg';
import lemon from '../imgs/lemon.jpg';
import sandwich from '../imgs/sandwich.jpg';

export default function Product() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={steak} alt="Sunset in the mountains" />
      <div className="px-4 py-4">
        <div className="flex justify-between">
          <div className="font-bold text-l mb-2">Steak</div>
          <div className="">$25</div>
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
