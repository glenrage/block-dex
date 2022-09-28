import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        color='transparent'
        className='navbar'
        elevation={0}
      >
        <Toolbar className='toolbar'>
          <h1>POKEYDECKS</h1>
          <Link to={`/`} style={{ textDecoration: 'none' }}>
            <Button variant='contained'>Home</Button>
          </Link>
          <Link to={`/custom-gallery`} style={{ textDecoration: 'none' }}>
            <Button variant='contained'>Custom Gallery</Button>
          </Link>
          <Link to={`/add-pokemon`} style={{ textDecoration: 'none' }}>
            <Button variant='contained'>Add New Pokemon</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <hr />
    </Box>
  );
}
