import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

import { Post } from "./Post/Post";

import "./PostsList.scss";

export const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const renderedPosts = posts.map((post) => <Post post={post} key={post.id} />);

  return <section className="posts">{renderedPosts}</section>;
};
