import { createSlice } from "@reduxjs/toolkit";

import image_1 from "../../assets/images/profile-pics/1.jpg";
import image_2 from "../../assets/images/profile-pics/2.jpg";

import postImage1 from "../../assets/images/post-images/sample-post-img.png";

const initialState = [
  {
    id: 1,
    user: "davidoc",
    userImg: image_1,
    image: postImage1,
    likes: 0,
    timestamp: "3 HOURS AGO",
  },
  {
    id: 2,
    user: "thekitemag",
    userImg: image_2,
    image: postImage1,
    likes: 0,
    timestamp: "4 HOURS AGO",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    likeAdded(state, action) {
      const { postId } = action.payload;
      const exisitngPost = state.find((post) => post.id === postId);

      if (exisitngPost) {
        exisitngPost.likes++;
      }
    },
  },
});

export const { likeAdded } = postsSlice.actions;

export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts;
