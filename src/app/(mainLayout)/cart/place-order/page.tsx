"use client";
import { IMAGES } from "@/assets";
import Banner from "@/components/reusable/Banner/Banner";
import TextInput from "@/components/reusable/TextInput/TextInput";
import Container from "@/components/shared/Container/Container";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type TFormValues = {
  name: string;
  email: string;
  streetAddress: string;
  country: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  altPhoneNumber: string;
};
const OlaceOrder = () => {
  const [paymentMode, setPaymentMode] = useState<"cod" | "amarPay">("cod");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const handlePlaceOrder: SubmitHandler<TFormValues> = async (data) => {
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
      <Banner title="Complete Your Order Seamlessly" description="Fill in Billing Details and Review Your Summary Before Placing the Order" bgColor="bg-secondary-20" />
      <div className="">
        <form
          onSubmit={handleSubmit(handlePlaceOrder)}
          className="flex flex-col lg:flex-row gap-7 w-full mt-10"
        >
          <div className="w-full lg:w-[70%] p-4 rounded-xl">
            <h1 className="text-neutral-20 text-xl font-semibold pb-4 border-b border-neutral-200">
              Billing Information
            </h1>

            <div className="flex flex-col gap-7 mt-5">
              <div className="flex flex-col lg:flex-row items-center gap-5">
                <TextInput
                  label="Full Name"
                  name="name"
                  placeholder="Rahul Sutradhar"
                  validation={{ required: "Enter your name" }}
                  register={register}
                  error={errors.name}
                />
                <TextInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  validation={{ required: "Enter your email" }}
                  register={register}
                  error={errors.email}
                />
              </div>
              <TextInput
                label="Street Address"
                name="streetAddress"
                type="text"
                placeholder="Enter your street address"
                validation={{ required: "Enter your street address" }}
                register={register}
                error={errors.streetAddress}
              />

              <div className="flex flex-col lg:flex-row items-center gap-5">
                <TextInput
                  label="Country"
                  name="country"
                  type="text"
                  placeholder="Enter your country"
                  validation={{ required: "Enter your country" }}
                  register={register}
                  error={errors.country}
                />

                <TextInput
                  label="State"
                  name="state"
                  type="text"
                  placeholder="Enter your state"
                  validation={{ required: "Enter your state" }}
                  register={register}
                  error={errors.state}
                />

                <TextInput
                  label="Zip Code"
                  name="zipCode"
                  type="text"
                  placeholder="Enter your zip code"
                  validation={{ required: "Enter your zip code" }}
                  register={register}
                  error={errors.zipCode}
                />
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-5">
                <TextInput
                  label="Phone Number"
                  name="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  validation={{
                    required: "Enter your phone number",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit phone number",
                    },
                  }}
                  register={register}
                  error={errors.phoneNumber}
                />

                <TextInput
                  label="Alternative Phone Number"
                  name="altPhoneNumber"
                  type="tel"
                  placeholder="Enter an alternative phone number"
                  validation={{
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit phone number",
                    },
                  }}
                  register={register}
                  error={errors.altPhoneNumber}
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[30%] bg-neutral-55/20 p-4 rounded-xl border border-neutral-45 flex flex-col gap-3">
            <h1 className="text-neutral-20 text-xl font-semibold pb-4 border-b border-neutral-200">
              Order Summery
            </h1>

            {/* Product Card */}
            <div className="flex flex-col gap-3 my-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image src={IMAGES.product} alt="" className="size-10" />
                  <p className="text-neutral-10 font-medium">
                    Iphone 13 pro max
                  </p>
                </div>
                <p className="text-neutral-15 font-bold">$999</p>
              </div>
            </div>

            <div className="flex justify-between pb-4 border-b border-neutral-200">
              <span className="text-neutral-10 font-medium">Subtotal:</span>
              <span className="font-medium">$11.77</span>
            </div>

            <div className="flex justify-between pb-4 border-b border-neutral-200">
              <span className="text-neutral-10 font-medium">Shipping:</span>
              <span className="font-medium">$10</span>
            </div>

            <div className="flex justify-between font-bold border-b border-neutral-200 pb-4">
              <h1 className="text-neutral-20 font-semibold">Total:</h1>
              <span className="text-xl">$26.77</span>
            </div>

            <h1 className="text-neutral-20 text-xl font-semibold pb-4 border-b border-neutral-200 mt-5">
              Payment Method
            </h1>

            {/* Payment mode */}
            <div className="flex flex-col gap-5">
              {/* Cash on Delivery Option */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMode"
                  value="cod"
                  checked={paymentMode === "cod"}
                  onChange={() => setPaymentMode("cod")}
                  className={`appearance-none size-4 border-2 rounded-full cursor-pointer border-[#6E7883] checked:border-primary-10 checked:ring-2 checked:ring-primary-10 checked:ring-offset-2 checked:bg-primary-10`}
                />
                <span
                  className={`text-[16px] leading-5 ${
                    paymentMode === "cod" ? "text-[#424B54]" : "text-[#6E7883]"
                  }`}
                >
                  Cash on Delivery
                </span>
              </label>

              {/* Online Payment Option */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMode"
                  value="online"
                  checked={paymentMode === "amarPay"}
                  onChange={() => setPaymentMode("amarPay")}
                  className="appearance-none size-4 border-2 border-[#6E7883] rounded-full checked:border-primary-10 checked:ring-2 checked:ring-primary-10 checked:ring-offset-2 checked:bg-primary-10"
                />
                <span
                  className={`text-[16px] leading-5 ${
                    paymentMode === "amarPay"
                      ? "text-[#424B54]"
                      : "text-[#6E7883]"
                  }`}
                >
                  Amar Pay
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary-10 text-white font-semibold rounded-3xl mt-5"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default OlaceOrder;
