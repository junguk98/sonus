import Header from 'components/header/Header';
import usePlay from 'hooks/usePlay';
import React from 'react';
import { IoMdPause, IoMdPlay } from 'react-icons/io';

const PlayDevPage = () => {
  const [play, start, stop] = usePlay(
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  );
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
