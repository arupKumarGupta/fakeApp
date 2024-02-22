import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../types";

const initialState: AuthState = {
  email: "",
  password: "",
  name: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const selectEmail = (state: AuthState) => state.email;
export const selectPassword = (state: AuthState) => state.password;
export const selectName = (state: AuthState) => state.name;

export const selectIsAuthenticated = (state: AuthState) =>
  state.isAuthenticated;

export const { setEmail, setPassword, setName, setIsAuthenticated } =
  authSlice.actions;

export default authSlice.reducer;
