import { baseApi } from "@/redux/Api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    addToCart: builder.mutation({
      query: ({cartData, productId}) => ({
        url: `/cart/add-to-cart/${productId}`,
        method: "POST",
        body: cartData,
      }),
      invalidatesTags: ["cart"]
    }),

    getAllCartProducts: builder.query({
      query: (userId) => ({
        method: "GET",
        url: `/cart/${userId}`,
      }),
      providesTags: ["cart"],
    }),

    // getSingleProductById: builder.query({
    //   query: (id) => ({
    //     method: "GET",
    //     url: `/product/${id}`,
    //   }),
    //   providesTags: ["products"]
    // }),

    // updateProduct: builder.mutation({
    //   query: ({ id, formData }) => ({
    //     method: "PUT",
    //     url: `/product/update-product/${id}`,
    //     body: formData,
    //   }),
    //   invalidatesTags: ["products"]
    // }),



    removeProductFromCart: builder.mutation({
      query: ({userId, productId}) => ({
        method: "DELETE",
        url: `/cart/remove-product/${userId}/product/${productId}`,
      }),
      invalidatesTags: ["cart"]
    }),


  }),
});

export const { 
    useAddToCartMutation,
    useGetAllCartProductsQuery,
    useRemoveProductFromCartMutation
} = cartApi;
