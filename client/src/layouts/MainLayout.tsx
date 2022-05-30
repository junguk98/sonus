import React, { FC, ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const CommonLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};
export default CommonLayout;
