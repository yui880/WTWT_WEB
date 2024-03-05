import { type PostItemType } from '@component/types/post';
import Image from 'next/image';
import { PostStatus } from '@component/components/post/PostItem/PostStatus';
import HeadCount from '../../../../public/headcount.svg';
import Hits from '../../../../public/hits.svg';
import { useRouter } from 'next/navigation';
import { type SyntheticEvent } from 'react';
export const PostItem = ({
  id,
  writer,
  createdAt,
  title,
  content,
  isLightning,
  status,
  preferHeadCount,
  headCount,
  hits,
}: PostItemType) => {
  const router = useRouter();

  const clickHandler = (e: SyntheticEvent<HTMLDivElement>) => {
    router.push(`/post/${id}`);
  };

  return (
    <div
      className="flex min-h-40 flex-col gap-2.5 rounded-xl bg-white p-4 shadow"
      onClick={clickHandler}
    >
      <div className="flex flex-row items-center justify-start gap-2.5">
        <Image
          className="rounded-full border border-gray-200"
          src={writer.profile !== null ? writer.profile.uri : '/wtwt_logo_image.png'}
          alt="user-image"
          width={25}
          height={25}
        />
        <span className="text-text-gray500 text-sm">{writer.nickname}</span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-base font-medium text-text-general">{title}</div>
        <div className="text-text-gray200 min-h-7 text-xs font-light">{content}</div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <PostStatus isLightning={isLightning} />
        <div className="flex flex-row gap-3">
          <div className="flex flex-row gap-1">
            <Image src={HeadCount} alt="h" width={17} />
            <div className="text-text-gray200 text-xs">
              {headCount} / {preferHeadCount}
            </div>
          </div>
          <div className="mr-1 flex flex-row gap-1">
            <Image src={Hits} alt="h" width={17} />
            <div className="text-text-gray200 text-xs">{hits}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
