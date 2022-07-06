import { useEffect } from "react";
import { supabase as client } from "../../supabase";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { omit } from "../../src/util";
import { useAuthSession } from "../providers/AuthSessionProvider";
//
export const AUTH = "dulhvpewrxd";
const initialState = {
  [AUTH]: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const user = action.payload;
      state[AUTH] = {
        ...user.user_metadata,
        uid: user.id,
        email: user.email,
        "_@": user.created_at,
      };
    },
    destroyAuth: (state, _action) => {
      state[AUTH] = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth, destroyAuth } = authSlice.actions;

export default authSlice.reducer;

//
// export redux store shortcut
export function useAuth() {
  const session = useAuthSession();
  //
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  //
  useEffect(() => {
    if (!session?.user) {
      dispatch(destroyAuth());
      return;
    }
    dispatch(setAuth(session.user));
  }, [session?.user]);
  //
  return {
    auth: auth[AUTH],
    login: async (creds) => await client.auth.signIn(creds),
    register: async (creds) =>
      await client.auth.signUp(
        {
          email: creds.email,
          password: creds.password,
        },
        {
          data: {
            ...omit(creds, ["email", "password"]),
          },
        }
      ),
    logout: async () => await client.auth.signOut(),
  };
}
