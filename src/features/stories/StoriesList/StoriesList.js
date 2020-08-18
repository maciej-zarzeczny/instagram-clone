import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllStories, setStorySeen, fetchStories } from "../storiesSlice";
import ClipLoader from "react-spinners/ClipLoader";

import "./StoriesList.scss";

export const StoriesList = () => {
  const dispatch = useDispatch();
  const stories = useSelector(selectAllStories);
  const storiesStatus = useSelector((state) => state.stories.status);

  let isLoading = true;

  if (storiesStatus === "loading") {
    isLoading = true;
  } else if (storiesStatus === "succeeded") {
    isLoading = false;
  } else if (storiesStatus === "failed") {
    isLoading = false;
  }

  let renderedStories;

  if (stories) {
    renderedStories = stories.map((story) => (
      <div
        className="story-container"
        key={story.login.uuid}
        onClick={() => dispatch(setStorySeen({ storyId: story.login.uuid }))}
      >
        <div className="story-img-wrapper active">
          <img src={story.picture.medium} alt="User profile" className="user-img" />
        </div>

        <div className="story-user-name">{story.login.username}</div>
      </div>
    ));
  }

  useEffect(() => {
    if (storiesStatus === "idle") {
      dispatch(fetchStories());
    }
  }, [storiesStatus, dispatch]);

  return (
    <section className="stories">
      <div className={`stories-loader ${isLoading ? "active" : ""}`}>
        <ClipLoader size={25} color={"#8e8e8e"} loading={isLoading} />
      </div>

      <div className="stories-container">{renderedStories}</div>
    </section>
  );
};
