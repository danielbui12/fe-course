import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";
import { login } from "../API";

export const handleLogin =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    const data = await login(email, password);
    if (data) {
      dispatch(adminSlice.actions.login(data));
    }
  };

const STORAGE_KEY = "admin_reducer";
const storageData = JSON.parse(
  window.localStorage.getItem("STORAGE_KEY") || "{}",
);
const _saveData = (data: object) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    email: storageData.email,
    full_name: storageData.full_name,
  },
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.full_name = action.payload.full_name;
      _saveData(state);
      window.location.href = "/management";
    },
  },
});

export default adminSlice;
