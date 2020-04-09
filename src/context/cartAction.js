export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = (product) => {
  return {
    type: INCREMENT,
    product,
  };
};
