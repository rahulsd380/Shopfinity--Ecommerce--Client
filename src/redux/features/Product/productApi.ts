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
      query: ({ category, page, limit, search, brand, rating, priceRange }: {
        category?: string;
        page: number;
        limit: number;
        search?: string;
        brand?: string;
        rating?: number;
        priceRange?: string;
      }) => {
        // Dynamically building the URL with query parameters
        let url = '/product?';
    
        // Adding each query parameter to the URL if it exists
        if (category) url += `category=${category}&`;
        if (search) url += `search=${search}&`;
        if (brand) url += `brand=${brand}&`;
        if (rating !== undefined) url += `rating=${rating}&`;
        if (priceRange) url += `priceRange=${priceRange}&`;
    
        // Always include pagination
        url += `page=${page}&limit=${limit}`;
    
        // Removing the last '&' if any query parameter was added
        url = url.endsWith('&') ? url.slice(0, -1) : url;
    
        return {
          method: 'GET',
          url,
        };
      },
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
