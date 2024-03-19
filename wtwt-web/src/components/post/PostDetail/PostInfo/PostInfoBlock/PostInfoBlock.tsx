import React from 'react';
import { PostInfoLabel } from '@component/components/post/PostDetail/PostInfo/PostInfoLabel';
import { PostInfoItem } from '@component/components/post/PostDetail/PostInfo/PostInfoItem';

interface PostInfoBlockProps {
  label: string;
  children: React.ReactNode;
  list: string[];
}

export const PostInfoBlock = ({ label, children, list }: PostInfoBlockProps) => {
  return (
    <div className="flex flex-row gap-7">
      <PostInfoLabel label={label}>{children}</PostInfoLabel>
      <PostInfoItem list={list} />
    </div>
  );
};
