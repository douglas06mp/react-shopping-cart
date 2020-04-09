import { INCREMENT, DECREMENT, DELETION } from './cartAction';

export const cartReducer = (state, action) => {
  let newState;
  let targetProduct;
  switch (action.type) {
    case INCREMENT:
      targetProduct = findProduct(state, action.product.id);
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
    case DECREMENT:
      targetProduct = findProduct(state, action.id);
      if (targetProduct.amount > 1) {
        newState = [
          ...otherProduct(state, action.id),
          {
            ...targetProduct,
            amount: +targetProduct.amount - 1,
          },
        ];
        return sortById(newState);
      } else {
        newState = [...otherProduct(state, action.id)];
        return sortById(newState);
      }
    case DELETION:
      newState = [...otherProduct(state, action.id)];
      return sortById(newState);
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
