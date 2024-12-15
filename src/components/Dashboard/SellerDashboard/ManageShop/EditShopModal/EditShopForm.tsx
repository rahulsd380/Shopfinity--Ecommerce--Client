/* eslint-disable @typescript-eslint/no-explicit-any */
import { IMAGES } from "@/assets";
import FileInput from "@/components/reusable/FileInput/FileInput";
import FormSubmitButton from "@/components/reusable/FormSubmitButton/FormSubmitButton";
import TextInput from "@/components/reusable/TextInput/TextInput";
import { useUpdateShopMutation } from "@/redux/features/Seller/sellerApi";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
type TEditShopForm = {
  setOpenModal:any;
  data:any;
}
const EditShopForm:React.FC<TEditShopForm> = ({ setOpenModal, data }) => {
  const id = data?._id
  const [updateShop, { isLoading }] = useUpdateShopMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    if (data) {
      // Automatically populate form with initial data
      reset({
        shopName: data?.shopName,
        supplierName: data?.supplierName,
        tagline: data?.tagline,
        sellerName: data?.sellerName,
        phoneNumber: data?.phoneNumber,
          street: data?.address?.street,
          city: data?.address?.city,
          state: data?.address?.state,
          country: data?.address?.country,
          zipCode: data?.address?.zipCode,
        
        shopDescription: data?.shopDescription,
      });
    }
  }, [data, reset]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageFile = e.target.files[0];
      setSelectedFile(imageFile);
    }
  };

  const handleUpdateShopDetails = async (data: any) => {
    try {
      const formData = new FormData();
      const sellerData = {
        bannerImg: data.bannerImg,
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

      const response = await updateShop({id, formData});

      if (response?.data?.message) {
        toast.success("Shop details updated.");
      }
    } catch (error) {
      console.error("Error during shop update:", error);
      toast.error("An error occurred while updating. Please try again.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleUpdateShopDetails)}
        className="flex flex-col gap-5 w-full"
      >
        <div className="relative">
          <Image
            src={IMAGES.bgImg}
            alt="bg-img"
            className="w-full max-h-[200px] object-cover rounded-t-xl"
          />

          {/* Shop logo */}
          <div className="size-20 rounded-full flex items-center justify-center border border-neutral-45 absolute top-4 right-4 bg-neutral-55">
            <Image
              src={IMAGES.logo}
              alt="bg-img"
              className="size-16 rounded-full object-cover"
            />
          </div>
        </div>

        <FileInput
          onChange={handleFileChange}
          label="Upload Your Shop Logo"
          name="shopLogo"
          register={register}
          // validation={{ required: "Logo is required" }}
          error={errors.shopLogo}
        />
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
            placeholder="Enter your supplier name"
            validation={{ required: "Enter your supplier name" }}
            register={register}
            error={errors.supplierName}
          />
        </div>
        <TextInput
          label="Tagline"
          name="tagline"
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
            placeholder="Enter your state"
            validation={{ required: "Enter your state" }}
            register={register}
            error={errors.state}
          />
          <TextInput
            label="Street"
            name="street"
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
            placeholder="Enter your city"
            validation={{ required: "Enter your city" }}
            register={register}
            error={errors.city}
          />
          <TextInput
            label="ZIP Code"
            name="zipCode"
            placeholder="Enter your zip code"
            validation={{ required: "Enter your zipCode" }}
            register={register}
            error={errors.zipCode}
          />
          <TextInput
            label="Country"
            name="country"
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
          <button
            onClick={() => setOpenModal(false)}
            type="submit"
            className="px-6 py-[14px] text-white bg-[#8D9095] rounded-xl text-lg leading-6 font-semibold"
          >
            No, Cancel
          </button>
          <FormSubmitButton label="Submit" isLoading={isLoading} classNames="w-fit" />
        </div>
      </form>
    </div>
  );
};

export default EditShopForm;
