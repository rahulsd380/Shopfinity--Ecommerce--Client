"use client";
import DashboardHeader from "@/components/Dashboard/DashboardHeader/DashboardHeader";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar/DashboardSidebar";
import { ReactNode, useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import DashboardHamburgerMenu from "./../../components/Dashboard/DashboardSidebar/DashboardHamburgerMenu";
import Image from "next/image";
import { ICONS } from "@/assets";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, useCurrentUser } from "@/redux/features/Auth/authSlice";
import { TUser } from "@/components/shared/Navbar/Navbar";
import { useRouter } from "next/navigation";

type TDashboardLayoutProps = {
  children: ReactNode;
};
const DashboardLayout: React.FC<TDashboardLayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector(useCurrentUser) as TUser | null;
  const [clientUser, setClientUser] = useState<TUser | null>(null);

  useEffect(() => {
    setClientUser(user);
  }, [user]);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
    toast.success(`See you again ${clientUser?.name}!`);
  };
  return (
    <div>
        <div className="flex lg:hidden items-center justify-between w-full p-3">
        <DashboardHamburgerMenu />

        {clientUser && (
          <div className="flex items-center gap-2">
            <Image src={ICONS.profileIcon} alt="cart" className="size-9" />
            <div>
              <h1 className="text-neutral-15 font-Sora font-semibold">
                {clientUser?.name}
              </h1>
              <button
                onClick={handleLogout}
                className="text-neutral-60 font-Inter text-sm font-medium flex items-center gap-1"
              >
                <Image
                  src={ICONS.logout}
                  alt="logout-icon"
                  className="size-5"
                />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
        <div className="flex">
      <div className="hidden lg:block">
        <DashboardSidebar />
      </div>
      
      <div className="w-full flex flex-col gap-4">
        <DashboardHeader />
        <div className="p-4">{children}</div>
      </div>
      <Toaster position="bottom-right" richColors />
    </div>
    </div>
  );
};

export default DashboardLayout;
