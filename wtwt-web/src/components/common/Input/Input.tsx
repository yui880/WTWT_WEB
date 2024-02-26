import { type InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isError?: boolean;
  placeholder?: string;
  secureTextEntry?: boolean;
}
const Input = ({
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
      <span className="text-sm font-normal text-text-inputLabel">{label}</span>
      <div
        className={`h-55 rounded-lg bg-primary-background px-3 py-4 font-normal ${className} ${isError ? 'border-2 border-primary-subMain' : ''}`}
      >
        <input
          type={secureTextEntry ? 'password' : 'text'}
          className="w-full bg-transparent text-base text-text-inputLabel outline-none placeholder:text-text-placeHolder"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;