/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IMAGES } from "@/assets";
import { useGetAllProductsQuery } from "@/redux/features/Product/productApi";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type TCardData = {
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
};
const MegaMenu = () => {
  const { data } = useGetAllProductsQuery({
    page: 1,
    limit: 20,
  });
  const cardData: TCardData[] = [
    {
      imageSrc: IMAGES.bestPrice,
      title: "Best Prices & Deals",
      description: "Don’t miss our daily amazing deals and prices",
    },
    {
      imageSrc: IMAGES.refundable,
      title: "Refundable ",
      description: "If your items have damage we agree to refund it",
    },
    {
      imageSrc: IMAGES.freeDelivery,
      title: "Free delivery",
      description: "Do purchase over $50 and get free delivery anywhere",
    },
  ];
  const containerClass = "flex flex-col gap-5";
  return (
    <div className="bg-white rounded-t-2xl shadow-2xl w-full p-6 grid grid-cols-4 gap-10 z-10">
      {/* Left side cards */}
      <div className={containerClass}>
        <h1 className="text-primary-10 text-xl font-semibold">Our Best Services</h1>
        {cardData.map((card, index) => (
          <div key={index} className="flex gap-5 bg-[#DEF9EC]/50 p-3 rounded-xl">
            <div className=" ">
              <Image
                src={card.imageSrc}
                alt={card.title}
                className="w-14 h-10"
              />
            </div>
            <div className="">
              <h1 className="text-neutral-10 text-xl font-semibold font-Sora">{card.title}</h1>
              <p className="">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={containerClass}>
        <h1 className="text-primary-10 text-xl font-semibold">Our Awesome Products</h1>
        {
          data?.data?.products?.slice(0, 4)?.map((product: any) =>
            <Link
              key={product?._id}
              href={`/products/${product?._id}`}
              className="flex items-center gap-5"
            >
              <div className="size-16 rounded-md border border-neutral-40/60 flex items-center justify-center">
                <Image src={product?.images && product?.images[0]} alt="" className="size-14" width={56} height={56} />
              </div>

              <div className="flex flex-col">
                <h1 className="font-Inter text-lg font-semibold leading-5 text-neutral-15">
                  {product?.name}
                </h1>

                <p className="text-neutral-20 font-semibold mt-2">
                  Price : <span className="font-normal">${product?.price}</span>
                </p>
              </div>
            </Link>
          )
        }
      </div>

      <div className={containerClass}>
        <h1 className="text-primary-10 text-xl font-semibold">Only For You</h1>
        {
          data?.data?.products?.slice(4, 8)?.map((product: any) =>
            <Link
              key={product?._id}
              href={`/products/${product?._id}`}
              className="flex items-center gap-5"
            >
              <div className="size-16 rounded-md border border-neutral-40/60 flex items-center justify-center">
                <Image src={product?.images && product?.images[0]} alt="" className="size-14" width={56} height={56} />
              </div>

              <div className="flex flex-col">
                <h1 className="font-Inter text-lg font-semibold leading-5 text-neutral-15">
                  {product?.name}
                </h1>

                <p className="text-neutral-20 font-semibold mt-2">
                  Price : <span className="font-normal">${product?.price}</span>
                </p>
              </div>
            </Link>
          )
        }
      </div>

      <div
        className="w-full overflow-hidden flex items-center justify-center flex-col pt-12 p-6 bg-primary-10 rounded-xl">

        <h4 className="text-center text-[1.2rem] font-medium text-white">Fresh & 100% Organic</h4>
        <p className="text-[1rem] text-center text-[#FFFFFF]">Get Now</p>

        <Link
          href={"/products"}
          className="py-2 px-6 rounded-md bg-white text-[#0BAF9A] font-[400] text-[1rem] mx-auto mb-5 mt-4">Shop
          Now
        </Link>

        <img alt="product/image" src="https://i.ibb.co.com/xfp5R3W/basket-png.png" className="w-[400px] mx-auto" />

      </div>
    </div>
  );
};

export default MegaMenu;