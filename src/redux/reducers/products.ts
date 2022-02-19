import { AnyAction } from 'redux';
import * as consts from '../consts/products.consts';
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
    case consts.PRODUCT_LIST_PENDING:
      return {
        ...state,
        loading: true
      };
    case consts.PRODUCT_LIST_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case consts.PRODUCT_LIST_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case consts.PRODUCT_LIST_SEARCH_PENDING:
      return {
        ...state,
        loading: true,
      }
    case consts.PRODUCT_LIST_SEARCH_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case consts.PRODUCT_LIST_SEARCH_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state;
  }
}