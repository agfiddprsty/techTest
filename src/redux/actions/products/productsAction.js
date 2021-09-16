import { GET_ERROR, GET_LIST_PRODUCTS, GET_PRODUCT } from '../../types';

export const getList = (data) => async dispatch => {
  try {
    dispatch({
      type: GET_LIST_PRODUCTS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: console.log(e),
    });
  }
};

export const getProduct = data => async dispatch => {
  try {
    dispatch({
      type: GET_PRODUCT,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: console.log(e),
    });
  }
};
