import { createSlice } from "@reduxjs/toolkit";
import { ITable } from "../type";
import { useDispatch } from "./store";
import { getTable } from "../API";

export const getAvailableTable = () => async (dispatch: typeof useDispatch) => {
  const data = await getTable(false);
  // @ts-ignore
  dispatch(tableSlice.actions.saveAvailableTableData(data))
}

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
