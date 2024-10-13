"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import FirstStepForm from "./FirstStepForm";
import SecondStepForm from "./SecondStepForm";
import { useRouter } from "next/navigation";

const IssueCreationDialog = () => {
  const router = useRouter();

  const [steps, setSteps] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [post, setPost] = useState({
    author: "",
    title: "",
    content: "",
    location: {
      district: "",
      area: "",
    },
    category: "",
    from: null,
    to: null,
    images: [] as string[],
  });

  const handlePostSubmit = async () => {
    setIsSubmitting(true); // Set loading state to true
    try {
      const response = await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      const result = await response.json();
      console.log(result.data.id);
      router.push("/post/" + result.data.id);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
                {steps === 1 ? (
                  <FirstStepForm post={post} setPost={setPost} />
                ) : (
                  <SecondStepForm post={post} setPost={setPost} />
                )}
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between space-x-2 w-full">
            {steps === 2 && (
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setSteps(1)}
              >
                Back
              </Button>
            )}
            <Button
              variant="default"
              className="w-full"
              onClick={steps === 1 ? () => setSteps(2) : handlePostSubmit}
              disabled={isSubmitting} // Disable button during submission
            >
              {isSubmitting ? "Posting..." : steps === 1 ? "Next" : "Post"}
            </Button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default IssueCreationDialog;
