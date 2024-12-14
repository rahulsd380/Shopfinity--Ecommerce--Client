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

    // getAllProducts: builder.query({
    //   query: () => ({
    //     method: "GET",
    //     url: `/product`,
    //   }),
    //   providesTags: ["products"],
    // }),

    getSingleSellerById: builder.query({
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

    updateShop: builder.mutation({
      query: ({ id, formData }) => ({
        method: "PUT",
        url: `/seller/update-seller/${id}`,
        body: formData,
      }),
      invalidatesTags: ["sellers"]
    }),



    // deleteProduct: builder.mutation({
    //   query: (id) => ({
    //     method: "DELETE",
    //     url: `/product/delete-product/${id}`,
    //   }),
    //   invalidatesTags: ["products"]
    // }),


  }),
});

export const { 
    useBecomeSellerMutation,
    useGetSingleSellerByIdQuery,
    useUpdateShopMutation,
    useGetMyShopQuery,
} = sellerApi;
