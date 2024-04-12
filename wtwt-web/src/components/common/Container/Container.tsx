import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}
export const Container = ({ children }: ContainerProps) => {
  const height = window.innerHeight;

  return (
    <div className="w-full bg-white font-Pretendard" style={{ height: `${height}px` }}>
      {children}
    </div>
  );
};
