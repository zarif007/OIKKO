/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import Link from "next/link";
import IPost, { Location } from "@/types/post";

const Post: React.FC<{ post: IPost }> = ({ post }) => {
  const [vote, setVote] = useState<"" | "up" | "down">("");

  const handleVoteCasting = (type: "up" | "down") => {
    if (type === vote) return;

    if (type === "up") {
      if (vote === "down") post.downVote--;
      post.upVote++;
    } else {
      if (vote === "up") post.upVote--;
      post.downVote++;
    }
    setVote(type);
  };

  const isLocation = (location: any): location is Location => {
    return (
      location &&
      typeof location === "object" &&
      "district" in location &&
      "area" in location
    );
  };

  return (
    <Card className="w-full my-4">
      <div className="flex items-center">
        <div className="pl-6 py-4 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <BiUpvote
              onClick={() => handleVoteCasting("up")}
              className={`w-8 h-8 cursor-pointer ${
                vote === "up" && "text-green-500"
              }`}
            />
            <p className="text-sm font-medium">{post.upVote}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-medium">{post.downVote}</p>
            <BiDownvote
              onClick={() => handleVoteCasting("down")}
              className={`w-8 h-8 cursor-pointer ${
                vote === "down" && "text-red-500"
              }`}
            />
          </div>
        </div>

        <div className="w-full">
          <CardHeader>
            <CardTitle className="flex gap-3">
              <Link href={`/post/${post.id}`} className="font-bold">
                {post.title}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {post.content ? (
              <p>
                {post.content?.length > 100
                  ? `${post.content.substring(0, 100)}...`
                  : post.content}
              </p>
            ) : (
              <></>
            )}
          </CardContent>
          <div className="flex justify-end p-2 items-center space-x-2">
            {post.images?.length ? (
              <div className="flex space-x-1 items-center">
                <BsImages className="w-5 h-5" />
                <p className=" text-sm font-medium">{post.images?.length}</p>
              </div>
            ) : (
              <></>
            )}
            <div className="flex space-x-1 items-center">
              <FaMapMarkerAlt className="text-red-500 w-5 h-5" />
              <p className="text-sm font-medium">
                {isLocation(post.location)
                  ? `${post.location.district}, ${post.location.area}`
                  : "Location not available"}
              </p>
            </div>
            <p className="bg-white text-black px-3 py-1 text-sm font-medium rounded-xl whitespace-nowrap">
              {post.category}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Post;
