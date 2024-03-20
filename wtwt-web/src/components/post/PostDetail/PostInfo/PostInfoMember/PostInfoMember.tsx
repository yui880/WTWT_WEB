import { type MemberType } from '@component/types/user';
import Image from 'next/image';
import { useState } from 'react';

interface PostInfoMemberProps {
  members: MemberType[];
}

export const PostInfoMember = ({ members }: PostInfoMemberProps) => {
  const [enteredId, setEnteredId] = useState(0);
  const [showNickname, setShowNickname] = useState(false);

  const enterMouseHandler = (id: number) => {
    setEnteredId(id);
    setShowNickname(true);
  };

  const leaveMouseHandler = () => {
    setShowNickname(false);
  };

  return (
    <div className="flex flex-row gap-3">
      {members.map(({ id, nickname, profile }) => {
        return (
          <div key={id}>
            <Image
              className="rounded-full border-gray-400 shadow-sm shadow-zinc-300"
              src={profile?.uri ?? '/wtwt_logo_image.png'}
              alt="profile"
              width={25}
              height={25}
              onMouseEnter={() => {
                enterMouseHandler(id);
              }}
              onMouseLeave={leaveMouseHandler}
            />
            {showNickname && enteredId === id && (
              <div className="absolute rounded-md bg-white px-2 py-1 text-xs text-text-title opacity-85">
                {nickname}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
