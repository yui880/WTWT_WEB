import { type InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isError?: boolean;
  placeholder?: string;
  secureTextEntry?: boolean;
}
export const Input = ({
  label,
  value,
  onChange,
  placeholder,
  className,
  isError = false,
  secureTextEntry = false,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm text-text-inputLabel">{label}</span>
      <div
        className={`h-55 rounded-xl bg-primary-background px-3 py-4 ${className} ${isError ? 'border-2 border-primary-subMain' : ''}`}
      >
        <input
          type={secureTextEntry ? 'password' : 'text'}
          className="w-full bg-transparent text-base text-text-inputLabel outline-none placeholder:font-light placeholder:text-text-placeHolder"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
