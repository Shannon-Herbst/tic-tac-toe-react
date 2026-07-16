import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Game from './pages/Game/Game';
import Header from './Components/Header/Header';

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/game-on' element={<Game />} />
      </Routes>
    </>
  )
}

export default Router