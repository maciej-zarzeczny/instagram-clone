import { configureStore } from "@reduxjs/toolkit";
import storiesReducer from "../features/stories/storiesSlice";
import postsReducer from "../features/posts/postsSlice";

export default configureStore({
  reducer: {
    stories: storiesReducer,
    posts: postsReducer,
  },
});
