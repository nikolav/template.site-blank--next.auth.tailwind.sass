import { configureStore } from "@reduxjs/toolkit";
import appDataReducer from "./slice-appdata";
import flagsSliceReducer from "./slice-flags";
//
// import demoSliceReducer from "./demo-slice";
//
export const store = configureStore({
  reducer: {
    appdata: appDataReducer,
    flags: flagsSliceReducer,
    // demo: demoSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
