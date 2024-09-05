import type { TInitialState, TUser } from "./types";

import { getUsers } from "./asyncActions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TInitialState = {
  users: [],
  error: null,
  isLoading: false,
  filters: {
    name: "",
    username: "",
    phone: "",
    email: "",
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<TUser[]>) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(
        getUsers.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export default usersSlice.reducer;
export const { setFilter } = usersSlice.actions;
