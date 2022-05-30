import React from 'react';
import 'styles/top50.scss';
import 'styles/common/button.scss';
import Button from 'components/common/Button';

const Top50Header = () => {
  return (
    <>
      <div className="box">
        <div className="top">TOP 50</div>
        <Button size="btn-large">일간</Button>
        <Button size="btn-large">주간</Button>
        <Button size="btn-large">월간</Button>
        <br />
        <br />
        <Button color="btn-beige">전체재생</Button>
        <Button color="btn-beige">선택재생</Button>
        <Button color="btn-beige">담기</Button>
      </div>
    </>
  );
};

export default Top50Header;
