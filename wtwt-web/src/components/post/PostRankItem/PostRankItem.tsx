import { type PostItemType } from '@component/types/post';
import { IoEye } from 'react-icons/io5';

interface PostRankItemProps {
  rank: number;
  postData: PostItemType;
}

export const PostRankItem = ({ rank, postData }: PostRankItemProps) => {
  return (
    <div className="justify-between-4 flex h-10 flex-row items-center rounded-md bg-white px-5 py-2">
      <div className={`w-8 ${rank <= 3 ? 'font-semibold text-primary-main' : 'text-text-gray500'}`}>
        {rank}
      </div>
      <div className="flex-1 text-sm">{postData.title}</div>
      <div className="flex flex-row items-center gap-2">
        <IoEye size={15} className="text-primary-subMain" />
        <span className="text-xs text-text-title">{postData.hits}</span>
      </div>
    </div>
  );
};
