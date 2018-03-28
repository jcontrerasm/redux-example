import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { addToCart } from './../../redux/actions/cart';
import { connect } from 'react-redux';

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

export const ProductListFn = ({ products, handleAddToCart }) => {
  return (
    <div style={ styles.products }>
      { products.map(product =>
        <div id={'product-' + product.id } className="thumbnail" style={ styles.product } key={ product.id }>
          <img src={ product.image } alt={ product.name } />
          <div className="caption">
            <h4>{ product.name }</h4>
            <p>
              <Button
                bsStyle="primary"
                onClick={ () => handleAddToCart(product) }
                role="button"
                disabled={ product.inventory <= 0}>
                S/.{ product.price } <Glyphicon glyph="shopping-cart" />
              </Button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddToCart(product) {
      dispatch( addToCart(product) );
    }
  }
};

export const ProductList = connect(mapStateToProps, mapDispatchToProps)(ProductListFn);
