"use client"
import SellerProducts from '@/components/Seller/SellerProducts/SellerProducts';
import SellerProfile from '@/components/Seller/SellerProfile/SellerProfile';
import Container from '@/components/shared/Container/Container';
import { useGetSingleSellerByIdQuery } from '@/redux/features/Seller/sellerApi';
import { useParams } from 'next/navigation';
import React from 'react';

const Seller = () => {
    const {id} = useParams();
    const {data} = useGetSingleSellerByIdQuery(id);
    return (
        <Container>
            <div className="mt-10">
            <SellerProfile data={data?.data}/>
            <SellerProducts products={data?.data?.products}/>
        </div>
        </Container>
    );
};

export default Seller;