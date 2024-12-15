"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const CartTotal = ({ data }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (data?.data?.items) {
      const totalPrice = data.data.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      setTotal(totalPrice);
    }
  }, [data]);

  return (
    <div className="bg-[#FCFCFC] p-4 rounded-lg border flex flex-col gap-3 font-Inter">
      <h1 className="text-neutral-20 font-semibold pb-4 border-b border-neutral-200">
        Total
      </h1>
      <div className="flex justify-between pb-4 border-b border-neutral-200">
        <span className="text-neutral-10 font-medium">Subtotal:</span>
        <span className="font-medium">${total}</span>
      </div>

      <div className="flex justify-between pb-4 border-b border-neutral-200">
        <span className="text-neutral-10 font-medium">Shipping:</span>
        <span className="font-medium">$10</span>
      </div>

      <div className="flex justify-between font-bold border-b border-neutral-200 pb-4">
        <h1 className="text-neutral-20 font-semibold">Total:</h1>
        <span className="text-xl">${total + 10}</span>
      </div>
      <Link href={"/cart/place-order"} className="w-full py-3 bg-primary-10 text-white font-semibold rounded-3xl text-center">
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default CartTotal;
