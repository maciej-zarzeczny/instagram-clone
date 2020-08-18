import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import ProfilePic from "../../assets/images/profile-pics/5.jpg";

const initialState = {
  status: "idle",
  error: null,
  currentUser: {
    id: 100,
    username: "maciej_zarzeczny",
    name: "Maciej Zarzeczny",
    image: ProfilePic,
  },
  suggestedUsers: [],
};

export const fetchSuggestedUsers = createAsyncThunk("users/fetchSuggestedUsers", async () => {
  const response = await axios.get("https://randomuser.me/api/?results=5");
  return response.data.results;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSuggestedUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSuggestedUsers.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.suggestedUsers = state.suggestedUsers.concat(action.payload);
    },
    [fetchSuggestedUsers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;

export const selectCurrentUser = (state) => state.users.currentUser;

export const selectSuggestedUsers = (state) => state.users.suggestedUsers;
