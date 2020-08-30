import React, { useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";

import { Navbar } from "./app/components/Navbar/Navbar";
import { HomePage } from "./app/pages/HomePage/HomePage";
import { fetchSuggestedUsers, fetchCurrentUser } from "./features/users/usersSlice";
import { FaInstagram } from "react-icons/fa";

export const App = () => {
  const dispatch = useDispatch();

  const currentUserStatus = useSelector((state) => state.users.currentUser.status);
  const currentUserError = useSelector((state) => state.users.currentUser.error);

  const suggestedUsersStatus = useSelector((state) => state.users.suggestedUsers.status);
  const suggestedUsersError = useSelector((state) => state.users.suggestedUsers.error);

  const refreshPage = () => {
    window.location.reload(false);
  };

  let content;
  if (suggestedUsersStatus === "loading" || currentUserStatus === "loading") {
    content = (
      <div className="loader">
        <FaInstagram className="loading-logo" />
      </div>
    );
  } else {
    if (currentUserError || suggestedUsersError) {
      content = (
        <div className="error-msg-wrapper">
          <h3 className="error-msg">There was an error, please </h3>
          <button className="plain-btn refresh-btn" onClick={refreshPage}>
            refresh
          </button>
        </div>
      );
    } else {
      content = (
        <>
          <Navbar />
          <div className="App">
            <HomePage />
          </div>
        </>
      );
    }
  }

  useEffect(() => {
    if (currentUserStatus === "idle") {
      dispatch(fetchCurrentUser());
    }

    if (suggestedUsersStatus === "idle") {
      dispatch(fetchSuggestedUsers());
    }
  }, [dispatch, currentUserStatus, suggestedUsersStatus]);

  return <>{content}</>;
};
