"use client";

import React from "react";
import Post from "./Post";
import Link from "next/link";

// Sample posts data
const posts = [
  {
    id: "ckv7w8h5g0004v80idfg3yzqw",
    title: "Green Energy Summit 2024",
    content:
      "Discussing the future of renewable energy solutions and innovations.",
    author: "Alice Brown",
    from: "2024-04-12T09:00:00.000Z",
    to: "2024-04-14T17:00:00.000Z",
    category: "Environment",
    location: {
      district: "California",
      area: "Downtown LA",
    },
    images: [
      "https://cdn.pixabay.com/photo/2022/09/21/17/02/blue-background-7470781_1280.jpg",
    ],
    createdAt: "2024-01-25T12:34:56.000Z",
    updatedAt: "2024-02-01T10:20:00.000Z",
    upVote: 120,
    downVote: 10,
  },
  {
    id: "ckv7w8h5g0005v80kl2u4yzqx",
    title: "Annual Food Festival",
    content:
      "A celebration of global cuisine with top chefs from around the world.",
    author: "Gourmet Magazine",
    from: "2024-06-01T11:00:00.000Z",
    to: "2024-06-03T20:00:00.000Z",
    category: "Food",
    location: {
      district: "Texas",
      area: "Austin",
    },
    images: [],
    createdAt: "2024-03-10T14:30:00.000Z",
    updatedAt: "2024-04-12T15:45:00.000Z",
    upVote: 200,
    downVote: 25,
  },
  {
    id: "ckv7w8h5g0006v80lybwxyzqy",
    title: "Startup Pitch Competition",
    content:
      "Top startups compete for seed funding in a high-stakes pitch event.",
    author: "Tech World",
    from: "2024-07-15T10:00:00.000Z",
    to: "2024-07-15T18:00:00.000Z",
    category: "Business",
    location: {
      district: "New York",
      area: "Brooklyn",
    },
    images: [],
    createdAt: "2024-02-01T09:00:00.000Z",
    updatedAt: "2024-03-01T11:35:00.000Z",
    upVote: 340,
    downVote: 50,
  },
  {
    id: "ckv7w8h5g0007v80pqr8eyzqz",
    title: "Art & Sculpture Expo 2024",
    content:
      "Featuring sculptures and art installations from renowned artists worldwide.",
    author: "Museum of Modern Art",
    from: "2024-08-20T09:00:00.000Z",
    to: "2024-08-30T17:00:00.000Z",
    category: "Art",
    location: {
      district: "Paris",
      area: "Montmartre",
    },
    images: [
      "https://cdn.pixabay.com/photo/2022/09/21/17/02/blue-background-7470781_1280.jpg",
    ],
    createdAt: "2024-04-05T08:30:00.000Z",
    updatedAt: "2024-05-10T12:45:00.000Z",
    upVote: 450,
    downVote: 30,
  },
  {
    id: "ckv7w8h5g0008v80trsd5yzra",
    title: "Film Festival 2024",
    content:
      "Showcasing independent films from emerging directors around the world.",
    author: "Cinema Lovers",
    from: "2024-10-05T18:00:00.000Z",
    to: "2024-10-09T22:00:00.000Z",
    category: "Film",
    location: {
      district: "California",
      area: "Hollywood",
    },
    images: [
      "https://cdn.pixabay.com/photo/2022/09/21/17/02/blue-background-7470781_1280.jpg",
    ],
    createdAt: "2024-06-10T13:20:00.000Z",
    updatedAt: "2024-08-12T11:40:00.000Z",
    upVote: 530,
    downVote: 70,
  },
  {
    id: "ckv7w8h5g0009v80xfnr9yzrb",
    title: "Music and Dance Festival",
    content:
      "Live performances by top musicians and dancers across various genres.",
    author: "Global Events",
    from: "2024-09-25T16:00:00.000Z",
    to: "2024-09-27T23:00:00.000Z",
    category: "Music",
    location: {
      district: "London",
      area: "Covent Garden",
    },
    images: [],
    createdAt: "2024-05-15T10:50:00.000Z",
    updatedAt: "2024-06-30T14:15:00.000Z",
    upVote: 610,
    downVote: 90,
  },
];

const Posts = () => {
  return (
    <div className="m-4 w-[90%] md:w-[75%] mb-20">
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
