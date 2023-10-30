import { configureStore } from "@reduxjs/toolkit";
import { projectsApi } from "../features/api/apiSlice";

const store = configureStore({
  reducer: {
    [projectsApi.reducerPath]: projectsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectsApi.middleware),
});

export default store;
