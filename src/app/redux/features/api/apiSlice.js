import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/`,
  }),

  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "projects",
    }),
  }),
});

export const { useGetProjectsQuery } = projectsApi;
