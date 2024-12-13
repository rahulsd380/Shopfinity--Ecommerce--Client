"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ICONS } from "@/assets";
import { TbCategoryPlus } from "react-icons/tb";
import CreateCategory from "@/components/Dashboard/AdminDashboard/CreateCategory/CreateCategory";
import { useGetAllCategoriesQuery } from "@/redux/features/Category/categoryApi";

type TCategory = {
  _id: string;
  name: string;
  description: string;
};

const ManageCategories = () => {
   const {data} = useGetAllCategoriesQuery({});
    console.log(data);

  const [openCreateCategoryModal, setOpenCreateCategoryModal] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (_id: string) => {
    setActiveDropdown((prev) => (prev === _id ? null : _id));
    console.log(_id);
  };

  return (
    <div className="mt-8 overflow-x-auto min-h-screen">
      <div className="flex items-center justify-between">
      <h1 className="text-neutral-10 font-Inter text-xl font-semibold">
        Manage Categories
      </h1>
      <button onClick={() => setOpenCreateCategoryModal(true)} className="bg-primary-10 px-4 py-3 rounded text-white font-Inter font-medium flex items-center gap-2">
      <TbCategoryPlus />
        Add New Category</button>
      </div>
      <table className="bg-white w-full rounded-3xl shadow border-collapse mt-5">
        <thead className="bg-gray-100">
          <tr className="bg-white border-b">
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left rounded-tl-3xl">
              Category ID
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
          {data?.data?.categories.map((category:TCategory) => (
            <tr key={category._id} className="border-b">
              <td className="text-[#6E7883] font-Poppins p-4">{category._id}</td>
              <td className="text-[#6E7883] font-Poppins p-4">{category.name}</td>
              <td className="text-[#6E7883] font-Poppins p-4">
              {category.description.length > 50
  ? `${category.description.slice(0, 50)}...`
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
                      // onClick={() => handleEditCategory(category._id)}
                      className="block text-left w-full p-[10px] text-sm text-[#3B82F6] hover:bg-blue-100"
                    >
                      Edit Category
                    </button>
                    <button
                      // onClick={() => handleDeleteCategory(category._id)}
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

      {data?.data?.categories?.length === 0 && (
        <p className="text-[#6E7883] font-Poppins text-center w-full mt-4">
          No Categories Available
        </p>
      )}

      <CreateCategory openModal={openCreateCategoryModal} setOpenModal={setOpenCreateCategoryModal}/>
    </div>
  );
};

export default ManageCategories;
