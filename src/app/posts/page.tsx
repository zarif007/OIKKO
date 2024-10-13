import React from "react";
import prisma from "../../lib/prisma";
import Post from "@/components/Post";

const getPosts = async () => {
  const post = await prisma.post.findMany();

  return post;
};

const Posts = async () => {
  const posts = await getPosts();

  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full md:max-w-5xl">
      <h1 className="text-2xl my-2 font-bold">All Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
