import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = 'user_reducer'
const storageData = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}")

function _saveData(data: object) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    table_id: storageData.table_id,
  },
  reducers: {
    book: (state, action) => {
      state.table_id = action.payload;
      _saveData(state);
      window.location.href = "/";
    },
  },
});
export const { book } = userSlice.actions;
export default userSlice;
