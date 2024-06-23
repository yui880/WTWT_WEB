import { type Control, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { type IProfileForm } from '@component/components/auth/Profile';
import 'react-datepicker/dist/react-datepicker.css';

interface DateSelectorPropsType {
  label: string;
  control: Control<IProfileForm>;
}

export const DateSelector = ({ label, control }: DateSelectorPropsType) => {
  return (
    <div className="mt-3 flex flex-col gap-1">
      <span className="text-sm text-text-inputLabel">{label}</span>
      <div className="h-55 w-full rounded-xl bg-primary-background px-3 py-4 ">
        <Controller
          render={({ field }) => (
            <DatePicker
              closeOnScroll={true}
              placeholderText="날짜를 선택해주세요"
              className="bg-transparent outline-none placeholder:font-light placeholder:text-text-placeHolder"
              onChange={field.onChange}
              dateFormat="yyyy-MM-dd"
            />
          )}
          name="birthdate"
          control={control}
        />
      </div>
    </div>
  );
};
