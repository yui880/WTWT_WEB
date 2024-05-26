import { type UseFormRegisterReturn } from 'react-hook-form';

interface InputForHookPropsType {
  label: string;
  register: UseFormRegisterReturn;
  placeholder: string;
  errorMessage: string | undefined;
  className?: string;
}

export const InputForHook = ({
  label,
  register,
  placeholder,
  errorMessage,
  className,
}: InputForHookPropsType) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <span className="text-sm text-text-inputLabel">{label}</span>
      <div
        className={`h-55 w-full rounded-xl bg-primary-background px-3 py-4 ${errorMessage !== undefined ? 'border-2 border-rose-400' : ''}`}
      >
        <input
          className="} w-full bg-transparent text-base text-text-inputLabel outline-none placeholder:font-light placeholder:text-text-placeHolder"
          placeholder={placeholder}
          {...register}
        />
      </div>
      <p className="mt-1 text-sm text-red-500">{errorMessage !== undefined && errorMessage}</p>
    </div>
  );
};
