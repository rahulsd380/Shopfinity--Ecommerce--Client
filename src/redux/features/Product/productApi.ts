import { baseApi } from "@/redux/Api/baseApi";


const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    createProduct: builder.mutation({
      query: (postContent) => ({
        url: "/product/create-product",
        method: "POST",
        body: postContent,
      }),
      invalidatesTags: ["products"]
    }),

    getAllProducts: builder.query({
      query: () => ({
        method: "GET",
        url: `/product`,
      }),
      providesTags: ["products"],
    }),

    getSingleProductById: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/product/${id}`,
      }),
      providesTags: ["products"]
    }),

    updateProduct: builder.mutation({
      query: ({ id, formData }) => ({
        method: "PUT",
        url: `/product/update-product/${id}`,
        body: formData,
      }),
      invalidatesTags: ["products"]
    }),



    deleteProduct: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/product/delete-product/${id}`,
      }),
      invalidatesTags: ["products"]
    }),


  }),
});

export const { 
    useCreateProductMutation,
    useGetAllProductsQuery, 
    useGetSingleProductByIdQuery,
    useDeleteProductMutation,
    useUpdateProductMutation
} = productApi;
