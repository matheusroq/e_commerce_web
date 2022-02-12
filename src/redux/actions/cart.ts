import * as consts from '../consts/cart.consts';

export function addProduct(data: {
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
  }[],
}) {
  return {
    type: consts.CART_ADD,
    payload: {
      product: data.product,
      images: data.images,
      quantity: 1
    }
  }
}

export function incrementQuantity(productId: string) {
  return {
    type: consts.CART_INCREMENT,
    payload: {
      productId
    }
  }
}
export function decrementQuantity(productId: string) {
  return {
    type: consts.CART_DECREMENT,
    payload: {
      productId
    }
  }
}