import React from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import { removeFromCart } from './../../redux/actions/cart';
import { connect } from 'react-redux';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}

const ShoppingCartFn = ({ cart, handleRemoveFromCart }) => {
  return (
    <Panel header="Carrito de compra">
      <Table fill>
        <tbody>
          { cart.map(product =>
            <tr key={ product.id }>
              <td>{ product.name }</td>
              <td className="text-right">S/.{ product.price }</td>
              <td className="text-right">
                <Button
                  bsSize="xsmall"
                  bsStyle="danger"
                  onClick={ () => handleRemoveFromCart(product) }>
                  <Glyphicon glyph="trash" />
                </Button>
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" style={styles.footer}>
              Total: S/.{ cart.reduce((sum, product) => sum + product.price, 0) }
            </td>
          </tr>
        </tfoot>
      </Table>

    </Panel>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRemoveFromCart(product) {
      const idProduct = product.id;
      dispatch( removeFromCart(idProduct) );
    }
  }
};

export const ShoppingCart = connect(mapStateToProps, mapDispatchToProps)(ShoppingCartFn);
