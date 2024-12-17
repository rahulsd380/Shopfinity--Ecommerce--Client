import { baseApi } from "@/redux/Api/baseApi";


const sellerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    becomeSeller: builder.mutation({
      query: (formData) => ({
        url: "/seller/become-seller",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["sellers"]
    }),

    getAllShops: builder.query({
      query: () => ({
        method: "GET",
        url: `/seller`,
      }),
      providesTags: ["sellers"],
    }),

    getSingleSellerById: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/seller/single/${id}`,
      }),
      providesTags: ["sellers"]
    }),

    getSingleSellerBySellerId: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/seller/${id}`,
      }),
      providesTags: ["sellers"]
    }),

    getMyShop: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/seller/my-shop/${id}`,
      }),
      providesTags: ["sellers"]
    }),

    getMyProducts: builder.query({
      query: (sellerId) => ({
        method: "GET",
        url: `/seller/my-products/${sellerId}`,
      }),
      providesTags: ["sellers"]
    }),

    updateShop: builder.mutation({
      query: ({ id, formData }) => ({
        method: "PUT",
        url: `/seller/update-seller/${id}`,
        body: formData,
      }),
      invalidatesTags: ["sellers"]
    }),

    approveSeller: builder.mutation({
      query: (id) => ({
        method: "PUT",
        url: `/seller/approve-seller/${id}`,
      }),
      invalidatesTags: ["sellers"]
    }),

    rejectRequest: builder.mutation({
      query: (id) => ({
        method: "PUT",
        url: `/seller/reject-request/${id}`,
      }),
      invalidatesTags: ["sellers"]
    }),

    blacklistSeller: builder.mutation({
      query: (id) => ({
        method: "PUT",
        url: `/seller/blacklist-seller/${id}`,
      }),
      invalidatesTags: ["sellers"]
    }),

    removeSeller: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/product/remove-seller/${id}`,
      }),
      invalidatesTags: ["sellers"]
    }),


  }),
});

export const { 
    useBecomeSellerMutation,
    useGetAllShopsQuery,
    useGetSingleSellerByIdQuery,
    useGetSingleSellerBySellerIdQuery,
    useUpdateShopMutation,
    useGetMyShopQuery,
    useGetMyProductsQuery,
    useApproveSellerMutation,
    useRejectRequestMutation,
    useBlacklistSellerMutation,
    useRemoveSellerMutation,
} = sellerApi;
