import React, { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { audioState, playState } from 'store';
import { IoMdPlay, IoMdPause } from 'react-icons/io';

const Footer = () => {
  const audio = useRecoilValue(audioState);
  const myRef = useRef<HTMLAudioElement>(null);
  const [play, setPlay] = useRecoilState(playState);
  const start = () => {
    if (myRef.current) myRef.current.volume = 0.5;
    setPlay(true);
  };
  const stop = () => {
    setPlay(false);
  };

  useEffect(() => {
    if (!myRef.current) return;
    if (play) myRef.current.play();
    else myRef.current.pause();
  }, [play, audio]);
  return (
    <>
      <audio ref={myRef} src={audio} />
      {audio && (
        <div className="footer">
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
      )}
    </>
  );
};
export default Footer;
