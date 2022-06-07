import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import EmptyPage from 'pages/EmptyPage';
import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import ProfilePage from 'pages/ProfilePage';
import RegisterPage from 'pages/RegisterPage';
import SearchPage from 'pages/SearchPage';
import Top50Page from 'pages/Top50Page';
import UploadPage from 'pages/UploadPage';
import 'antd/dist/antd.css';
import 'styles/common/global.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import PlayDevPage from 'pages/PlayDevPage';
import Footer from 'components/footer/footer';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/top50" element={<Top50Page />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/play" element={<PlayDevPage />} />
            <Route path="/profile/:username" element={<ProfilePage />} />
            <Route path="*" element={<EmptyPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
