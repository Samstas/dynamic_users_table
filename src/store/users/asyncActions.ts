import type { TUser } from "./types";

import { Axios } from "../../api/axiosConfig";
import { Endpoints } from "../../api/Endpoints";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk<
  TUser[],
  void,
  { rejectValue: string }
>("users/getUsers", async (_, thunkAPI) => {
  try {
    const { data } = await Axios.get<TUser[]>(Endpoints.GET_USERS);

    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue("Failed to fetch users");
  }
});
