import { INCREMENT } from './cartAction';

export const cartReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      let newState;
      const targetProduct = findProduct(state, action.product.id);
      if (targetProduct) {
        newState = [
          ...otherProduct(state, action.product.id),
          {
            ...targetProduct,
            amount: +targetProduct.amount + +action.product.amount,
          },
        ];
        return sortById(newState);
      } else {
        newState = [...state, action.product];
        return sortById(newState);
      }
    default:
      return state;
  }
};

const sortById = (arr) => {
  return arr.sort((a, b) => (a.id > b.id ? 1 : -1));
};

const findProduct = (carts, id) => {
  return carts.find((cart) => cart.id === id);
};

const otherProduct = (carts, id) => {
  return carts.filter((cart) => cart.id !== id);
};