/* eslint-disable @next/next/no-img-element */
import { redirect } from "next/navigation";
import React from "react";
import prisma from "../../../lib/prisma";
import PostDetails from "@/components/PostDetails";

interface PageParams {
  params: {
    id: string;
  };
}

const getPost = async (id: string) => {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  return post;
};

const Post = async ({ params }: PageParams) => {
  const post = await getPost(params.id);

  if (!post) redirect("/404");

  return <PostDetails post={post} />;
};

export default Post;
