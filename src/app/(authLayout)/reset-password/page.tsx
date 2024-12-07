"use client";
import Container from "@/components/shared/Container/Container";
import React from "react";
import TextInput from "../../../components/reusable/TextInput/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/assets";

type TFormValues = {
  password: string;
  confirmPassword: string;
};

const ResetPassword = () => {
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
    <Container>
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
              label="Password"
              name="password"
              type="password"
              placeholder="Must be at least 6 Characters"
              validation={{ required: "Enter your password" }}
              register={register}
              error={errors.password}
            />
            <TextInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Must be at least 6 Characters"
              validation={{ required: "Re-enter your password" }}
              register={register}
              error={errors.confirmPassword}
            />

          <button
            type="submit"
            className="px-6 py-3 text-white bg-primary-10 rounded-xl font-semibold w-full"
          >
            Reset
          </button>

          <div className="text-neutral-10 font-Poppins text-sm font-normal mx-auto">
            Back to?{" "}
            <Link href={"/login"} className="text-primary-10 font-medium">
              Login
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ResetPassword;
