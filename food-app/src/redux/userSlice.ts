import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    table_id: 0,
  },
  reducers: {
    book: (state, action) => {
      state.table_id = action.payload.table_id;
      window.location.href = "/";
    },
  },
});

export default userSlice;
