'use client';

import { type ChangeEvent, useState } from 'react';
import { Input } from '@component/components/common/Input';
import { Button } from '@component/components/common/Button';
import { Radio, RadioGroup } from '@component/components/common/Radio';
import Link from 'next/link';
import { useModal } from '@component/hooks/useModal';
import { PostItem } from '@component/components/post/PostItem';

export default function Home() {
  const [value, setValue] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [gender, setGender] = useState('FEMAIL');

  const { Modal, isOpen, openModal, closeModal } = useModal();

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setIsSubmit((prev) => !prev);
  };

  const handleRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  return (
    <>
      <main className="h-lvh w-full bg-white font-Pretendard">
        <div className="flex flex-col gap-5 p-7">
          <Input
            className=""
            onChange={changeValue}
            label="이름"
            placeholder="이름을 입력해주세요"
            value={value}
          />
          <Input
            className=""
            onChange={changeValue}
            label="이름"
            placeholder="이름을 입력해주세요"
            value={value}
          />
          <Button onClick={handleSubmit} disabled={isSubmit}>
            제출하기
          </Button>

          <RadioGroup label="성별">
            <Radio
              value="FEMAIL"
              name="gender"
              checked={gender === 'FEMAIL'}
              onChange={handleRadio}
            >
              여성
            </Radio>
            <Radio value="MALE" name="gender" checked={gender === 'MALE'} onChange={handleRadio}>
              남성
            </Radio>
            <Radio value="NONE" name="gender" checked={gender === 'NONE'} onChange={handleRadio}>
              선택 안함
            </Radio>
          </RadioGroup>
          <Button onClick={openModal} disabled={false}>
            모달 열기
          </Button>

          <PostItem
            id={1}
            writer={{
              id: 1,
              nickname: 'yuna',
              profile: null,
            }}
            createdAt="11"
            title="독일에서 파리로 함께 여행 가실 분"
            content="안녕하세요. 같이 여행 가실 분 구합니다"
            isLightning={false}
            status="OPEN"
            preferHeadCount={1}
            headCount={2}
            hits={5}
          />

          <Link href="/auth/signup">회원가입</Link>
          <Link href="/auth/login">로그인</Link>
          <Link href="/home">메인화면</Link>
          <Link href="mypage/profile">프로필 설정</Link>
          <Link href="/post/write">글 작성</Link>
        </div>
      </main>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="flex h-80 w-80 rounded-xl bg-white">
          <Button onClick={closeModal} disabled={false}>
            버튼
          </Button>
        </div>
      </Modal>
    </>
  );
}
