import React, { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  color?: string;
  outline?: string;
  size?: string;
}

const Button: FC<ButtonProps> = ({ children, color, outline, size }) => {
  return (
    <>
      <button className={`Button ${color} ${outline} ${size}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
