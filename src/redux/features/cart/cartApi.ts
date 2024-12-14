import { baseApi } from "@/redux/Api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    addToCart: builder.mutation({
      query: ({cartData, productId}) => ({
        url: `/cart/add-to-cart/${productId}`,
        method: "POST",
        body: cartData,
      }),
      invalidatesTags: ["products"]
    }),

    // getAllProducts: builder.query({
    //   query: (category) => ({
    //     method: "GET",
    //     url: `/product?category=${category}`,
    //   }),
    //   providesTags: ["products"],
    // }),

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
    useAddToCartMutation,
} = cartApi;
