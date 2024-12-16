import FormSubmitButton from "@/components/reusable/FormSubmitButton/FormSubmitButton";
import TextInput from "@/components/reusable/TextInput/TextInput";
import { TUser } from "@/components/shared/Navbar/Navbar";
import { useCurrentUser } from "@/redux/features/Auth/authSlice";
import { useAddReviewMutation } from "@/redux/features/Product/productApi";
import { useAppSelector } from "@/redux/hooks";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa6";
import { toast } from "sonner";

type TFormValues = {
  name: string;
  email: string;
  description: string;
};
const AddReviewForm = ({productId}:{productId:string}) => {
  // Authenticated user
  const user = useAppSelector(useCurrentUser) as TUser | null;
  const [addReview, {isLoading}] = useAddReviewMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const handleAddReview = async (data) => {
    if(rating < 1){
      toast.error("Please select a rating!");
      return;
    }
    try {
      const reviewData = {
        userId : user?._id,
        name : data.name,
        email : data.email,
        reviewText : data.description,
        rating,

      };

      const response =await addReview({productId, reviewData}).unwrap();
      if(response?.message){
        toast.success("Thanks for your review!!");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

 
  return (
    <div className="mt-10 border border-neutral-45 rounded-lg p-4">
       <h1 className="text-neutral-10 font-Inter text-xl font-semibold">
        Add a review
      </h1>
      <p className="text-xs text-neutral-60 font-normal font-Inter mt-2">Your email address will not be published. Required fields are marked *</p>
      <p className="text-sm text-neutral-60 font-normal font-Inter mt-5">Your rating *</p>
      <div className="flex items-center space-x-1 mt-1">
            {[...Array(5)].map((_, index) => {
                const starRating = index + 1;
                return (
                    <FaStar
                        key={starRating}
                        className={`cursor-pointer ${
                            starRating <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
                        }`}
                        size={17}
                        onClick={() => setRating(starRating)}
                        onMouseEnter={() => setHover(starRating)}
                        onMouseLeave={() => setHover(null)}
                    />
                );
            })}
        </div>
        {
          rating < 1 ?
          <p className="text-[#DE3C4B] text-sm mt-1">Select a rating</p>
          :
          ""
        }

      <form
        onSubmit={handleSubmit(handleAddReview)}
        className="flex flex-col gap-5 w-full mt-6"
      >
        <TextInput
          label="Name"
          name="name"
          placeholder="Grocery item"
          defaultValue={user?.name}
          validation={{ required: "Enter product name" }}
          register={register}
          error={errors.name}
        />
        <TextInput
          label="Email"
          name="email"
          placeholder="example@gmail.com"
          defaultValue={user?.email}
          validation={{ required: "Enter your email" }}
          register={register}
          error={errors.email}
        />

        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-[#6E7883] font-Poppins leading-5"
          >
            Your Review<span className="text-[#DE3C4B]">*</span>
          </label>
          <textarea
            rows={5}
            id="description"
            className={`bg-[#6e788305] px-[18px] py-[14px] rounded-lg border ${
              errors.description ? "border-[#DE3C4B]" : "border-[#6e78831f]"
            } focus:outline-none`}
            placeholder="Enter your review"
            {...register("description", {
              required: "Enter your review",
              maxLength: {
                value: 500,
                message: "Description cannot exceed 500 characters",
              },
            })}
          />
          {errors.description && (
            <p className="text-[#DE3C4B] text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <FormSubmitButton label="Submit" isLoading={isLoading} classNames="w-fit" />
      </form>
    </div>
  );
};

export default AddReviewForm;
