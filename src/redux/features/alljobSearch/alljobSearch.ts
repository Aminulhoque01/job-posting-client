import { baseApi } from "../api/baseApi";


const alljobsearchApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllJobsSearch: builder.query({
            query: ({ page, limit, location, category, workPlace, experinceLavel, employmentType }) => {
                const queryParams = new URLSearchParams();

                if (location) queryParams.set('location', location);
                if (category) queryParams.set('category', category);
                if (workPlace) queryParams.set('workPlace', workPlace);
                if (experinceLavel) queryParams.set('experinceLavel', experinceLavel);
                if (employmentType) queryParams.set('employmentType', employmentType);
                queryParams.set('page', page);
                queryParams.set('limit', limit);

                return {
                    url: `/job/all-jobs?${queryParams.toString()}`,
                    method: "GET",
                };
            },
            
        }),
        getSingleJob: builder.query({
            query: (id) => ({
                url: `/job/single-job/${id}`,
                method: "GET",
            }),

        }),
        applyToJob: builder.mutation({
            query: (formData) => ({
                url: "/apply",
                method: "POST",
                body: formData,
            }),
            invalidatesTags: ["MyJob"]
        }),
        getmyApplyJob: builder.query({
            query: () => ({
                url: "/apply/my-apply",
                method: "GET",

            }),
           
        }),
        saveToJob: builder.mutation({
            query: (id) => ({
                url: "/job/save-job",
                method: "POST",
                body: { jobId: id },  // Sending jobId in request body
            }),
            invalidatesTags: [ "SavedJobs" ], // Ensures saved jobs list updates after this mutation
        }),
        getSaveJob: builder.query({
            query: () => ({
                url: "/job/saved-jobs",
                method: "GET",

            }),
            providesTags:["SavedJobs"]
        })
    }),
});


export const { useGetAllJobsSearchQuery, useGetSingleJobQuery, useApplyToJobMutation, useGetmyApplyJobQuery, useSaveToJobMutation, useGetSaveJobQuery} = alljobsearchApi;