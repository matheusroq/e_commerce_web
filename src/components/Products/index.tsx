import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../redux';
import { getProducts } from '../../redux/actions/products';
import { InitialState as ProductState} from '../../redux/reducers/products';
import { Cart } from '../../redux/reducers/cart';
import { Slider } from '../Slider';
import Button from '@mui/material/Button'

import styles from './Products.module.scss';
import { addProduct } from '../../redux/actions/cart';
import { Card, CardContent, Typography } from '@mui/material';

export function Products() {
  const products = useSelector<Store, ProductState>(state => state.products);
  const cart = useSelector<Store, Cart>(state => state.cart);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  const handlePurchase = ({product}: {
    product: {
      id: string;
      name: string;
      price: number;
      category_id: number;
      description: string;      
    }
  }) => {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      dispatch(addProduct(product));
      localStorage.setItem('products', JSON.stringify(cart));
    }
    
  }

  return (
    <div className={styles.container}>
      {products.data.map(d => {
      return (
          <Card
            style={{ margin: '10px'}}
          >
            <CardContent>
              <Slider images={d.images}/>
              <Typography>
                {d.product.name}
              </Typography>
            </CardContent>
            <Button onClick={handlePurchase(d)}>Comprar</Button>
          </Card>
      )
    })}
    </div>
  )
}