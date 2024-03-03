import React from 'react';

interface BackDropProps {
  children: React.ReactNode;
  closeModal: (e: React.MouseEvent<HTMLElement>) => void;
}

export const BackDrop = ({ children, closeModal }: BackDropProps) => {
  return (
    <div
      className="fixed left-0 right-0 top-0 flex h-full items-center justify-center bg-gray-600 opacity-50"
      onClick={closeModal}
    >
      {children}
    </div>
  );
};
