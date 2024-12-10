"use client";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

// Define the types for the NavLink and MenuItem components' props
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  dropdown?: boolean;
}

interface MenuItemProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

// Reusable component for Navigation Links
const NavLink = ({ href, children, className = "" }: NavLinkProps) => (
  <Link
    href={href}
    className={`text-neutral-30 hover:text-black font-medium text-xs ${className}`}
  >
    {children}
  </Link>
);
// Reusable component for Navigation Links
const NavLink2 = ({
  href,
  children,
  className = "",
  dropdown,
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-neutral-30 justify-center items-center gap-1 hover:text-black font-medium text-base flex h-10 ${
        isActive
          ? "text-primary-10  font-bold"
          : ""
      } ${className}`}
    >
      {children}
      {dropdown && (
        <Image src={ICONS.downArrow} alt="Dropdown Icon" className="w-6 h-6" />
      )}
    </Link>
  );
};

// Reusable component for Menu Items (Account, Wishlist, Cart)
const MenuItem = ({ icon, label, onClick }: MenuItemProps) => (
  <span className="flex flex-col justify-center items-center" onClick={onClick}>
    <Image src={icon} alt={label} className="w-6 h-6 text-gray-400" />
    <p className="text-black font-medium text-xs">{label}</p>
  </span>
);

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-[#F7FAFC]">
      {/* Top Section */}
      <div className="hidden lg:flex justify-between px-10 items-center pt-3 pb-2 border-b">
        <div className="flex items-center gap-2">
          <nav className="flex gap-4">
            <NavLink href="/">About us </NavLink>
            <NavLink href="/">My Account</NavLink>
            <NavLink href="/">Wishlist</NavLink>
          </nav>
          <div>
            <p className="text-neutral-30 hover:text-black font-normal text-xs border-l-2 px-3">
              Delivery available everyday between <span>7:00 to 23:00</span>
            </p>
          </div>
        </div>
        <div>
          <nav className="flex gap-3">
            <NavLink href="/" className="gap-1 flex">
              English
              <Image
                src={ICONS.downArrow}
                alt="Dropdown Icon"
                className="w-4 h-4"
              />
            </NavLink>
            <NavLink href="/" className="gap-1 flex">
              USD
              <Image
                src={ICONS.downArrow}
                alt="Dropdown Icon"
                className="w-4 h-4"
              />
            </NavLink>
            <NavLink href="/">Order Tracking</NavLink>
          </nav>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="hidden lg:flex mt-2 flex gap-3 items-center justify-between px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src={IMAGES.logo} alt="Shopfinity Logo" className="w-16" />
          <div>
            <h1 className="text-primary-10 font-Sora text-2xl font-bold">
              Shopfinity
            </h1>
            <h2 className="text-neutral-20 font-Inter text-xs">
              Find - Pick and Shop.
            </h2>
          </div>
        </Link>

        <div className="flex-1 relative">
          <input
            type="search"
            name="s"
            placeholder="Search for products, categories or brands..."
            autoComplete="off"
            className="form-control bg-neutral-55 w-full min-w-[300px] h-[48px] px-4 pr-10 py-2 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Image
              src={ICONS.search}
              alt="Search Icon"
              className="w-5 h-5 text-gray-400"
            />
          </div>
        </div>

        <div className="flex justify-between gap-6">
          <MenuItem icon={ICONS.profile} label="Account" />
          <MenuItem icon={ICONS.wishlist} label="Wishlist" />
          <MenuItem icon={ICONS.cart} label="Your Cart" />
        </div>
      </div>

      {/* nav */}
      <div className="hidden lg:flex flex-col border-b py-3 px-10">
        <div className="flex justify-between">
        <div className="inline-block bg-primary-10 text-white font-semibold px-4 py-2 rounded-sm hover:bg-green-600 transition">
          Brouse all Catagories
        </div>
        <nav className="flex gap-4 justify-end">
          <NavLink2 href="/" dropdown>
            Home{" "}
          </NavLink2>
          <NavLink2 href="/shop" dropdown>
            Shop{" "}
          </NavLink2>
          <NavLink2 href="/fruits">Fruits & Vegetables </NavLink2>
          <NavLink2 href="/beverages">Beverages </NavLink2>
          <NavLink2 href="/blogs">Blog</NavLink2>
          <NavLink2 href="/contacts">Contact</NavLink2>
        </nav>
        </div>
        
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="lg:hidden flex justify-between border-b px-10 py-3 items-center">
        <Image
          src={ICONS.hamburger} // Replace with your hamburger icon
          alt="Hamburger Menu"
          className="w-6 h-6 cursor-pointer"
          onClick={toggleSidebar}
        />
        <Link href="/" className="flex items-center gap-3">
          <Image src={IMAGES.logo} alt="Shopfinity Logo" className="w-16" />
          <div>
            <h1 className="text-primary-10 font-Sora text-2xl font-bold">
              Shopfinity
            </h1>
            <h2 className="text-neutral-20 font-Inter text-xs">
              Find - Pick and Shop.
            </h2>
          </div>
        </Link>
        <Image
          src={ICONS.cart} // Replace with your hamburger icon
          alt="Hamburger Menu"
          className="w-6 h-6 cursor-pointer"
        />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[80%] h-full bg-white z-50 shadow-lg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <Image
            src={ICONS.close} // Replace with your close icon
            alt="Close Sidebar"
            className="w-6 h-6 cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <nav className="flex flex-col gap-4 p-4">
          <NavLink href="/" onClick={toggleSidebar}>
            About us
          </NavLink>
          <NavLink href="/" onClick={toggleSidebar}>
            My Account
          </NavLink>
          <NavLink href="/" onClick={toggleSidebar}>
            Wishlist
          </NavLink>
          <NavLink href="/" onClick={toggleSidebar}>
            Order Tracking
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
