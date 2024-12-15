/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Dropdown from "@/components/reusable/Dropdown/Dropdown";
import { useGetAllCategoriesQuery } from "@/redux/features/Category/categoryApi";
import React, { Dispatch, SetStateAction, useState, useEffect } from "react";

type TFiltersProps = {
  setCategory: (category: string | undefined) => void;
  setSearch: Dispatch<SetStateAction<string>>;
  setBrand: (brand: string | undefined) => void;
  setRating: (rating: number | undefined) => void;
  setPriceRange: (priceRange: string | undefined) => void;
  products: any;
};

const Filters: React.FC<TFiltersProps> = ({
  setCategory,
  setSearch,
  setBrand,
  setRating,
  setPriceRange,
  products,
}) => {
  const { data } = useGetAllCategoriesQuery({});
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | undefined>(undefined);

  const [uniqueBrands, setUniqueBrands] = useState<string[]>([]);
  const [uniqueRatings, setUniqueRatings] = useState<number[]>([]);
  const [uniquePrices, setUniquePrices] = useState<string[]>([]);

  useEffect(() => {
    if (products?.data?.products) {
      const brandsSet = new Set<string>();
      const ratingsSet = new Set<number>();
      const pricesSet = new Set<string>();

      products.data.products.forEach((product: any) => {
        if (product.brand) brandsSet.add(product.brand);
        if (product.rating) ratingsSet.add(product.rating);
        if (product.price) pricesSet.add(product.price);
      });

      setUniqueBrands(Array.from(brandsSet));
      setUniqueRatings(Array.from(ratingsSet));
      setUniquePrices(Array.from(pricesSet));
    }
  }, [products]);

  const handleRatingCheckboxChange = (rating: number) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter((item) => item !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
    setRating(rating);
  };

  const handlePriceChange = (priceRange: string) => {
    setSelectedPriceRange(priceRange);
    setPriceRange(priceRange);
  };

  return (
    <div className="space-y-4 bg-neutral-55/20 border border-neutral-45 p-5 rounded-lg">
      {/* Category Filter */}
      <Dropdown title="Category" defaultOpen>
        {data?.data?.categories?.map((item: any, index: number) => (
          <li
            onClick={() => setCategory(item?.name)}
            key={index}
            className="py-[9px] px-4 hover:bg-gray-100 cursor-pointer"
          >
            {item?.name}
          </li>
        ))}
      </Dropdown>
      {/* Brand Filter */}
      <Dropdown title="Brands" defaultOpen>
        {uniqueBrands?.map((item: any, index: number) => (
          <li
            onClick={() => setBrand(item)}
            key={index}
            className="py-[9px] px-4 hover:bg-gray-100 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </Dropdown>

      {/* Price Filter */}
      <Dropdown title="Price" defaultOpen>
        {uniquePrices.map((price, index) => (
          <li
            key={index}
            onClick={() => handlePriceChange(price)}
            className="py-[9px] px-4 hover:bg-gray-100 cursor-pointer"
          >
            {price}
          </li>
        ))}
      </Dropdown>

      {/* Rating Filter */}
      <Dropdown title="Rating">
        {uniqueRatings.map((rating, index) => (
          <li
            key={index}
            onClick={() => handleRatingCheckboxChange(rating)}
            className="py-[9px] px-4 hover:bg-gray-100 cursor-pointer"
          >
            {rating} Stars
          </li>
        ))}
      </Dropdown>
    </div>
  );
};

export default Filters;
