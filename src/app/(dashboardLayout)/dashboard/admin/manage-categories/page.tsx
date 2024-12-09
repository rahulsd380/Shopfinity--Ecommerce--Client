"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ICONS } from "@/assets";
import { TbCategoryPlus } from "react-icons/tb";
import CreateCategory from "@/components/Dashboard/AdminDashboard/CreateCategory/CreateCategory";

type TCategory = {
  categoryId: string;
  categoryName: string;
  description: string;
};

const ManageCategories = () => {
  const [categories, setCategories] = useState<TCategory[]>([
    {
      categoryId: "C123",
      categoryName: "Sports Equipment",
      description: "All types of sports gear and equipment.",
    },
    {
      categoryId: "C124",
      categoryName: "Fitness Gear",
      description: "Gear and equipment for fitness enthusiasts.",
    },
    {
      categoryId: "C125",
      categoryName: "Outdoor Adventure",
      description: "Supplies for outdoor adventures and activities.",
    },
  ]);

  const [openCreateCategoryModal, setOpenCreateCategoryModal] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (categoryId: string) => {
    setActiveDropdown((prev) => (prev === categoryId ? null : categoryId));
  };

  const handleEditCategory = (categoryId: string) => {
    console.log(`Editing category with ID: ${categoryId}`);
    setActiveDropdown(null); // Close dropdown
  };

  const handleDeleteCategory = (categoryId: string) => {
    console.log(`Deleting category with ID: ${categoryId}`);
    setCategories(categories.filter((category) => category.categoryId !== categoryId));
    setActiveDropdown(null); // Close dropdown
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
          {categories.map((category) => (
            <tr key={category.categoryId} className="border-b">
              <td className="text-[#6E7883] font-Poppins p-4">{category.categoryId}</td>
              <td className="text-[#6E7883] font-Poppins p-4">{category.categoryName}</td>
              <td className="text-[#6E7883] font-Poppins p-4">{category.description}</td>
              <td className="text-[#6E7883] font-Poppins p-4 relative">
                <button
                  onClick={() => handleDropdownToggle(category.categoryId)}
                  className="p-2 hover:bg-gray-100 rounded-md"
                >
                  <Image
                    src={ICONS.threeDots}
                    alt="three-dots"
                    className="size-6"
                  />
                </button>

                {activeDropdown === category.categoryId && (
                  <div className="absolute right-0 mt-2 w-[180px] bg-white border rounded-2xl shadow-lg z-10 p-2">
                    <button
                      onClick={() => handleEditCategory(category.categoryId)}
                      className="block text-left w-full p-[10px] text-sm text-[#3B82F6] hover:bg-blue-100"
                    >
                      Edit Category
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(category.categoryId)}
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

      {categories.length === 0 && (
        <p className="text-[#6E7883] font-Poppins text-center w-full mt-4">
          No Categories Available
        </p>
      )}

      <CreateCategory openModal={openCreateCategoryModal} setOpenModal={setOpenCreateCategoryModal}/>
    </div>
  );
};

export default ManageCategories;
