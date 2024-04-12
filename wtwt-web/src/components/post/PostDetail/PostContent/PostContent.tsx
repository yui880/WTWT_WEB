import { type ImageType } from '@component/types/image';
import Image from 'next/image';
import { useModal } from '@component/hooks/useModal';
import { useState } from 'react';

interface PostContentProps {
  content: string;
  images: ImageType[];
}

export const PostContent = ({ content, images }: PostContentProps) => {
  const { Modal, closeModal, openModal, isOpen } = useModal();
  const [clickedImage, setClickedImage] = useState('');

  const clickImageHandler = (uri: string) => {
    setClickedImage(uri);
    openModal();
  };

  return (
    <>
      <div className="flex flex-col gap-6 px-6 pb-32 pt-8">
        <div className="text-sm">{content}</div>
        <div className="flex flex-row gap-3">
          {images.map(({ uri, name }, i) => {
            return (
              <Image
                className="h-28 w-28 rounded-xl object-cover"
                key={name + i}
                src={uri}
                alt={name}
                height={120}
                width={120}
                onClick={() => {
                  clickImageHandler(uri);
                }}
              />
            );
          })}
        </div>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} fastSpeed={true}>
        <div>
          <Image
            src={clickedImage}
            alt="largeImage"
            height={window.innerWidth}
            width={window.innerWidth}
          />
        </div>
      </Modal>
    </>
  );
};
