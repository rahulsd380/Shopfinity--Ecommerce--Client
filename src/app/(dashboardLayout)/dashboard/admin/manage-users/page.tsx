/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { ICONS } from "@/assets";
import {
  useChangeRoleToAdminMutation,
  useChangeRoleToUserMutation,
  useGetAllUsersForAdminQuery,
  useRemoveUserMutation,
  useSuspendUserMutation,
} from "@/redux/features/User/userApi";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export type TUser = {
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user" | "other";
  isVerified: boolean;
  avatar: string;
  isDeleted: boolean;
  isSuspended: boolean;
  contactNumber: string;
  orders: any[];
  wishlist: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const ManageUsers = () => {
  const { data } = useGetAllUsersForAdminQuery({});
  const [changeRoleToAdmin] = useChangeRoleToAdminMutation();
  const [changeRoleToUser] = useChangeRoleToUserMutation();
  const [suspendUser] = useSuspendUserMutation();
  const [removeUser] = useRemoveUserMutation();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const sortedUsers =
    sortOrder === "asc"
      ? [...data?.data].sort(
          (a, b) => Number(a.isSuspended) - Number(b.isSuspended)
        )
      : sortOrder === "desc"
      ? [...data?.data].sort(
          (a, b) => Number(b.isSuspended) - Number(a.isSuspended)
        )
      : data?.data;

  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const handleDropdownToggle = (userId: string) => {
    setActiveDropdown((prev) => (prev === userId ? null : userId));
  };

  const handleChangeRoleToAdmin = async (id: string) => {
    toast.promise(changeRoleToAdmin(id), {
      loading: "Please wait...",
      success: "Role changed to admin.",
      error: "Something went wrong.",
    });
  };

  const handleChangeRoleToUser = async (id: string) => {
    toast.promise(changeRoleToUser(id), {
      loading: "Please wait...",
      success: "Role changed to user.",
      error: "Something went wrong.",
    });
  };

  const handleSuspendUser = async (id: string) => {
    toast.promise(suspendUser(id), {
      loading: "Please wait...",
      success: "User suspended.",
      error: "Something went wrong.",
    });
  };

  const handleRemoveUser = async (id: string) => {
    toast.promise(removeUser(id), {
      loading: "Please wait...",
      success: "User removed from Shopfinity.",
      error: "Something went wrong.",
    });
  };

  return (
    <div className="mt-5 min-h-screen">
      <h1 className="text-neutral-10 font-Inter text-xl font-semibold">
        Manage Users
      </h1>
      <div className="overflow-x-auto">
      <table className="bg-white w-full rounded-3xl shadow border-collapse mt-5">
        <thead className="bg-gray-100">
          <tr className="bg-white border-b">
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left rounded-tl-3xl">
              User ID
            </th>
            {/* <th className="text-[#293241] font-Poppins font-medium p-4 text-left">
              Profile Photo
            </th> */}
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left">
              Name
            </th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left">
              Email
            </th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left">
              Address
            </th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left">
              Role
            </th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left flex items-center gap-1">
              User Status
              <Image
                src={ICONS.sort}
                alt="sort-icon"
                className="cursor-pointer size-7"
                onClick={handleSortToggle}
              />
            </th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedUsers?.map((user: TUser) => (
            <tr key={user._id} className="border-b relative">
              <td className="text-[#6E7883] font-Poppins p-4">{user._id}</td>
              {/* <td className="text-[#6E7883] font-Poppins p-4">
                <img
                  src={user.profilePhoto}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
              </td> */}
              <td className="text-[#6E7883] font-Poppins p-4">{user.name}</td>
              <td className="text-[#6E7883] font-Poppins p-4">{user.email}</td>
              <td className="text-[#6E7883] font-Poppins p-4">
                {user.address.city}-{user.address.zipCode},{" "}
                {user.address.country}
              </td>
              <td className="text-[#6E7883] font-Poppins p-4">{user.role}</td>
              <td className="p-4">
                <div
                  className={`rounded-3xl py-[10px] px-5 text-[#24461F] font-Poppins flex items-center justify-center capitalize  ${
                    user.isSuspended ? "bg-red-100" : "bg-primary-10/20"
                  }`}
                >
                  {user.isSuspended ? "Suspended" : "N/A"}
                </div>
              </td>
              <td className="text-[#6E7883] font-Poppins p-4 relative">
                <button
                  onClick={() => handleDropdownToggle(user._id)}
                  className="p-2 hover:bg-gray-100 rounded-md"
                >
                  <Image
                    src={ICONS.threeDots}
                    alt="three-dots"
                    className="size-6"
                  />
                </button>

                {activeDropdown === user._id && (
                  <div className="absolute right-0 mt-2 w-[180px] bg-white border rounded-2xl shadow-lg z-10 p-2">
                    <button
                      onClick={() => handleRemoveUser(user?._id)}
                      className="block text-left w-full p-[10px] text-sm text-[#DE3C4B] hover:bg-red-100"
                    >
                      Remove User
                    </button>
                    <button
                      onClick={() => handleSuspendUser(user?._id)}
                      className="block text-left w-full p-[10px] text-sm text-[#F59E0B] hover:bg-yellow-100 mt-1"
                    >
                      Suspend
                    </button>
                    <button
                      onClick={() => handleChangeRoleToAdmin(user?._id)}
                      className="block text-left w-full p-[10px] text-sm text-[#3B82F6] hover:bg-blue-100 mt-1"
                    >
                      Make Admin
                    </button>
                    <button
                      onClick={() => handleChangeRoleToUser(user?._id)}
                      className="block text-left w-full p-[10px] text-sm text-[#d230e7] hover:bg-purple-100 mt-1"
                    >
                      Make User
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      {sortedUsers?.length === 0 && (
        <p className="text-[#6E7883] font-Poppins text-center w-full mt-4">
          No Users Available
        </p>
      )}
    </div>
  );
};

export default ManageUsers;
