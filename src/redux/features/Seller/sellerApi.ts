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

    // updateProduct: builder.mutation({
    //   query: ({ id, formData }) => ({
    //     method: "PUT",
    //     url: `/product/update-product/${id}`,
    //     body: formData,
    //   }),
    //   invalidatesTags: ["products"]
    // }),



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
} = sellerApi;
