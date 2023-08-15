import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    email: "",
    full_name: "",
  },
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.full_name = action.payload.full_name;
      window.location.href = "/management";
    },
  },
});

export default adminSlice;
