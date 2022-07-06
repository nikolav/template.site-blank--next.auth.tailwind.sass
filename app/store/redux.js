import { configureStore } from "@reduxjs/toolkit";
import appDataReducer from "./slice-appdata";
import flagsSliceReducer from "./slice-flags";
import authSliceReducer from "./slice-auth";
//
export const store = configureStore({
  reducer: {
    appdata: appDataReducer,
    auth: authSliceReducer,
    flags: flagsSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
