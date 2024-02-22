import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  email: string;
  password: string;
  name: string;
}

const initialState: FormState = {
  email: "",
  password: "",
  name: "",
};

const formSlice = createSlice({
  name: "form",
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
  },
});

export const { setEmail, setPassword, setName } = formSlice.actions;

export default formSlice.reducer;
