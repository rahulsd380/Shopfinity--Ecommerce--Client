"use client"
import { IMAGES } from "@/assets";
import TextInput from "@/components/reusable/TextInput/TextInput";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

type TFormValues = {
    email: string;
    password: string;
  };




const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<TFormValues>();
    
      const handleLogin: SubmitHandler<TFormValues> = async (data) => {
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
        <div className="w-full flex flex-col gap-20 items-center">
        <Link href={"/"} className="hidden xl:flex items-center gap-3">
          <Image src={IMAGES.logo} alt="shopfinity" className="w-20" />
          <div>
            <h1 className="text-primary-10 font-Sora text-2xl font-bold">
              Shopfinity
            </h1>
            <h1 className="text-neutral-20 font-Inter text-xs">
              Find - Pick and Shop.
            </h1>
          </div>
        </Link>

        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-5 w-full"
        >
          <TextInput
            label="Please enter your registered email address"
            name="email"
            placeholder="john@doe.com"
            validation={{ required: "Enter your email" }}
            register={register}
            error={errors.email}
          />

          <button
            type="submit"
            className="px-6 py-3 text-white bg-primary-10 rounded-xl font-semibold w-full"
          >
            Get OTP
          </button>

          <div className="text-neutral-10 font-Poppins text-sm font-normal mx-auto">
            Back to{" "}
            <Link href={"/signup"} className="text-primary-10 font-medium">
              Login
            </Link>
          </div>
        </form>
      </div>
    );
};

export default ForgotPassword;