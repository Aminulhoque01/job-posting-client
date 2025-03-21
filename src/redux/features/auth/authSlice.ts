import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface AuthState {
  user: Record<string, unknown> | null;
  token: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedUser: (state, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;

      // Save in cookies (only if value is not null)
      if (action.payload.user) {
        Cookies.set("user", JSON.stringify(action.payload.user), { expires: 7 });
      }
      if (action.payload.token) {
        Cookies.set("token", action.payload.token, { expires: 7 });
      }
      if (action.payload.refreshToken) {
        Cookies.set("refreshToken", action.payload.refreshToken, { expires: 7 });
      }
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;

      // Remove cookies
      Cookies.remove("user");
      Cookies.remove("token");
      Cookies.remove("refreshToken");
    },
    updatedUser: (state, action: PayloadAction<AuthState["user"]>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        Cookies.set("user", JSON.stringify(state.user), { expires: 7 });
      }
    },
  },
});

export const { loggedUser, logoutUser, updatedUser } = authSlice.actions;
export default authSlice.reducer;
