"use client";
import Container from "@/components/shared/Container/Container";
import React from "react";
import TextInput from "../../../components/reusable/TextInput/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { ICONS, IMAGES } from "@/assets";

type TFormValues = {
  email: string;
  password: string;
};

const Login = () => {
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
            label="Email"
            name="email"
            placeholder="john@doe.com"
            validation={{ required: "Enter your email" }}
            register={register}
            error={errors.email}
          />
          <div>
            <TextInput
              label="Password"
              name="password"
              type="password"
              placeholder="Must be at least 6 Characters"
              validation={{ required: "Enter your password" }}
              register={register}
              error={errors.password}
            />

            <div className="flex justify-end mt-[6px]">
              <Link
                href={"/forgot-password"}
                className="text-primary-10 font-Poppins text-sm font-medium hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-3 text-white bg-primary-10 rounded-xl font-semibold w-full"
          >
            Login
          </button>

          <div className="text-neutral-10 font-Poppins text-sm font-normal mx-auto">
            New to Shopfinity?{" "}
            <Link href={"/signup"} className="text-primary-10 font-medium">
              Signup
            </Link>
          </div>

          <div className="flex items-center gap-2 w-[80%] mx-auto">
            <div className="h-[1px] bg-neutral-40 w-full"></div>
            <p className="text-center text-neutral-30 capitalize">Or</p>
            <div className="h-[1px] bg-neutral-40 w-full"></div>
          </div>

          <p className="text-center text-neutral-10 capitalize">
            Continue with social media
          </p>

          <div className="flex items-center gap-3 justify-center">
            <button className="border border-neutral-45 p-2 flex items-center justify-center rounded-md hover:bg-neutral-45/30 transition duration-300">
              <Image src={ICONS.google} alt="star-icon" className="size-5" />
            </button>
            <button className="border border-neutral-45 p-2 flex items-center justify-center rounded-md hover:bg-neutral-45/30 transition duration-300">
              <Image src={ICONS.facebook} alt="star-icon" className="size-5" />
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
