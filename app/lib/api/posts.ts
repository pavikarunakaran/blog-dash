import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Post {
  date: string;
  author: any;
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://67fa1ab8094de2fe6ea32dab.mockapi.io/api/v1/posts/',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    // 1. Get all posts
    getPosts: builder.query<{ posts: Post[]; totalCount: number }, { page: number; limit: number }>({
        query: ({ page, limit }) => `posts?page=${page}&limit=${limit}`,
        transformResponse: (response: Post[], meta) => ({
            posts: response.map(post => ({
                ...post,
                date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toLocaleDateString('en-US', {
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric'
                }),
                author: `Author ${post.author}` || `User ${post.userId}` // Or fetch  author names
              })),
          totalCount: Number(meta?.response?.headers.get('x-total-count')) || 80 
        }),
        providesTags: ['Post'],
      }),

    // 2. Get single post by ID
    getPostById: builder.query<Post, number>({
        query: (id) => `posts/${id}`,
        transformResponse: (response: Post) => ({
          ...response,
          date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          author: `User ${response.userId}`
        }),
      }),

    // 3. Add new post
    addPost: builder.mutation<Post, Partial<Post>>({
      query: (body) => ({
        url: 'posts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Post'],
      
      // Optimistic update
      async onQueryStarted(newPost, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          postsApi.util.updateQueryData('getPosts', { page: 1, limit: 10 }, (draft) => {
            draft.posts.unshift({
              ...newPost,
              id: Date.now(), 
            } as Post);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

// Named exports matching endpoint names exactly
export const { 
  useGetPostsQuery,
  useGetPostByIdQuery,
  useAddPostMutation 
} = postsApi;
