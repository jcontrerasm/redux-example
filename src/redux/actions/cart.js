export const addToCart = product => {
  return {
    type: 'ADD_TO_CART',
    product
  }
};

export const removeFromCart = idProduct => {
  return {
    type: 'REMOVE_FROM_CART',
    idProduct
  }
};