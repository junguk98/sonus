import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Header from '../components/header/Header';
export default function MainPage() {
  return (
    <MainLayout>
      <Header />
      <div>카드들</div>
    </MainLayout>
  );
}
