"use client"
import { ICONS, IMAGES } from "@/assets";
import ConfirmDelete from "@/components/Dashboard/SellerDashboard/OrderHistory/ConfirmDelete/ConfirmDelete";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductCardGridView = () => {
  const [productId, setProductId] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const handleDropdownToggle = (rowId: string) => {
    setActiveDropdown((prev) => (prev === rowId ? null : rowId));
  };
  const id = "614234245"
  return (
    <div className=" bg-neutral-55/20 border border-neutral-45 rounded-lg relative">

                <button
                  onClick={() => handleDropdownToggle(id)}
                  className="p-2 hover:bg-gray-100 rounded-md absolute top-2 right-2"
                >
                  <Image
                    src={ICONS.threeDots}
                    alt="three-dots"
                    className="size-6"
                  />
                </button>

                {activeDropdown === id && (
                  <div className="absolute right-0 mt-12 w-[180px] bg-white border rounded-2xl shadow-lg z-10 p-2">
                    <Link
                    href={`/dashboard/seller/edit-product/${id}`}
                      onClick={() => console.log(`Editing row ${id}`)}
                      className="block text-left w-full p-[10px] text-sm text-[#424B54] hover:bg-gray-100"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        setOpenModal(true);
                        setProductId(id);
                      }}
                      className="block text-left w-full p-[10px] text-sm text-[#DE3C4B] hover:bg-red-100 mt-1"
                    >
                      Delete
                    </button>
                  </div>
                )}

      <div className="p-3">
        <Image
          src={IMAGES.product}
          alt="product-img"
          className="w-full h-[230px] "
        />
      </div>
      <hr className="border border-neutral-45" />
      <div className="p-5">
        {/* Price and heart icon */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            {/* Price */}
            <div className="flex items-center gap-2">
              <h1 className="text-neutral-15 font-Inter text-lg font-semibold">
                $99.99
              </h1>
              <h2 className="text-neutral-40 font-Inter line-through">
                $1128.00
              </h2>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <Image src={ICONS.star} alt="star-icon" className="size-4" />
              <Image src={ICONS.star} alt="star-icon" className="size-4" />
              <Image src={ICONS.star} alt="star-icon" className="size-4" />
              <Image src={ICONS.star} alt="star-icon" className="size-4" />
              <Image src={ICONS.star} alt="star-icon" className="size-4" />
              <p className="text-secondary-10">5.0</p>
            </div>
          </div>

          <button className="border border-neutral-45 p-2 flex items-center justify-center rounded-md hover:bg-neutral-45/30 transition duration-300">
            <Image src={ICONS.heart} alt="star-icon" className="size-5" />
          </button>
        </div>

        <p className="text-neutral-25 font-Inter mt-3">
          Iphone 11 Pro Max
        </p>
      </div>

      <ConfirmDelete
        setOpenModal={setOpenModal}
        openModal={openModal}
        id={productId}
      />
    </div>
  );
};

export default ProductCardGridView;
