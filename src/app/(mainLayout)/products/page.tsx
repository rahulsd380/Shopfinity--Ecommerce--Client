"use client"
import { ICONS } from "@/assets";
import ProductGridViewCardLoader from "@/components/Loaders/ProductGridViewCardLoader/ProductGridViewCardLoader";
import ProductListViewCardLoader from "@/components/Loaders/ProductListViewCardLoader/ProductListViewCardLoader";
import NoProducts from "@/components/NoProducts/NoProducts";
import Filters from "@/components/Products/Filter/Filter";
import ProductCardGridView from "@/components/Products/ProductCard/ProductCardGridView";
import ProductCardListView from "@/components/Products/ProductCard/ProductCardListView";
import Container from "@/components/shared/Container/Container";
import { useGetAllProductsQuery } from "@/redux/features/Product/productApi";
import { TProduct } from "@/types/product.types";
import Image from "next/image";
import { useEffect, useState } from "react";

const Products = () => {
  const [search, setSearchQuery] = useState('');
  const [category, setCategory] = useState<string | undefined>(undefined);

  useEffect(() => {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const query = params.get('search');
    if (query) {
      setSearchQuery(query);
    }

    const categoryFilter = params.get('category');
    if (categoryFilter) {
      setCategory(categoryFilter);
    }
  }, []);
  // State for view type and filter options
  const [viewType, setViewType] = useState("list");
  // const [search, setSearch] = useState<string | undefined>(searchQuery || "");
  const [brand, setBrand] = useState<string | undefined>(undefined);
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [priceRange, setPriceRange] = useState<string | undefined>(undefined);

  // Fetching products with filters
  const { data, isLoading } = useGetAllProductsQuery({
    category,
    search,
    brand,
    rating,
    priceRange,
    page: 1,
    limit: 20,
  });

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

  return (
    <Container>
      <div className="mt-10 flex gap-4 ">
        <div className="hidden xl:block w-[20%]">
          <Filters
            products={data}
            setCategory={setCategory}
            setSearch={setSearchQuery}
            setBrand={setBrand}
            setRating={setRating}
            setPriceRange={setPriceRange}
          />
        </div>

        <div className="w-full xl:w-[80%]">
          <div className="bg-neutral-55/20 border border-neutral-45 p-5 rounded-lg flex flex-col md:flex-row items-center justify-between">
            <p className="font-Inter text-neutral-15">
              {data?.data?.products?.length} items in{" "}
              <span className="font-semibold capitalize">{search ? search : "All"}</span>
            </p>

            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-2">
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
                  value={search}
                  placeholder="Search for your product..."
                  className="w-full px-4 py-2 pr-12 rounded focus:outline-none focus:ring-primary-10 transition duration-300 focus:ring-1 bg-neutral-65"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex bg-white border border-neutral-45 rounded-lg">
                {viewButtons.map((btn, index) => (
                  <button
                    key={index}
                    onClick={() => setViewType(btn.label)}
                    className={`${btn.label === viewType ? "bg-[#EFF2F4]" : "bg-white"
                      } p-2 flex items-center justify-center`}
                  >
                    <Image src={btn.icon} alt="grid-view" className="size-6" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {isLoading ? (
  viewType === "grid" ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">
      {Array.from({ length: 8 }).map((_, index) => (
        <ProductGridViewCardLoader key={index} />
      ))}
    </div>
  ) : (
    <div className="flex flex-col gap-5 mt-7">
      {Array.from({ length: 4 }).map((_, index) => (
        <ProductListViewCardLoader key={index} />
      ))}
    </div>
  )
) : data?.data?.products?.length > 0 ? (
  viewType === "grid" ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">
      {data?.data?.products?.map((product: TProduct) => (
        <ProductCardGridView key={product._id} product={product} />
      ))}
    </div>
  ) : (
    <div className="flex flex-col gap-5 mt-7">
      {data?.data?.products?.map((product: TProduct) => (
        <ProductCardListView key={product._id} product={product} />
      ))}
    </div>
  )
) : (
  <NoProducts />
)}


        </div>
      </div>
    </Container>
  );
};

export default Products;
