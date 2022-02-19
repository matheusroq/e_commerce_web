import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '@mui/material';
import { getProductsBySearchTerm } from '../../redux/actions/products';


export const SearchInput = () => {
  const dispatch = useDispatch();
  const firstRender = useRef(true);
  const [search, setSearch] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearch(() => e.target.value);
  }

  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false;
      return;
    }
    const timeout = setTimeout(() => {
      dispatch(getProductsBySearchTerm(search)); 
    }, 600);

    return () => clearTimeout(timeout);
  }, [search, dispatch]);
  
  return (
    <Input
      onChange={handleChange}
      value={search}
    />
  )
}