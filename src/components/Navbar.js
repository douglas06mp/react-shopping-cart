import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="h-16 bg-gray-800">
      <div className="container h-full flex items-center justify-end m-auto px-4">
        <Link
          to="/products"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-3"
        >
          Products
        </Link>
        <Link
          to="/carts"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Cart
        </Link>
      </div>
    </nav>
  );
}
