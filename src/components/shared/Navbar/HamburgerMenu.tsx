import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DropdownMenu from "./DropdownMenu";

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

  return (
    <div className="relative hamburgerMenu">
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
        className={`fixed inset-y-0 left-0 z-50 bg-white w-[330px] overflow-y-auto h-screen transition-all duration-300 transform px-5 ${
          isHamburgerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
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

       <div className="flex flex-col w-full mt-10">
       <Link
          href={"/"}
          className="text-neutral-10 text-lg font-semibold py-[10px] w-full border-b border-[#E7E7E7]"
        >
          Home{" "}
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

        
       </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
