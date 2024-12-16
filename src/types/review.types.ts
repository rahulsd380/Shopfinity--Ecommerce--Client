import { ReactNode } from "react";

export type TReview = {
    userId: string;
    userName: string;
    reviewId: string;
    rating: number;
    reviewText: string;
    reviewDate: ReactNode;
};