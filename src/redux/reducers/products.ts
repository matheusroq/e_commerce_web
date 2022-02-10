import { AnyAction } from 'redux';
import * as types from '../reduxTypes/products.types';
export type InitialState = {
  data: {
    product: {
      id: string;
      name: string;
      price: number;
      category_id: number;
      description: string;
    };
    images: {
      id: string;
      product_id: string;
      filename: string;
      original_filename: string;
      url: string;
    }[];
  }[]
  loading: boolean;
  error: Error | null;
};

const initialState: InitialState = {
  data: [],
  loading: false,
  error: null,
};
export function products(state = initialState, action: AnyAction) {

  switch (action.type) {
    case types.PRODUCT_LIST_PENDING:
      return {
        ...state,
        loading: true
      };
    case types.PRODUCT_LIST_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case types.PRODUCT_LIST_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state;
  }
}