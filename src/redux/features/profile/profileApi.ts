import { baseApi } from "../api/baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/user/profile",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags:["MYprofile"]
    }),
    updateProfileImage: builder.mutation({
      query: (data) => ({
        url: "/user/profile-image",
        method: "POST",
        body: data,
      }),
      invalidatesTags:["MYprofile"]
    }),

    getMyProfile: builder.query({
      query: () => ({
        url:`/user/profile`,
        method: "GET",
      }),
      providesTags:["MYprofile"]
    }),
  }),
});

export const { useUpdateProfileMutation, useUpdateProfileImageMutation, useGetMyProfileQuery } =profileApi;
