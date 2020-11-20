import React, { useState } from 'react';
import Routes from './routes'
import NavBar from './components/navbar'

export default function App() {
  return (

    <NavBar>
      <Routes />
    </NavBar>

  );
}