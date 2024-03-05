import React from 'react';

interface BackDropProps {
  children: React.ReactNode;
  className?: string;
  closeModal: (e: React.MouseEvent<HTMLElement>) => void;
}

export const BackDrop = ({ children, className = '', closeModal }: BackDropProps) => {
  return (
    <div
      className={
        'fixed left-0 top-0 flex h-full w-full justify-center bg-gray-600 bg-opacity-50' +
        (className.length > 0 ? ` ${className}` : ' items-center')
      }
      onClick={closeModal}
    >
      {children}
    </div>
  );
};
