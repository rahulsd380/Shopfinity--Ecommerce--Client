"use client";
import TextInput from "@/components/reusable/TextInput/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateCategoryMutation } from "@/redux/features/Category/categoryApi";
import { toast } from "sonner";
import { useState } from "react";
import FormSubmitButton from "@/components/reusable/FormSubmitButton/FormSubmitButton";

type TFormValues = {
  name: string;
  description: string;
  image: File | null;
};

type ConfirmationModalProps = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
};

const CreateCategory: React.FC<ConfirmationModalProps> = ({
  openModal,
  setOpenModal,
}) => {
  const [createCategory, {isLoading}] = useCreateCategoryMutation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TFormValues>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageFile = e.target.files[0];
      setSelectedFile(imageFile);
    }
  };

  const handleCreateCategory: SubmitHandler<TFormValues> = async (data) => {
    try {
      const formData = new FormData();

      const categoryData = {
        name : data.name,
        description : data.description
      }

      if (selectedFile) {
        formData.append("file", selectedFile);
      }

      formData.append("data", JSON.stringify(categoryData));

      const response =await createCategory(formData);
      console.log(response);
      if(response?.data?.message){
        toast.success("Category created successfully.");
      setOpenModal(false);
      reset();
      }
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  return (
    <div className="mx-auto flex w-72 items-center justify-center">
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full max-w-[600px] max-h-[550px] overflow-y-auto p-5 rounded-3xl bg-white drop-shadow-2xl ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className="flex flex-col gap-8">
            <h1 className="text-[#293241] font-Poppins text-xl font-semibold border-b border-[#6e78831f] pb-4">
              Create New Category
            </h1>

            <form
              onSubmit={handleSubmit(handleCreateCategory)}
              className="flex flex-col gap-5 w-full"
            >
              <TextInput
                label="Category Name"
                name="name"
                placeholder="Grocery"
                validation={{ required: "Enter category name" }}
                register={register}
                error={errors.name}
              />

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="description"
                  className="text-[#6E7883] font-Poppins leading-5"
                >
                  Description<span className="text-[#DE3C4B]">*</span>
                </label>
                <textarea
                  rows={5}
                  id="description"
                  className={`bg-[#6e788305] px-[18px] py-[14px] rounded-lg border ${
                    errors.description
                      ? "border-[#DE3C4B]"
                      : "border-[#6e78831f]"
                  } focus:outline-none`}
                  placeholder="Enter product description"
                  {...register("description", {
                    required: "Enter product description",
                    maxLength: {
                      value: 500,
                      message: "Description cannot exceed 500 characters",
                    },
                  })}
                />
                {errors.description && (
                  <p className="text-[#DE3C4B] text-sm mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* File Input for Image */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="image"
                  className="text-[#6E7883] font-Poppins leading-5"
                >
                  Image<span className="text-[#DE3C4B]">*</span>
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  className={`bg-[#6e788305] px-[18px] py-[14px] rounded-lg border ${
                    errors.image ? "border-[#DE3C4B]" : "border-[#6e78831f]"
                  } focus:outline-none`}
                  {...register("image", {
                    required: "Please upload an image",
                  })}
                  onChange={handleFileChange}
                />
                {errors.image && (
                  <p className="text-[#DE3C4B] text-sm mt-1">
                    {errors.image.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-end gap-4">
                <button
                  onClick={() => setOpenModal(false)}
                  type="button"
                  className="px-6 py-[14px] text-white bg-[#8D9095] rounded-xl text-lg leading-6 font-semibold"
                >
                  No, Cancel
                </button>
                <FormSubmitButton label="Submit" isLoading={isLoading} classNames="w-fit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
