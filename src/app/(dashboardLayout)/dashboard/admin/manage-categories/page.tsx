/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ICONS } from "@/assets";
import { TbCategoryPlus } from "react-icons/tb";
import CreateCategory from "@/components/Dashboard/AdminDashboard/ManageCategories/CreateCategory/CreateCategory";
import {
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from "@/redux/features/Category/categoryApi";
import UpdateCategoryForm from "./../../../../../components/Dashboard/AdminDashboard/ManageCategories/UpdateCategoryForm/UpdateCategoryForm";
import { toast } from "sonner";

export type TCategory = {
  _id: string;
  name: string;
  description: string;
  image: string;
};

const ManageCategories = () => {
  const { data } = useGetAllCategoriesQuery({});
  const [deleteCategory] = useDeleteCategoryMutation();

  const [categoryData, setCategoryData] = useState<TCategory | null>(null);
  const [openCreateCategoryModal, setOpenCreateCategoryModal] = useState(false);
  const [openUpdateCategoryModal, setOpenUpdateCategoryModal] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (_id: string) => {
    setActiveDropdown((prev) => (prev === _id ? null : _id));
    console.log(_id);
  };

  const handleDeleteCategory = async (id: string) => {
    toast.promise(deleteCategory(id), {
      loading: "Deleting category...",
      success: "Category deleted successfully.",
      error: "Something went wrong.",
    });
  };

  return (
    <div className="mt-8 min-h-screen">
      <div className="flex flex-col gap-3 md:gap-0 md:flex-row items-start md:items-center justify-between">
        <h1 className="text-neutral-10 font-Inter text-xl font-semibold">
          Manage Categories
        </h1>
        <button
          onClick={() => setOpenCreateCategoryModal(true)}
          className="w-full sm:w-fit bg-primary-10 px-4 py-3 rounded text-white font-Inter font-medium flex items-center gap-2"
        >
          <TbCategoryPlus />
          Add New Category
        </button>
      </div>

      {/* Wrapping the table in a scrollable div */}
      <div className="overflow-x-auto mt-5">
        <table className="bg-white w-full rounded-3xl shadow border-collapse">
          <thead className="bg-gray-100">
            <tr className="bg-white border-b">
              <th className="text-[#293241] font-Poppins font-medium p-4 text-left rounded-tl-3xl">
                Category ID
              </th>
              <th className="text-[#293241] font-Poppins font-medium p-4 text-left rounded-tl-3xl">
                Image
              </th>
              <th className="text-[#293241] font-Poppins font-medium p-4 text-left">
                Category Name
              </th>
              <th className="text-[#293241] font-Poppins font-medium p-4 text-left">
                Description
              </th>
              <th className="text-[#293241] font-Poppins font-medium p-4 text-left rounded-tr-3xl">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.categories.map((category: TCategory) => (
              <tr key={category._id} className="border-b">
                <td className="text-[#6E7883] font-Poppins p-4">
                  {category._id}
                </td>
                <td className="text-[#6E7883] font-Poppins p-4">
                  <img
                    src={category?.image}
                    alt="category"
                    className="size-16 rounded-lg"
                  />
                </td>
                <td className="text-[#6E7883] font-Poppins p-4">
                  {category.name}
                </td>
                <td className="text-[#6E7883] font-Poppins p-4">
                  {category.description.length > 50
                    ? `${category.description.slice(0, 30)}...`
                    : category.description}
                </td>
                <td className="text-[#6E7883] font-Poppins p-4 relative">
                  <button
                    onClick={() => handleDropdownToggle(category._id)}
                    className="p-2 hover:bg-gray-100 rounded-md"
                  >
                    <Image
                      src={ICONS.threeDots}
                      alt="three-dots"
                      className="size-6"
                    />
                  </button>

                  {activeDropdown === category._id && (
                    <div className="absolute right-0 mt-2 w-[180px] bg-white border rounded-2xl shadow-lg z-10 p-2">
                      <button
                        onClick={() => {
                          setCategoryData(category);
                          setOpenUpdateCategoryModal(true);
                        }}
                        className="block text-left w-full p-[10px] text-sm text-[#3B82F6] hover:bg-blue-100"
                      >
                        Edit Category
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(category._id)}
                        className="block text-left w-full p-[10px] text-sm text-[#DE3C4B] hover:bg-red-100 mt-1"
                      >
                        Delete Category
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data?.data?.categories?.length === 0 && (
        <p className="text-[#6E7883] font-Poppins text-center w-full mt-4">
          No Categories Available
        </p>
      )}

      <CreateCategory
        openModal={openCreateCategoryModal}
        setOpenModal={setOpenCreateCategoryModal}
      />
      <UpdateCategoryForm
        setActiveDropdown={setActiveDropdown}
        categoryData={categoryData}
        openModal={openUpdateCategoryModal}
        setOpenModal={setOpenUpdateCategoryModal}
      />
    </div>
  );
};

export default ManageCategories;
