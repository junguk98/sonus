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
        <span>
          <input type="checkbox" className="song-checkbox" />
        </span>
      </td>
      <td>
        <span className="song-title large-font">{content.title}</span>
        <br />
        <span className="song-artist">{content.artist}</span>
      </td>
      <td className="large-font">
        <span>{content.genre}</span>
      </td>
      <td className="large-font">
        <span>{content.hearts}</span>
      </td>
    </tr>
  );
};

export default Top50Content;
