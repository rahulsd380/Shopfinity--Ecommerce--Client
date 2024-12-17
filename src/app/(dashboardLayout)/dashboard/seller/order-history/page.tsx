/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { ICONS } from "@/assets";
import { TUser } from "@/components/shared/Navbar/Navbar";
import { useCurrentUser } from "@/redux/features/Auth/authSlice";
import { useGetHistoriesBySellerIdQuery } from "@/redux/features/Payment/paymentApi";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { useState } from "react";

const OrderHistory = () => {
   const user = useAppSelector(useCurrentUser) as TUser | null;
  const {data} = useGetHistoriesBySellerIdQuery(user?._id);
  console.log(data)
    const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
//   const [orderId, setOrderId] = useState("");
//   const [openModal, setOpenModal] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   const handleDropdownToggle = (rowId: string) => {
//     setActiveDropdown((prev) => (prev === rowId ? null : rowId));
//   };

  const sortedOrders =
    sortOrder === "asc"
      ? [...data?.data].sort((a, b) => a.status.localeCompare(b.status))
      : sortOrder === "desc"
      ? [...data?.data].sort((a, b) => b.status.localeCompare(a.status))
      : data?.data;

  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="mt-8 overflow-x-auto min-h-screen">
      <table className="bg-white w-full rounded-3xl shadow border-collapse">
        <thead className="bg-gray-100">
          <tr className="bg-white border-b">
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left rounded-tl-3xl">Order ID</th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left">Customer Name</th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left">Order Date</th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left flex items-center gap-1">
              Status
              <Image
                src={ICONS.sort}
                alt="sort-icon"
                className="cursor-pointer size-7"
                onClick={handleSortToggle}
              />
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedOrders?.map((order:any) => (
            <tr key={order._id} className="border-b">
              <td className="text-[#6E7883] font-Poppins p-4">{order._id}</td>
              <td className="text-[#6E7883] font-Poppins p-4">{order.name}</td>
              <td className="text-[#6E7883] font-Poppins p-4">{order.createdAt}</td>
              <td className="text-[#6E7883] font-Poppins p-4">
                <div
                  className={`${
                    order.status === "Delivered" ? "bg-[#DCFFD6]" : 
                    order.status === "On the Way" ? "bg-yellow-100" : "bg-red-100"
                  } rounded-3xl py-[10px] px-5 text-[#24461F] font-Poppins leading-6 flex items-center justify-center`}
                >
                  {order.status}
                </div>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>

      {sortedOrders?.length === 0 && (
        <p className="text-[#6E7883] font-Poppins text-center w-full mt-4">
          No Orders Available
        </p>
      )}

      {/* <ConfirmDelete
        setOpenModal={setOpenModal}
        openModal={openModal}
        id={orderId}
      /> */}
    </div>
  );
};

export default OrderHistory;
