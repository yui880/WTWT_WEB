import React from 'react';

interface PostInfoLabelProps {
  children: React.ReactNode;
  label: string;
}

export const PostInfoLabel = ({ children, label }: PostInfoLabelProps) => {
  return (
    <div className="flex w-20 flex-row items-center justify-start gap-2">
      <div className="text-primary-subMain">{children}</div>
      <div className="text-xs text-text-title">{label}</div>
    </div>
  );
};
