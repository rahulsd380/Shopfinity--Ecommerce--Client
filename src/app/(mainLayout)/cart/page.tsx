"use client";
import { IMAGES } from "@/assets";
import CartTotal from "@/components/Cart/CartTotal/CartTotal";
import FreeShippingBar from "@/components/Cart/FreeShippingBar/FreeShippingBar";
import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Free Shipping Bar */}
      <FreeShippingBar />

      {/* Cart Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {/* Cart Table */}
          <table className="w-full border-collapse border border-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th className="text-left p-4 border-b border-neutral-200 font-semibold font-Poppins">Product</th>
                <th className="text-left p-4 border-b border-neutral-200 font-semibold font-Poppins">Price</th>
                <th className="text-left p-4 border-b border-neutral-200 font-semibold font-Poppins">Quantity</th>
                <th className="text-left p-4 border-b border-neutral-200 font-semibold font-Poppins">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {/* Cart Item */}
              <tr className="border-b border-neutral-200">
                <td className="py-4 px-4 flex items-center gap-4">
                  <button className="text-red-500">
                    <FaTimes />
                  </button>
                  <Image
                    src={IMAGES.img}
                    alt="Product"
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <p className="text-neutral-800 text-sm font-medium">
                    California Pizza Kitchen Margherita, Crispy Thin Crust Pizza, 15.5 oz (Frozen)
                  </p>
                </td>
                <td className="py-4 px-4 text-neutral-800 font-medium">$11.77</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
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
                </td>
                <td className="py-4 px-4 text-neutral-800 font-medium">
                  ${(quantity * 11.77).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Coupon Section */}
          <div className="flex flex-wrap items-center gap-4 border-t border-neutral-200 pt-4 mt-4">
            <input
              type="text"
              placeholder="Coupon code"
              className="flex-1 px-4 py-2 border border-neutral-300 text-neutral-700 rounded"
            />
            <button className="px-6 py-2 bg-neutral-800 text-white rounded">
              Apply coupon
            </button>
            <button className="px-6 py-2 border border-neutral-300 text-neutral-700 rounded">
              Clear All
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <CartTotal />
      </div>
    </div>
  );
};

export default CartPage;
