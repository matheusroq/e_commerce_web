import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField  from '@mui/material/TextField';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {  Badge } from '@mui/material';

export function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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
        <TextField
          style={{ width: '100%'}}
          size='small'   
        />
      </div>
      <div className={styles.cart}> 
          <Badge badgeContent={3} color='error'>
            <ShoppingCartIcon />
          </Badge>
      </div>
    </nav>
  );
}