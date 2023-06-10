import React from 'react';
import './App.css';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingelRoom from './pages/SingelRoom'
import Error from './pages/Error'

import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/rooms/' Component={Rooms} />
        <Route path='/rooms/:singel' Component={SingelRoom} />
        <Route Component={Error} />
      </Routes>
    </>
  );
}

export default App;
