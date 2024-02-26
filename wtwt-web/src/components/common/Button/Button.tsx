import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

const Button = ({ children, className, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={`h-65 w-full rounded-lg py-4 text-center ${disabled ? 'bg-gray-300' : 'bg-primary-main'} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={`text-lg font-bold ${disabled ? 'text-gray-600' : 'text-white'}`}>
        {children}
      </span>
    </button>
  );
};

export default Button;
