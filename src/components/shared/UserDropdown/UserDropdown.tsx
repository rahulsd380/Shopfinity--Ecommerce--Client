"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLogOutOutline } from "react-icons/io5";
import {IoNotificationsOutline,} from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { FaChalkboardUser, FaChevronDown } from "react-icons/fa6";
import { ICONS } from "@/assets";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, useCurrentUser } from "@/redux/features/Auth/authSlice";
import { TUser } from "../Navbar/Navbar";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "sonner";



const UserDropdown = () => {
//   const {data} = useGetMeQuery({});
const dispatch = useAppDispatch();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

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

  const userMenuItems = [
    { label: "Dashboard", path: "/", icon: <RxDashboard /> },
    {
      label: "View Profile",
      path: "/",
      icon: <GoPerson className="text-[1.3rem]" />,
    },
    { label: "Inbox", path: "/", icon: <MdOutlineForwardToInbox /> },
    { label: "Notifications", path: "/", icon: <IoNotificationsOutline className="text-" /> },
    { label: "Contact Us", path: "/", icon: <RiContactsBook2Line /> },
    { label: "About Us", path: "/", icon: <FaChalkboardUser />
    },
  ];

  const handleLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("role");
    dispatch(logout());
    router.push("/login");
    toast.success(`See you again!`);
  };

const user = useAppSelector(useCurrentUser) as TUser | null;

  return (
    <div ref={dropDownRef} className="relative w-fit">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-primary-70 px-2 py-[6px] rounded-3xl border border-primary-10 focus:outline-none transition duration-300 focus:shadow flex items-center gap-3 w-[220px]"
      >
        <div className="size-8 rounded-full bg-primary-10 border border-primary-10/50 flex items-center justify-center">
       
        <Image
          className="size-6"
          src={ICONS.user}
          alt=""
        />
        </div>
          <h1 className="font-medium text-neutral-10">{user?.name ? user?.name : "N/A"}</h1>
          <p><FaChevronDown className="text-neutral-10" /></p>
      </button>

      <div
        className={`${
          open ? "visible" : "invisible"
        } absolute top-14 z-50 w-full space-y-1 bg-white py-3 rounded-xl flex flex-col`}
      >
        {userMenuItems.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className={`rounded-sm px-3 py-2 ${
              open ? "opacity-100 duration-500" : "opacity-0 duration-150"
            } hover:bg-primary-gradient hover:text-primary-10 flex items-center gap-3 text-neutral-10`}
            style={{
              transform: `translateY(${open ? 0 : (index + 1) * 10}px)`,
            }}
          >
           {item.icon}
            {item.label}
          </Link>
        ))}

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className={`rounded-sm px-3 py-2 ${
            open ? "opacity-100 duration-500" : "opacity-0 duration-150"
          } hover:bg-primary-gradient hover:text-primary-10 flex items-center gap-3 text-neutral-10`}
          style={{
            transform: `translateY(${
              open ? 0 : (userMenuItems.length + 1) * 10
            }px)`,
          }}
        >
          <IoLogOutOutline className="text-xl" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDropdown;
