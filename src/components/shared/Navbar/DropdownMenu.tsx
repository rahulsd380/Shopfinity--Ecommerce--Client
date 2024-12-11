import { ICONS } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const DropdownMenu = ({
  label,
  categoryList,
  closeMenu,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-[#E7E7E7]">
      <button
        onClick={toggle}
        className="text-neutral-10 text-lg font-semibold py-[10px] w-full text-start flex items-center justify-between"
      >
        {label}
        <Image src={ICONS.downArrow} alt="down-arrow" className="size-4" />
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] block" : "grid-rows-[0fr] hidden"
        }`}
      >
        <div className="overflow-hidden flex justify-between mt-3 pb-5">

            <div className="flex flex-col gap-5">
              {categoryList.map((category, index) => (
                <Link
                  key={index}
                  href={category}
                  onClick={closeMenu}
                >
                  <p className="text-[#333] text-sm font-medium leading-6 text-start hover:cursor-pointer">
                    {category}
                  </p>
                </Link>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
