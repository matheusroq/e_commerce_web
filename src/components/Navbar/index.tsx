import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField  from '@mui/material/TextField';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {  Badge } from '@mui/material';

import { Store } from '../../redux';
import { Cart } from '../../redux/reducers/cart';

import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { SearchInput } from '../SearchInput';


export function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const cart = useSelector<Store, Cart>(state => state.cart);
  // const prod = localStorage.getItem('products');
  // let amount;
  // if (typeof prod === 'string') amount = JSON.parse(prod);
  const badgeNumber = cart.data.reduce((ac, value) => {
    if (value.quantity > 0) {
      ac += 1;
    }
    return ac;
  }, 0)
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  return(
    <nav className={styles.nav}>
      <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpen}
      >
        Categorias
      </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Eletrodomésticos</MenuItem>
          <MenuItem onClick={handleClose}>Smartphones</MenuItem>
          <MenuItem onClick={handleClose}>Computadores</MenuItem>
        </Menu>
      </div>
      <div className={styles.search}>
       {/*  <TextField
          style={{ width: '100%'}}
          size='small'   
        /> */}
        <SearchInput />
      </div>
      <div className={styles.cart}> 
          <Badge badgeContent={badgeNumber} color='error'>
            <Link to="/cart">
              <ShoppingCartIcon />
            </Link>
          </Badge>
      </div>
    </nav>
  );
}