import { createSlice } from "@reduxjs/toolkit";
import { ITable } from "../type";
import { AppDispatch } from "./store";
import { getTable } from "../API";

export const getAvailableTable = () => async (dispatch: AppDispatch) => {
  const data = await getTable(false);
  dispatch(tableSlice.actions.saveAvailableTableData(data));
};

const tableSlice = createSlice({
  name: "table",
  initialState: {
    availableTable: [] as ITable[],
    allTable: [] as ITable[],
  },
  reducers: {
    saveAvailableTableData: (state, action) => {
      state.availableTable = action.payload;
    },
  },
});

export default tableSlice;
