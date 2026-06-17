import { ReactNode } from "react";

interface FormFieldProps {
  label: ReactNode;
  children: ReactNode;
}
export function FormField({ label, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-text text-sm font-bold">{label}</label>
      {children}
    </div>
  );
}
