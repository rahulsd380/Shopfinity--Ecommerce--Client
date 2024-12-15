"use client";
import React, { useState, ReactNode } from "react";
import { ICONS } from "@/assets";
import Image from "next/image";

interface DropdownProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full text-neutral-10 font-semibold font-Poppins py-3 transition-all duration-300"
      >
        {title}
        <Image
          src={ICONS.downArrow}
          alt="down-arrow"
          className={`size-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Content */}
      <div
        className={`transition-all duration-500 ${
          isOpen
            ? "opacity-100 max-h-screen mt-2"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <ul className="w-full text-neutral-25 font-Inter">
          {children}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
