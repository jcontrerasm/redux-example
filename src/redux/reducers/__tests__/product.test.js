import { products } from '../products';

describe('products', () => {

  it('returns the initial state', () => {
    expect(products(undefined, {}))
      .toEqual([]);
  });

  it('receive products', () => {
    const productList = [{
      id: 1,
      name: 'Curso Desarrollo Web',
      price: 359,
      image: 'images/image-1.png'
    }];

    expect(
      products([], { type: 'REPLACE_PRODUCTS', products: productList})
    ).toEqual(productList);
  });

});