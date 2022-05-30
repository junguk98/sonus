import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './pages/EmptyPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import SearchPage from './pages/SearchPage';
import Top50Page from './pages/Top50Page';
import UploadPage from './pages/UploadPage';
import './styles/common.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/top50" element={<Top50Page />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="*" element={<EmptyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
