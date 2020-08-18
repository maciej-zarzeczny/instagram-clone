import { createSlice } from "@reduxjs/toolkit";

import image_1 from "../../assets/images/profile-pics/1.jpg";
import image_2 from "../../assets/images/profile-pics/2.jpg";

import postImage1 from "../../assets/images/post-images/sample-post-img.png";
import postImage2 from "../../assets/images/post-images/sample-post-img2.jpg";

const initialState = [
  {
    id: 1,
    user: "davidoc",
    userImg: image_1,
    image: postImage1,
    location: "CWC Wakepark",
    content: "Jak „wygrać” życie? Zacznij robić to co sprawia Ci ogromną frajdę 😈 Miłego dnia 🙌🏼 ",
    likes: 286,
    comments: [
      { id: 1, user: "sayno.instapromo", content: " Love it 💜 DM To @insta_promo.ig" },
      { id: 2, user: "ninja_witcher", content: " Dobrze gada 😁" },
    ],
    timestamp: "3 HOURS AGO",
  },
  {
    id: 2,
    user: "thekitemag",
    userImg: image_2,
    image: postImage2,
    location: "Władysławowo - Morze Bałtyckie",
    content: "Siup🤪",
    likes: 130,
    comments: [
      { id: 1, user: "timler.a.s", content: "🔥🔥🔥🔥🔥🔥🔥🔥" },
      { id: 2, user: "kaarero", content: "Rewelacja 😍" },
    ],
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
