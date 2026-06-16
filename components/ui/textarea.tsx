import { ReactNode } from "react";

interface FormFieldProps {
  label: ReactNode;
  children: ReactNode;
}

/** Wrapper label + input field yang berulang di form contact */
export function FormField({ label, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-slate-200 text-sm font-medium">{label}</label>
      {children}
    </div>
  );
}
