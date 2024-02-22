import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  email: string;
  password: string;
  name: string;
  formError?: string; // Added formError as optional string
  isLoading: boolean; // Added isLoading as boolean
}

const initialState: FormState = {
  email: "",
  password: "",
  name: "",
  formError: undefined, // Initialize formError as undefined
  isLoading: false, // Initialize isLoading as false
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
    setFormError: (state, action: PayloadAction<string | undefined>) => {
      state.formError = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setEmail, setPassword, setName, setFormError, setLoading } =
  formSlice.actions;

export default formSlice.reducer;
