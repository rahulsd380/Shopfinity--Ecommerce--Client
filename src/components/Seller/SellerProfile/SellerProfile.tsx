/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import AdditionalInfo from "./AdditionalInfo";
import formatDate from "@/utils/formatDate";
import { useFollowSellerMutation } from "@/redux/features/User/userApi";
import { toast } from "sonner";
import { TUser } from "@/components/shared/Navbar/Navbar";
import { useCurrentUser } from "@/redux/features/Auth/authSlice";
import { useAppSelector } from "@/redux/hooks";

type TSellerProfileProps = {
  isFollowVisible?:boolean;
  data:any;
}

const SellerProfile:React.FC<TSellerProfileProps> = ({isFollowVisible = true, data}) => {
  console.log(data)
  const user = useAppSelector(useCurrentUser) as TUser | null;
  const [followSeller] = useFollowSellerMutation();

  const handleFollowSeller= async () => {
    try {
      const followData = {
        userId : user?._id,
        vendorId : data?._id
      };
      const response = await followSeller(followData);
      console.log(response)

      if(response?.data?.success){
        toast.success("Seller profile followed successfully.");
      }
      
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong! Please try again.");
    }
  };
  
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
            src={data?.shopLogo}
            alt="bg-img"
            className="size-[90px] rounded-full object-cover"
            width={90}
            height={90}
          />
        </div>

        <div className="w-full">
          <div className="flex items-center gap-3">
          <h1 className="text-neutral-15 font-Inter text-2xl font-semibold">
            {data?.shopName}
          </h1>
          <h1 className="text-neutral-25 font-Inter text-xs">
            {data?.followers ? data?.followers?.length : 0} {" "}
            {
              data?.followers?.length > 1 ? "Followers" : "Follower"
            }
          </h1>
          </div>
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
                <p className="text-neutral-25 font-Inter">{formatDate(data?.createdAt)}</p>
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
              isFollowVisible && user?._id !== data?.userId &&
              <button onClick={handleFollowSeller} disabled={data?.followers.includes(user?._id)} className="text-white px-6 py-2 bg-primary-10 hover:bg-primary-10/80 transition duration-300 text-lg font-Inter font-medium rounded-3xl">
              {
              data?.followers.includes(user?._id) ? "Followed" : "Follow"
              
              }
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
