"use client"
import { TUser } from "@/components/shared/Navbar/Navbar";
import { useCurrentUser } from "@/redux/features/Auth/authSlice";
import { useRemoveProductFromCartMutation } from "@/redux/features/cart/cartApi";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { toast } from "sonner";

const CartProductCard = ({
  data,
  decrementQuantity,
  incrementQuantity,
  quantity,
}) => {
  const user = useAppSelector(useCurrentUser) as TUser | null;
  const [removeProductFromCart] = useRemoveProductFromCartMutation();
  const userId = user?._id
  const productId = data?.productId

  const handleRemoveProductFromCart = async () => {
    try {
      const response = await removeProductFromCart({ userId, productId }).unwrap();
      console.log(response)
  
      if (response?.message) {
        toast.success("Product added to cart successfully.");
      }
    } catch (error) {
      // Handle error and display a toast message if necessary
      toast.error("Failed to add product to cart. Please try again.");
      console.error("Error adding to cart:", error);
    }
  }


  return (
    <div className="font-Inter flex flex-col md:flex-row justify-between border-b border-neutral-40/80 pb-3">
      <div className="flex gap-5">
        <div className="size-20 rounded-md border border-neutral-40/60 flex items-center justify-center">
          <Image src={data?.image} alt="" className="size-[60px]" width={60} height={60} />
        </div>

        <div>
          <h1 className="font-Inter text-lg font-semibold leading-5 text-neutral-15">
            {data?.name}
          </h1>

          <p className="text-neutral-20 font-semibold mt-3">
            Category : <span className="font-normal">{data?.category}</span>, Brand :{" "}
            <span className="font-normal">{data?.brand}</span>
          </p>

          <p className="text-neutral-20 font-semibold mt-1">
            Stock : <span className="font-normal">{data?.stock} Items</span>
          </p>

          <div className="flex items-center gap-2 mt-3">
            <button onClick={handleRemoveProductFromCart} className="px-3 py-[10px] border border-neutral-40/60 rounded-md text-warning-10">
              Remove
            </button>
            <button className="px-3 py-[10px] border border-neutral-40/60 rounded-md text-secondary-10">
              Save for later
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row md:flex-col items-center gap-7 mt-5 md:mt-0">
        <h1 className="font-Inter text-lg font-bold leading-5 text-neutral-15 text-end">
          ${data?.price}
        </h1>

        <div className="flex items-center gap-3">
          <button
            onClick={decrementQuantity}
            className="px-3 py-1 border border-neutral-300 text-neutral-700 rounded"
          >
            -
          </button>
          <span className="text-neutral-800">{quantity}</span>
          <button
            onClick={incrementQuantity}
            className="px-3 py-1 border border-neutral-300 text-neutral-700 rounded"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
