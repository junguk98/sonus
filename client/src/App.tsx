import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Top50Page from './pages/Top50Page';
import './styles/common.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top50Page />} />
      </Routes>
    </BrowserRouter>
  );
}
