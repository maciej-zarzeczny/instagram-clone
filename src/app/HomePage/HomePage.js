import React from "react";

import "./HomePage.scss";
import { StoriesList } from "../../features/stories/StoriesList/StoriesList";
import { PostsList } from "../../features/posts/PostsList";

export const HomePage = () => {
  return (
    <div className="home-page">
      <StoriesList />
      <PostsList />
    </div>
  );
};
