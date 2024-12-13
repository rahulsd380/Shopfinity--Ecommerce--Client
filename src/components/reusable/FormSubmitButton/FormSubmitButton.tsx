import CircleLoader from "@/components/Loaders/CircleLoader/CircleLoader";

const FormSubmitButton = ({
  label,
  isLoading,
  classNames = "w-full"
}: {
  label: string;
  isLoading: boolean;
  classNames?:string;
}) => {
  return (
    <button
      type="submit"
      className={`${
        isLoading ? "animate-pulse" : "animate-none"
      } px-6 py-3 text-white bg-primary-10 rounded-xl font-semibold flex items-center justify-center ${classNames}`}
    >
      {isLoading ? <CircleLoader /> : label}
    </button>
  );
};

export default FormSubmitButton;
