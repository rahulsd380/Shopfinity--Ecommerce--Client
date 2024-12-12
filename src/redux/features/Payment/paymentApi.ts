import { baseApi } from "@/redux/Api/baseApi";


const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    makePayment: builder.mutation({
      query: (paymentData) => ({
        url: "/payment/create-payment",
        method: "POST",
        body: paymentData,
      }),
      invalidatesTags: ["payments"]
    }),

    getAllPaymentsHistories: builder.query({
      query: () => ({
        method: "GET",
        url: "/payment",
      }),
      providesTags : ["payments"]
    }),
    

  }),
});

export const {useMakePaymentMutation, useGetAllPaymentsHistoriesQuery } = paymentApi;
