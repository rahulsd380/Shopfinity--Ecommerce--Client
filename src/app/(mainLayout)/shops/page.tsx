/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import ShopCardLoader from "@/components/Loaders/ShopCardLoader/ShopCardLoader";
import Container from "@/components/shared/Container/Container";
import ShopCard from "@/components/Shops/ShopCard/ShopCard";
import { useGetAllShopsQuery } from "@/redux/features/Seller/sellerApi";


const Shops = () => {
    const { data: sellers, isLoading } = useGetAllShopsQuery({});
    return (
        <Container>
            <h1 className="text-neutral-15 font-Sora text-[40px] md:text-[45px] font-semibold mt-9">
                All Shops You <span className="text-primary-10">May Follow</span>
            </h1>
            <p className="text-neutral-60 font-Inter font-medium max-w-[1000px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus iure ad necessitatibus eaque! Ducimus doloribus enim veniam necessitatibus perspiciatis, quia asperiores molestiae, culpa eos eius numquam iste soluta magnam impedit.
            </p>
            {
                isLoading ?
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  mt-10">
                        {
                            [1, 2, 3].map((_, index: number) =>
                                <ShopCardLoader key={index} />
                            )
                        }
                    </div>
                    :
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  mt-10">
                        {
                            sellers?.data?.map((seller: any) =>
                                <ShopCard key={seller?._id} seller={seller} />
                            )
                        }
                    </div>
            }
        </Container>
    );
};

export default Shops;