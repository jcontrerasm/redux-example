import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import { ProductList } from './components/ProductList';
import { ShoppingCart } from './components/ShoppingCart';
import { store } from './redux/store';
import { loadProducts } from './redux/actions/products';
import './App.css';

export class App extends Component {

  componentDidMount() {
    store.dispatch( loadProducts() );
  }

  render() {
    return (
      <div>
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Udemy</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <Grid>
          <Row>
            <Col sm={8}>
              <ProductList />
            </Col>
            <Col sm={4}>
              <ShoppingCart />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
