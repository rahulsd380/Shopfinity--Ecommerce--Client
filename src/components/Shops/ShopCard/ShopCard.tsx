import { ICONS } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';

const ShopCard = () => {
    return (
        <div className='bg-gradient-to-r from-slate-50/70 to-green-50/70 border border-primary-10/30 rounded-2xl p-6'>
            <div className='flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center justify-between'>
                <div className="flex items-center gap-3">
                    <div className="size-16 rounded-full border border-primary-10 bg-white flex items-center justify-center">
                        <div className='bg-[#FEEFEA] p-1 flex items-center justify-center rounded-full size-[55px]'>
                            <Image src={ICONS.facebook} alt='jshd' className='' />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-neutral-10 font-Sora font-semibold leading-normal text-2xl">
                            Rahul Sutradhar
                        </h1>

                        <p className="flex items-center gap-2 text-neutral-20 font-Inter text-sm">
                            <CiCalendarDate />
                            15th December, 2024
                        </p>

                    </div>
                </div>


                <div className="flex items-center gap-3">
                    <div>
                        <h1 className="text-primary-10 font-Sora font-semibold leading-normal text-2xl text-center">
                            10+
                        </h1>
                        <p className="text-neutral-20 font-Inter text-center text-sm">
                            Total Products
                        </p>
                    </div>
                    <div>
                        <h1 className="text-primary-10 font-Sora font-semibold leading-normal text-2xl text-center">
                            10+
                        </h1>
                        <p className="text-neutral-20 font-Inter text-center text-sm">
                            Total Products
                        </p>
                    </div>
                </div>
            </div>

            <p className="text-neutral-20 font-Inter text-sm mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio iure culpa molestias voluptatibus dolores qui sed labore et nesciunt placeat quisquam veritatis animi officiis, voluptates enim, deserunt dignissimos repudiandae?
            </p>

            <div className="flex items-center gap-4 mt-7">
                <button
                    className="border border-primary-10 hover:bg-primary-10 transition duration-300 hover:text-white px-2 md:px-4 py-2 md:py-3 text-primary-10 font-medium font-Sora rounded-md w-full md:w-fit text-sm md:text-base text-center"
                >
                    Follow Now
                </button>

                <Link
                    href={`seller/${1}`}
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