import React, { useEffect, useState } from 'react';

const LazyImg = ({ loading, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(loading || src);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);
  return (
    <>
      <img {...{ src: imgSrc, ...props }} />
    </>
  );
};
export default LazyImg;
