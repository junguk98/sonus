import React from 'react';
import '../../styles/top50.scss';
import Button from '../common/Button';

const Top50Header = () => {
  return (
    <>
      <div className="box">
        <div className="top">TOP 50</div>
        <Button size="large">일간</Button>
        <Button size="large">주간</Button>
        <Button size="large">월간</Button>
        <br />
        <br />
        <Button color="beige">전체재생</Button>
        <Button color="beige">선택재생</Button>
        <Button color="beige">담기</Button>
      </div>
    </>
  );
};

export default Top50Header;
