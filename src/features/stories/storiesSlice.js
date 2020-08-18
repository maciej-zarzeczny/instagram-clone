import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  error: null,
  stories: [],
};

export const fetchStories = createAsyncThunk("stories/fetchStories", async () => {
  const response = await axios.get("https://randomuser.me/api/?results=20");
  return response.data.results;
});

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    setStorySeen(state, action) {
      const { storyId } = action.payload;
      const existingStory = state.find((story) => story.id === storyId);

      if (existingStory.isNew) {
        existingStory.isNew = false;
      }
    },
  },
  extraReducers: {
    [fetchStories.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchStories.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.stories = state.stories.concat(action.payload);
    },
    [fetchStories.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { setStorySeen } = storiesSlice.actions;

export default storiesSlice.reducer;

// Selectors
export const selectAllStories = (state) => state.stories.stories;
