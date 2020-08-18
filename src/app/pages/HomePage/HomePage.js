import React from "react";

import "./HomePage.scss";
import { StoriesList } from "../../../features/stories/StoriesList/StoriesList";
import { PostsList } from "../../../features/posts/PostsList";
import { Suggestions } from "../../../features/suggestions/Suggestions";

export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="main">
        <StoriesList />
        <PostsList />
      </section>

      <aside className="side">
        <Suggestions />
      </aside>
    </div>
  );
};
