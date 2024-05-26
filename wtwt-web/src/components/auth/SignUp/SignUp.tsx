import { Input } from '@component/components/common/Input';
import { type ChangeEvent, useCallback, useState } from 'react';
import { Button } from '@component/components/common/Button';
import { useRouter } from 'next/navigation';
import { useModal } from '@component/hooks/useModal';
import Image from 'next/image';
import axios, { AxiosError } from 'axios';

export const SignUp = () => {
  const height = window.innerHeight;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPwd, setCheckPwd] = useState('');
  const [duplicatedMessage, setDuplicatedMessage] = useState('');
  const [isEmailChecked, setIsEmailChecked] = useState(false);

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

  const handleDuplicatedClick = useCallback(async () => {
    if (!email?.trim()) return;
    if (
      !/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
        email,
      )
    ) {
      setIsEmailChecked(false);
      setDuplicatedMessage('유효하지 않은 이메일 형식입니다.');
      return;
    }
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_KEY + '/api/v1/users/email/check',
        { email },
      );
      const { isDuplicated } = response.data;

      if (!isDuplicated) {
        setDuplicatedMessage('중복 이메일 여부가 확인되었습니다.');
        setIsEmailChecked(true);
      } else {
        setIsEmailChecked(false);
        setDuplicatedMessage('이미 존재하는 이메일입니다.');
      }
    } catch (e) {
      console.log((e as AxiosError).message);
    }
  }, [email]);

  const canSubmit = email !== '' && password !== '' && checkPwd !== '';

  const submitHandler = useCallback(async () => {
    if (
      !/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
        email,
      )
    ) {
      alert('올바른 이메일 주소가 아닙니다.');
      return;
    }
    if (!/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@^!%*#?&]).{8,50}$/.test(password)) {
      alert('비밀번호는 영문,숫자,특수문자($@^!%*#?&)를 모두 포함하여 8자 이상 입력해야합니다.');
      return;
    }
    if (password !== checkPwd) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const createUser = async () => {
        const signUpData = { email, password };
        const response = await axios.post(
          process.env.NEXT_PUBLIC_API_KEY + '/api/v1/users',
          signUpData,
        );

        console.log(response);
      };

      await createUser();
      openModal();
      router.push('/auth/login');
    } catch (error) {
      console.log(error);
      alert('회원가입 도중 오류가 발생하였습니다.');
    }
  }, [password, checkPwd, router, isOpen]);

  return (
    <>
      <div className="h-dvh w-full bg-white font-Pretendard" style={{ height: `${height}px` }}>
        <div className="flex h-full flex-col justify-center gap-10 p-7">
          <div className="mb-3 mt-5 text-xl font-semibold">회원가입</div>
          <div className="flex flex-1 flex-col gap-5 ">
            <div className="flex flex-col gap-2">
              <Input
                label="이메일"
                placeholder="이메일을 입력해주세요."
                value={email}
                onChange={(val) => {
                  updateInputHandler('email', val);
                }}
              />
              <div className="flex flex-row items-center gap-3">
                <button
                  className={`rounded-md  p-2 text-sm  shadow-md ${!isEmailChecked ? 'bg-primary-background text-text-inputLabel' : 'bg-primary-subMain text-white'}`}
                  onClick={handleDuplicatedClick}
                >
                  중복 이메일 확인
                </button>
                <p className={`text-sm ${isEmailChecked ? 'text-primary-main' : 'text-red-500'}`}>
                  {duplicatedMessage}
                </p>
              </div>
            </div>

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
