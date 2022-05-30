import React from 'react';
import Top50Content from './Top50content';

const Top50List = () => {
  const contents = [
    {
      id: 1,
      title: 'sample1',
      artist: 'someone1',
    },
    {
      id: 2,
      title: 'sample2',
      artist: 'someone2',
    },
    {
      id: 3,
      title: 'sample3',
      artist: 'someone3',
    },
    {
      id: 4,
      title: 'sample4',
      artist: 'someone4',
    },
  ];

  return (
    <>
      {contents.map((e) => (
        <Top50Content key={e.id} content={e} />
      ))}
    </>
  );
};

export default Top50List;
