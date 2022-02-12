
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'; 
import { Store } from '../../redux';
import { decrementQuantity, incrementQuantity } from '../../redux/actions/cart';
import { Cart as CartStateType } from '../../redux/reducers/cart';
import styles from './Cart.module.scss';

export function Cart() {
  const cartState = useSelector<Store, CartStateType>(state => state.cart);
  //const cartStore = localStorage.getItem('products');
  const dispatch = useDispatch();

 /*  let storeCart;
  if (typeof cartStore === 'string' && !!cartStore) storeCart = JSON.parse(cartStore) as CartStateType;
  else if (!!cartState) storeCart = cartState as CartStateType; */
  if (cartState.data.length > 0) {
    console.log(cartState)
    return (
      <div className={styles.container}>
        {cartState.data.map((d, index) => {
          console.log(d.images.length > 0 ? d.images[0]: 'N')
          if (d.quantity > 0) {
            return (
              <div key={d.product.id} className={styles.productsList}>
               <div>
                {d.images.length > 0 ? <img src={d.images[0].url} alt="" />: (
                    <div className={styles.noImg}>Nenhuma imagem {':('}</div>
                  )}
                </div>
                <div>
                  <p>{d.product.name}</p>
                </div>
                <div>
                  <p>Quantidade: </p>
                  <p>{d.quantity}</p>
                </div>
                <div className={styles.buttonsWrapper}>
                  <Button color='success' onClick={() => dispatch(incrementQuantity(d.product.id))}>+</Button>
                  <Button color='error' onClick={() => dispatch(decrementQuantity(d.product.id))}>-</Button>
                </div>
              </div>
          )
          } else {
            return (
              <>
              {(index === 0 && cartState.data.length < 1) && <div>Carrinho vazio</div>}
              </>
            )
          }
      })}
      </div>
      )
  } else {
    console.log('AQ2')
    return (
      <div>Carrinho vazio</div>
    )
  }

};





