"use client";
import DetailsTab from "@/components/ProductDetails/DetailsTab/DetailsTab";
import Images from "@/components/ProductDetails/Images/Images";
import ProductDetails from "@/components/ProductDetails/ProductDetails/ProductDetails";
import SellerCard from "@/components/ProductDetails/SellerCard/SellerCard";
import Container from "@/components/shared/Container/Container";
import { useGetAllProductsQuery, useGetSingleProductByIdQuery } from "@/redux/features/Product/productApi";
import {  useGetSingleSellerBySellerIdQuery } from "@/redux/features/Seller/sellerApi";
import { TProduct } from "@/types/product.types";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data } = useGetSingleProductByIdQuery(id);
  const { data:categorizedProducts } = useGetAllProductsQuery({page:1, limit:20});
  const {data:seller} = useGetSingleSellerBySellerIdQuery(data?.data?.vendorId);
  console.log(seller)
  return (
    <Container>
      <div className="mt-10">
        {/* <div>
          <Link href={"/"} className="font-Sora text-xs text-neutral-30/50 hover:underline">Home</Link>
        </div> */}
        <div className="flex flex-col lg:flex-row gap-7 bg-white border border-neutral-45 rounded-lg p-5">
          <Images images={data?.data?.images} />
          <ProductDetails product={data?.data} />
          <SellerCard {...seller?.data} />
        </div>
        <div className="flex flex-col lg:flex-row gap-7 justify-between mt-20 w-full">
          <DetailsTab product={data?.data} />

          <div className="bg-neutral-55/20 p-4 rounded-xl border border-neutral-45 w-full lg:w-[25%] h-fit">
            <h1 className="text-neutral-20 font-semibold text-xl pb-4 border-b border-neutral-200">
              You may like
            </h1>
            <div className="flex flex-col gap-5 mt-5">
              {
                categorizedProducts?.data?.products?.map((product:TProduct) => 
                  <Link
                  key={product?._id}
                href={`/products/${product?._id}`}
                className="flex items-center gap-5 border-b border-neutral-40/60 pb-2"
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
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailsPage;
