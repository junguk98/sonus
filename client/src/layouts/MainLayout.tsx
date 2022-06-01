import React, { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};
export default CommonLayout;
