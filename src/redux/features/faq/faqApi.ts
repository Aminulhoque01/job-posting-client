import { baseApi } from '../api/baseApi';

const faqApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFaq: builder.query({
      query: () => {
        
        return {
          url: '/faq/faq',
          method: 'GET',
          // Pass auth headers
        };
      },
    }),
  }),
});

export const { useGetFaqQuery } = faqApi;
