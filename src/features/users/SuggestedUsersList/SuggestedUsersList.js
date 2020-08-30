import React from "react";
import { useSelector } from "react-redux";

import "./SuggestedUsersList.scss";
import { selectCurrentUser, selectSuggestedUsers } from "../usersSlice";
import { SuggestedUser } from "../SuggestedUser/SuggestedUser";

export const SuggestedUsersList = () => {
  const suggestions = useSelector(selectSuggestedUsers);
  const currentUser = useSelector(selectCurrentUser);

  const renderedSuggestions = suggestions.map((suggestion) => (
    <SuggestedUser user={suggestion} key={suggestion.login.uuid} />
  ));

  return (
    <article className="side-panel">
      {currentUser && (
        <div className="user-profile">
          <img src={currentUser.picture.medium} alt="User" className="user-img" />
          <div className="user-info">
            <p className="username">{currentUser.login.username}</p>
            <p className="small-text">{`${currentUser.name.first} ${currentUser.name.last}`}</p>
          </div>
        </div>
      )}

      <section className="suggestions">
        <header>
          <p>Suggestions For You</p>
          <button className="plain-btn see-all-btn">See all</button>
        </header>

        <div className="content">{renderedSuggestions}</div>
      </section>
    </article>
  );
};
