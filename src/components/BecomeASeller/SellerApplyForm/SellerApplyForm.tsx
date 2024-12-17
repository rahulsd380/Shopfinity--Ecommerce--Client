"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import FileInput from "@/components/reusable/FileInput/FileInput";
import FormSubmitButton from "@/components/reusable/FormSubmitButton/FormSubmitButton";
import TextInput from "@/components/reusable/TextInput/TextInput";
import { TUser } from "@/components/shared/Navbar/Navbar";
import { useCurrentUser } from "@/redux/features/Auth/authSlice";
import { useBecomeSellerMutation } from "@/redux/features/Seller/sellerApi";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type TFormValues = {
  userId: string;
  shopLogo: any;
  // bannerImg: any;
  sellerName: string;
  phoneNumber: string;
  shopName: string;
  tagline: string;
  supplierName: string;
  city: string;
  street: string;
  state: string;
  country: string;
  zipCode: string;
  shopDescription: string;
};
const SellerApplyForm = () => {
  const router = useRouter();
  const user = useAppSelector(useCurrentUser) as TUser | null;
  
  const [becomeSeller, { isLoading }] = useBecomeSellerMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageFile = e.target.files[0];
      setSelectedFile(imageFile);
    }
  };

  const handleBecomeSeller: SubmitHandler<TFormValues> = async (data) => {
    try {
      const formData = new FormData();
      const sellerData = {
        userId: user?._id,
        // bannerImg: data.bannerImg,
        sellerName: data.sellerName,
        phoneNumber: data.phoneNumber,
        shopName: data.shopName,
        tagline: data.tagline,
        supplierName: data.supplierName,
        address: {
          street: data.street,
          city: data.city,
          state: data.state,
          country: data.country,
          zipCode: data.zipCode,
        },
        shopDescription: data.shopDescription,
      };

      if (selectedFile) {
        formData.append("file", selectedFile);
      }
      formData.append("data", JSON.stringify(sellerData));

      const response = await becomeSeller(formData);

      console.log(response);

      if (response?.data?.message) {
        toast.success(
          "Seller registration completed. Please wait for admin approval."
        );
        router.push("/")
      }
    } catch (error) {
      console.error("Error during seller registration:", error);
      toast.error(
        "An error occurred while registering the seller. Please try again."
      );
    }
  };

  return (
    <div className="p-5 mt-5">
      <form
        onSubmit={handleSubmit(handleBecomeSeller)}
        className="flex flex-col gap-5 w-full"
      >
        <FileInput
          onChange={handleFileChange}
          label="Upload Your Shop Logo"
          name="shopLogo"
          register={register}
          validation={{ required: "Logo is required" }}
          error={errors.shopLogo}
        />
        {/* <FileInput
          label="Upload Shop Banner Image"
          name="bannerImg"
          register={register}
          validation={{ required: "Banner image is required" }}
          error={errors.bannerImg}
        /> */}
        <div className="flex flex-col md:flex-row items-center gap-5 w-full">
          <TextInput
            label="Shop Name"
            name="shopName"
            placeholder="Your shop name"
            validation={{ required: "Enter your shop name" }}
            register={register}
            error={errors.shopName}
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
            name="phoneNumber"
            placeholder="Your contact number"
            validation={{ required: "Enter your contact number" }}
            register={register}
            error={errors.phoneNumber}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5 w-full">
          <TextInput
            label="State"
            name="state"
            type="state"
            placeholder="Enter your state"
            validation={{ required: "Enter your state" }}
            register={register}
            error={errors.state}
          />
          <TextInput
            label="Street"
            name="street"
            type="street"
            placeholder="Enter your street name"
            validation={{ required: "Enter your street name" }}
            register={register}
            error={errors.street}
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
            label="ZIP Code"
            name="zipCode"
            type="zipCode"
            placeholder="Enter your zip code"
            validation={{ required: "Enter your zipCode" }}
            register={register}
            error={errors.zipCode}
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
            htmlFor="shopDescription"
            className="text-[#6E7883] font-Poppins leading-5"
          >
            About Your Shop<span className="text-[#DE3C4B]">*</span>
          </label>
          <textarea
            rows={5}
            id="shopDescription"
            className={`bg-[#6e788305] px-[18px] py-[14px] rounded-lg border ${
              errors.shopDescription ? "border-[#DE3C4B]" : "border-[#6e78831f]"
            } focus:outline-none`}
            placeholder="Enter about your shop"
            {...register("shopDescription", {
              required: "Enter about your shop",
              maxLength: {
                value: 500,
                message: "Shop description cannot exceed 500 characters",
              },
            })}
          />
          {errors.shopDescription && (
            <p className="text-[#DE3C4B] text-sm mt-1">
              {errors.shopDescription.message as string}
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
          <FormSubmitButton
            label="Submit"
            isLoading={isLoading}
            classNames="w-fit"
          />
        </div>
      </form>
    </div>
  );
};

export default SellerApplyForm;
