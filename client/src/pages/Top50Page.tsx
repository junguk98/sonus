import React, { useState, useEffect } from 'react';
import MainLayout from 'layouts/MainLayout';
import Header from 'components/header/Header';
import Top50Header from 'components/top50/Top50Header';
import Top50List from 'components/top50/Top50List';
import { fetchMusics } from 'apis/music';
import { Music } from 'interfaces/music';

const Top50Page = () => {
  const [loading, setLoading] = useState(true);
  const [musics, setMusics] = useState<Music[]>([]);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const more = await fetchMusics();
      setMusics((prev) => [...prev, ...more]);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <MainLayout>
      <Header />
      <Top50Header />
      {loading ? <></> : <Top50List musics={musics} />}
    </MainLayout>
  );
};
export default Top50Page;
