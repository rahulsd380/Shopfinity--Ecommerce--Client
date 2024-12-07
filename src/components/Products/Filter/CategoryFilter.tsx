"use client";
import Dropdown from "@/components/reusable/Dropdown/Dropdown";
import React from "react";

const CategoryFilter = () => {
  const categories = [
    { label: "Mark as read" },
    { label: "Copy" },
    { label: "Edit" },
  ];

  return (
    <div className="w-full">
      <Dropdown title="Category">
        {categories.map((item, index) => (
          <li
            key={index}
            className="py-[9px] hover:bg-gray-100 cursor-pointer"
            onClick={() => console.log(`${item.label} clicked`)}
          >
            {item.label}
          </li>
        ))}
      </Dropdown>
    </div>
  );
};

export default CategoryFilter;
