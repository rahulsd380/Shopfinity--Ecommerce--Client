import { ICONS } from '@/assets';
import Image from 'next/image';
import React from 'react';

type TAdditionalInfo = {
  shopLogo:string;
  supplier:string;
  address : {
    city: string;
    country: string;
    street: string;
    state: string;
    zipCode: string;
  }
}
const AdditionalInfo :React.FC<TAdditionalInfo> = ({shopLogo, supplier, address}) => {
    return (
        <div className="bg-white border border-neutral-45 rounded-xl p-4 font-Inter w-full xl:w-[25%] h-fit">
      <div className="flex items-center gap-3">
        <Image src={shopLogo} alt="product-img" className="size-10" width={40} height={40} />
        <div>
          <p className="text-neutral-15 font-Inter">Supplier</p>
          <p className="text-neutral-15 font-Inter">{supplier}</p>
        </div>
      </div>

      <hr className="border border-neutral-45/50 my-3" />

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

      <button className="bg-primary-10 text-white py-3 w-full font-medium mt-7 rounded-lg">
        Send Inquiry
      </button>
      <button className="text-primary-10 bg-white border border-neutral-45 py-3 w-full font-medium mt-2 rounded-lg ">
        Send Message
      </button>

      <div className='flex items-center justify-center gap-3 mt-4'>
      <Image src={ICONS.review} alt="product-img" className="size-5" />
      <p className="text-primary-10 font-Inter font-semibold">Write a review</p>
      </div>
    </div>
    );
};

export default AdditionalInfo;