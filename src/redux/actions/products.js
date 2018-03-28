import axios from 'axios';

export const loadProducts = () => {
  return dispatch => {
    return axios.get('https://next.json-generator.com/api/json/get/EkhBzG2wN')
      .then( (response) => {
        dispatch({
          type: 'REPLACE_PRODUCTS',
          products: response.data
        });
      });
  };
};