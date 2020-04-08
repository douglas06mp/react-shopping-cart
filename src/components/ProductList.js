import React from 'react';
import Product from './Product';
import PriceInfo from './PriceInfo';

export default function ProductList() {
  return (
    <div className="container mx-auto mt-4 p-4 flex justify-between">
      <div className="w-4/5 grid grid-cols-4 gap-8">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <PriceInfo />
    </div>
  );
}
