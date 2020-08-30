import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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

  let content;
  if (suggestedUsersStatus === "loading" || currentUserStatus === "loading") {
    content = (
      <div className="loader">
        <FaInstagram className="loading-logo" />
      </div>
    );
  } else {
    if (currentUserError || suggestedUsersError) {
      content = <h3>Wystąpił błąd, spróbuj ponownie później</h3>;
    } else {
      content = (
        <>
          <Navbar />
          <div className="App">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route
                exact
                path="/messages"
                render={() => (
                  <section>
                    <h2>Messages</h2>
                  </section>
                )}
              />
              <Redirect to="/" />
            </Switch>
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

  return <Router>{content}</Router>;
};
