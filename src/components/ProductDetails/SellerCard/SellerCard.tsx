import { ICONS } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TSellerCard = {
  shopName : string;
  shopLogo : string;
  sellerName : string;
  _id : string;
  address : {
    city: string;
    country: string;
    street: string;
    state: string;
    zipCode: string;
  }
}
const SellerCard:React.FC<TSellerCard> = ({shopName, shopLogo, sellerName, _id, address}) => {
  return (
    <div className="bg-white border border-neutral-45 rounded-lg p-4 font-Inter w-full xl:w-[20%] h-fit">
      <div className="flex items-center gap-3">
        <Image src={shopLogo} alt="product-img" className="size-10" width={40} height={40} />
        <div>
          <p className="text-neutral-15 font-Inter font-semibold">{shopName}</p>
          <p className="text-neutral-15/80 font-Inter">Seller: {sellerName}</p>
        </div>
      </div>

      <hr className="border border-neutral-45 my-3" />

      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <Image
            src={ICONS.bangladeshFlag}
            alt="product-img"
            className="size-5"
          />
          <p className="text-neutral-30">{address?.city}, {address?.country}</p>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={ICONS.verifiedUser}
            alt="product-img"
            className="size-5"
          />
          <p className="text-neutral-30">Verified Seller</p>
        </div>
        <div className="flex items-center gap-4">
          <Image src={ICONS.language} alt="product-img" className="size-5" />
          <p className="text-neutral-30">Worldwide shipping</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-7">
      <button className="bg-primary-10 text-white py-3 w-full font-medium rounded-lg">
        Send Inquiry
      </button>
      <Link href={`/seller/${_id}`} className="text-primary-10 bg-white border border-neutral-45 py-3 w-full font-medium rounded-lg text-center">
        Seller’s profile
      </Link>
      </div>
    </div>
  );
};

export default SellerCard;
