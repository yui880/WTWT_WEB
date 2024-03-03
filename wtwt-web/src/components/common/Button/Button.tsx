import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

export const Button = ({ children, className, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={`h-16 w-full rounded-lg py-4 text-center ${disabled ? 'bg-gray-300' : 'bg-primary-main'} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={`text-lg font-medium ${disabled ? 'text-gray-600' : 'text-white'}`}>
        {children}
      </span>
    </button>
  );
};
