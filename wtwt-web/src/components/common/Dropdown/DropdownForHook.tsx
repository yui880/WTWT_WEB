import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { type CategoryType } from '@component/types/post';
import { type UseFormRegisterReturn } from 'react-hook-form';

interface DropdownForHookProps {
  isCategory: boolean;
  register: UseFormRegisterReturn;
  placeholder: string;
  dataList: string[] | CategoryType[];
  onSelectId?: (id: number) => void;
  onSelectName: (name: string) => void;
}

export const DropdownForHook = ({
  isCategory,
  register,
  placeholder,
  dataList,
  onSelectId,
  onSelectName,
}: DropdownForHookProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>(0);
  const [selectedName, setSelectedName] = useState<string>('나라 선택');

  const selectCategoryHandler = ({ id, name }: CategoryType) => {
    setSelectedId(id);
    setSelectedName(name);
    if (onSelectId !== undefined) onSelectId(id);
    onSelectName(name);
  };

  const selectHandler = (name: string) => {
    setSelectedName(name);
    onSelectName(name);
  };

  return (
    <ul
      className="flex w-32 flex-row items-center justify-center gap-2 rounded-lg bg-primary-background py-3"
      onClick={() => {
        setIsVisible((prev) => !prev);
      }}
    >
      <span className="text-md font-medium text-text-title">{selectedName}</span>
      <div className={`transition-all duration-300 ease-in ${isVisible ? 'rotate-180' : ''}`}>
        <FaAngleDown className="text-text-title" />
      </div>
      {isVisible && (
        <div
          className={`absolute top-32 z-10 flex w-32 flex-col gap-2 rounded-md bg-white px-4 py-3 shadow-sm shadow-zinc-400 transition-all duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {isCategory
            ? (dataList as CategoryType[]).map(({ id, name }) => (
                <li
                  key={id}
                  className={`text-lg ${id === selectedId ? 'font-semibold text-primary-main' : 'text-gray-400'}`}
                  onClick={() => {
                    selectCategoryHandler({ id, name });
                  }}
                >
                  {name}
                </li>
              ))
            : (dataList as string[]).map((name) => (
                <li
                  key={name}
                  className={`text-lg ${name === selectedName ? 'font-semibold text-primary-main' : 'text-gray-400'}`}
                  onClick={() => {
                    selectHandler(name);
                  }}
                >
                  {name}
                </li>
              ))}
        </div>
      )}
    </ul>
  );
};
