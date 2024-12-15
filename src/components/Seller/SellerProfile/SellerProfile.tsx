/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import AdditionalInfo from "./AdditionalInfo";

type TSellerProfileProps = {
  isFollowVisible?:boolean;
  data:any;
}
const SellerProfile:React.FC<TSellerProfileProps> = ({isFollowVisible = true, data}) => {
  return (
        <div className="flex flex-col xl:flex-row gap-5">
    <div className="rounded-xl w-full xl:w-[80%]">
      <Image
        src={IMAGES.bgImg}
        alt="bg-img"
        className="w-full max-h-[200px] object-cover rounded-t-xl"
      />

      <div className="bg-white border border-neutral-45 p-5 flex flex-col xl:flex-row gap-7 lg:gap-10 w-full rounded-b-xl">
        {/* Shop logo */}
        <div className="size-24 rounded-full flex items-center justify-center border border-neutral-45">
          <Image
            src={IMAGES.logo}
            alt="bg-img"
            className="size-[90px] rounded-full object-cover"
          />
        </div>

        <div className="w-full">
          <h1 className="text-neutral-15 font-Inter text-2xl font-semibold">
            {data?.shopName}
          </h1>
          <p className="text-neutral-25 font-Inter">
          {data?.tagline}
          </p>

            {/* Address and info */}
          <div className="flex flex-wrap gap-6 lg:gap-0 items-center justify-between w-full mt-5">
            <div>
              <h2 className="text-neutral-10 font-Poppins text-xl font-medium">
                Location
              </h2>
              <div className="flex items-center gap-3 mt-2">
                <Image
                  src={ICONS.location}
                  alt="location-icon"
                  className="size-5"
                />
                <p className="text-neutral-25 font-Inter">
                {data?.address?.city}, {data?.address?.country}
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-neutral-10 font-Poppins text-xl font-medium">
                Joined
              </h2>
              <div className="flex items-center gap-3 mt-2">
                <Image
                  src={ICONS.date}
                  alt="location-icon"
                  className="size-5"
                />
                <p className="text-neutral-25 font-Inter">{data?.createdAt}</p>
              </div>
            </div>
            <div>
              <h2 className="text-neutral-10 font-Poppins text-xl font-medium">
                Total Products
              </h2>
              <div className="flex items-center gap-3 mt-2">
                <Image
                  src={ICONS.products}
                  alt="location-icon"
                  className="size-5"
                />
                <p className="text-neutral-25 font-Inter">{data?.products?.length} products</p>
              </div>
            </div>

            {
              isFollowVisible &&
              <button className="text-white px-6 py-2 bg-primary-10 hover:bg-primary-10/80 transition duration-300 text-lg font-Inter font-medium rounded-3xl">
              Follow
            </button>
            }
          </div>
        </div>
      </div>
    </div>
    <AdditionalInfo shopLogo={data?.shopLogo} supplier={data?.supplierName} address={data?.address}/>
    </div>
  );
};

export default SellerProfile;
