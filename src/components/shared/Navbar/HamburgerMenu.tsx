import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { TUser } from "./Navbar";
import { logout, useCurrentUser } from "@/redux/features/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const HamburgerMenu = () => {
  const categoryList = ["Vegetable", "Fruits", "Butter", "Potato"];
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
    <div className="relative hamburgerMenu block xl:hidden">
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
        className={`fixed inset-y-0 left-0 z-50 bg-white w-[330px] overflow-y-auto h-screen flex flex-col justify-between gap-10 transition-all duration-300 transform px-5 ${
          isHamburgerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
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

          {/* Cross button */}
          <button
            onClick={toggleHamburgerMenu}
            className="size-9 rounded-full bg-neutral-65 hover:bg-primary-10 transition duration-300 flex items-center justify-center"
          >
            <Image src={ICONS.cross} className="size-5" alt="Previous" />
          </button>
        </div>

       <div className="flex flex-col w-full">
       <Link
          href={"/"}
          className="text-neutral-10 text-lg font-semibold py-[10px] w-full border-b border-[#E7E7E7]"
        >
          Home{" "}
        </Link>
       <Link
          href={"/products"}
          className="text-neutral-10 text-lg font-semibold py-[10px] w-full border-b border-[#E7E7E7]"
        >
          All Products
        </Link>
       <Link
          href={"/wishlist"}
          className="text-neutral-10 text-lg font-semibold py-[10px] w-full border-b border-[#E7E7E7]"
        >
          Wishlist
        </Link>
       <Link
          href={"/wishlist"}
          className="text-neutral-10 text-lg font-semibold py-[10px] w-full border-b border-[#E7E7E7]"
        >
          Compare Products
        </Link>
       <Link
          href={"/"}
          className="text-neutral-10 text-lg font-semibold py-[10px] w-full border-b border-[#E7E7E7]"
        >
          Blog
        </Link>
        <DropdownMenu
          label="Shop"
          categoryList={categoryList}
          closeMenu={() => setIsHamburgerOpen(false)}
        />
       

        <DropdownMenu
          label="Categories"
          categoryList={categoryList}
          closeMenu={() => setIsHamburgerOpen(false)}
        />
        <Link
          href={"/"}
          className="text-neutral-10 text-lg font-semibold py-[10px] w-full border-b border-[#E7E7E7]"
        >
          Contact Us
        </Link>
        <Link
          href={"/become-seller"}
          className="text-neutral-10 text-lg font-semibold py-[10px] w-full border-b border-[#E7E7E7]"
        >
          Become a Seller
        </Link>

        
       </div>



       {clientUser ? (
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
          ) : (
            <div className="flex items-center gap-4">
              <Link
                href={"/login"}
                className="border border-primary-10 hover:bg-primary-10 transition duration-300 hover:text-white px-4 py-3 text-primary-10 font-medium font-Sora flex items-center gap-3 rounded-md w-fit"
              >
                Login
              </Link>
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
            </div>
          )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
