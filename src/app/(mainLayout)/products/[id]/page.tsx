import { IMAGES } from "@/assets";
import DetailsTab from "@/components/ProductDetails/DetailsTab/DetailsTab";
import Images from "@/components/ProductDetails/Images/Images";
import ProductDetails from "@/components/ProductDetails/ProductDetails/ProductDetails";
import SellerCard from "@/components/ProductDetails/SellerCard/SellerCard";
import Container from "@/components/shared/Container/Container";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <Container>
      <div className="mt-10">
        {/* <div>
          <Link href={"/"} className="font-Sora text-xs text-neutral-30/50 hover:underline">Home</Link>
        </div> */}
        <div className="flex flex-col lg:flex-row gap-7 bg-white border border-neutral-45 rounded-lg p-5">
          <Images />
          <ProductDetails />
          <SellerCard/>
        </div>
       <div className="flex gap-7 justify-between mt-20 w-full">
       <DetailsTab />

       <div className="bg-neutral-55/20 p-4 rounded-xl border border-neutral-45 w-full lg:w-[25%] h-fit">
       <h1 className="text-neutral-20 font-semibold text-xl pb-4 border-b border-neutral-200">
       You may like
                </h1>
       <div className="flex flex-col gap-5 mt-5">
       <Link href={`/products/${1}`} className="flex items-center gap-5 border-b border-neutral-40/60 pb-2">
               <div className="size-16 rounded-md border border-neutral-40/60 flex items-center justify-center">
                 <Image src={IMAGES.product} alt="" className="size-14" />
               </div>
      
                 <div className="flex flex-col">
                 <h1 className="font-Inter text-lg font-semibold leading-5 text-neutral-15">
                   Iphone 13 Pro max
                 </h1>
       
                 <p className="text-neutral-20 font-semibold mt-2">
                   Price : <span className="font-normal">$10</span>
                 </p>
                 </div>
             </Link>
       </div>
       </div>
       </div>
      </div>
    </Container>
  );
};

export default page;
