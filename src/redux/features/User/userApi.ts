import { baseApi } from "@/redux/Api/baseApi";


const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // becomeSeller: builder.mutation({
    //   query: (formData) => ({
    //     url: "/seller/become-seller",
    //     method: "POST",
    //     body: formData,
    //   }),
    //   invalidatesTags: ["sellers"]
    // }),

    getAllUsersForAdmin: builder.query({
      query: () => ({
        method: "GET",
        url: `/user`,
      }),
      providesTags: ["users"],
    }),

    // getSingleSellerById: builder.query({
    //   query: (id) => ({
    //     method: "GET",
    //     url: `/seller/${id}`,
    //   }),
    //   providesTags: ["users"]
    // }),

    getMe: builder.query({
      query: () => ({
        method: "GET",
        url: `/user/me`,
      }),
      providesTags: ["users"]
    }),

    // updateShop: builder.mutation({
    //   query: ({ id, formData }) => ({
    //     method: "PUT",
    //     url: `/seller/update-seller/${id}`,
    //     body: formData,
    //   }),
    //   invalidatesTags: ["users"]
    // }),

    changeRoleToAdmin: builder.mutation({
      query: (id) => ({
        method: "PUT",
        url: `/user/make-admin/${id}`,
      }),
      invalidatesTags: ["users"]
    }),

    changeRoleToUser: builder.mutation({
      query: (id) => ({
        method: "PUT",
        url: `/user/make-user/${id}`,
      }),
      invalidatesTags: ["users"]
    }),

    suspendUser: builder.mutation({
      query: (id) => ({
        method: "PUT",
        url: `/user/suspend-user/${id}`,
      }),
      invalidatesTags: ["users"]
    }),

    // rejectRequest: builder.mutation({
    //   query: (id) => ({
    //     method: "PUT",
    //     url: `/seller/reject-request/${id}`,
    //   }),
    //   invalidatesTags: ["users"]
    // }),

    // blacklistSeller: builder.mutation({
    //   query: (id) => ({
    //     method: "PUT",
    //     url: `/seller/blacklist-seller/${id}`,
    //   }),
    //   invalidatesTags: ["users"]
    // }),

    removeUser: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/user/remove-user/${id}`,
      }),
      invalidatesTags: ["users"]
    }),


  }),
});

export const { 
  useGetAllUsersForAdminQuery,
    useChangeRoleToAdminMutation,
    useChangeRoleToUserMutation,
    useSuspendUserMutation,
    useRemoveUserMutation,
    useGetMeQuery,
} = userApi;
