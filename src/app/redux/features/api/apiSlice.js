import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://personal-server-neon.vercel.app/`,
  }),

  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "projects",
    }),
  }),
});

export const { useGetProjectsQuery } = projectsApi;
