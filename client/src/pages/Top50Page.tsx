import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Header from '../components/header/Header';
import Top50Header from '../components/top50/Top50Header';
import Top50List from '../components/top50/Top50List';
export default function Top50Page() {
  return (
    <MainLayout>
      <Header />
      <Top50Header />
      <Top50List />
    </MainLayout>
  );
}
