import React from 'react';

export default function Cart({ id, name, img, price, amount }) {
  return (
    <div className="w-full flex bg-white rounded shadow-md">
      <img className="inline-block" src={img} alt="steak" />
      <div className="w-full px-4 py-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl">{name}</h3>
            <p className="text-xl font-bold">${price}</p>
          </div>
          <p className="text-lg">
            Lorem tincidunt eget nullam non nisi est sit.
          </p>
        </div>
        <div className="self-end">
          <button className="bg-orange-500 hover:bg-orange-700 text-white text-sm rounded-full py-1 px-2 mr-2">
            <i className="fas fa-plus"></i>
          </button>
          <span className="text-xl font-bold">{amount}</span>
          <button className="bg-orange-500 hover:bg-orange-700 text-white text-sm rounded-full py-1 px-2 mx-2">
            <i className="fas fa-minus"></i>
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white text-sm rounded-full py-1 px-2 ml-2">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
