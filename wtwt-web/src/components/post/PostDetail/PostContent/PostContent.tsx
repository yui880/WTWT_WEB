import { type ImageType } from '@component/types/image';
import Image from 'next/image';

interface PostContentProps {
  content: string;
  images: ImageType[];
}

export const PostContent = ({ content, images }: PostContentProps) => {
  return (
    <div className="flex flex-col gap-6 px-6 py-8">
      <div className="text-sm">{content}</div>
      <div className="flex flex-row gap-3">
        {images.map(({ uri, name }, i) => {
          return (
            <Image
              className="rounded-xl"
              key={name + i}
              src={uri}
              alt={name}
              height={120}
              width={120}
            />
          );
        })}
      </div>
    </div>
  );
};
