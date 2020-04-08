import React from 'react';
import steak from '../imgs/steak.jpg';

export default function Cart() {
  return (
    <div className="w-full flex bg-white rounded shadow-md">
      <img className="inline-block" src={steak} alt="steak" />
      <div className="w-full px-4 py-4 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl">Steak</h3>
          <p className="text-lg">
            Lorem tincidunt eget nullam non nisi est sit.
          </p>
        </div>
        <div className="self-end">
          <button className="bg-orange-500 hover:bg-orange-700 text-white text-sm rounded-full py-1 px-2 mr-2">
            <i className="fas fa-plus"></i>
          </button>
          <span className="text-xl font-bold">5</span>
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
