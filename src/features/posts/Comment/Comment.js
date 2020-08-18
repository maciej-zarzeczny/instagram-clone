import React from "react";
import { FaRegHeart } from "react-icons/fa";

import "./Comment.scss";

export const Comment = ({ comment }) => {
  return (
    <section className="comment" key={comment.id}>
      <p className="comment-content">
        <span className="username">{comment.user}</span>
        {comment.content}
      </p>

      <FaRegHeart className="comment-like-button" />
    </section>
  );
};
