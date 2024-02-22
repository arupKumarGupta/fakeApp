import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  authenticatedEmail: string;
  authToken: string;
  authenticatedName: string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  authenticatedEmail: "",
  authToken: "",
  authenticatedName: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticatedEmail: (state, action: PayloadAction<string>) => {
      state.authenticatedEmail = action.payload;
    },
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.authToken = action.payload;
      state.isAuthenticated = true;
    },
    setAuthenticatedName: (state, action: PayloadAction<string>) => {
      state.authenticatedName = action.payload;
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    clearAuth: (state) => {
      state.authenticatedEmail = "";
      state.authToken = "";
      state.authenticatedName = "";
      state.isAuthenticated = false;
    },
  },
});

export const selectAuthenticatedEmail = (state: AuthState) =>
  state.authenticatedEmail;
export const selectAuthToken = (state: AuthState) => state.authToken;
export const selectAuthenticatedName = (state: AuthState) =>
  state.authenticatedName;

export const selectIsAuthenticated = (state: AuthState) =>
  state.isAuthenticated;

export const {
  setAuthenticatedEmail,
  setAuthToken,
  setAuthenticatedName,
  setIsAuthenticated,
  clearAuth,
} = authSlice.actions;

export default authSlice.reducer;
