export const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state.concat(action.product);
    case 'REMOVE_FROM_CART':
      const newCart = state.filter( (product) => {
        return product.id !== action.idProduct;
      });
      return state = newCart;
    default:
      return state;
  }
};