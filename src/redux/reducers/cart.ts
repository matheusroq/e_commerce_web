import { AnyAction } from 'redux'
import * as consts from '../consts/cart.consts';
export type Cart = {
  data: {
    product: {
      id: string;
      name: string;
      price: number;
      category_id: number;
      description: string;
    },
    images: {
      id: string;
      product_id: string;
      filename: string;
      original_filename: string;
      url: string;
    }[]
    quantity: number;
  }[],
}

const initialState: Cart = {
  data: [],
}
export function cart(state = initialState, action: AnyAction) {
  console.log(action)
  switch (action.type) {
    case consts.CART_ADD: {
      return {
        ...state,
        data: [...state.data, action.payload],
      }
    }
    case consts.CART_REMOVE: {
      const filtered = state.data.filter(d => d.product.id !== action.payload.id)
      return {
        ...state,
        data: filtered
      }
    }
    case consts.CART_INCREMENT: {
      const cart = state.data.filter(d => {
        if (d.product.id === action.payload.productId) {
          d.quantity += 1;
        }
        return d;
      });
      return {
        ...state,
        data: [...cart]
      }

    }
    case consts.CART_DECREMENT: {
      const cart = state.data.filter(d => {
        if (d.product.id === action.payload.productId && d.quantity > 0) {
          d.quantity -= 1;
        }
        return d.quantity !== 0 ? d : null;
      });
      return {
        ...state,
        data: [...cart]
      }
    }

    default:
      return state;
  }

}