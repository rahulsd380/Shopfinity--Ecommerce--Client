"use client";

import UploadImage from "@/components/Dashboard/SellerDashboard/AddProduct/UploadImage/UploadImage";
import TextInput from "@/components/reusable/TextInput/TextInput";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type TFormValues = {
  name: string;
  price: string;
  brand: string;
  stock: string;
  description: string;
  category: string; // Added category field
};

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);

  // Dummy category array
  const categories = [
    { id: "1", name: "Electronics" },
    { id: "2", name: "Clothing" },
    { id: "3", name: "Home Appliances" },
    { id: "4", name: "Sports" },
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImageFiles((prev) => [...prev, file]);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct: SubmitHandler<TFormValues> = async (data) => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("brand", data.brand);
      formData.append("stock", data.stock);
      formData.append("description", data.description);
      formData.append("vendorId", data.description);  // vendor id required
      formData.append("category", data.category);  // Append category

      imageFiles.forEach((file) => {
        formData.append(`images`, file);
      });

      // Make your API request here
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  return (
    <div className="font-Inter">
      <h1 className="text-neutral-10 font-Inter text-xl font-semibold">
        Add New Product
      </h1>
      <div className="flex gap-5 w-full mt-5">
        <div className="bg-white border border-neutral-45 p-5 rounded-xl w-[30%] h-fit">
          <UploadImage handleImageChange={handleImageChange} />

          {imagePreviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-5 mt-3">
              {imagePreviews.map((previewUrl) => (
                <div key={previewUrl} className="p-2 rounded-md border">
                  <Image
                    width={0}
                    height={0}
                    src={previewUrl}
                    alt="image"
                    className="size-16 object-cover object-center rounded-md"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-neutral-10 font-Inter mt-5">No image selected</p>
          )}
        </div>
        <div className="bg-white border border-neutral-45 p-5 rounded-xl w-[70%]">
          <form
            onSubmit={handleSubmit(handleAddProduct)}
            className="flex flex-col gap-5 w-full"
          >
            <TextInput
              label="Product Name"
              name="name"
              placeholder="Grocery item"
              validation={{ required: "Enter product name" }}
              register={register}
              error={errors.name}
            />
            {/* Category Dropdown */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="category"
                className="text-[#6E7883] font-Poppins leading-5"
              >
                Product Category<span className="text-[#DE3C4B]">*</span>
              </label>
              <select
                id="category"
                {...register("category", { required: "Select a product category" })}
                className={`bg-[#6e788305] px-[18px] py-[14px] rounded-lg border ${
                  errors.category ? "border-[#DE3C4B]" : "border-[#6e78831f]"
                } focus:outline-none`}
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-[#DE3C4B] text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>
            
            <TextInput
              label="Price"
              type="number"
              name="price"
              placeholder="$10"
              validation={{ required: "Enter product price" }}
              register={register}
              error={errors.price}
            />
            <TextInput
              label="Brand"
              name="brand"
              placeholder="Fresh"
              validation={{ required: "Enter product brand" }}
              register={register}
              error={errors.brand}
            />
            <TextInput
              label="Stock Limit"
              name="stock"
              placeholder="10"
              validation={{ required: "Enter product stock" }}
              register={register}
              error={errors.stock}
            />

            <div className="flex flex-col gap-2">
              <label
                htmlFor="description"
                className="text-[#6E7883] font-Poppins leading-5"
              >
                Product Description<span className="text-[#DE3C4B]">*</span>
              </label>
              <textarea
                rows={5}
                id="description"
                className={`bg-[#6e788305] px-[18px] py-[14px] rounded-lg border ${
                  errors.description ? "border-[#DE3C4B]" : "border-[#6e78831f]"
                } focus:outline-none`}
                placeholder="Enter product description"
                {...register("description", {
                  required: "Enter product description",
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

            

            <button
              type="submit"
              className="px-6 py-3 text-white bg-primary-10 rounded-xl font-semibold w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
