import { type MemberType } from '@component/types/user';
import Image from 'next/image';

interface PostInfoMemberProps {
  members: MemberType[];
}

export const PostInfoMember = ({ members }: PostInfoMemberProps) => {
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
            />
          </div>
        );
      })}
    </div>
  );
};
