import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserAPI, checkUserAPI } from "./authApi";

const initialState = {
  loggedInUserToken: null,
  status: "idle",
  error: null,
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async (userDetails) => {
    const response = createUserAPI(userDetails);
    return response.data;
  }
);

export const checkUser = createAsyncThunk(
  "user/checkUser",
  async (loginInfo) => {
    const response = await checkUserAPI(loginInfo);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loggedInUserToken = action.payload;
        state.status = "idle";
      })
      .addCase(checkUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.loggedInUserToken = action.payload;
        state.status = "idle";
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.error = action.error;
        state.status = "idle";
      });
  },
});

export const selectLoggedInUser = (state) => state.auth.loggedInUserToken;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
