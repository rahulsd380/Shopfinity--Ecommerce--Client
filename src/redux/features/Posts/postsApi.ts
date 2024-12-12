import { baseApi } from "@/redux/Api/baseApi";


const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    createPost: builder.mutation({
      query: (postContent) => ({
        url: "/posts/create-post",
        method: "POST",
        body: postContent,
      }),
      invalidatesTags: ["posts"]
    }),

    getAllPosts: builder.query({
      query: () => ({
        method: "GET",
        url: `/posts`,
      }),
      providesTags: ["posts"],
    }),
    getSinglePostById: builder.query({
      query: (postId) => ({
        method: "GET",
        url: `/posts/${postId}`,
      }),
      providesTags : ["posts"]
    }),

    updatePost: builder.mutation({
      query: ({postId, updatedPostData}) => ({
        method: "PUT",
        url: `/posts/${postId}`,
        body: updatedPostData,
      }),
      invalidatesTags: ["posts"]
    }),

    editComment: builder.mutation({
      query: ({commentId, updatedCommentData}) => ({
        method: "PUT",
        url: `/posts/edit-comment/${commentId}`,
        body: updatedCommentData,
      }),
      invalidatesTags: ["posts"]
    }),


    deletePost: builder.mutation({
        query: (id) => ({
          method: "DELETE",
          url: `/posts/delete-post/${id}`,
        }),
        invalidatesTags : ["posts"]
      }),
    
      upvotePost: builder.mutation({
        query: ({ postId, userId }) => ({
          method: "POST",
          url: `/posts/${postId}/upvote`,
          body: { userId },
        }),
        invalidatesTags: ["posts"],
      }),
  
      // Downvote mutation
      downvotePost: builder.mutation({
        query: ({ postId, userId }) => ({
          method: "POST",
          url: `/posts/${postId}/downvote`,
          body: { userId },
        }),
        invalidatesTags: ["posts"],
      }),

      commentOnPost: builder.mutation({
        query: ({postId, commentData}) => ({
          method: "POST",
          url: `/posts/${postId}/comment`,
          body: commentData ,
        }),
        invalidatesTags: ["posts"],
      }),

      deleteComment: builder.mutation({
        query: ({postId,commentId}) => ({
          method: "DELETE",
          url: `/posts/${postId}/comment/${commentId}`,
        }),
        invalidatesTags: ["posts"],
      }),
    

  }),
});

export const { useCreatePostMutation, useGetAllPostsQuery, useGetSinglePostByIdQuery, useUpdatePostMutation, useDeletePostMutation, useUpvotePostMutation, useDownvotePostMutation, useCommentOnPostMutation, useEditCommentMutation, useDeleteCommentMutation } = authApi;
