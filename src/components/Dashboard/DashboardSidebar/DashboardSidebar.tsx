"use client";
import { IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsShopWindow } from "react-icons/bs";
import { FaHome, FaListUl } from "react-icons/fa";
import { LuHistory } from "react-icons/lu";
import { MdOutlineLibraryAdd, MdOutlinePayment } from "react-icons/md";

const DashboardSidebar = () => {
  const pathname = usePathname();

  const dashboardSidebarLinks = [
    {
      label: "Dashboard",
      path: "/dashboard/seller",
      icon: <FaHome />,
    },
    {
      label: "Manage Shop",
      path: "/dashboard/seller/manage-shop",
      icon: <BsShopWindow/>,
    },
    {
      label: "All Products",
      path: "/dashboard/seller/all-products",
      icon: <FaListUl />,
    },
    {
      label: "Add Product",
      path: "/dashboard/seller/add-product",
      icon: <MdOutlineLibraryAdd />,
    },
    {
      label: "Order History",
      path: "/dashboard/seller/order-history",
      icon: <LuHistory />,
    },
    {
      label: "Payment Info",
      path: "/dashboard/payment-info",
      icon: <MdOutlinePayment />,
    },
  ];

  return (
    <div className="w-[280px] bg-neutral-15 h-screen sticky top-0 left-0">
      <div className="p-4">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-3">
          <Image src={IMAGES.logo} alt="shopfinity" className="w-16" />
          <div>
            <h1 className="text-primary-10 font-Sora text-xl font-bold">
              Shopfinity
            </h1>
            <h1 className="text-neutral-45 font-Inter text-[10px]">
              Find - Pick and Shop.
            </h1>
          </div>
        </Link>
      </div>

      <div className="flex flex-col gap-3 mt-7 font-Inter">
        {dashboardSidebarLinks.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`${
              pathname === link.path
                ? "text-primary-10 bg-primary-10/20 border-l-[3px] border-primary-10"
                : "text-neutral-45"
            } px-5 py-3 flex items-center gap-4 transition-all duration-300`}
          >
            <span
              className={`text-lg ${
                pathname === link.path ? "text-primary-10" : "text-neutral-45"
              }`}
            >
              {link.icon}
            </span>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
