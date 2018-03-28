import React from 'react';
import { App } from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import { render } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from './redux/store';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  render(
    <Provider store={ store }>
      <App />
    </Provider>
  );
});
