import { Container } from '@component/components/common/Container';
import { Button } from '@component/components/common/Button';
import Image from 'next/image';
import { useModal } from '@component/hooks/useModal';
import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { type ImageType } from '@component/types/image';
import { InputForHook } from '@component/components/common/Input/InputForHook';
import { RadioForHook, RadioGroup } from '@component/components/common/Radio';
import { DateSelector } from '@component/components/common/DateSelector';
import { FaUserCircle } from 'react-icons/fa';

export interface IProfileForm {
  nickname: string;
  profileImage: ImageType;
  statusMessage: string;
  birthdate: string;
  gender: string;
}

export const Profile = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedImagePath, setSelectedImagePath] = useState<string | null>(null);
  const [isClicked, setIsClicked] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    watch,
    register,
    control,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<IProfileForm>({ mode: 'onBlur', defaultValues: { gender: 'FEMALE' } });
  const { Modal, isOpen, openModal, closeModal } = useModal();

  // 이미지 선택 핸들러
  const handleImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    setIsClicked(true);
    if (event.target.files) {
      const file = event.target.files[0];
      setSelectedImage(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setSelectedImagePath(reader.result as string);
      };
    }
    setIsClicked(false);
  };

  // 이미지 입력창 열기
  const openImageInput = () => {
    fileInputRef?.current?.click();
  };

  const canSubmit = true;

  const submitHandler = useCallback(async () => {
    // alert('회원가입 성공!');
    openModal();
  }, [isOpen]);

  return (
    <Container>
      <div className="flex h-full flex-col justify-center gap-10 p-7">
        <div className="mb-3 mt-5 text-xl font-semibold">프로필 등록</div>
        <div className="flex flex-1 flex-col">
          <form className="flex flex-col gap-4">
            <div className="mb-7 flex items-center justify-center">
              <button type="button" onClick={openImageInput} disabled={isClicked}>
                {selectedImagePath ? (
                  <img
                    alt="profileImage"
                    src={selectedImagePath}
                    className="h-[130px] w-[130px] rounded-full"
                  />
                ) : (
                  <FaUserCircle size={130} className="text-neutral-300" />
                )}
              </button>
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleImageSelect}
              />
            </div>
            <InputForHook
              label="닉네임"
              register={register('nickname')}
              placeholder="닉네임을 입력해주세요"
              errorMessage={errors.nickname?.message}
            />
            <InputForHook
              label="한줄 소개"
              register={register('statusMessage')}
              placeholder="한줄 소개를 입력해주세요"
              errorMessage={errors.statusMessage?.message}
            />
            <RadioGroup label="성별">
              <RadioForHook
                register={register('gender')}
                value="FEMALE"
                checked={watch('gender') === 'FEMALE'}
              >
                여성
              </RadioForHook>
              <RadioForHook
                register={register('gender')}
                value="MALE"
                checked={watch('gender') === 'MALE'}
              >
                남성
              </RadioForHook>
              <RadioForHook
                register={register('gender')}
                value="NONE"
                checked={watch('gender') === 'NONE'}
              >
                비공개
              </RadioForHook>
            </RadioGroup>
            <DateSelector label="생년월일" control={control} />
          </form>
        </div>
        <Button onClick={submitHandler} disabled={!canSubmit}>
          등록하기
        </Button>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className=" flex h-52 w-80 flex-col items-center justify-center gap-6 rounded-xl bg-white">
          <Image src="/wtwt_logo_image2.png" alt="로고" width={70} height={70} />
          <div className="text-xl font-bold text-gray-600">회원정보 수정 완료!</div>
        </div>
      </Modal>
    </Container>
  );
};
