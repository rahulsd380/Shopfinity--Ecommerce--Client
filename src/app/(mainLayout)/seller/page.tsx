import SellerProducts from '@/components/Seller/SellerProducts/SellerProducts';
import SellerProfile from '@/components/Seller/SellerProfile/SellerProfile';
import Container from '@/components/shared/Container/Container';
import React from 'react';

const page = () => {
    return (
        <Container>
            <div className="mt-10">
            <SellerProfile/>
            <SellerProducts/>
        </div>
        </Container>
    );
};

export default page;