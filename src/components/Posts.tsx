import React from "react";
import Post from "./Post";
import Link from "next/link";
import prisma from "../lib/prisma";

const getPosts = async () => {
  const post = await prisma.post.findMany();

  return post;
};

const Posts = async () => {
  const posts = await getPosts();

  return (
    <div className="m-4 w-[90%] md:w-[75%] mb-20 mx-auto">
      <div className="flex justify-between my-2">
        <p className="text-2xl font-bold">Recent Issues</p>
        <Link
          href="/posts"
          className="text-lg font-medium text-blue-600 underline"
        >
          See All Posts
        </Link>
      </div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
