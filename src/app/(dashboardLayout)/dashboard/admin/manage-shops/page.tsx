/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { ICONS } from "@/assets";
import {
  useApproveSellerMutation,
  useBlacklistSellerMutation,
  useGetAllShopsQuery,
  useRejectRequestMutation,
  useRemoveSellerMutation,
} from "@/redux/features/Seller/sellerApi";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export type TSeller = {
  _id: string;
  userId: string;
  shopName: string;
  shopLogo: string;
  tagline: string;
  supplierName: string;
  sellerName: string;
  shopDescription: string;
  phoneNumber: string;
  products: string[];
  followers: string[];
  isVerified: boolean;
  status: "pending" | "approved" | "blacklisted" | "rejected";
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const ManageShops = () => {
  const { data } = useGetAllShopsQuery({});
  const [approveSeller] = useApproveSellerMutation();
  const [rejectRequest] = useRejectRequestMutation();
  const [blacklistSeller] = useBlacklistSellerMutation();
  const [removeSeller] = useRemoveSellerMutation();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const sortedShops =
    sortOrder === "asc"
      ? [...data?.data].sort((a, b) => a.status.localeCompare(b.status))
      : sortOrder === "desc"
      ? [...data?.data].sort((a, b) => b.status.localeCompare(a.status))
      : data?.data;

  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const handleDropdownToggle = (shopId: string) => {
    setActiveDropdown((prev) => (prev === shopId ? null : shopId));
  };

  const handleApproveSeller = async (id: string) => {
    toast.promise(approveSeller(id), {
      loading: "Please wait...",
      success: "Seller request approved.",
      error: "Something went wrong.",
    });
  };

  const handleRejectRequest = async (id: string) => {
    toast.promise(rejectRequest(id), {
      loading: "Please wait...",
      success: "Seller request rejected.",
      error: "Something went wrong.",
    });
  };

  const handleBlacklistSeller = async (id: string) => {
    toast.promise(blacklistSeller(id), {
      loading: "Please wait...",
      success: "Seller blacklisted",
      error: "Something went wrong.",
    });
  };

  const handleRemoveSeller = async (id: string) => {
    toast.promise(removeSeller(id), {
      loading: "Please wait...",
      success: "Seller removed from Shopfinity!",
      error: "Something went wrong.",
    });
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
          {sortedShops?.map((shop: TSeller) => (
            <tr key={shop._id} className="border-b relative">
              <td className="text-[#6E7883] font-Poppins p-4">{shop._id}</td>
              <td className="text-[#6E7883] font-Poppins p-4">
                <Image
                  src={shop.shopLogo ? shop.shopLogo : ICONS.user}
                  alt={shop.shopName}
                  className="size-10 rounded-full"
                  width={40}
                  height={40}
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
                    shop.status === "approved"
                      ? "bg-[#DCFFD6]"
                      : shop.status === "rejected"
                      ? "bg-orange-100"
                      : shop.status === "blacklisted"
                      ? "bg-yellow-100"
                      : "bg-red-100"
                  } rounded-3xl py-[10px] px-5 text-[#24461F] font-Poppins leading-6 flex items-center justify-center capitalize`}
                >
                  {shop.status}
                </div>
              </td>
              <td className="text-[#6E7883] font-Poppins p-4 relative">
                <button
                  onClick={() => handleDropdownToggle(shop._id)}
                  className="p-2 hover:bg-gray-100 rounded-md"
                >
                  <Image
                    src={ICONS.threeDots}
                    alt="three-dots"
                    className="size-6"
                  />
                </button>

                {activeDropdown === shop._id && (
                  <div className="absolute right-0 mt-2 w-[180px] bg-white border rounded-2xl shadow-lg z-10 p-2">
                    <button
                      onClick={() => handleApproveSeller(shop._id)}
                      className="block text-left w-full p-[10px] text-sm text-primary-10 hover:bg-primary-10/20"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleRejectRequest(shop._id)}
                      className="block text-left w-full p-[10px] text-sm text-orange-500 hover:bg-orange-100"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleRemoveSeller(shop._id)}
                      className="block text-left w-full p-[10px] text-sm text-[#DE3C4B] hover:bg-red-100"
                    >
                      Remove Shop
                    </button>
                    <button
                      onClick={() => handleBlacklistSeller(shop._id)}
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

      {sortedShops?.length === 0 && (
        <p className="text-[#6E7883] font-Poppins text-center w-full mt-4">
          No Shops Available
        </p>
      )}
    </div>
  );
};

export default ManageShops;
