import React, { FC, ReactNode } from 'react';

interface CommonLayoutProps {
  children: ReactNode;
}

const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};
export default CommonLayout;
