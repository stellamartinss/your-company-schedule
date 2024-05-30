import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Calendar from './pages/Agenda/Agenda';
import Header from './components/header/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calendar' element={<Calendar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
