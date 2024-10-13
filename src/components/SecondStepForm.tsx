/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DatePicker from "./ui/datepicker";
import { areas, districts, issues } from "@/utils/constants";

interface SecondStepFormProps {
  post: {
    location: {
      district: string;
      area: string;
    };
    category: string;
    from: Date | null;
    to: Date | null;
  };
  setPost: (post: any) => void;
}

const SecondStepForm: React.FC<SecondStepFormProps> = ({ post, setPost }) => {
  const handleSelectChange = (key: string, value: string) => {
    setPost((prev: any) => ({ ...prev, [key]: value }));
  };

  const handleLocationChange = (key: string, value: string) => {
    setPost((prev: any) => ({
      ...prev,
      location: {
        ...prev.location,
        [key]: value,
      },
    }));
  };

  const handleDateChange = (dateKey: string, date: Date) => {
    setPost((prev: any) => ({ ...prev, [dateKey]: date }));
  };

  return (
    <div className="grid gap-4">
      {/* Location Select */}
      <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
        <div className="flex flex-col w-full space-y-1">
          <Label htmlFor="district">District</Label>
          <Select
            onValueChange={(value) => handleLocationChange("district", value)}
          >
            <SelectTrigger id="district">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-black">
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
            onValueChange={(value) => handleLocationChange("area", value)}
          >
            <SelectTrigger id="area">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-black">
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
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="category">Category</Label>
        <div className="flex flex-wrap">
          {issues.map((issue) => (
            <p
              className={`p-1 px-2 cursor-pointer m-1 rounded-md text-sm font-medium ${
                post.category === issue
                  ? "bg-gray-900 text-white"
                  : "bg-white text-black"
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
      <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
        <div className="flex flex-col space-y-1.5 w-full">
          <Label htmlFor="from">From</Label>
          <DatePicker dateKey="from" handleDateChange={handleDateChange} />
        </div>

        <div className="flex flex-col space-y-1.5 w-full">
          <Label htmlFor="to">To</Label>
          <DatePicker dateKey="to" handleDateChange={handleDateChange} />
        </div>
      </div>
    </div>
  );
};

export default SecondStepForm;
