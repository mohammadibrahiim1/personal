const { configureStore } = require("@reduxjs/toolkit");
const { projectsApi } = require("../features/api/apiSlice");

const store = configureStore({
  reducer: {
    [projectsApi.reducerPath]: projectsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectsApi.middleware),
});

export default store;
