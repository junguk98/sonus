import React from 'react';
import Top50Content from 'components/top50/Top50Content';
import { Music } from 'interfaces/music';
import 'styles/top50.scss';

interface Top50Props {
  musics: Music[];
}

const Top50List = ({ musics }: Top50Props) => {
  return (
    <table className="top50table">
      <th className="song-info">곡 정보</th>
      <th className="genre">장르</th>
      <th className="hearts">좋아요</th>
      {musics.map((e) => (
        <Top50Content key={e.id} content={e} />
      ))}
    </table>
  );
};

export default Top50List;
