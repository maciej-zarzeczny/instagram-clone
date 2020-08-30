import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { MdMoreHoriz } from "react-icons/md";
import { FaHeart, FaRegComment, FaPlay } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useSelector } from "react-redux";

import "./Post.scss";
import { Comment } from "../Comment/Comment";
import { likeClicked, commentAdded } from "../postsSlice.js";
import { selectCurrentUser } from "../../users/usersSlice";

export const Post = ({ post }) => {
  const dispatch = useDispatch();

  const renderedComments = post.comments.map((comment) => (
    <Comment comment={comment} key={comment.id} />
  ));

  const [newComment, setNewComment] = useState("");
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [animateLike, setAnimateLike] = useState(false);
  const [postLiked, setPostLiked] = useState(false);
  const [postSaved, setPostSaved] = useState(false);

  const currentUser = useSelector(selectCurrentUser);

  // Video play/pause functionality
  const videoEl = useRef(null);
  const onPlayVideoClick = () => {
    if (videoPlaying) {
      videoEl.current.pause();
      setVideoPlaying(false);
    } else {
      videoEl.current.play();
      setVideoPlaying(true);
    }
  };

  const onTextareaChange = (e) => {
    setNewComment(e.target.value);
  };

  const onPostCommentClick = () => {
    if (newComment === "") return;

    dispatch(commentAdded(post.id, currentUser.login.username, newComment));
    setNewComment("");
  };

  // Handle double post click
  const onDoublePostClicked = () => {
    if (!postLiked) {
      dispatch(likeClicked({ postId: post.id, userId: currentUser.login.uuid }));
      setPostLiked(true);
    }

    setAnimateLike(true);
    setTimeout(() => {
      setAnimateLike(false);
    }, 800);
  };

  // Handle heart below post click
  const onLikeClicked = () => {
    dispatch(likeClicked({ postId: post.id, userId: currentUser.login.uuid }));
    setPostLiked(!postLiked);
  };

  // Handle post saving
  const onSaveClicked = () => {
    setPostSaved(!postSaved);
  };

  let postImage;
  if (post.isVideo) {
    postImage = (
      <video loop ref={videoEl}>
        <source src={post.image} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  } else {
    postImage = <img src={post.image} alt={post.content} />;
  }

  return (
    <article className="post" key={post.id}>
      <div className="post-header">
        <div className="user-info">
          <img src={post.userImg} alt="Profile pic" className="small-user-img" />

          <div className="details">
            <p className="username">{post.user}</p>
            <p className="location">{post.location}</p>
          </div>
        </div>
        <MdMoreHoriz className="more-btn" />
      </div>

      <div className="post-img">
        {postImage}

        {!post.isVideo && (
          <div className="post-icon-wrapper" onDoubleClick={onDoublePostClicked}>
            {animateLike && <FaHeart className={`post-icon ${animateLike ? "animate" : ""}`} />}
          </div>
        )}

        {post.isVideo && (
          <div className="post-icon-wrapper" onClick={onPlayVideoClick}>
            {!videoPlaying && <FaPlay className="post-icon" />}
          </div>
        )}
      </div>

      <div className="post-controls">
        <div>
          <div className="icon-btn-wrapper">
            <svg
              className={`icon-btn like-btn ${postLiked ? "is-liked" : "is-disliked"}`}
              onClick={onLikeClicked}
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
          </div>

          <div className="icon-btn-wrapper">
            <FaRegComment className="icon-btn" />
          </div>

          <div className="icon-btn-wrapper">
            <FiSend className="icon-btn" />
          </div>
        </div>

        <div>
          <div className="icon-btn-wrapper">
            <svg
              className={`icon-btn bookmark-btn ${postSaved ? "is-active" : ""}`}
              onClick={onSaveClicked}
              xmlns="http://www.w3.org/2000/svg"
              width="16.001"
              height="20.517"
              viewBox="0 0 16.001 20.517"
            >
              <path
                id="ic_bookmark_24px"
                d="M17,3H7A2,2,0,0,0,5.01,5L5,21l7-3,7,3V5A2.006,2.006,0,0,0,17,3Z"
                transform="translate(-3.999 -2)"
                fill="#fff"
                stroke="#262626"
                strokeWidth="2"
              />
            </svg>
          </div>
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
        <textarea
          type="text"
          className="add-comment-textarea"
          placeholder="Add a comment..."
          value={newComment}
          onChange={onTextareaChange}
        />
        <button
          className={`plain-btn post-comment-btn ${newComment === "" ? "" : "is-active"}`}
          onClick={onPostCommentClick}
        >
          Post
        </button>
      </div>
    </article>
  );
};
