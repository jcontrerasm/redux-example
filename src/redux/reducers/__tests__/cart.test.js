import { cart } from '../cart';

describe('cart', () => {

  it('Retorno de es estado vacio', () => {
    expect( cart(undefined, {}) ).toEqual([]);
  });

  it('Action type de tipo ADD_TO_CART', () => {
    const productItem = [{
      id: 1,
      name: 'Curso Desarrollo Web',
      price: 359,
      image: 'images/image-1.png'
    }];

    expect(
      cart([], {type: 'ADD_TO_CART', product: productItem})
    ).toEqual(productItem);
  });

});