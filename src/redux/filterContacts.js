import { createSlice } from "@reduxjs/toolkit";


const filtersSlice = createSlice({  
  name: "filter",
  initialState: "",

  reducers: {
    contactFilter: (state, action) => {
        return action.payload; 
    },
  },
});

export const { contactFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;