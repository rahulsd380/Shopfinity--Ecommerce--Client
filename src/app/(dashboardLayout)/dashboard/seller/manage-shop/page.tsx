"use client";
import EditShopModal from "@/components/Dashboard/SellerDashboard/ManageShop/EditShopModal/EditShopModal";
import SellerProfile from "@/components/Seller/SellerProfile/SellerProfile";
import { TUser } from "@/components/shared/Navbar/Navbar";
import { useCurrentUser } from "@/redux/features/Auth/authSlice";
import { useGetMyShopQuery } from "@/redux/features/Seller/sellerApi";
import { useAppSelector } from "@/redux/hooks";
import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";

const ManageShop = () => {
  const user = useAppSelector(useCurrentUser) as TUser | null;
  const {data} = useGetMyShopQuery(user?._id)
  console.log(data)
  const [openEditShopModal, setOpenEditShopModal] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-neutral-10 font-Inter text-xl font-semibold">
          Manage Your Shop
        </h1>
        <button
          onClick={() => setOpenEditShopModal(true)}
          className="bg-primary-10 text-white py-3 px-6 font-medium rounded-lg flex items-center gap-2"
        >
          <AiFillEdit className="text-xl" />
          Edit Info
        </button>
      </div>
      <SellerProfile isFollowVisible={false} data={data?.data} />

      <EditShopModal
      data={data?.data}
        setOpenModal={setOpenEditShopModal}
        openModal={openEditShopModal}
      />
    </div>
  );
};

export default ManageShop;
