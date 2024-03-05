import { Input } from '@component/components/common/Input';
import { type ChangeEvent, useCallback, useState } from 'react';
import { Button } from '@component/components/common/Button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
export const Login = () => {
  const height = window.innerHeight;
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  const updateInputHandler = (inputType: string, e: ChangeEvent<HTMLInputElement>) => {
    switch (inputType) {
      case 'id':
        setId(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
    }
  };

  const goToSignUp = () => {
    router.push('/auth/signup');
  };

  const canSubmit = id !== '' && password !== '';

  const submitHandler = useCallback(() => {}, [id, password]);

  return (
    <div className="h-dvh w-full bg-white font-Pretendard" style={{ height: `${height}px` }}>
      <div className="flex h-full flex-col items-center justify-center gap-14 p-7">
        <div className="flex h-2/6 items-center justify-center">
          <Image src="/logo_black.png" alt="로고" width={270} height={50} />
        </div>
        <div className="flex h-4/6 w-full flex-col gap-5 ">
          <Input
            label="이메일 주소"
            placeholder="이메일을 입력해주세요"
            value={id}
            onChange={(val) => {
              updateInputHandler('id', val);
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
          <div className="flex w-full flex-col items-center justify-center gap-3">
            <Button className="mt-2" onClick={submitHandler} disabled={!canSubmit}>
              로그인하기
            </Button>
            <button
              className="text-xs text-text-title hover:font-medium hover:text-gray-600"
              onClick={goToSignUp}
            >
              회원 가입하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
