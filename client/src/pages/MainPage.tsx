import React from 'react';
import MainLayout from 'layouts/MainLayout';
import Header from 'components/header/Header';
import Cards from 'components/cards/Cards';
export default function MainPage() {
  return (
    <MainLayout>
      <Header />
      <Cards />
    </MainLayout>
  );
}
