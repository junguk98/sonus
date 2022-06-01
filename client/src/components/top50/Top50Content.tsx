import React from 'react';

interface ContentProps {
  title: string;
  artist: string;
  genre: string;
  hearts: number;
}

const Top50Content = ({ content }: { content: ContentProps }) => {
  return (
    <tr>
      <td>
        <span className="large-font">{content.title}</span>
        <br />
        <span className="song-artist">{content.artist}</span>
      </td>
      <td className="large-font">{content.genre}</td>
      <td className="large-font">{content.hearts}</td>
    </tr>
  );
};

export default Top50Content;
