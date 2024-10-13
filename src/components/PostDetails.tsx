/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { CgDanger } from "react-icons/cg";
import IPost, { Location } from "@/types/post";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";

const PostDetails: React.FC<{ post: any }> = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);
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

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
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
    <div className="flex max-w-full md:max-w-5xl mx-auto my-8 px-2 space-x-2 md:space-x-4">
      <div className="h-full flex my-12">
        <div className="flex flex-col gap-6">
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
          <div className="mt-8 cursor-pointer">
            <CgDanger className={`w-8 h-8 cursor-pointe text-red-500`} />
            <p className="text-sm font-medium">Fake</p>
          </div>
        </div>
      </div>

      <div>
        <Link href="/posts" className="flex space-x-1 items-center my-2">
          <IoChevronBackOutline className="w-4 h-4 underline" />
          <p>All issues</p>
        </Link>
        <p className="bg-white p-1 font-medium text-sm rounded-md text-black w-fit mb-2">
          {post.category}
        </p>
        <h2 className="text-3xl font-bold">{post.title}</h2>
        <div className="flex space-x-2 items-center">
          <p className="text-sm">{post.createdAt.toDateString()}</p>
          <p>|</p>
          <p className="text-sm text-slate-300">{post.author}</p>
        </div>
        <p className="text-gray-500 font-medium">
          From: <span className="text-white">{post.from.toDateString()}</span>{" "}
          To: <span className="text-white">{post.to.toDateString()}</span>
        </p>

        <div className="my-4">
          <h3 className="text-md font-medium">
            {isExpanded
              ? post.content
              : `${post.content?.substring(0, 300)}...`}
          </h3>
          <button
            className="text-blue-500 font-medium hover:underline mt-2"
            onClick={toggleReadMore}
          >
            {isExpanded ? "See Less" : "See More"}
          </button>
        </div>
        <div className="flex space-x-1 items-center justify-end my-2">
          <FaMapMarkerAlt className="text-red-500 w-5 h-5" />
          <p className="text-sm font-medium">
            {isLocation(post.location)
              ? `${post.location.district}, ${post.location.area}`
              : "Location not available"}
          </p>
        </div>
        {post.images.length ? (
          <Carousel>
            <CarouselContent>
              {post.images?.map((image: string, index: number) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <p className="absolute top-2 right-2 z-10 text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                      {index + 1} / {post.images.length}
                    </p>
                    <img src={image} className="z-0 rounded-md" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PostDetails;
