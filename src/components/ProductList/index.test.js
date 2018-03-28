import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import { shallow, render, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { ProductListFn } from './index.js';
import { ProductList } from './index.js';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

describe('ProductList', () => {

  it('renders no products when store is empty', () => {
    const wrapper = shallow(<ProductListFn products={[]} />);
    expect(wrapper.find('.thumbnail').length).toBe(0);
  });
  
  it('renders no products when store is empty', () => {
    const store = mockStore({ products: [] });
  
    const wrapper = shallow(<ProductList store={ store } />);
    expect(wrapper.find('.thumbnail').length).toBe(0);
  });
  
  it('renders products', () => {
    const store = mockStore( {
      products: [{
        id: 1,
        name: 'Curso Desarrollo Web',
        price: 359,
        image: 'images/image-1.png'
      }]
    });
  
    const wrapper = shallow(<ProductList store={ store } />);
    expect(wrapper.find('.thumbnail').length).toBe(0);
  });
  
  it('add product to the shopping cart', () => {
    const store = mockStore( {
      products: [{
        id: 1,
        name: 'Curso Desarrollo Web',
        price: 359,
        image: 'images/image-1.png'
      }]
    });
  
    const wrapper = mount(<ProductList store={ store } />);
    wrapper.find('#product-1 button').simulate('click');
  
    const actions = store.getActions();
    // Existe solo un action
    expect(actions.length).toBe(1);
    // Ese action.type tiene el nombre de "ADD_TO_CART"
    expect(actions[0].type).toBe('ADD_TO_CART');
    // El action.product o es nulo
    expect(actions[0].product).not.toBeNull();
  });
  
});
