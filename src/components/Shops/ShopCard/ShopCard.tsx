/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { ICONS } from '@/assets';
import formatDate from '@/utils/formatDate';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';

const ShopCard = ({ seller }: { seller: any }) => {
    console.log(seller)
    return (
        <div className='bg-gradient-to-r from-slate-50/70 to-green-50/70 border border-primary-10/30 rounded-2xl p-6'>
            <div className='flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center justify-between'>
                <div className="flex items-center gap-3">
                    <div className="size-16 rounded-full border border-primary-10 bg-white flex items-center justify-center">
                        <div className='bg-[#FEEFEA] p-1 flex items-center justify-center rounded-full size-[55px]'>
                            <Image src={seller?.shopLogo} alt='jshd' width={50} height={50} className='' />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-neutral-10 font-Sora font-semibold leading-normal text-2xl">
                            {seller?.shopName}
                        </h1>

                        <p className="flex items-center gap-2 text-neutral-20 font-Inter text-sm">
                            <CiCalendarDate />
                            {
                                formatDate(seller?.createdAt)
                            }
                        </p>

                    </div>
                </div>


                <div className="flex items-center gap-3">
                    <div>
                        <h1 className="text-primary-10 font-Sora font-semibold leading-normal text-2xl text-center">
                            {seller?.products?.length}+
                        </h1>
                        <p className="text-neutral-20 font-Inter text-center text-sm">
                            Total Products
                        </p>
                    </div>
                    <div>
                        <h1 className="text-primary-10 font-Sora font-semibold leading-normal text-2xl text-center">
                            {seller?.followers?.length}+
                        </h1>
                        <p className="text-neutral-20 font-Inter text-center text-sm">
                            Total Followers
                        </p>
                    </div>
                </div>
            </div>

            <p className="text-neutral-20 font-Inter text-sm mt-4">
                {seller?.shopDescription}
            </p>

            <div className="flex items-center gap-4 mt-7">
                <button
                    className="border border-primary-10 hover:bg-primary-10 transition duration-300 hover:text-white px-2 md:px-4 py-2 md:py-3 text-primary-10 font-medium font-Sora rounded-md w-full md:w-fit text-sm md:text-base text-center"
                >
                    Follow Now
                </button>

                <Link
                    href={`/seller/${seller?._id}`}
                    className="bg-primary-10 px-2 md:px-4 py-2 md:py-3 text-white font-medium font-Sora flex items-center justify-center gap-3 rounded-md w-full md:w-fit text-sm md:text-base"
                >
                    View Profile
                    <Image
                        src={ICONS.rightArrowWhite}
                        alt="cart"
                        className="size-4"
                    />
                </Link>
            </div>




        </div>
    );
};

export default ShopCard;