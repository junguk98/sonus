import React, { FC } from 'react';

interface ContentProps {
  content: object;
}

const Top50Content: FC<ContentProps> = ({ content }) => {
  console.log(content);
  console.log(1);
  return (
    <>
      <div></div>
    </>
  );
};

export default Top50Content;
