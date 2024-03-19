import { type MemberType } from '@component/types/user';
import { IoEyeSharp } from 'react-icons/io5';
import { HiFlag } from 'react-icons/hi';
import Image from 'next/image';
import { type CategoryType } from '@component/types/post';

interface PostTitleProps {
  title: string;
  postDate: Date;
  hits: number;
  writer: MemberType;
  category: CategoryType;
}
export const PostTitle = ({ title, postDate, hits, writer, category }: PostTitleProps) => {
  return (
    <div className="flex flex-col gap-4 px-6 py-3">
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-1 pb-1">
          <HiFlag className="text-primary-main" />
          <div className="text-xs text-gray-600">{category.name}</div>
        </div>
        <div className="text-lg font-semibold">{title}</div>
        <div className="flex flex-row items-center gap-6 text-xs font-light text-gray-400">
          <div>{`${postDate.getFullYear()}. ${postDate.getMonth() + 1}. ${postDate.getDay()}`}</div>
          <div className="flex flex-row items-center gap-1">
            <IoEyeSharp className="text-primary-subMain" size={15} />
            {hits.toLocaleString()}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Image
          className="rounded-full"
          src={writer.profile?.uri ?? '/profile.png'}
          width={30}
          height={30}
          alt="profile"
        />
        <div className="text-sm">{writer.nickname}</div>
      </div>
    </div>
  );
};
