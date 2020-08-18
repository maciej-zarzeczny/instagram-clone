import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./HomePage.scss";
import { StoriesList } from "../../../features/stories/StoriesList/StoriesList";
import { PostsList } from "../../../features/posts/PostsList";
import { SuggestedUsersList } from "../../../features/users/SuggestedUsersList/SuggestedUsersList";
import { fetchSuggestedUsers } from "../../../features/users/usersSlice";
import { FaInstagram } from "react-icons/fa";

export const HomePage = () => {
  const dispatch = useDispatch();
  const suggestedUsersStatus = useSelector((state) => state.users.status);

  let content;

  if (suggestedUsersStatus === "loading") {
    content = (
      <div className="loader">
        <FaInstagram className="loading-logo" />
      </div>
    );
  } else if (suggestedUsersStatus === "succeeded") {
    content = (
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
  } else if (suggestedUsersStatus === "failed") {
    content = (
      <div className="error-msg">
        <h1>Error</h1>
      </div>
    );
  }

  useEffect(() => {
    if (suggestedUsersStatus === "idle") {
      dispatch(fetchSuggestedUsers());
    }
  }, [suggestedUsersStatus, dispatch]);

  return <>{content}</>;
};
