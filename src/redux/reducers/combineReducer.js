import {combineReducers} from 'redux';
import listProducts from './Products/productsReducer';

export default combineReducers({
  listProducts: listProducts,
});
