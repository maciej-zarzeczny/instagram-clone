import { configureStore } from "@reduxjs/toolkit";

import storiesReducer from "../features/stories/storiesSlice";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";

export default configureStore({
  reducer: {
    stories: storiesReducer,
    posts: postsReducer,
    users: usersReducer,
  },
});
