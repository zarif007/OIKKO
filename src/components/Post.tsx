"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsImages } from "react-icons/bs";

interface Location {
  district: string;
  area: string;
}

interface IPost {
  id: string;
  title: string;
  content?: string;
  author: string;
  from: Date | string;
  to: Date | string;
  category: string;
  location?: Location;
  images?: string[];
  upVote: number;
  downVote: number;
  createdAt: Date | string;
  updatedAt: Date | string;
}

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
              <p className="font-bold">{post.title}</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{post.content}</p>
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
                {post.location?.district}, {post.location?.area}
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
