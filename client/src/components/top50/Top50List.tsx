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
      <thead>
        <tr>
          <th></th>
          <th className="song-info">곡 정보</th>
          <th className="genre">장르</th>
          <th className="hearts">좋아요</th>
        </tr>
      </thead>
      <tbody>
        {musics.map((e) => (
          <Top50Content key={e.id} content={e} />
        ))}
      </tbody>
    </table>
  );
};

export default Top50List;
