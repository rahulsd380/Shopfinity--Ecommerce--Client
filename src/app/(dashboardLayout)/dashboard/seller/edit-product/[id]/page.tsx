"use client";

import UploadImage from "@/components/Dashboard/SellerDashboard/AddProduct/UploadImage/UploadImage";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import TextInput from "@/components/reusable/TextInput/TextInput";
import {
  useGetSingleProductByIdQuery,
  useUpdateProductMutation,
} from "@/redux/features/Product/productApi";
import { ICONS } from "@/assets";
import { toast } from "sonner";
import FormSubmitButton from "@/components/reusable/FormSubmitButton/FormSubmitButton";
import { useParams } from "next/navigation";

type TFormValues = {
  name: string;
  price: string;
  brand: string;
  stock: string;
  description: string;
  category: string;
};

const EditProduct = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleProductByIdQuery(id);

  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TFormValues>();

  // State for images
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);

  // Dummy category array
  const categories = [
    { id: "1", name: "Electronics" },
    { id: "2", name: "Clothing" },
    { id: "3", name: "Home Appliances" },
    { id: "4", name: "Sports" },
  ];

  useEffect(() => {
    if (data?.data?.images) {
      setImagePreviews(data.data.images);
    }
    if (data?.data) {
      setValue("name", data.data.name);
      setValue("price", data.data.price);
      setValue("brand", data.data.brand);
      setValue("stock", data.data.stock);
      setValue("description", data.data.description);
      setValue("category", data.data.category);
    }
  }, [data?.data, setValue]);

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

  const handleRemoveImage = (index: number) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEditProduct: SubmitHandler<TFormValues> = async (data) => {
    try {
      const formData = new FormData();
      const productData = {
        name: data.name,
        description: data.description,
        price: data.price,
        brand: data.brand,
        stock: data.stock,
        category: data.category,
      };
      for (const image of imageFiles) {
        formData.append("files", image);
      }

      formData.append("data", JSON.stringify(productData));

      const response = await updateProduct({ id, formData });

      if (response?.data?.message) {
        toast.success("Product updated successfully.");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="font-Inter">
      <h1 className="text-neutral-10 font-Inter text-xl font-semibold">
        Edit Product Details
      </h1>
      <div className="flex gap-5 w-full mt-5">
        <div className="bg-white border border-neutral-45 p-5 rounded-xl w-[30%] h-fit">
          <UploadImage handleImageChange={handleImageChange} />

          {imagePreviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-5 mt-3">
              {imagePreviews.map((previewUrl, index) => (
                <div key={index} className="p-2 rounded-md border relative">
                  <Image
                    width={0}
                    height={0}
                    src={previewUrl}
                    alt="image"
                    quality={100}
                    className="size-16 object-cover object-center rounded-md"
                  />
                  <Image
                    onClick={() => handleRemoveImage(index)}
                    width={0}
                    height={0}
                    src={ICONS.cross}
                    alt="image"
                    quality={100}
                    className="size-5 absolute top-1 right-1 cursor-pointer"
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
            onSubmit={handleSubmit(handleEditProduct)}
            className="flex flex-col gap-5 w-full"
          >
            <TextInput
              defaultValue={data?.data?.name}
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
                defaultValue={data?.data?.category}
                {...register("category", {
                  required: "Select a product category",
                })}
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
              defaultValue={data?.data?.price}
              label="Price"
              type="number"
              name="price"
              placeholder="$10"
              validation={{ required: "Enter product price" }}
              register={register}
              error={errors.price}
            />
            <TextInput
              defaultValue={data?.data?.brand}
              label="Brand"
              name="brand"
              placeholder="Fresh"
              validation={{ required: "Enter product brand" }}
              register={register}
              error={errors.brand}
            />
            <TextInput
              defaultValue={data?.data?.stock}
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

            <FormSubmitButton
              label="Submit"
              isLoading={isUpdating || isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
