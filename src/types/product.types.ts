/* eslint-disable @typescript-eslint/no-explicit-any */
export type TProduct = {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    brand: string;
    stock: number;
    images: string[];
    ratings: number;
    vendorId: string;
    createdAt: string;
    reviews: any[];
    updatedAt: string;
    __v: number;
  };
  