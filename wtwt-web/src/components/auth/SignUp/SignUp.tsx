import { Input } from '@component/components/common/Input';
import { type ChangeEvent, useCallback, useState } from 'react';
import { Button } from '@component/components/common/Button';
import { useRouter } from 'next/navigation';
import { useModal } from '@component/hooks/useModal';
import Image from 'next/image';

export const SignUp = () => {
  const height = window.innerHeight;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPwd, setCheckPwd] = useState('');
  const { Modal, isOpen, openModal, closeModal } = useModal();

  const router = useRouter();
  const updateInputHandler = (inputType: string, e: ChangeEvent<HTMLInputElement>) => {
    switch (inputType) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'checkPwd':
        setCheckPwd(e.target.value);
        break;
    }
  };

  const canSubmit = email !== '' && password !== '' && checkPwd !== '';

  const submitHandler = useCallback(async () => {
    if (password !== checkPwd) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    // alert('회원가입 성공!');
    openModal();
  }, [password, checkPwd, router, isOpen]);

  return (
    <>
      <div className="h-dvh w-full bg-white font-Pretendard" style={{ height: `${height}px` }}>
        <div className="flex h-full flex-col justify-center gap-10 p-7">
          <div className="mb-3 mt-5 text-xl font-semibold">회원가입</div>
          <div className="flex flex-1 flex-col gap-5 ">
            <Input
              label="이메일"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={(val) => {
                updateInputHandler('email', val);
              }}
            />
            <Input
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={(val) => {
                updateInputHandler('password', val);
              }}
              secureTextEntry={true}
            />
            <Input
              label="비밀번호 확인"
              placeholder="확인을 위해 비밀번호를 한 번 더 입력해주세요."
              value={checkPwd}
              onChange={(val) => {
                updateInputHandler('checkPwd', val);
              }}
              secureTextEntry={true}
            />
          </div>
          <Button onClick={submitHandler} disabled={!canSubmit}>
            가입하기
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className=" flex h-52 w-80 flex-col items-center justify-center gap-6 rounded-xl bg-white">
          <Image src="/wtwt_logo_image2.png" alt="로고" width={70} height={70} />
          <div className="text-xl font-bold text-gray-600">회원가입 성공!</div>
        </div>
      </Modal>
    </>
  );
};
