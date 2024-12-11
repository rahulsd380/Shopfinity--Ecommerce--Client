"use client";
import EditShopModal from "@/components/Dashboard/SellerDashboard/ManageShop/EditShopModal/EditShopModal";
import SellerProfile from "@/components/Seller/SellerProfile/SellerProfile";
import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";

const ManageShop = () => {
  const [openEditShopModal, setOpenEditShopModal] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-neutral-10 font-Inter text-xl font-semibold">
          Manage Your Shop
        </h1>
        <button
          onClick={() => setOpenEditShopModal(true)}
          className="bg-primary-10 text-white py-3 px-6 font-medium mt-7 rounded-lg flex items-center gap-2"
        >
          <AiFillEdit className="text-xl" />
          Edit Info
        </button>
      </div>
      <SellerProfile isFollowVisible={false} />

      <EditShopModal
        setOpenModal={setOpenEditShopModal}
        openModal={openEditShopModal}
      />
    </div>
  );
};

export default ManageShop;
