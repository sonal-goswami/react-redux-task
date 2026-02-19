import { createSlice, nanoid } from "@reduxjs/toolkit";

const crudSlice = createSlice({
  name: "crud",
  initialState: {
    records: [],
  },
  reducers: {
    addRecord: {
      reducer: (state, action) => {
        state.records.push(action.payload);
      },
      prepare: (data) => ({
        payload: {
          id: nanoid(),
          ...data,
        },
      }),
    },

    deleteRecord: (state, action) => {
      state.records = state.records.filter(
        (item) => item.id !== action.payload
      );
    },

    updateRecord: (state, action) => {
      const index = state.records.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.records[index] = action.payload;
      }
    },
  },
});

export const { addRecord, deleteRecord, updateRecord } =
  crudSlice.actions;

export default crudSlice.reducer;
