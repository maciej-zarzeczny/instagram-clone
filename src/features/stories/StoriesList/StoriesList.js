import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllStories, setStorySeen } from "../storiesSlice";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import "./StoriesList.scss";

export const StoriesList = () => {
  const dispatch = useDispatch();
  const stories = useSelector(selectAllStories);

  const [leftArrowHidden, setLeftArrowHidden] = useState(true);
  const [rightArrowHidden, setRightArrowHidden] = useState(false);

  const renderedStories = stories.map((story) => (
    <div
      className="story-container"
      key={story.id}
      onClick={() => dispatch(setStorySeen({ storyId: story.id }))}
    >
      <div className={`story-img-wrapper ${story.isNew ? "active" : ""}`}>
        <img src={story.image} alt="User profile" className="story-img" />
      </div>

      <div className="story-user-name">{story.user}</div>
    </div>
  ));

  return (
    <section className="stories">
      {/* <div className={`arrow-wrapper ${leftArrowHidden ? "hidden" : ""}`}>
        <MdKeyboardArrowLeft className="arrow" />
      </div> */}

      {renderedStories}

      {/* <div className={`arrow-wrapper ${rightArrowHidden ? "hidden" : ""}`}>
        <MdKeyboardArrowRight className="arrow" />
      </div> */}
    </section>
  );
};
