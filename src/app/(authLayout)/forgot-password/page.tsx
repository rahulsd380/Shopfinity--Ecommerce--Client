"use client";
import { IMAGES } from "@/assets";
import CircleLoader from "@/components/Loaders/CircleLoader/CircleLoader";
import TextInput from "@/components/reusable/TextInput/TextInput";
import { useForgetPasswordMutation } from "@/redux/features/Auth/authApi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type TFormValues = {
  email: string;
};

const ForgotPassword = () => {
   const router = useRouter();
  const [forgetPassword, { isLoading }] = useForgetPasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const handleForgetPassword = async (email: TFormValues) => {
    try {
      const response = await forgetPassword(email).unwrap();
      console.log(response);
      toast.success("Please check your email.");
      router.push("/reset-password");
    } catch (err) {
      console.log(err);
    }
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
        onSubmit={handleSubmit(handleForgetPassword)}
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
          className={`${
            isLoading ? "animate-pulse" : "animate-none"
          } px-6 py-3 text-white bg-primary-10 rounded-xl font-semibold w-full flex items-center justify-center`}
        >
          {isLoading ? <CircleLoader /> : "Get OTP"}
        </button>

        <div className="text-neutral-10 font-Poppins text-sm font-normal mx-auto">
          Back to{" "}
          <Link href={"/login"} className="text-primary-10 font-medium">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
