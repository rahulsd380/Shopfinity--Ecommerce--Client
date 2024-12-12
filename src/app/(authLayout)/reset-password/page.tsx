"use client";
import Container from "@/components/shared/Container/Container";
import React from "react";
import TextInput from "../../../components/reusable/TextInput/TextInput";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/assets";
import { useResetPasswordMutation } from "@/redux/features/Auth/authApi";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import CircleLoader from "@/components/Loaders/CircleLoader/CircleLoader";

type TFormValues = {
  email: string;
  newPassword: string;
};

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const handleResetPassword = async (data: TFormValues) => {
    const resetPasswordData = {
      email: data.email,
      newPassword: data.newPassword,
    };
    console.log(resetPasswordData);

    try {
      const response = await resetPassword({
        token,
        resetPasswordData,
      }).unwrap();
      console.log(response);
      router.push("/login");
      toast.success("Password reset successfully.");
    } catch (err) {
      console.log(err);
      toast.error("Error resetting password.");
    }
  };

  if (!token) {
    return <p>Error: Token is missing</p>;
  }
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
          onSubmit={handleSubmit(handleResetPassword)}
          className="flex flex-col gap-5 w-full"
        >
          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="Must be at least 6 Characters"
            validation={{ required: "Enter your email" }}
            register={register}
            error={errors.email}
          />
          <TextInput
            label="New Password"
            name="newPassword"
            type="password"
            placeholder="Must be at least 6 Characters"
            validation={{ required: "Enter your password" }}
            register={register}
            error={errors.newPassword}
          />

          <button
            type="submit"
            className={`${
              isLoading ? "animate-pulse" : "animate-none"
            } px-6 py-3 text-white bg-primary-10 rounded-xl font-semibold w-full flex items-center justify-center`}
          >
            {isLoading ? <CircleLoader /> : "Reset"}
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
