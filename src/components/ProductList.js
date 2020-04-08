import React from 'react';
import Product from './Product';
import PriceInfo from './PriceInfo';
import products from '../products';

export default function ProductList({ products }) {
  return (
    <div className="container mx-auto mt-4 p-4 flex justify-between">
      <div className="w-4/5 grid grid-cols-4 gap-8">
        {products.map(({ id, name, img, price }) => (
          <Product id={id} key={id} name={name} img={img} price={price} />
        ))}
      </div>
      <PriceInfo />
    </div>
  );
}

ProductList.defaultProps = {
  products,
};
