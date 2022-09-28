import React from 'react';
import Container from '@mui/material/Container';
import NavBar from './NavBar';

function Layout({ children }) {
  return (
    <Container maxWidth='xl' className='main'>
      <NavBar />
      {children}
    </Container>
  );
}

export default Layout;
