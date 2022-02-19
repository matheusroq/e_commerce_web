import { api } from '../../utils/api'
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux'
import * as consts from '../consts/products.consts';

export function getProducts(): ThunkAction<Promise<void>, {}, {}, AnyAction> {
  return async dispatch => {
    dispatch({ type: consts.PRODUCT_LIST_PENDING });
    try {
      const { data } = await api.get('/products');
      dispatch({
        type: consts.PRODUCT_LIST_FULFILLED,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: consts.PRODUCT_LIST_REJECTED,
        error
      })
    }

  }
}

export function getProductsBySearchTerm(searchTerm: string): ThunkAction<Promise<void>, {}, {}, AnyAction> {
  return async dispatch => {
    dispatch({ type: consts.PRODUCT_LIST_SEARCH_PENDING });
    try {
      const { data } = await api.get(`/products?searchTerm=${searchTerm}`);
      dispatch({
        type: consts.PRODUCT_LIST_SEARCH_FULFILLED,
        payload: data
      });

    } catch (error) {
      dispatch({
        type: consts.PRODUCT_LIST_SEARCH_REJECTED,
        error
      });
    }
  }
}