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
      <div className="user-profile">
        <img src={currentUser.image} alt="User" className="user-img" />
        <div className="user-info">
          <p className="username">{currentUser.username}</p>
          <p className="small-text">{currentUser.name}</p>
        </div>
      </div>

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
