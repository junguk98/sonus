import { useRecoilState, useSetRecoilState } from 'recoil';
import { audioState, playIdState, playState } from 'store';

type ReturnType = [boolean, any, (music: any) => void, () => void];

const usePlay = (): ReturnType => {
  const [play, setPlay] = useRecoilState(playState);
  const [playId, setPlayId] = useRecoilState(playIdState);
  const setAudio = useSetRecoilState(audioState);

  const start = (music: any) => {
    setPlayId(music.id);
    setAudio(music.musicUrl);
    setPlay(true);
  };

  const stop = () => {
    setPlay(false);
  };
  return [play, playId, start, stop];
};
export default usePlay;
