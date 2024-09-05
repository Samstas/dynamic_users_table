import { TInputField } from "../types/table";

type TInputFieldProps = {
  field: TInputField;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export function InputField({ field, onChange }: TInputFieldProps) {
  return (
    <input
      type={field.type}
      name={field.name}
      placeholder={field.placeholder}
      value={field.value}
      onChange={onChange}
      className="p-2  rounded-md focus:outline-none focus:ring-2 bg-cwhite focus:ring-black/80 "
    />
  );
}
