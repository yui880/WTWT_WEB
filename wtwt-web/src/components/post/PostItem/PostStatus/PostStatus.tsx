import Thunder from '../../../../../public/thunder.svg';
import Image from 'next/image';
export interface PostStatusProps {
  isLightning: boolean;
}

export const PostStatus = ({ isLightning }: PostStatusProps) => {
  return (
    <div className="flex w-20 flex-row items-center justify-center gap-2 rounded-md bg-primary-background px-1 py-2">
      <Image src={Thunder} alt="t" />
      <div className="text-xs text-primary-main">{isLightning ? '번개만남' : '모집 중'}</div>
    </div>
  );
};
