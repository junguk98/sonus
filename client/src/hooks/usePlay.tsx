import { useRecoilState, useSetRecoilState } from 'recoil';
import { audioState, playState } from 'store';

type ReturnType = [boolean, () => void, () => void];

const usePlay = (url: string): ReturnType => {
  const [play, setPlay] = useRecoilState(playState);
  const setAudio = useSetRecoilState(audioState);
  const start = () => {
    setAudio(url);
    setPlay(true);
  };

  const stop = () => {
    setPlay(false);
  };
  return [play, start, stop];
};
export default usePlay;
