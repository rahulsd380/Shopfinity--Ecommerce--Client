/* eslint-disable @next/next/no-img-element */
"use client";
import { ICONS } from "@/assets";
import ConfirmDelete from "@/components/Dashboard/SellerDashboard/OrderHistory/ConfirmDelete/ConfirmDelete";
import { useDeleteProductMutation } from "@/redux/features/Product/productApi";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";


const ProductCardListView = ({ isMenuActive, product }) => {
  const [deleteProduct, {isLoading}] = useDeleteProductMutation()
  const [productId, setProductId] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (rowId: string) => {
    setActiveDropdown((prev) => (prev === rowId ? null : rowId));
  };

  const handleDeleteProduct = async (id: string) => {
    toast.promise(deleteProduct(id), {
      loading: "Deleting product...",
      success: "Product deleted successfully.",
      error: "Something went wrong.",
    });
  };
  return (
    <div className=" bg-neutral-55/20 border border-neutral-45 rounded-lg flex items-center gap-4 font-Inter p-5 relative">
      {isMenuActive && (
        <button
          onClick={() => handleDropdownToggle(product?._id)}
          className="p-2 hover:bg-gray-100 rounded-md absolute top-2 right-2"
        >
          <Image src={ICONS.threeDots} alt="three-dots" className="size-6" />
        </button>
      )}

      {activeDropdown === product?._id && (
        <div className="absolute right-2 top-11 w-[180px] bg-white border rounded-2xl shadow-lg z-10 p-2">
          <Link
            href={`/dashboard/seller/edit-product/${product?._id}`}
            onClick={() => console.log(`Editing row ${product?._id}`)}
            className="block text-left w-full p-[10px] text-sm text-[#424B54] hover:bg-gray-100"
          >
            Edit
          </Link>
          <button
            onClick={() => {
              setOpenModal(true);
              setProductId(product?._id);
            }}
            className="block text-left w-full p-[10px] text-sm text-[#DE3C4B] hover:bg-red-100 mt-1"
          >
            Delete
          </button>
        </div>
      )}

      <div className="p-3">
        <img
          src={product?.images?.length > 0 ? product?.images?.[0] : ICONS.image}
          alt={product?.name}
          className="w-[280px] h-[180px]"
        />
      </div>

      <div className="relative">
        <h1 className="text-neutral-25 font-Inter text-lg font-semibold">
        {product?.name}
        </h1>

        {/* Price */}
        <div className="flex items-center gap-2 mt-4">
          <h1 className="text-neutral-15 font-Inter text-2xl font-semibold">
            ${product?.price}
          </h1>
          <h2 className="text-neutral-40 font-Inter line-through">${product?.price + 99}</h2>
        </div>

        <div className="flex items-center gap-4">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <Image src={ICONS.star} alt="star-icon" className="size-4" />
            <Image src={ICONS.star} alt="star-icon" className="size-4" />
            <Image src={ICONS.star} alt="star-icon" className="size-4" />
            <Image src={ICONS.star} alt="star-icon" className="size-4" />
            <Image src={ICONS.star} alt="star-icon" className="size-4" />
            <p className="text-secondary-10">{product?.rating ? product?.rating : 0}</p>
          </div>

          <div className="flex items-center gap-2">
            <Image src={ICONS.dot} alt="dot-icon" className="size-2" />
            <p className="text-neutral-40">154 orders</p>
            <Image src={ICONS.dot} alt="dot-icon" className="size-2" />
            <p className="text-primary-10">Free Shipping</p>
          </div>
        </div>

        <p className="text-neutral-25 font-Inter mt-3 max-w-[90%]">
        {product?.description}
        </p>

        <div className="mt-3">
          <Link
            href={`products/${product?._id}`}
            className="text-secondary-10 font-medium"
          >
            View Details
          </Link>
        </div>

        {!isMenuActive && (
          <button className="absolute top-2 right-2 border border-neutral-45 p-2 flex items-center justify-center rounded-md hover:bg-neutral-45/30 transition duration-300">
            <Image src={ICONS.heart} alt="star-icon" className="size-5" />
          </button>
        )}
      </div>
      <ConfirmDelete
        setOpenModal={setOpenModal}
        openModal={openModal}
        id={productId}
        handleDeleteProduct={handleDeleteProduct}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ProductCardListView;
