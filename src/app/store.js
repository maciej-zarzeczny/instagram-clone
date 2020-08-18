import { configureStore } from "@reduxjs/toolkit";
import storiesReducer from "../features/stories/storiesSlice";
import postsReducer from "../features/posts/postsSlice";
import suggestionsReducer from "../features/suggestions/suggestionsSlice";

export default configureStore({
  reducer: {
    stories: storiesReducer,
    posts: postsReducer,
    suggestions: suggestionsReducer,
  },
});
