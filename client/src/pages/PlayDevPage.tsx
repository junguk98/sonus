import Header from 'components/header/Header';
import usePlay from 'hooks/usePlay';
import React from 'react';
import Beautiful from 'public/beautiful.mp3';
import { IoMdPause, IoMdPlay } from 'react-icons/io';

const musicList = [
  {
    id: 'Beautiful',
    musicUrl: Beautiful,
  },
  {
    id: 'cdnmusic',
    musicUrl:
      'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
  },
];

const PlayDevPage = () => {
  const [play, playId, start, stop] = usePlay();

  return (
    <>
      <Header />
      <div>
        {musicList.map((music) => (
          <div key={music.id}>
            {playId === music.id && play ? (
              <button onClick={stop}>
                <IoMdPause />
              </button>
            ) : (
              <button onClick={() => start(music)}>
                <IoMdPlay />
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default PlayDevPage;
