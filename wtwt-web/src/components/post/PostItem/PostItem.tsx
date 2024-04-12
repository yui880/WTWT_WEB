import { type PostItemType } from '@component/types/post';
import Image from 'next/image';
import { PostStatus } from '@component/components/post/PostItem/PostStatus';
import { useRouter } from 'next/navigation';
import React, { type SyntheticEvent } from 'react';
import { IoMdHeart } from 'react-icons/io';
import { FaUser } from 'react-icons/fa6';
import { IoEye } from 'react-icons/io5';
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
        <span className="text-sm text-text-gray500">{writer.nickname}</span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-base font-semibold text-text-general">{title}</div>
        <div className="min-h-7 text-xs font-light text-text-title">{content}</div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <PostStatus isLightning={isLightning} />
        <div className="mr-1.5 flex flex-row gap-3">
          <div className="flex flex-row gap-1">
            <FaUser size={12} className="text-primary-subMain" />
            <div className="text-xs text-text-gray200">
              {headCount} / {preferHeadCount}
            </div>
          </div>
          <div className="flex flex-row gap-1.5">
            <IoEye size={15} className="text-primary-subMain" />
            <div className="text-xs text-text-gray200">{hits}</div>
          </div>
          <div className="flex flex-row gap-1">
            <IoMdHeart size={15} className="text-primary-subMain" />
            <div className="text-xs text-text-gray200">{hits * 20}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
