import Header from 'components/header/Header';
import usePlay from 'hooks/usePlay';
import React from 'react';
import Beautiful from 'public/beautiful.mp3';
import { IoMdPause, IoMdPlay } from 'react-icons/io';

const PlayDevPage = () => {
  const [play, start, stop] = usePlay(Beautiful);
  return (
    <>
      <Header />
      <div>
        {play ? (
          <button onClick={stop}>
            <IoMdPause />
          </button>
        ) : (
          <button onClick={start}>
            <IoMdPlay />
          </button>
        )}
      </div>
    </>
  );
};
export default PlayDevPage;
