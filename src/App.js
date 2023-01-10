import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:name" element={<Details />} />
      <Route path="*" element={<p>Path is not resolved</p>} />
    </Routes>
  </BrowserRouter>
);

export default App;
