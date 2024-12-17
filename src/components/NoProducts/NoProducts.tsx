import { IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';

const NoProducts = () => {
    return (
        <div className='flex flex-col gap-3 items-center justify-center'>
            <Image src={IMAGES.emptyBag} alt='' className='w-full max-w-[250px] mx-auto'/>
            <h1 className='text-xl font-semibold font-Sora text-neutral-10'>No products found.</h1>
        </div>
    );
};

export default NoProducts;