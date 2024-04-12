import React, { useState } from 'react';
import { FaRegBell } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { Dropdown } from '@component/components/common/Dropdown';

const categoryList = [
  {
    id: 1,
    name: '전체',
  },
  {
    id: 2,
    name: '프랑스',
  },
  {
    id: 3,
    name: '독일',
  },
];

const MainHeader = () => {
  const [categoryId, setCategoryId] = useState<number>(1);
  const [categoryName, setCategoryName] = useState<string>('전체');

  return (
    <div className="flex h-16 w-full flex-row items-center justify-between bg-white px-6">
      <Dropdown
        isCategory={true}
        dataList={categoryList}
        onSelectId={setCategoryId}
        onSelectName={setCategoryName}
      />
      <div className="flex flex-row gap-4">
        <IoSearch size={27} className="text-gray-400" />
        <FaRegBell size={26} className="text-gray-400" />
      </div>
    </div>
  );
};

export default MainHeader;
