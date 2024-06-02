import { UseFormRegisterReturn } from 'react-hook-form';
import React from 'react';

interface CheckboxProps {
  children: React.ReactNode;
  register: UseFormRegisterReturn;
  checked: boolean;
  className?: string;
}

const Checkbox = ({ children, register, checked, className }: CheckboxProps) => {
  return (
    <label className="flex flex-row items-center justify-center gap-2.5">
      <div
        className={`flex h-7 w-7 items-center justify-center rounded-md border-2 transition ${checked ? 'border-primary-main' : 'border-gray-300'}`}
      >
        <input className="hidden" type="checkbox" checked={checked} {...register} />
        {checked && <div className="h-4 w-4 rounded-sm bg-primary-subMain transition" />}
      </div>
      <span className={`${className || 'text-md  text-text-general'} font-medium`}>{children}</span>
    </label>
  );
};

export default Checkbox;
