import React, { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { audioState, muteState, playState, volumeState } from 'store';
import {
  MdPlayArrow,
  MdPause,
  MdSkipPrevious,
  MdSkipNext,
} from 'react-icons/md';
import 'styles/footer.scss';
import VolumeStatus from './VolumeStatus';
import PlayStatus from './PlayStatus';
import MusicStatus from './MusicStatus';

const Footer = () => {
  const audio = useRecoilValue(audioState);
  const myRef = useRef<HTMLAudioElement>(null);
  const [play, setPlay] = useRecoilState(playState);
  const volume = useRecoilValue(volumeState);
  const mute = useRecoilValue(muteState);
  const start = () => {
    if (myRef.current) myRef.current.volume = volume / 100;
    setPlay(true);
  };
  const stop = () => {
    setPlay(false);
  };

  useEffect(() => {
    if (!myRef.current) return;
    if (play) {
      myRef.current.play();
      myRef.current.volume = mute ? 0 : volume / 100;
    } else myRef.current.pause();
  }, [play, audio, volume, mute]);
  return (
    <>
      <audio ref={myRef} src={audio} />
      {
        <div className="footer">
          <div>
            <button>
              <MdSkipPrevious />
            </button>
            {play ? (
              <button onClick={stop}>
                <MdPause />
              </button>
            ) : (
              <button onClick={start}>
                <MdPlayArrow />
              </button>
            )}
            <button>
              <MdSkipNext />
            </button>
            <MusicStatus />
            <VolumeStatus />
            <PlayStatus />
          </div>
        </div>
      }
    </>
  );
};
export default Footer;
