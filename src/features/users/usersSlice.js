import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentUser: {
    status: "idle",
    error: false,
    data: {},
  },
  suggestedUsers: {
    status: "idle",
    error: false,
    data: [],
  },
};

export const fetchSuggestedUsers = createAsyncThunk("users/fetchSuggestedUsers", async () => {
  const response = await axios.get("https://randomuser.me/api/?results=5");
  return response.data.results;
});

export const fetchCurrentUser = createAsyncThunk("users/fetchCurrentUser", async () => {
  const response = await axios.get("https://randomuser.me/api/");
  return response.data.results;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSuggestedUsers.pending]: (state, action) => {
      state.suggestedUsers.status = "loading";
    },
    [fetchSuggestedUsers.fulfilled]: (state, action) => {
      state.suggestedUsers.status = "succeeded";
      state.suggestedUsers.data = state.suggestedUsers.data.concat(action.payload);
    },
    [fetchSuggestedUsers.rejected]: (state, action) => {
      state.suggestedUsers.status = "failed";
      state.suggestedUsers.error = true;
    },

    [fetchCurrentUser.pending]: (state, action) => {
      state.currentUser.status = "loading";
    },
    [fetchCurrentUser.fulfilled]: (state, action) => {
      state.currentUser.status = "succeeded";
      state.currentUser.data = action.payload;
    },
    [fetchCurrentUser.rejected]: (state, action) => {
      state.currentUser.status = "failed";
      state.currentUser.error = true;
    },
  },
});

export default usersSlice.reducer;

export const selectCurrentUser = (state) => state.users.currentUser.data[0];

export const selectSuggestedUsers = (state) => state.users.suggestedUsers.data;
