"use client"
import { IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSidebar = () => {
  const pathname = usePathname();
  console.log(pathname)

  const dashboardSidebarLinks = [
    {
      label : "Dashboard",
      path : "/dashboard/seller",
      icon: ""
    },
    {
      label : "All products",
      path : "/dashboard/all-products",
      icon: ""
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

      <div className="flex flex-col gap-3 mt-7 font-Poppins">
      {
        dashboardSidebarLinks.map((link, index) => 
          <Link key={index} href={link.path} className={`${pathname === link.path ? "text-primary-10 bg-primary-10/20 border-l-[3px] border-primary-10" : "text-white bg-none"} px-5 py-3  bg-opacity-55`}>
        {link.label}
        </Link>
        )
      }
      </div>
    </div>
  );
};

export default DashboardSidebar;
