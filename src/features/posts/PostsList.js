import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { MdMoreHoriz } from "react-icons/md";

import "./posts.scss";

export const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <div className="post" key={post.id}>
      <div className="post-header">
        <div className="user-info">
          <img src={post.userImg} alt="Profile pic" />
          <p className="username">{post.user}</p>
        </div>
        <MdMoreHoriz className="more-btn" />
      </div>
      <div className="post-img">
        <img src={post.image} alt="Post" />
      </div>
      <div className="post-details"></div>
    </div>
  ));

  return <section className="posts">{renderedPosts}</section>;
};
