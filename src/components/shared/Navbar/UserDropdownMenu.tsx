import { ICONS } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { FaAngleDown, FaRegHeart } from "react-icons/fa6";
import { IoCartOutline, IoLogOutOutline } from "react-icons/io5";
import { TUser } from "./Navbar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, useCurrentUser } from "@/redux/features/Auth/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Cookies from "js-cookie";


const UserDropdownMenu = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const user = useAppSelector(useCurrentUser) as TUser | null;
    const [clientUser, setClientUser] = useState<TUser | null>(null);


    useEffect(() => {
        setClientUser(user);
    }, [user]);
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
        { label: "Products", path: "/", icon: <AiOutlineProduct className="text-xl text-neutral-10" /> },
        { label: "Cart", path: "/", icon: <IoCartOutline className="text-xl text-neutral-10" /> },
        { label: "Wishlist", path: "/", icon: <FaRegHeart className="text-xl text-neutral-10" /> },
    ];

    const handleLogout = () => {
        Cookies.remove("accessToken");
        Cookies.remove("role");
        dispatch(logout());
        router.push("/login");
        toast.success(`See you again ${clientUser?.name}!`);
    };


    return (
        <div ref={dropDownRef} className="relative w-fit">
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="transition duration-300 focus:shadow flex items-center gap-3"
            >
                <div className="hidden xl:flex items-center gap-2">
                    <Image src={ICONS.profileIcon} alt="cart" className="size-9" />
                    <div>
                        <h1 className="text-neutral-15 font-Sora font-semibold text-left">
                            {clientUser?.name}
                        </h1>
                        <p className="text-sm font-Inter text-neutral-20">{clientUser?.email}</p>
                    </div>
                    <FaAngleDown className="text-2xl" />
                </div>
            </button>

            <div
                className={`${open ? "visible" : "invisible"
                    } absolute top-14 z-50 w-full space-y-1 bg-white py-3 rounded-xl flex flex-col`}
            >
                {userMenuItems.map((item, index) => (
                    <Link
                        href={item.path}
                        key={index}
                        className={`rounded-sm px-3 py-2 ${open ? "opacity-100 duration-500" : "opacity-0 duration-150"
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
                    className={`rounded-sm px-3 py-2 ${open ? "opacity-100 duration-500" : "opacity-0 duration-150"
                        } hover:bg-primary-gradient hover:text-primary-10 flex items-center gap-3 text-neutral-10`}
                    style={{
                        transform: `translateY(${open ? 0 : (userMenuItems.length + 1) * 10
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

export default UserDropdownMenu;