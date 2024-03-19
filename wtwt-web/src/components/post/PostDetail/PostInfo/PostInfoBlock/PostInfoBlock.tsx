import React from 'react';
import { PostInfoLabel } from '@component/components/post/PostDetail/PostInfo/PostInfoLabel';
import { PostInfoItem } from '@component/components/post/PostDetail/PostInfo/PostInfoItem';
import { PostInfoMember } from '@component/components/post/PostDetail/PostInfo/PostInfoMember';
import { type MemberType } from '@component/types/user';

interface PostInfoBlockProps {
  label: string;
  children: React.ReactNode;
  list?: string[];
  members?: MemberType[];
  isMemberBlock?: boolean;
}

export const PostInfoBlock = ({
  label,
  children,
  list = [],
  members,
  isMemberBlock = false,
}: PostInfoBlockProps) => {
  return (
    <div className="flex flex-row gap-7">
      <PostInfoLabel label={label}>{children}</PostInfoLabel>
      {isMemberBlock && members ? (
        <PostInfoMember members={members} />
      ) : (
        <PostInfoItem list={list} />
      )}
    </div>
  );
};
