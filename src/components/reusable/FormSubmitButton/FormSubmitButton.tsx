import CircleLoader from "@/components/Loaders/CircleLoader/CircleLoader";

const FormSubmitButton = ({
  label,
  isLoading,
}: {
  label: string;
  isLoading: boolean;
}) => {
  return (
    <button
      type="submit"
      className={`${
        isLoading ? "animate-pulse" : "animate-none"
      } px-6 py-3 text-white bg-primary-10 rounded-xl font-semibold w-full flex items-center justify-center`}
    >
      {isLoading ? <CircleLoader /> : label}
    </button>
  );
};

export default FormSubmitButton;
