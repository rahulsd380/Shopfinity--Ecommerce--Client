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

    removeProductFromCart: builder.mutation({
      query: ({userId, productId}) => ({
        method: "DELETE",
        url: `/cart/remove-product/${userId}/product/${productId}`,
      }),
      invalidatesTags: ["cart"]
    }),

    updateQuantity: builder.mutation({
      query: ({userId, productId, payload}) => ({
        method: "PUT",
        url: `/cart/update-quantity/${userId}/product/${productId}`,
        body : payload
      }),
      invalidatesTags: ["cart"]
    }),


  }),
});

export const { 
    useAddToCartMutation,
    useGetAllCartProductsQuery,
    useRemoveProductFromCartMutation,
    useUpdateQuantityMutation,
} = cartApi;
