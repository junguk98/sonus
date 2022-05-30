import React from 'react';

interface ContentProps {
  title: string;
  artist: string;
}

const Top50Content = ({ content }: { content: ContentProps }) => {
  return (
    <>
      <div>
        {content.title} {content.artist}
      </div>
    </>
  );
};

export default Top50Content;
