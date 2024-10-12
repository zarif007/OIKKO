"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import DatePicker from "./ui/datepicker";
import { areas, districts, issues } from "@/utils/constants";

const IssueCreationDialog = () => {
  const [post, setPost] = useState({
    name: "",
    location: {
      district: "",
      area: "",
    },
    category: "",
    fromDate: null,
    toDate: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPost({ ...post, [id]: value });
  };

  const handleSelectChange = (key: string, value: string) => {
    setPost({ ...post, [key]: value });
  };

  const handleLocationChange = (key: string, value: string) => {
    setPost({
      ...post,
      location: {
        ...post.location,
        [key]: value,
      },
    });
  };

  const handleDateChange = (dateKey: string, date: Date) => {
    setPost({ ...post, [dateKey]: date });
  };

  const handlePostClick = () => {
    console.log(post);
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="fixed bottom-0 right-50 m-4 z-50">
        <Button variant="default" size="lg" className="w-[90%] sm:w-[50%]">
          Report an Issue
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90%] sm:max-w-[80%] lg:max-w-[60%] bg-black p-4 py-6">
        <Card className="w-full border-0">
          <CardHeader>
            <CardTitle>Post an Issue</CardTitle>
          </CardHeader>
          <CardContent className="">
            <form className="">
              <div className="grid gap-4">
                {/* Name Field */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    value={post.name}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Location Select */}
                <div className="flex flex-col md:flex-row md:space-x-2 md:space-y-0 space-y-2">
                  <div className="flex flex-col w-full space-y-1">
                    <Label htmlFor="district">District</Label>
                    <Select
                      onValueChange={(value) =>
                        handleLocationChange("district", value)
                      }
                    >
                      <SelectTrigger id="district">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-black" position="popper">
                        {districts.map((district) => (
                          <SelectItem key={district} value={district}>
                            {district}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col w-full space-y-1">
                    <Label htmlFor="area">Area</Label>
                    <Select
                      onValueChange={(value) =>
                        handleLocationChange("area", value)
                      }
                    >
                      <SelectTrigger id="area">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-black" position="popper">
                        {areas.map((area) => (
                          <SelectItem key={area} value={area}>
                            {area}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Category Selection */}
                <div className="flex flex-col space-y-1.5 w-full">
                  <Label htmlFor="category">Category</Label>
                  <div className="flex flex-wrap max-w-full overflow-hidden">
                    {issues.map((issue) => (
                      <p
                        className={`p-1 px-2 cursor-pointer bg-white text-black m-1 rounded-md text-sm font-medium ${
                          post.category === issue
                            ? "bg-gray-900 text-white"
                            : ""
                        }`}
                        key={issue}
                        onClick={() => handleSelectChange("category", issue)}
                      >
                        {issue}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Date Pickers */}
                <div className="flex flex-col md:flex-row md:space-x-2 md:space-y-0 space-y-2">
                  <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="fromDate">From</Label>
                    <DatePicker
                      dateKey="fromDate"
                      handleDateChange={handleDateChange}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="toDate">To</Label>
                    <DatePicker
                      dateKey="toDate"
                      handleDateChange={handleDateChange}
                    />
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between w-full">
            <Button
              variant="default"
              className="w-full"
              onClick={handlePostClick}
            >
              Post
            </Button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default IssueCreationDialog;
