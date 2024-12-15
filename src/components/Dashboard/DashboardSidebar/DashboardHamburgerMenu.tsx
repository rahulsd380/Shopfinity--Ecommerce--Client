"use client"
import { ICONS } from "@/assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import { logout, useCurrentUser } from "@/redux/features/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { TUser } from "@/components/shared/Navbar/Navbar";
import DashboardSidebar from "./DashboardSidebar";

const DashboardHamburgerMenu = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const closestDropdown = event.target.closest(".hamburgerMenu");
      if (isHamburgerOpen && closestDropdown === null) {
        setIsHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isHamburgerOpen]);

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
    setIsHamburgerOpen(false);
    toast.success(`See you again ${clientUser?.name}!`);
  };

  return (
    <div className="relative hamburgerMenu block lg:hidden">
      <Image
        onClick={toggleHamburgerMenu}
        src={ICONS.hamburgerMenu}
        alt="menu-icon"
        className="size-10 cursor-pointer"
      />

      {/* Background Overlay */}
      <div
        onClick={toggleHamburgerMenu}
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
          isHamburgerOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Side Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-white w-[280px] rounded-r-2xl overflow-y-auto h-screen flex flex-col justify-between gap-10 transition-all duration-300 transform ${
          isHamburgerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <DashboardSidebar/>



       
      </div>
    </div>
  );
};

export default DashboardHamburgerMenu;
