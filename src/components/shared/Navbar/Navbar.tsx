/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container/Container";
import { useEffect, useRef, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, useCurrentUser } from "@/redux/features/Auth/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useGetAllCartProductsQuery } from "@/redux/features/cart/cartApi";
import Cookies from "js-cookie";
import RippleEffect from "@/components/reusable/RippleEffect/RippleEffect";

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
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector(useCurrentUser) as TUser | null;

  const [wishlist, setWishlist] = useState<any[]>([]);

  const fetchWishlist = () => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  };

  // Load wishlist on initial render
  useEffect(() => {
    fetchWishlist();
  }, []);

  const [clientUser, setClientUser] = useState<TUser | null>(null);
  const userId = user?._id ? user?._id : "";
  const { data } = useGetAllCartProductsQuery(userId);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (data?.data?.items) {
      const totalPrice = data.data.items.reduce(
        (acc: any, item: any) => acc + item.price * item.quantity,
        0
      );
      setTotal(totalPrice);
    }
  }, [data]);

  useEffect(() => {
    setClientUser(user);
  }, [user]);

  const handleLogout = () => {
    Cookies.remove("accessToken");
    dispatch(logout());
    router.push("/login");
    toast.success(`See you again ${clientUser?.name}!`);
  };

  const [open, setOpen] = useState(false);
  const [openCurrencyDropdown, setOpenCurrencyDropdown] = useState(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const currencyDropdown = useRef(null);
  const items = ["Bangla", "Hindi", "Spanish"];
  const currency = ["BDT", "USD", "INR"];

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const [searchQuery, setSearchQuery] = useState<string>("");

  // Handle the search click
  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      // Redirect to the /products page with the search query as a query parameter
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <Container>
      <div className="hidden xl:flex items-center justify-between py-3 border-b border-neutral-50/30">
        <div className="flex items-center gap-3 font-Sora text-neutral-30 text-sm font-medium">
          <Link href={"/"} className="hover:underline">
            Home
          </Link>
         {
          user?.role === "user"
          ?
          <Link href={"/"} className="hover:underline">
          My Account
        </Link>
        :
        <Link href={user?.role === "admin" ? "dashboard/admin" : "dashboard/seller"} className="hover:underline">
        Dashboard
      </Link>
         }
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
          <div ref={dropDownRef} className="relative w-fit ">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center gap-2"
            >
              English
              <Image src={ICONS.downArrow} alt="down-arrow" className="w-4" />
            </button>
            <ul
              className={`${
                open
                  ? "visible translate-y-0 duration-300"
                  : "invisible translate-y-4"
              } absolute top-6 z-50 w-fit space-y-1 rounded-sm bg-white text-neutral-15 shadow-md`}
            >
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className={`rounded-sm px-3 py-2 ${
                    open ? "opacity-100 duration-300" : "opacity-0"
                  } hover:bg-primary-20 cursor-pointer`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div ref={currencyDropdown} className="relative w-fit ">
            <button
              onClick={() => setOpenCurrencyDropdown((prev) => !prev)}
              className="flex items-center gap-2"
            >
              USD
              <Image src={ICONS.downArrow} alt="down-arrow" className="w-4" />
            </button>
            <ul
              className={`${
                openCurrencyDropdown
                  ? "visible translate-y-0 duration-300"
                  : "invisible translate-y-4"
              } absolute top-6 z-50 w-fit space-y-1 rounded-sm bg-white text-neutral-15 shadow-md`}
            >
              {currency.map((item, idx) => (
                <li
                  key={idx}
                  className={`rounded-sm px-3 py-2 ${
                    openCurrencyDropdown
                      ? "opacity-100 duration-300"
                      : "opacity-0"
                  } hover:bg-primary-20 cursor-pointer`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
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

      <div className="flex items-center justify-between mt-4 gap-10">
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

        <div className="relative flex-grow hidden md:block">
          <Image
            onClick={handleSearchClick}
            src={ICONS.search}
            alt="send-icon"
            className="size-6 absolute right-3 top-3 bottom-0 cursor-pointer"
          />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search for your product..."
            className="w-full px-4 py-3 pr-12 rounded focus:outline-none focus:ring-primary-10 transition duration-300 focus:ring-1 bg-neutral-65"
          />
        </div>

        <div className="flex items-center gap-8">
          {/* Become a seller */}
          {
            user?.role !== "seller" &&
            <RippleEffect>
          <Link
            href={"/become-seller"}
            className="bg-primary-20/30 px-4 py-3 text-neutral-15 font-medium font-Sora hidden xl:flex items-center gap-3 rounded-md w-fit"
          >
            Become a Seller
            <Image src={ICONS.rightArrow} alt="cart" className="size-4" />
          </Link>
          </RippleEffect>
          }
          {/* Wishlist */}
          <Link href={"/wishlist"} className="hidden md:block relative w-fit">
            <Image src={ICONS.wishlist2} alt="cart" className="size-10" />
            <div className="size-5 text-xs rounded-full bg-primary-10 text-white flex items-center justify-center absolute top-0 -right-2">
              <p>{wishlist?.length}</p>
            </div>
          </Link>
          {/* Cart */}
          <div className="hidden md:flex items-center gap-4">
            <Link href={"/cart"} className="relative w-fit">
              <Image src={ICONS.cart3} alt="cart" className="size-10" />
              {user && data?.data?.items?.length ? (
                <p className="size-5 text-xs rounded-full bg-primary-10 text-white flex items-center justify-center absolute top-0 -right-2">
                  {data?.data?.items?.length}
                </p>
              ) : (
                <p className="size-5 text-xs rounded-full bg-primary-10 text-white flex items-center justify-center absolute top-0 -right-2">
                  0
                </p>
              )}
            </Link>
            <div>
              <h1 className="text-neutral-15 font-Sora font-semibold">Total</h1>
              <p className="text-neutral-60 font-Inter text-sm font-medium mt-1">
                ${user && total ? total.toFixed(2) : "0.00"}
              </p>
            </div>
          </div>

          {clientUser ? (
            <div className="hidden xl:flex items-center gap-2">
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
          ) : (
            <div className="hidden xl:flex items-center gap-4">
              <RippleEffect>
              <Link
                href={"/login"}
                className="border border-primary-10 hover:bg-primary-10 transition duration-300 hover:text-white px-4 py-3 text-primary-10 font-medium font-Sora flex items-center gap-3 rounded-md w-fit"
              >
                Login
              </Link>
              </RippleEffect>
              
             <RippleEffect>
             <Link
                href={"/signup"}
                className="bg-primary-10 px-4 py-3 text-white font-medium font-Sora flex items-center gap-3 rounded-md w-fit"
              >
                Signup
                <Image
                  src={ICONS.rightArrowWhite}
                  alt="cart"
                  className="size-4"
                />
              </Link>
             </RippleEffect>
            </div>
          )}
          <HamburgerMenu />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
