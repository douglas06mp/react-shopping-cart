export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const DELETION = 'DELETION';

export const increment = (product) => {
  return {
    type: INCREMENT,
    product,
  };
};

export const decrement = (id) => {
  return {
    type: DECREMENT,
    id,
  };
};

export const deletion = (id) => {
  return {
    type: DELETION,
    id,
  };
};
