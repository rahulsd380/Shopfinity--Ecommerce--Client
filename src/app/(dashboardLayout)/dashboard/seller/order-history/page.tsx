"use client"
import { ICONS } from "@/assets";
import Image from "next/image";
import { useState } from "react";

type TOrder = {
  orderId: string;
  customerName: string;
  orderDate: string;
  status: "Pending" | "On the Way" | "Delivered";
};

const OrderHistory = () => {
    const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
//   const [orderId, setOrderId] = useState("");
//   const [openModal, setOpenModal] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   const handleDropdownToggle = (rowId: string) => {
//     setActiveDropdown((prev) => (prev === rowId ? null : rowId));
//   };

  const orders: TOrder[] = [
    { orderId: "432423", customerName: "John Doe", orderDate: "2024-12-05", status: "Delivered" },
    { orderId: "43242453", customerName: "Jane Smith", orderDate: "2024-12-04", status: "Pending" },
    { orderId: "234342", customerName: "Alice Johnson", orderDate: "2024-12-03", status: "On the Way" },
  ];

  const sortedOrders =
    sortOrder === "asc"
      ? [...orders].sort((a, b) => a.status.localeCompare(b.status))
      : sortOrder === "desc"
      ? [...orders].sort((a, b) => b.status.localeCompare(a.status))
      : orders;

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
          {sortedOrders.map((order) => (
            <tr key={order.orderId} className="border-b">
              <td className="text-[#6E7883] font-Poppins p-4">{order.orderId}</td>
              <td className="text-[#6E7883] font-Poppins p-4">{order.customerName}</td>
              <td className="text-[#6E7883] font-Poppins p-4">{order.orderDate}</td>
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

      {sortedOrders.length === 0 && (
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
