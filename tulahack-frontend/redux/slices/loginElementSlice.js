import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "register",
};

export const loginElementSlice = createSlice({
  name: "loginElement",
  initialState,
  reducers: {
    login: (state) => {
      state.value = "login";
    },
    register: (state) => {
      state.value = "register";
    },
    codeVerify: (state) => {
      state.value = "codeVerify";
    },
  },
});

export const { login, register, codeVerify } = loginElementSlice.actions;

export default loginElementSlice.reducer;
