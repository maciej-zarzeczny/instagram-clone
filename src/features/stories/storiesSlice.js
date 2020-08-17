import { createSlice } from "@reduxjs/toolkit";

import image_1 from "../../assets/images/profile-pics/1.jpg";
import image_2 from "../../assets/images/profile-pics/2.jpg";
import image_3 from "../../assets/images/profile-pics/3.jpg";
import image_4 from "../../assets/images/profile-pics/4.jpg";
import image_5 from "../../assets/images/profile-pics/5.jpg";
import image_6 from "../../assets/images/profile-pics/6.jpg";
import image_7 from "../../assets/images/profile-pics/7.jpg";
import image_8 from "../../assets/images/profile-pics/8.jpg";
import image_9 from "../../assets/images/profile-pics/9.jpg";

const initialState = [
  { id: 1, user: "davidoc", isNew: true, image: image_1 },
  { id: 2, user: "Sara Brzostek", isNew: true, image: image_2 },
  {
    id: 3,
    user: "Maciej Zarzeczny",
    isNew: true,
    image: image_3,
  },
  { id: 4, user: "Łukasz Wróblewski", isNew: false, image: image_4 },
  { id: 5, user: "Marta Wróblewska", isNew: false, image: image_5 },
  { id: 6, user: "thekitemag", isNew: false, image: image_6 },
  { id: 7, user: "marcjacobskite", isNew: false, image: image_7 },
  { id: 8, user: "kura_workout", isNew: false, image: image_8 },
  { id: 9, user: "zacperna", isNew: false, image: image_9 },
];

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
});

export const { setStorySeen } = storiesSlice.actions;

export default storiesSlice.reducer;

// Selectors
export const selectAllStories = (state) => state.stories;
