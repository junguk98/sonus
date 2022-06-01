import React, { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  color?: string;
  outline?: string;
  size?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  color,
  outline,
  size,
  onClick,
}) => {
  return (
    <>
      <button
        className={`Button ${color} ${outline} ${size}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
