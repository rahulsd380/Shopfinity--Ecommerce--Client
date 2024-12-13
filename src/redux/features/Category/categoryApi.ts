import { baseApi } from "@/redux/Api/baseApi";


const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    createCategory: builder.mutation({
      query: (postContent) => ({
        url: "/category/create-category",
        method: "POST",
        body: postContent,
      }),
      invalidatesTags: ["categories"]
    }),

    getAllCategories: builder.query({
      query: () => ({
        method: "GET",
        url: `/category`,
      }),
      providesTags: ["categories"],
    }),

    getSingleCategoryById: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/category/${id}`,
      }),
      providesTags: ["categories"]
    }),

    updateCategory: builder.mutation({
      query: ({ id, updatedCategoryData }) => ({
        method: "PUT",
        url: `/category/${id}`,
        body: updatedCategoryData,
      }),
      invalidatesTags: ["categories"]
    }),



    deleteCategory: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/category//delete-category/${id}`,
      }),
      invalidatesTags: ["categories"]
    }),


  }),
});

export const { useCreateCategoryMutation, useGetAllCategoriesQuery, useGetSingleCategoryByIdQuery, useDeleteCategoryMutation, useUpdateCategoryMutation } = categoryApi;
