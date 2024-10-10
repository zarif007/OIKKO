"use client";

import React from "react";
import Post from "./Post";
import Link from "next/link";

const Posts = () => {
  return (
    <div className="m-4 w-[90%] md:w-[75%]">
      <div className="flex justify-between my-2">
        <p className="text-2xl font-bold">Posts</p>
        <Link
          href="/posts"
          className="text-lg font-medium text-blue-600 underline+"
        >
          See All Posts
        </Link>
      </div>
      <Post />
    </div>
  );
};

export default Posts;
