/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";

interface TextInputProps {
  label: string;
  name: string;
  placeholder?: string;
  validation?: RegisterOptions;
  type?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  placeholder,
  validation,
  type = "text",
  register,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name} className="text-[#6E7883] font-Poppins leading-5">
        {label}
        <span className="text-[#DE3C4B]">*</span>
      </label>
      <input
        type={type}
        id={name}
        className={`bg-[#6e788305] px-[18px] py-[14px] rounded-lg border ${
          error ? "border-[#DE3C4B]" : "border-[#6e78831f]"
        } focus:outline-none`}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {error && (
        <p className="text-[#DE3C4B] text-sm mt-1">{error.message as string}</p>
      )}
    </div>
  );
};

export default TextInput;
