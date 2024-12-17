import { TUser } from "@/components/shared/Navbar/Navbar";
import UserDropdown from "@/components/shared/UserDropdown/UserDropdown";
import { useCurrentUser } from "@/redux/features/Auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

const DashboardHeader = () => {
  const user = useAppSelector(useCurrentUser) as TUser | null;
  return (
    <div className="bg-white z-10 border-b border-neutral-45 px-4 py-3 hidden lg:flex items-center justify-between sticky top-0">
      <div>
        <h1 className="text-2xl text-neutral-15 font-bold font-Inter">
          Welcome Back,{" "}
          <span className="font-semibold text-primary-10">{user?.name}</span>
        </h1>
        <p className="text-neutral-20 font-Inter text-sm capitalize">
          Dashboard | {user?.role}
        </p>
      </div>

      <UserDropdown />
    </div>
  );
};

export default DashboardHeader;
