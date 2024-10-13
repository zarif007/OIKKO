/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FirstStepFormProps {
  post: {
    author: string;
    title: string;
    content: string;
    images: string[];
  };
  setPost: (post: any) => void;
}

const FirstStepForm: React.FC<FirstStepFormProps> = ({ post, setPost }) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPost((prev: any) => ({ ...prev, [id]: value }));
  };

  const handleImageAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (imageUrl) {
      setPost((prev: any) => ({
        ...prev,
        images: [...prev.images, imageUrl],
      }));
      setImageUrl("");
    }
  };

  return (
    <div className="grid gap-4">
      {/* Name Field */}
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="author">Name</Label>
        <Input
          id="author"
          placeholder="Your Name"
          value={post.author}
          onChange={handleInputChange}
        />
      </div>

      {/* Title Field */}
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          placeholder="Issue Title"
          value={post.title}
          onChange={handleInputChange}
        />
      </div>

      {/* Content Field */}
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="content">Content</Label>
        <Input
          id="content"
          placeholder="Describe the issue"
          value={post.content}
          onChange={handleInputChange}
        />
      </div>

      {/* Image URL Field */}
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="imageUrl">Image URL</Label>
        <Input
          id="imageUrl"
          placeholder="Paste image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <div className="flex justify-end">
          <Button
            type="button"
            variant="default"
            className="mt-2 w-fit"
            onClick={handleImageAdd}
          >
            Add Image
          </Button>
        </div>
      </div>

      {/* Display Added Images */}
      {post.images.length > 0 && (
        <div className="flex flex-col space-y-2 mt-4">
          <Label>Added Images:</Label>
          <ul>
            {post.images.map((image, index) => (
              <li key={index} className="text-sm">
                {image}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FirstStepForm;
