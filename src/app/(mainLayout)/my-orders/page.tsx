/* eslint-disable react/no-unescaped-entities */
"use client"
import MyOrderCard from '@/components/MyOrders/MyOrderCard/MyOrderCard';
import Container from '@/components/shared/Container/Container';
import { TUser } from '@/components/shared/Navbar/Navbar';
import { useCurrentUser } from '@/redux/features/Auth/authSlice';
import { useGetMyOrdersQuery } from '@/redux/features/User/userApi';
import { useAppSelector } from '@/redux/hooks';
import { TProduct } from '@/types/product.types';

const MyOrders = () => {
     const user = useAppSelector(useCurrentUser) as TUser | null;
    const {data} = useGetMyOrdersQuery(user?._id);
    console.log(data)
    return (
        <Container>
             <h1 className="text-neutral-10 text-2xl md:text-[28px] font-semibold font-Sora mt-16">
          My Orders (2)
        </h1>
            {
                data?.data?.length > 0 ?
                data?.data?.map((product:TProduct) => 
                    <div key={product?._id} className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5'>
            <MyOrderCard {...product}/>
            </div>
                )
            :
            <p>You haven't purchased anything!</p>
            }
        </Container>
    );
};

export default MyOrders;