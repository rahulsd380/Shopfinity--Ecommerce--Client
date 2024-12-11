/* eslint-disable @typescript-eslint/no-explicit-any */
import { IMAGES } from "@/assets";
import FileInput from "@/components/reusable/FileInput/FileInput";
import TextInput from "@/components/reusable/TextInput/TextInput";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

type TFormValues = {
  shopLogo: any;
  bannerImg: any;
  name: string;
  tagline: string;
  supplierName: string;
  city: string;
  country: string;
};
const EditShopForm = () => {
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
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleEditShop)}
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
        <TextInput
          label="Shop Name"
          name="name"
          placeholder="Your shop name"
          validation={{ required: "Enter your shop name" }}
          register={register}
          error={errors.name}
        />
        <TextInput
          label="Tagline"
          name="tagline"
          type="tagline"
          placeholder="Enter your tagline"
          validation={{ required: "Enter your tagline" }}
          register={register}
          error={errors.tagline}
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
      </form>
    </div>
  );
};

export default EditShopForm;
