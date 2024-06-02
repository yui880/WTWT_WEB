import { Container } from '@component/components/common/Container';
import { Header } from '@component/components/common/Header';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { categoryList } from '@component/components/common/Header/MainHeader';
import { DropdownForHook } from '@component/components/common/Dropdown/DropdownForHook';
import { RadioForHook, RadioGroup } from '@component/components/common/Radio';
import { type CategoryType } from '@component/types/post';
import { useForm } from 'react-hook-form';
import { InputForHook } from '@component/components/common/Input/InputForHook';
import { IoCameraOutline } from 'react-icons/io5';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FiPlus } from 'react-icons/fi';
import Checkbox from '@component/components/common/Checkbox/Checkbox';

export interface IProfileForm {
  category: CategoryType;
  thunder: boolean;
  title: string;
  content: string;
  startDate: Date;
  endDate: Date;
  groupSize: number;
  preferGender: string;
  preferMinAge: number;
  preferMaxAge: number;
}

export const NewPost = () => {
  const {
    watch,
    register,
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
    setError,
  } = useForm<IProfileForm>({
    mode: 'onBlur',
    defaultValues: { thunder: false, groupSize: 0, preferMinAge: 10, preferMaxAge: 70 },
  });
  const [categoryId, setCategoryId] = useState<number>(1);
  const [categoryName, setCategoryName] = useState<string>('전체');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePathList, setImagePathList] = useState<string[]>([]);
  const [isClicked, setIsClicked] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    setIsClicked(true);
    if (event.target.files) {
      const file = event.target.files[0];
      setSelectedImage(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImagePathList((prev) => [...prev, reader.result as string]);
      };
    }
    setIsClicked(false);
  };

  const openImageInput = () => {
    fileInputRef?.current?.click();
  };

  const plusHandler = () => {
    const currentValue = getValues('groupSize');
    if (currentValue < 99) setValue('groupSize', currentValue + 1);
  };

  const minusHandler = () => {
    const currentValue = getValues('groupSize');
    if (currentValue > 0) setValue('groupSize', currentValue - 1);
  };

  const onClick = () => {};

  return (
    <Container>
      <Header goBackButton={true} className="bg-primary-background" />
      <div className="flex w-full flex-col items-start justify-start gap-4 bg-white p-7">
        <DropdownForHook
          isCategory={true}
          placeholder="나라 선택"
          dataList={categoryList}
          register={register('category')}
          onSelectId={setCategoryId}
          onSelectName={setCategoryName}
        />
        <Checkbox
          register={register('thunder')}
          checked={watch('thunder')}
          className="text-text-title"
        >
          번개만남으로 올리기
        </Checkbox>
        <div className="flex w-full flex-col items-start justify-start gap-2">
          <InputForHook
            label=""
            register={register('title')}
            placeholder="제목을 입력해주세요"
            errorMessage={errors.title?.message}
            className="w-full"
          />
          <div className="flex h-80 w-full items-start justify-start rounded-lg bg-primary-background px-4 py-5 text-text-title ">
            <textarea
              className="flex h-full w-full resize-none bg-primary-background outline-none placeholder:text-text-placeHolder"
              placeholder="내용을 입력해주세요"
              {...register('content')}
            />
          </div>
          <div className="mt-2 flex flex-row items-center justify-center gap-3">
            <div className=" flex items-center justify-center">
              <button onClick={openImageInput} disabled={isClicked}>
                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-xl bg-primary-subMain">
                  <IoCameraOutline size={32} className="text-white" />
                  <div className="text-sm text-white">0/10</div>
                </div>
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
            {imagePathList.map((path) => (
              <img
                alt="Image"
                src={path}
                className="h-20 w-20 rounded-md border-[1px] border-text-placeHolder"
              />
            ))}
          </div>
        </div>
        <div className="mt-10 flex w-full flex-col gap-3">
          <p className="text-lg font-bold">동행 정보</p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-4">
              <input
                type="date"
                placeholder="시작 날짜"
                className="rounded-md bg-primary-background px-4 py-3.5 text-text-inputLabel outline-none"
              />
              <p>~</p>
              <input
                type="date"
                placeholder="종료 날짜"
                className="rounded-md bg-primary-background px-4 py-3.5 text-text-inputLabel outline-none"
              />
            </div>
            <div className="flex w-fit flex-row gap-5 rounded-md bg-primary-background px-4 py-3.5 text-text-inputLabel">
              <span>인원</span>
              <div className="flex items-center gap-6">
                <button onClick={minusHandler}>
                  <IoIosArrowBack size={20} />
                </button>
                <div>{watch('groupSize')}</div>
                <button onClick={plusHandler}>
                  <IoIosArrowForward size={20} />
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-between rounded-md bg-primary-background p-4 pr-5 text-text-inputLabel">
              <span>그룹 인원 추가하기</span>
              <FiPlus size={24} className="text-primary-main" />
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-full flex-col gap-3">
          <div>
            <p className="text-lg font-bold">동행인 설정</p>
          </div>
          <div className="flex flex-col gap-7 rounded-md bg-primary-background p-5">
            <div className="flex flex-col gap-1">
              <p className="font-bold text-text-inputLabel">선호하는 성별</p>
              <RadioGroup>
                <RadioForHook
                  register={register('preferGender')}
                  value="FEMALE"
                  checked={watch('preferGender') === 'FEMALE'}
                >
                  여성
                </RadioForHook>
                <RadioForHook
                  register={register('preferGender')}
                  value="MALE"
                  checked={watch('preferGender') === 'MALE'}
                >
                  남성
                </RadioForHook>
                <RadioForHook
                  register={register('preferGender')}
                  value="NONE"
                  checked={watch('preferGender') === 'NONE'}
                >
                  상관없음
                </RadioForHook>
              </RadioGroup>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-text-inputLabel">선호하는 나이대</p>
              <div className="flex flex-row items-center gap-2 text-text-inputLabel">
                <div className="flex w-20 justify-center rounded-md bg-white px-4 py-2.5">
                  <input className="w-8 outline-none" {...register('preferMinAge')} />
                  <span>대</span>
                </div>
                <p>~</p>
                <div className="flex w-20 justify-center rounded-md bg-white px-4 py-2.5">
                  <input className="w-8 outline-none" {...register('preferMaxAge')} />
                  <span>대</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-10 h-16 w-full rounded-lg bg-primary-main py-4 text-center"
          onClick={onClick}
        >
          <span className="text-lg font-medium text-white">제출하기</span>
        </button>
      </div>
    </Container>
  );
};
