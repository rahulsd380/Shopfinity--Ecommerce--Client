/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ICONS } from "@/assets";
import { TUser } from "@/components/shared/Navbar/Navbar";
import { useCurrentUser } from "@/redux/features/Auth/authSlice";
import { useAddToCartMutation } from "@/redux/features/cart/cartApi";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaLinkedinIn,
  FaMinus,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { toast } from "sonner";

const ProductDetails = ({product}:{product:any}) => {
  const socialMediaIcons = [
    {
      icon: <FaFacebook className="text-xl" />,
      href: "",
    },
    {
      icon: <FaTwitter className="text-xl" />,
      href: "",
    },
    {
      icon: <FaInstagram className="text-xl" />,
      href: "",
    },
    {
      icon: <FaLinkedinIn className="text-xl" />,
      href: "",
    },
  ];

  const user = useAppSelector(useCurrentUser) as TUser | null;
    const [addToCart] = useAddToCartMutation();
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState<any[]>([]);
  
    useEffect(() => {
      const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlist(storedWishlist);
    }, []);
  
    const wishlistData = {
      _id : product?._id,
      name : product?.name,
      image: product?.images[0],
      price : product?.price,
      brand : product?.brand,
      rating : product?.rating,
    };
  
    const handleAddToWishlist = () => {
      // Check if the product is already in the wishlist
      const isProductInWishlist = wishlist.some(
        (item) => item._id === wishlistData._id
      );
  
      if (isProductInWishlist) {
        toast.error("This product is already in your wishlist!");
      } else {
        // Add the new product to the wishlist
        const updatedWishlist = [...wishlist, wishlistData];
        setWishlist(updatedWishlist); // Update the state immediately
  
        // Save the updated wishlist back to localStorage
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  
        toast.success("Product added to wishlist!");
      }
    };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const id = user?._id
  const productId = product?._id

  const handleAddToCart = async () => {
    if (!user) {
      toast.error("Please log in to add products to your cart.");
      return;
    }
    try {
      const cartData = {
        userId: id,
        sellerId : product?.vendorId,
        quantity : quantity
      };
  
      // Make API request to add to cart
      const response = await addToCart({ cartData, productId }).unwrap();
      console.log(response)
  
      if (response?.message) {
        toast.success("Product added to cart successfully.");
      }
    } catch (error) {
      // Handle error and display a toast message if necessary
      toast.error("Failed to add product to cart. Please try again.");
      console.error("Error adding to cart:", error);
    }
  };
  return (
    <div className="w-full xl:w-[40%]">

      {/* Name and availablity */}
      <div className="flex items-center gap-2">
        <h1 className="text-2xl md:text-[36px] text-neutral-10 font-bold font-Poppins">
          {product?.name}
        </h1>
        <div className="bg-primary-20 p-2 rounded text-primary-30 font-Poppins text-sm w-fit">
          In Stock
        </div>
      </div>

      {/* Rating | ID */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-3">
        <div className="flex items-center gap-2">
          <Image src={ICONS.star} alt="star-icon" className="size-5" />
          <Image src={ICONS.star} alt="star-icon" className="size-5" />
          <Image src={ICONS.star} alt="star-icon" className="size-5" />
          <Image src={ICONS.star} alt="star-icon" className="size-5" />
          <Image src={ICONS.star} alt="star-icon" className="size-5" />
          <p className="text-neutral-30 font-Poppins text-sm">{product?.rating ? product?.rating : 0} Review</p>
        </div>
        <h1 className="text-black font-Poppins text-sm font-semibold">
          Product ID:{" "}
          <span className="text-neutral-30 font-normal">{product?._id}</span>
        </h1>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3 mt-5">
        <div className="flex items-center gap-1">
          <h1 className="text-neutral-40 font-Poppins text-xl line-through">
            ${product?.price + 10}
          </h1>
          <h1 className="text-primary-30 font-Poppins text-2xl font-semibold">
            ${product?.price}
          </h1>
        </div>
        <div className="bg-warning-20 px-[10px] py-2 rounded-3xl text-warning-10 font-Poppins text-sm font-medium w-fit">
          64% Off
        </div>
      </div>

      <hr className="border border-neutral-40/40 mt-5" />

      {/* Brand | Social Media */}
      <div className="flex items-center justify-between mt-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <p className="text-neutral-10 text-sm font-medium">Brand: <span className="font-bold">{product?.brand}</span></p>
          
        </div>

        {/* Social media icons */}
        <div className="flex items-center gap-[6px]">
          {socialMediaIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              className="text-neutral-20 hover:text-white hover:bg-primary-10 size-10 rounded-full flex items-center justify-center transition duration-300"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>

      <p className="text-neutral-20 font-Poppins text-sm mt-4">
        {product?.description}
      </p>
      <hr className="border border-neutral-40/40 mt-5" />

      {/* Quantity | Add to cart | Wishlist */}
      <div className="flex items-center gap-4 font-poppins mt-6">
        {/* Quantity Selector */}
        <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
          <button
            onClick={handleDecrease}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaMinus />
          </button>
          <span className="px-4 text-gray-700">{quantity}</span>
          <button
            onClick={handleIncrease}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaPlus />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button onClick={handleAddToCart} className="flex items-center justify-center bg-primary-10 text-white rounded-full px-6 py-3 w-full hover:bg-green-600 transition-all">
          Add to Cart <IoBagHandleOutline className="ml-2" />
        </button>

        {/* Wishlist Button */}
        <button onClick={handleAddToWishlist} className="flex items-center justify-center bg-green-100 text-primary-10 rounded-full p-3 hover:bg-green-200 transition-all">
          <FaHeart />
        </button>
      </div>

      <h1 className="text-black font-Poppins text-sm font-semibold mt-6">
        Category: <span className="text-neutral-30 font-normal">{product?.category}</span>
      </h1>
      <h1 className="text-black font-Poppins text-sm font-semibold mt-3">
        Tag:{" "}
        <span className="text-neutral-30 font-normal">{product?.tags ? product?.tags : "No tags"}</span>
      </h1>
    </div>
  );
};

export default ProductDetails;
