import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice";
import userSlice from "./userSlice";
import tableSlice from "./tableSlice";

const store = configureStore({
  reducer: {
    admin: adminSlice.reducer,
    user: userSlice.reducer,
    table: tableSlice.reducer,
  },
  devTools: true,
});

store.subscribe(() => {
  console.log("Redux initializing...");
  console.log(store.getState());
});

export default store;
