"use client";
import { ICONS } from "@/assets";
import Image from "next/image";
import { useState } from "react";

type TShop = {
  shopId: string;
  logo: string;
  shopName: string;
  sellerName: string;
  status: "Approved" | "Blocked";
};

const ManageShops = () => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const shops: TShop[] = [
    {
      shopId: "S123456",
      logo: "/images/shop1.png",
      shopName: "Gadget World",
      sellerName: "John Doe",
      status: "Approved",
    },
    {
      shopId: "S789012",
      logo: "/images/shop2.png",
      shopName: "Home Essentials",
      sellerName: "Jane Smith",
      status: "Blocked",
    },
    {
      shopId: "S345678",
      logo: "/images/shop3.png",
      shopName: "Fashion Hub",
      sellerName: "Alice Johnson",
      status: "Approved",
    },
  ];

  const sortedShops =
    sortOrder === "asc"
      ? [...shops].sort((a, b) => a.status.localeCompare(b.status))
      : sortOrder === "desc"
      ? [...shops].sort((a, b) => b.status.localeCompare(a.status))
      : shops;

  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const handleDropdownToggle = (shopId: string) => {
    setActiveDropdown((prev) => (prev === shopId ? null : shopId));
  };

  return (
    <div className="mt-5 overflow-x-auto min-h-screen">
      <h1 className="text-neutral-10 font-Inter text-xl font-semibold">
        Manage Shops
      </h1>
      <table className="bg-white w-full rounded-3xl shadow border-collapse mt-5">
        <thead className="bg-gray-100">
          <tr className="bg-white border-b">
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left rounded-tl-3xl">
              Shop ID
            </th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left">
              Logo
            </th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left">
              Shop Name
            </th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left">
              Seller Name
            </th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left flex items-center gap-1">
              Status
              <Image
                src={ICONS.sort}
                alt="sort-icon"
                className="cursor-pointer size-7"
                onClick={handleSortToggle}
              />
            </th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left rounded-tr-3xl">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedShops.map((shop) => (
            <tr key={shop.shopId} className="border-b relative">
              <td className="text-[#6E7883] font-Poppins p-4">{shop.shopId}</td>
              <td className="text-[#6E7883] font-Poppins p-4">
                <Image
                  src={shop.logo}
                  alt={shop.shopName}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="text-[#6E7883] font-Poppins p-4">
                {shop.shopName}
              </td>
              <td className="text-[#6E7883] font-Poppins p-4">
                {shop.sellerName}
              </td>
              <td className="text-[#6E7883] font-Poppins p-4">
                <div
                  className={`${
                    shop.status === "Approved"
                      ? "bg-[#DCFFD6]"
                      : "bg-red-100"
                  } rounded-3xl py-[10px] px-5 text-[#24461F] font-Poppins leading-6 flex items-center justify-center`}
                >
                  {shop.status}
                </div>
              </td>
              <td className="text-[#6E7883] font-Poppins p-4 relative">
                <button
                  onClick={() => handleDropdownToggle(shop.shopId)}
                  className="p-2 hover:bg-gray-100 rounded-md"
                >
                  <Image
                    src={ICONS.threeDots}
                    alt="three-dots"
                    className="size-6"
                  />
                </button>

                {activeDropdown === shop.shopId && (
                  <div className="absolute right-0 mt-2 w-[180px] bg-white border rounded-2xl shadow-lg z-10 p-2">
                    <button
                      onClick={() => console.log(`Removing shop ${shop.shopId}`)}
                      className="block text-left w-full p-[10px] text-sm text-[#DE3C4B] hover:bg-red-100"
                    >
                      Remove Shop
                    </button>
                    <button
                      onClick={() =>
                        console.log(`Blacklisting shop ${shop.shopId}`)
                      }
                      className="block text-left w-full p-[10px] text-sm text-[#F59E0B] hover:bg-yellow-100 mt-1"
                    >
                      Blacklist Shop
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {sortedShops.length === 0 && (
        <p className="text-[#6E7883] font-Poppins text-center w-full mt-4">
          No Shops Available
        </p>
      )}
    </div>
  );
};

export default ManageShops;
