import React from 'react';
import Slider from '@mui/material/Slider';

const MusicSlider = () => {
  return (
    <Slider
      size="small"
      defaultValue={0}
      aria-label="time-indicator"
      min={0}
      step={1}
      sx={{
        position: 'relative',
        height: 4,
        top: '10px',
        width: '40%',
        color: '#616891',
        '& .MuiSlider-thumb': {
          width: 8,
          height: 8,
          transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
          '&:before': {
            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
          },
          '&:hover, &.Mui-focusVisible': {
            boxShadow: `0px 0px 0px 8px ${'rgb(0 0 0 / 16%)'}`,
          },
          '&.Mui-active': {
            width: 16,
            height: 16,
          },
        },
        '& .MuiSlider-rail': {
          opacity: 0.28,
        },
      }}
    />
  );
};
export default MusicSlider;
