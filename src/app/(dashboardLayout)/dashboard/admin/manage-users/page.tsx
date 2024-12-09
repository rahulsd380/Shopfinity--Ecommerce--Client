"use client";
import { ICONS } from "@/assets";
import Image from "next/image";
import { useState } from "react";

type TUser = {
  userId: string;
  profilePhoto: string;
  name: string;
  email: string;
  role: "Admin" | "Seller" | "Customer";
  status: "Active" | "Inactive" | "Pending";
};

const ManageUsers = () => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const users: TUser[] = [
    {
      userId: "U123456",
      profilePhoto: "/images/user1.png",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      userId: "U789012",
      profilePhoto: "/images/user2.png",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Customer",
      status: "Pending",
    },
    {
      userId: "U345678",
      profilePhoto: "/images/user3.png",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "Seller",
      status: "Inactive",
    },
  ];

  const sortedUsers =
    sortOrder === "asc"
      ? [...users].sort((a, b) => a.status.localeCompare(b.status))
      : sortOrder === "desc"
      ? [...users].sort((a, b) => b.status.localeCompare(a.status))
      : users;

  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const handleDropdownToggle = (userId: string) => {
    setActiveDropdown((prev) => (prev === userId ? null : userId));
  };

  return (
    <div className="mt-5 overflow-x-auto min-h-screen">
        <h1 className="text-neutral-10 font-Inter text-xl font-semibold">Manage Users</h1>
      <table className="bg-white w-full rounded-3xl shadow border-collapse mt-5">
        <thead className="bg-gray-100">
          <tr className="bg-white border-b">
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left rounded-tl-3xl">
              User ID
            </th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left">
              Profile Photo
            </th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left">
              Name
            </th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left">
              Email
            </th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left">
              Role
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
          {sortedUsers.map((user) => (
            <tr key={user.userId} className="border-b relative">
              <td className="text-[#6E7883] font-Poppins p-4">{user.userId}</td>
              <td className="text-[#6E7883] font-Poppins p-4">
                <img
                  src={user.profilePhoto}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="text-[#6E7883] font-Poppins p-4">{user.name}</td>
              <td className="text-[#6E7883] font-Poppins p-4">{user.email}</td>
              <td className="text-[#6E7883] font-Poppins p-4">{user.role}</td>
              <td className="text-[#6E7883] font-Poppins p-4">
                <div
                  className={`${
                    user.status === "Active"
                      ? "bg-[#DCFFD6]"
                      : user.status === "Pending"
                      ? "bg-yellow-100"
                      : "bg-red-100"
                  } rounded-3xl py-[10px] px-5 text-[#24461F] font-Poppins leading-6 flex items-center justify-center`}
                >
                  {user.status}
                </div>
              </td>
              <td className="text-[#6E7883] font-Poppins p-4 relative">
                <button
                  onClick={() => handleDropdownToggle(user.userId)}
                  className="p-2 hover:bg-gray-100 rounded-md"
                >
                  <Image
                    src={ICONS.threeDots}
                    alt="three-dots"
                    className="size-6"
                  />
                </button>

                {activeDropdown === user.userId && (
                  <div className="absolute right-0 mt-2 w-[180px] bg-white border rounded-2xl shadow-lg z-10 p-2">
                    <button
                      onClick={() => console.log(`Deleting user ${user.userId}`)}
                      className="block text-left w-full p-[10px] text-sm text-[#DE3C4B] hover:bg-red-100"
                    >
                      Delete User
                    </button>
                    <button
                      onClick={() => console.log(`Suspending user ${user.userId}`)}
                      className="block text-left w-full p-[10px] text-sm text-[#F59E0B] hover:bg-yellow-100 mt-1"
                    >
                      Suspend
                    </button>
                    <button
                      onClick={() => console.log(`Making Admin ${user.userId}`)}
                      className="block text-left w-full p-[10px] text-sm text-[#3B82F6] hover:bg-blue-100 mt-1"
                    >
                      Make Admin
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {sortedUsers.length === 0 && (
        <p className="text-[#6E7883] font-Poppins text-center w-full mt-4">
          No Users Available
        </p>
      )}
    </div>
  );
};

export default ManageUsers;
