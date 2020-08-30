import React from "react";

import "./HomePage.scss";
import { StoriesList } from "../../../features/stories/StoriesList/StoriesList";
import { PostsList } from "../../../features/posts/PostsList";
import { SuggestedUsersList } from "../../../features/users/SuggestedUsersList/SuggestedUsersList";

export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="main-content">
        <StoriesList />
        <PostsList />
      </section>

      <aside className="side-panel">
        <SuggestedUsersList />
      </aside>
    </div>
  );
};
