export const products = (state = [], action) => {
  switch(action.type) {
    case 'REPLACE_PRODUCTS':
      return action.products;
    default:
      return state;
  }
};