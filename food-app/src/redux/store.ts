import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice";
import userSlice from "./userSlice";
import tableSlice from "./tableSlice";
import thunk from "redux-thunk";
import {
  useSelector as useAppSelector,
  useDispatch as useAppDispatch,
  TypedUseSelectorHook,
} from "react-redux";

const store = configureStore({
  reducer: {
    admin: adminSlice.reducer,
    user: userSlice.reducer,
    table: tableSlice.reducer,
  },
  devTools: true,
  middleware: [thunk],
});

store.subscribe(() => {
  console.log("Redux initializing...");
  console.log(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useDispatch: () => AppDispatch = useAppDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
export default store;
