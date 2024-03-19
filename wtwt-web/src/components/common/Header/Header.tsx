import { IoIosArrowBack } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import React from 'react';
interface HeaderProps {
  className?: string;
  label?: string;
  goBackButton: boolean;
  rightButton?: () => void;
}

export const Header = ({ className, label = '', rightButton }: HeaderProps) => {
  const router = useRouter();
  const goBackHandler = (e: React.MouseEvent) => {
    router.back();
  };

  return (
    <div
      className={`flex h-14 w-full flex-row items-center justify-between bg-white px-2 ${className}`}
    >
      <button className="flex w-10 items-center justify-center" onClick={goBackHandler}>
        <IoIosArrowBack size={22} />
      </button>
      <div className="text-lg font-semibold">{label}</div>
      <div className="w-10 bg-primary-main" />
    </div>
  );
};
