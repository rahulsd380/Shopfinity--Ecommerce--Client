/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ICONS } from "@/assets";
import CartProductCard from "@/components/Cart/CartProductCard/CartProductCard";
import CartTotal from "@/components/Cart/CartTotal/CartTotal";
import FreeShippingBar from "@/components/Cart/FreeShippingBar/FreeShippingBar";
import WhatWeOffer from "@/components/Home/WhatWeOffer/WhatWeOffer";
import NoProducts from "@/components/NoProducts/NoProducts";
import { TUser } from "@/components/shared/Navbar/Navbar";
import { useCurrentUser } from "@/redux/features/Auth/authSlice";
import { useGetAllCartProductsQuery, useUpdateQuantityMutation } from "@/redux/features/cart/cartApi";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const CartPage = () => {
  const user = useAppSelector(useCurrentUser) as TUser | null;
  const userId = user?._id;
  const { data } = useGetAllCartProductsQuery(userId);
  const [updateQuantity] = useUpdateQuantityMutation();

  // const handleQuantityChange = (productId: string, change: number) => {
  //   setQuantities((prevQuantities) => {
  //     const newQuantity = (prevQuantities[productId] || 1) + change;
  //     const validQuantity = newQuantity < 1 ? 1 : newQuantity;
  //     handleUpdateQuantity(productId, validQuantity); // Update immediately
  //     return { ...prevQuantities, [productId]: validQuantity };
  //   });
  // };

  // const handleUpdateQuantity = async (productId: string, quantity: number) => {
  //   try {
  //     const payload = { quantity };
  //     const response = await updateQuantity({ userId, productId, payload }).unwrap();
  //     if (response?.message) {
  //       toast.success("Quantity changed");
  //     }
  //   } catch (error) {
  //     toast.error("Failed to update quantity. Please try again.");
  //     console.error("Error updating quantity:", error);
  //   }
  // };



  const handleUpdateCartProduct = async (productId: string, quantity: number) => {
    const payload = { quantity }
    try {
      toast.loading("Updating quntity...");
      const response = await updateQuantity({ userId, productId, payload }).unwrap();
      if (response.success) {
        toast.success(response.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Error updating product: ${error.message}`);
      } else {
        toast.error("An unknown error occurred while updating the product");
      }
    } finally {
      toast.dismiss();
    }
  };
  
  const onUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    handleUpdateCartProduct(id, quantity);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 font-Inter">
      <FreeShippingBar />
      <h1 className="font-Inter text-xl font-semibold leading-5 text-neutral-15">
        My Cart ({data?.data?.items?.length || 0})
      </h1>

      <div className="flex flex-col lg:flex-row gap-7 mt-5">
        <div className="w-full lg:w-[70%] bg-neutral-55/20 p-4 rounded-xl border border-neutral-45 flex flex-col gap-5">
          {
            data?.data?.items?.length > 0 ?
          data?.data?.items?.map((item:any) => {
            return (
              <CartProductCard
                key={item.productId}
                data={item}
                onUpdateQuantity={onUpdateQuantity}
              />
            );
          })
          :
          <NoProducts/>
        }

          <div className="flex items-center justify-between w-full ">
            <Link
              href={"/products"}
              className="flex items-center gap-3 text-white font-medium bg-primary-10 rounded-md px-[14px] py-[10px] w-fit"
            >
              <Image src={ICONS.leftArrowWhite} alt="left-arrow" className="size-5" />
              Back to shop
            </Link>

            <button className="flex items-center gap-3 px-3 py-[10px] border border-neutral-40/60 rounded-md text-warning-10">
              <Image src={ICONS.remove} alt="remove-icon" className="size-5" />
              Remove all
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[30%]">
          <CartTotal data={data} />
        </div>
      </div>

      <WhatWeOffer />
    </div>
  );
};


export default CartPage;
