"use client";
import Dropdown from "@/components/reusable/Dropdown/Dropdown";
import React, { useState } from "react";

const Filters = () => {
  const categories = ["Electronics", "Clothing", "Books", "Furniture"];
  const brands = ["Apple", "Samsung", "Nike", "Sony"];
  const prices = ["$0 - $50", "$50 - $100", "$100 - $200", "$200+"];
  const ratings = ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"];

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleCheckboxChange = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((item) => item !== brand)); // Remove from selection
    } else {
      setSelectedBrands([...selectedBrands, brand]); // Add to selection
    }
  };

  return (
    <div className="space-y-4 bg-white border border-neutral-45 p-5 rounded-lg">
      {/* Category Filter */}
      <Dropdown title="Category" defaultOpen>
        {categories.map((item, index) => (
          <li
            key={index}
            className="py-[9px] px-4 hover:bg-gray-100 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </Dropdown>

      {/* Brand Filter */}
      <Dropdown title="Brand">
        {brands.map((brand, index) => (
          <li key={index} className="flex items-center gap-2 py-[9px] px-4">
            {/* Checkbox Input */}
            <input
              type="checkbox"
              id={`brand-${index}`}
              className="w-4 h-4 text-primary-10 border-gray-300 rounded focus:ring-primary-10 focus:ring-2"
              checked={selectedBrands.includes(brand)}
              onChange={() => handleCheckboxChange(brand)}
            />
            {/* Label */}
            <label
              htmlFor={`brand-${index}`}
              className="cursor-pointer text-gray-700"
            >
              {brand}
            </label>
          </li>
        ))}
      </Dropdown>

      {/* Price Filter */}
      <Dropdown title="Price" defaultOpen>
        {prices.map((item, index) => (
          <li
            key={index}
            className="py-[9px] px-4 hover:bg-gray-100 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </Dropdown>

      {/* Rating Filter */}
      <Dropdown title="Rating">
        {ratings.map((item, index) => (
          <li
            key={index}
            className="py-[9px] px-4 hover:bg-gray-100 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </Dropdown>
    </div>
  );
};

export default Filters;
