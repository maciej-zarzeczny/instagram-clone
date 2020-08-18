import React from "react";

import "./SuggestedUser.scss";

export const SuggestedUser = ({ user }) => {
  return (
    <div className="suggested-user">
      <div className="left-side">
        <img src={user.picture.thumbnail} alt="Suggested user" className="small-user-img" />

        <div className="suggested-user-info">
          <p className="username">{user.login.username}</p>
          <p className="small-text">Follows you</p>
        </div>
      </div>

      <div className="right-side">
        <button className="plain-btn follow-btn">Follow</button>
      </div>
    </div>
  );
};
