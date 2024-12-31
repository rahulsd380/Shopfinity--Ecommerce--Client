/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ICONS } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container/Container";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentUser } from "@/redux/features/Auth/authSlice";
import Navbar1 from "./Navbar1";
import MegaMenu from "./MegaMenu";

export type TUser = {
  userId: string;
  name: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
  _id?: string;
};

const Navbar = () => {
  const user = useAppSelector(useCurrentUser) as TUser | null;
  const [open, setOpen] = useState(false);
  const [openCurrencyDropdown, setOpenCurrencyDropdown] = useState(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const currencyDropdownRef = useRef<HTMLDivElement | null>(null);
  const items = ["Bangla", "Hindi", "Spanish"];
  const currency = ["BDT", "USD", "INR"];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const closeDropdowns = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
      if (
        currencyDropdownRef.current &&
        !currencyDropdownRef.current.contains(e.target as Node)
      ) {
        setOpenCurrencyDropdown(false);
      }
    };

    document.addEventListener("mousedown", closeDropdowns);
    return () => {
      document.removeEventListener("mousedown", closeDropdowns);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-20 bg-white pb-6">
      <Container>
        <div className="hidden xl:flex items-center justify-between py-3 border-b border-neutral-50/30">
          <div className="flex items-center gap-3 font-Sora text-neutral-30 text-sm font-medium">
            <Link href={"/"} className="hover:underline">
              Home
            </Link>
            {user?.role === "user" || !user ? (
              <Link href={"/"} className="hover:underline">
                My Account
              </Link>
            ) : (
              <Link
                href={user?.role === "admin" ? "/dashboard/admin" : "/dashboard/seller"}
                className="hover:underline"
              >
                Dashboard
              </Link>
            )}
            <Link href={"/wishlist"} className="hover:underline">
              Wishlist
            </Link>
            <p className="">|</p>
            <p className="">
              We deliver to you every day from{" "}
              <span className="text-primary-10 font-semibold font-Sora">
                7:00 to 23:00
              </span>
            </p>
          </div>

          <div className="font-Sora text-neutral-30 text-sm font-medium flex items-center gap-3">
            <div ref={dropDownRef} className="relative w-fit">
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center gap-2"
              >
                English
                <Image src={ICONS.downArrow} alt="down-arrow" className="w-4" />
              </button>
              <ul
                className={`absolute top-6 z-50 w-fit space-y-1 rounded-sm bg-white text-neutral-15 shadow-md transition-all duration-300 ${open ? "visible opacity-100" : "invisible opacity-0"
                  }`}
              >
                {items.map((item, idx) => (
                  <li
                    key={idx}
                    className="rounded-sm px-3 py-2 hover:bg-primary-20 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div ref={currencyDropdownRef} className="relative w-fit">
              <button
                onClick={() => setOpenCurrencyDropdown((prev) => !prev)}
                className="flex items-center gap-2"
              >
                USD
                <Image src={ICONS.downArrow} alt="down-arrow" className="w-4" />
              </button>
              <ul
                className={`absolute top-6 z-50 w-fit space-y-1 rounded-sm bg-white text-neutral-15 shadow-md transition-all duration-300 ${openCurrencyDropdown ? "visible opacity-100" : "invisible opacity-0"
                  }`}
              >
                {currency.map((item, idx) => (
                  <li
                    key={idx}
                    className="rounded-sm px-3 py-2 hover:bg-primary-20 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button onMouseEnter={() => setMenuOpen(true)}
              className="flex items-center gap-2">
              Menu
              <Image src={ICONS.downArrow} alt="down-arrow" className="w-4" />
            </button>


            <Link href={"/my-orders"} className="hover:underline">
              My Orders
            </Link>
            <Link
              href={"/compare-products"}
              className="flex items-center gap-1 hover:underline"
            >
              <Image src={ICONS.compare} alt="cart" className="size-6" />
              Compare Products
            </Link>
          </div>
        </div>

        {/* 2nd Navbar */}
        <Navbar1 />

        {menuOpen && (
          <div ref={dropDownRef}
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)} className="absolute top-10 left-0 w-full z-50">
            <MegaMenu />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
