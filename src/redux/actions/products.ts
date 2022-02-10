import { api } from '../../utils/api'
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux'
import * as types from '../reduxTypes/products.types';

export function getProducts(): ThunkAction<Promise<void>, {}, {}, AnyAction> {
  return async dispatch => {
    dispatch({ type: types.PRODUCT_LIST_PENDING });
    try {
      const { data } = await api.get('/products');
      dispatch({
        type: types.PRODUCT_LIST_FULFILLED,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: types.PRODUCT_LIST_REJECTED,
        error
      })
    }

  }
}