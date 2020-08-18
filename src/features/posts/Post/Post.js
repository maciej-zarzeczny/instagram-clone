import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

import "./Post.scss";
import { Comment } from "../Comment/Comment";

export const Post = ({ post }) => {
  const renderedComments = post.comments.map((comment) => (
    <Comment comment={comment} key={comment.id} />
  ));

  return (
    <article className="post" key={post.id}>
      <div className="post-header">
        <div className="user-info">
          <img src={post.userImg} alt="Profile pic" />

          <div className="details">
            <p className="username">{post.user}</p>
            <p className="location">{post.location}</p>
          </div>
        </div>
        <MdMoreHoriz className="more-btn" />
      </div>

      <div className="post-img">
        <img src={post.image} alt="Post" />
      </div>

      <div className="post-controls">
        <div className="left-controls">
          <FaRegHeart className="control-icon" />
          <FaRegComment className="control-icon" />
          <FiSend className="control-icon" />
        </div>

        <div className="right-controls">
          <FaRegBookmark className="control-icon" />
        </div>
      </div>

      <div className="post-details">
        <p className="likes-number">{post.likes} likes</p>
        <p className="content">
          <span className="username">{post.user} </span>
          {post.content}
        </p>
        {renderedComments}

        <time className="timestamp">{post.timestamp}</time>
      </div>

      <div className="add-comment-form">
        <textarea type="text" className="add-comment-textarea" placeholder="Add a comment..." />
        <button className="post-comment-btn">Post</button>
      </div>
    </article>
  );
};
