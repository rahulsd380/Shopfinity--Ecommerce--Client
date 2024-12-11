"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import FileInput from "@/components/reusable/FileInput/FileInput";
import TextInput from "@/components/reusable/TextInput/TextInput";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

type TFormValues = {
  shopLogo: any;
  bannerImg: any;
  sellerName: string;
  contactNumber: string;
  name: string;
  tagline: string;
  supplierName: string;
  city: string;
  country: string;
  description : string;
};
const SellerApplyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const handleEditShop: SubmitHandler<TFormValues> = async (data) => {
    // try {
    //   const loginData = {
    //     email: data.email,
    //     password: data.password,
    //   };
    //   const response = await axiosInstance.post("/auth/login", loginData);
    //   console.log(response.data);
    //   toast.success("Welcome back!");
    // } catch (error) {
    //   toast.error("Something went wrong! Please try again.");
    // }
  };

  const isLoading = false;
  return (
    <div className="p-5 mt-5">
      <form
        onSubmit={handleSubmit(handleEditShop)}
        className="flex flex-col gap-5 w-full"
      >
        <FileInput
          label="Upload Your Shop Logo"
          name="shopLogo"
          register={register}
          validation={{ required: "Logo is required" }}
          error={errors.shopLogo}
        />
        <FileInput
          label="Upload Shop Banner Image"
          name="bannerImg"
          register={register}
          validation={{ required: "Banner image is required" }}
          error={errors.bannerImg}
        />
        <div className="flex flex-col md:flex-row items-center gap-5 w-full">
        <TextInput
          label="Shop Name"
          name="name"
          placeholder="Your shop name"
          validation={{ required: "Enter your shop name" }}
          register={register}
          error={errors.name}
        />
        <TextInput
          label="Supplier Name"
          name="supplierName"
          type="supplierName"
          placeholder="Enter your supplier name"
          validation={{ required: "Enter your supplier name" }}
          register={register}
          error={errors.supplierName}
        />
        </div>
        <TextInput
          label="Tagline"
          name="tagline"
          type="tagline"
          placeholder="Enter your tagline"
          validation={{ required: "Enter your tagline" }}
          register={register}
          error={errors.tagline}
        />
        <div className="flex flex-col md:flex-row items-center gap-5 w-full">
        <TextInput
          label="Seller Name"
          name="sellerName"
          placeholder="Seller Name"
          validation={{ required: "Enter seller name" }}
          register={register}
          error={errors.sellerName}
        />
        <TextInput
          label="Contact Number"
          name="contactNumber"
          placeholder="Your contact number"
          validation={{ required: "Enter your contact number" }}
          register={register}
          error={errors.contactNumber}
        />
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-5 w-full">
        <TextInput
          label="City"
          name="city"
          type="city"
          placeholder="Enter your city"
          validation={{ required: "Enter your city" }}
          register={register}
          error={errors.city}
        />
        <TextInput
          label="Country"
          name="country"
          type="country"
          placeholder="Enter your country name"
          validation={{ required: "Enter your country name" }}
          register={register}
          error={errors.country}
        />
        </div>

        <div className="flex flex-col gap-2">
              <label
                htmlFor="description"
                className="text-[#6E7883] font-Poppins leading-5"
              >
                About Your Shop<span className="text-[#DE3C4B]">*</span>
              </label>
              <textarea
                rows={5}
                id="description"
                className={`bg-[#6e788305] px-[18px] py-[14px] rounded-lg border ${
                  errors.description ? "border-[#DE3C4B]" : "border-[#6e78831f]"
                } focus:outline-none`}
                placeholder="Enter about your shop"
                {...register("description", {
                  required: "Enter about your shop",
                  maxLength: {
                    value: 500,
                    message: "Description cannot exceed 500 characters",
                  },
                })}
              />
              {errors.description && (
                <p className="text-[#DE3C4B] text-sm mt-1">
                  {errors.description.message as string}
                </p>
              )}
            </div>

        <div className="flex items-center justify-end gap-4">
          <Link
            href={"/"}
            className="px-6 py-[14px] text-white bg-[#8D9095] rounded-xl text-lg leading-6 font-semibold"
          >
            No, Cancel
          </Link>
          <button
            type="submit"
            className="px-6 py-[14px] text-white bg-primary-10 rounded-xl text-lg leading-6 font-semibold"
          >
            {isLoading ? (
              <div className="flex items-center gap-1">
                <p>Loading</p>
                <div className="size-6 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-yellow-900 border-white"></div>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SellerApplyForm;
