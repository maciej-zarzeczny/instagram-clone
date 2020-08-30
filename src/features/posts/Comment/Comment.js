import React, { useState } from "react";

import "./Comment.scss";

export const Comment = ({ comment }) => {
  const [commentLiked, setCommentLiked] = useState(false);

  const onLikeCliked = () => {
    setCommentLiked(!commentLiked);
  };

  return (
    <section className="comment" key={comment.id}>
      <p className="comment-content">
        <span className="username">{comment.user} </span>
        {comment.content}
      </p>

      <svg
        className={`comment-like-button ${commentLiked ? "is-liked" : "is-disliked"}`}
        onClick={onLikeCliked}
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="20.7"
        viewBox="0 0 22 20.7"
      >
        <path
          id="ic_favorite_24px"
          d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5A5.447,5.447,0,0,1,7.5,3,5.988,5.988,0,0,1,12,5.09,5.988,5.988,0,0,1,16.5,3,5.447,5.447,0,0,1,22,8.5c0,3.78-3.4,6.86-8.55,11.54Z"
          transform="translate(-1 -2)"
          fill="#fff"
          stroke="#262626"
          strokeWidth="2"
        />
      </svg>
    </section>
  );
};
