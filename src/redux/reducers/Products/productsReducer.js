/* eslint-disable import/no-anonymous-default-export */
import { GET_PRODUCT, GET_LIST_PRODUCTS } from '../../types';

const initialState = {
  listProducts: [],
  product: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCTS:
      return {
        ...state,
        listProducts: action.payload,
        loading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
        loading: false
      }
    default:
      return state;
  }
}
