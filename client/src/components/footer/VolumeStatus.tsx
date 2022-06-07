import React, { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { muteState, volumeState } from 'store';
import {
  BsFillVolumeDownFill,
  BsFillVolumeMuteFill,
  BsFillVolumeUpFill,
} from 'react-icons/bs';
import VolumeSlider from 'components/sliders/VolumeSlider';

const VolumeStatus = () => {
  const volume = useRecoilValue(volumeState);
  const [mute, setMute] = useRecoilState(muteState);

  const onClick = useCallback(() => {
    setMute((prev) => !prev);
  }, [mute]);

  const volumeIcon = useCallback(
    (vol: number) => {
      if (vol == 0 || mute) return <BsFillVolumeMuteFill />;
      else if (vol < 60) {
        return <BsFillVolumeDownFill />;
      } else return <BsFillVolumeUpFill />;
    },
    [mute]
  );
  return (
    <>
      <button className="footer-button" onClick={onClick}>
        {volumeIcon(volume)}
      </button>
      <VolumeSlider />
    </>
  );
};
export default VolumeStatus;
