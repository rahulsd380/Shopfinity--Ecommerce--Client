/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS, IMAGES } from '@/assets';
import RippleEffect from '@/components/reusable/RippleEffect/RippleEffect';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import { TUser } from './Navbar';
import { useGetAllCartProductsQuery } from '@/redux/features/cart/cartApi';
import { useAppSelector } from '@/redux/hooks';
import { useCurrentUser } from '@/redux/features/Auth/authSlice';
import { useRouter } from "next/navigation";
import UserDropdownMenu from './UserDropdownMenu';

const Navbar1 = () => {
  const router = useRouter();
  const [total, setTotal] = useState(0);
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const user = useAppSelector(useCurrentUser) as TUser | null;

  const [clientUser, setClientUser] = useState<TUser | null>(null);
  const userId = user?._id ? user?._id : "";
  const { data } = useGetAllCartProductsQuery(userId);


  useEffect(() => {
    setClientUser(user);
  }, [user]);

  useEffect(() => {
    if (data?.data?.items) {
      const totalPrice = data.data.items.reduce(
        (acc: any, item: any) => acc + item.price * item.quantity,
        0
      );
      setTotal(totalPrice);
    }
  }, [data]);




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



  // Handle the search click
  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      // Redirect to the /products page with the search query as a query parameter
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };
  return (
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

      {/* Search bar */}
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

          <UserDropdownMenu />
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
  );
};

export default Navbar1;