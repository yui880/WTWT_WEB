import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { type CategoryType } from '@component/types/post';

interface DropdownProps {
  isCategory: boolean;
  dataList: string[] | CategoryType[];
  onSelectId?: (id: number) => void;
  onSelectName: (name: string) => void;
}

export const Dropdown = ({ isCategory, dataList, onSelectId, onSelectName }: DropdownProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>(1);
  const [selectedName, setSelectedName] = useState<string>('전체');

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
      className="flex flex-row items-center gap-2"
      onClick={() => {
        setIsVisible((prev) => !prev);
      }}
    >
      <span className="text-xl font-semibold">{selectedName}</span>
      <div className={`transition-all duration-300 ease-in ${isVisible ? 'rotate-180' : ''}`}>
        <FaAngleDown />
      </div>
      {isVisible && (
        <div
          className={`absolute top-14 z-10 flex flex-col gap-2 rounded-md bg-white px-4 py-3 shadow-sm shadow-zinc-400 transition-all duration-300 ${
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
