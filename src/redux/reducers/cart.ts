import { AnyAction } from 'redux'
import * as types from '../reduxTypes/cart.types';
export type Cart = {
  data: {
    product: {
      id: string;
      name: string;
      price: number;
      category_id: number;
      description: string;
    }
  }[],
}

const initialState: Cart = {
  data: []
}
export function cart(state = initialState, action: AnyAction) {
  console.log(action.payload)
  switch (action.type) {
    case types.CART_ADD:
      return {
        ...state,
        data: [...state.data, action.payload],

      }
    case types.CART_REMOVE:
      const filtered = state.data.filter(d => d.product.id !== action.payload.id)
      return {
        ...state,
        data: filtered
      }
    default:
      return state;
  }

}