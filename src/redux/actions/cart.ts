import * as types from '../reduxTypes/cart.types';

export function addProduct(product: {
  id: string;
  name: string;
  price: number;
  category_id: number;
  description: string;
}) {
  return {
    type: types.CART_ADD,
    payload: product
  }
}