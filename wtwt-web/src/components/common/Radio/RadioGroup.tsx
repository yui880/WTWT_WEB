import React from 'react';

export interface RadioGroupProps {
  label?: string;
  children: React.ReactNode;
  className?: string;
}

export const RadioGroup = ({ label, className, children }: RadioGroupProps) => {
  return (
    <fieldset className={`flex flex-col gap-3 ${className}`}>
      <div>
        <legend className="text-sm font-semibold text-text-inputLabel">{label}</legend>
      </div>
      <div className="flex flex-row justify-start gap-6">{children}</div>
    </fieldset>
  );
};
