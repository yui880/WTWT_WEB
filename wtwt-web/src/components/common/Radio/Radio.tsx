import React, { type ChangeEventHandler } from 'react';

export interface RadioProps {
  children: React.ReactNode;
  value: string;
  name: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export const Radio = ({
  children,
  value,
  name,
  defaultChecked,
  disabled,
  checked,
  onChange,
}: RadioProps) => {
  return (
    <label className="flex flex-row items-center justify-center gap-3 ">
      <div
        className={`flex h-7 w-7 items-center justify-center rounded-full border-2 transition ${checked ? 'border-primary-main' : 'border-gray-300'}`}
      >
        <input
          className="hidden"
          type="radio"
          value={value}
          name={name}
          checked={checked}
          onChange={onChange}
          defaultChecked={defaultChecked}
          disabled={disabled}
        />
        {checked && <div className="h-4 w-4 rounded-full bg-primary-subMain transition" />}
      </div>
      <span className={`text-md text-text-general ${checked ? 'font-bold' : 'font-medium'}`}>
        {children}
      </span>
    </label>
  );
};
