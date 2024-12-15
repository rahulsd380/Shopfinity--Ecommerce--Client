/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError, FieldErrorsImpl, Merge, RegisterOptions, UseFormRegister } from "react-hook-form";

interface FileInputProps {
  label: string;
  name: string;
  validation?: RegisterOptions;
  register: UseFormRegister<any>;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  onChange?: any;
}

const FileInput: React.FC<FileInputProps> = ({
  label,
  name,
  validation,
  register,
  error,
  onChange
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[#6E7883] font-Poppins leading-5">
        {label}
        <span className="text-[#DE3C4B]">*</span>
      </label>
      <input
        type="file"
        id={name}
        onChange={onChange}
        className={`bg-[#6e788305] px-[18px] py-[14px] rounded-lg border ${
          error ? "border-[#DE3C4B]" : "border-[#6e78831f]"
        } focus:outline-none`}
        {...register(name, validation)}
      />
      {error && (
        <p className="text-[#DE3C4B] text-sm mt-1">{error.message as string}</p>
      )}
    </div>
  );
};

export default FileInput;
