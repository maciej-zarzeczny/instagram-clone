import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import image_1 from "../../assets/images/profile-pics/1.jpg";
import image_2 from "../../assets/images/profile-pics/2.jpg";
import image_3 from "../../assets/images/profile-pics/5.jpg";
import image_4 from "../../assets/images/profile-pics/7.jpg";

import postImage1 from "../../assets/images/post-images/sample-post-img.png";
import postImage2 from "../../assets/images/post-images/sample-post-img2.jpg";
import postVideo from "../../assets/images/post-images/post_video.mp4";
import postVideo2 from "../../assets/images/post-images/post_video2.mp4";

const initialState = [
  {
    id: nanoid(),
    user: "marcjacobskite",
    userImg: image_3,
    image: postVideo,
    isVideo: true,
    location: "Camsur Watersports Complex",
    content: "Do you feel that?",
    likes: 2634,
    likedUsers: [],
    comments: [
      { id: 1, user: "whalekitesurfing", content: "🤘🤘🤘" },
      { id: 2, user: "kite_boy_zanzibar", content: "Yeah 👍" },
    ],
    timestamp: "4 HOURS AGO",
  },
  {
    id: nanoid(),
    user: "davidoc",
    userImg: image_1,
    image: postImage1,
    location: "CWC Wakepark",
    content: "Jak „wygrać” życie? Zacznij robić to co sprawia Ci ogromną frajdę 😈 Miłego dnia 🙌🏼 ",
    likes: 286,
    likedUsers: [],
    comments: [
      { id: 1, user: "sayno.instapromo", content: "Love it 💜 DM To @insta_promo.ig" },
      { id: 2, user: "ninja_witcher", content: "Dobrze gada 😁" },
    ],
    timestamp: "7 HOURS AGO",
  },
  {
    id: nanoid(),
    user: "youcanwake",
    userImg: image_4,
    image: postVideo2,
    isVideo: true,
    location: "",
    content: "👉 CHECK THIS 'OUT' by NICOLAS LEDUC at WAKEWAY 👏💪💥",
    likes: 2634,
    likedUsers: [],
    comments: [
      { id: 1, user: "nicals_leduc", content: "❤️🔥" },
      { id: 2, user: "domilek", content: "🔥🔥🔥🔥🔥🔥🔥" },
    ],
    timestamp: "8 HOURS AGO",
  },
  {
    id: nanoid(),
    user: "thekitemag",
    userImg: image_2,
    image: postImage2,
    location: "Władysławowo - Morze Bałtyckie",
    content: "Siup🤪",
    likes: 130,
    likedUsers: [],
    comments: [
      { id: 1, user: "timler.a.s", content: "🔥🔥🔥🔥🔥🔥🔥🔥" },
      { id: 2, user: "kaarero", content: "Rewelacja 😍" },
    ],
    timestamp: "18 HOURS AGO",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    commentAdded: {
      reducer(state, action) {
        const { postId, comment } = action.payload;
        const exisitngPost = state.find((post) => post.id === postId);

        if (exisitngPost) {
          exisitngPost.comments.push(comment);
        }
      },
      prepare(postId, user, content) {
        return {
          payload: {
            comment: {
              id: nanoid(),
              user,
              content,
            },
            postId,
          },
        };
      },
    },
    likeClicked(state, action) {
      const { postId, userId } = action.payload;
      const exisitngPost = state.find((post) => post.id === postId);

      if (exisitngPost) {
        const idx = exisitngPost.likedUsers.indexOf(userId);
        if (idx > -1) {
          exisitngPost.likedUsers.splice(idx, 1);
          exisitngPost.likes--;
        } else {
          exisitngPost.likedUsers.push(userId);
          exisitngPost.likes++;
        }
      }
    },
  },
});

export const { likeClicked, commentAdded } = postsSlice.actions;

export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts;
