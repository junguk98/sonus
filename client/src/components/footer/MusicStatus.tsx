import MusicSlider from 'components/sliders/MusicSlider';
import React from 'react';

const MusicStatus = () => {
  return (
    <>
      <span className="time-span">2:32</span>
      <MusicSlider />
      <span className="time-span">3:34</span>
    </>
  );
};
export default MusicStatus;
