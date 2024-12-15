"use client"
import { ICONS } from "@/assets";
import Filters from "@/components/Products/Filter/Filter";
import ProductCardGridView from "@/components/Products/ProductCard/ProductCardGridView";
import ProductCardListView from "@/components/Products/ProductCard/ProductCardListView";
import Container from "@/components/shared/Container/Container";
import { useGetAllProductsQuery } from "@/redux/features/Product/productApi";
import Image from "next/image";
import { useState } from "react";

const Products = () => {
  // State for view type and filter options
  const [viewType, setViewType] = useState("grid");
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [brand, setBrand] = useState<string | undefined>(undefined);
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [priceRange, setPriceRange] = useState<string | undefined>(undefined);

  // Fetching products with filters
  const { data, error, isLoading } = useGetAllProductsQuery({
    category,
    search,
    brand,
    rating,
    priceRange,
    page: 1,  // Example pagination, modify as needed
    limit: 20, // Example limit, modify as needed
  });

  console.log(data)

  // View buttons for toggling between grid and list view
  const viewButtons = [
    {
      label: "grid",
      icon: ICONS.gridView,
    },
    {
      label: "list",
      icon: ICONS.listView,
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <div className="mt-10 flex gap-4 ">
        <div className="w-[20%]">
          <Filters
            setCategory={setCategory}
            setSearch={setSearch}
            setBrand={setBrand}
            setRating={setRating}
            setPriceRange={setPriceRange}
          />
        </div>

        <div className="w-[80%]">
          <div className="bg-neutral-55/20 border border-neutral-45 p-5 rounded-lg flex items-center justify-between">
            <p className="font-Inter text-neutral-15">
              {data?.data?.products?.length} items in{" "}
              <span className="font-semibold capitalize">{search ? search : "All"}</span>
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                {/* Checkbox Input */}
                <input
                  type="checkbox"
                  id={`verified`}
                  className="w-4 h-4 text-primary-10 border-gray-300 rounded focus:outline-none focus:ring-2"
                />
                <label htmlFor={`verified`} className="font-Inter text-neutral-15">
                  Verified only
                </label>
              </div>

              <div className="relative flex-grow">
                <Image
                  src={ICONS.search}
                  alt="send-icon"
                  className="size-4 absolute right-3 top-3 bottom-0"
                />
                <input
                  type="text"
                  placeholder="Search for your product..."
                  className="w-full px-4 py-2 pr-12 rounded focus:outline-none focus:ring-primary-10 transition duration-300 focus:ring-1 bg-neutral-65"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="flex bg-white border border-neutral-45 rounded-lg">
                {viewButtons.map((btn, index) => (
                  <button
                    key={index}
                    onClick={() => setViewType(btn.label)}
                    className={`${
                      btn.label === viewType ? "bg-[#EFF2F4]" : "bg-white"
                    } p-2 flex items-center justify-center`}
                  >
                    <Image src={btn.icon} alt="grid-view" className="size-6" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {viewType === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">
              {data?.data?.products?.map((product) => (
                <ProductCardGridView key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-5 mt-7">
              {data?.data?.products?.map((product) => (
                <ProductCardListView key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Products;
