import React from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';

export interface RadioForHookProps {
  children: React.ReactNode;
  register: UseFormRegisterReturn;
  checked: boolean;
  value: string;
  className?: string;
}
export const RadioForHook = ({
  children,
  register,
  checked,
  value,
  className,
}: RadioForHookProps) => {
  return (
    <label className="flex flex-row items-center justify-center gap-3 ">
      <div
        className={`flex h-7 w-7 items-center justify-center rounded-full border-2 transition ${checked ? 'border-primary-main' : 'border-gray-300'}`}
      >
        <input className="hidden" type="radio" value={value} checked={checked} {...register} />
        {checked && <div className="h-4 w-4 rounded-full bg-primary-subMain transition" />}
      </div>
      <span
        className={`${className || 'text-md  text-text-general'} ${checked ? 'font-bold' : 'font-medium'}`}
      >
        {children}
      </span>
    </label>
  );
};

export default RadioForHook;
