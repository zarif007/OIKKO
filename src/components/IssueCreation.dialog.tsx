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

const issues = [
  "Traffic Jam",
  "Pollution",
  "Corruption",
  "Unemployment",
  "Overpopulation",
  "Inadequate Infrastructure",
  "Health Care Access",
  "Education Quality",
  "Natural Disasters",
  "Waste Management",
];

const IssueCreationDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="fixed bottom-0 right-50 m-4 z-50">
        <Button variant="default" size="lg" className="w-[50%]">
          Report an Issue
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90%] sm:max-w-[50%] bg-black p-4 py-6">
        <Card className="w-full border-0">
          <CardHeader>
            <CardTitle>Post an Issue</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="flex flex-col space-y-1.5 w-full">
                  <Label htmlFor="framework">Location</Label>
                  <div className="flex space-x-2">
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-black" position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-black" position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5 w-full">
                  <Label htmlFor="framework">Category</Label>
                  <div className="flex flex-wrap max-w-full overflow-hidden">
                    {issues.map((issue) => (
                      <p
                        className="p-1 px-2 cursor-pointer bg-white text-black m-1 rounded-md text-sm font-medium"
                        key={issue}
                      >
                        {issue}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">From</Label>
                    <DatePicker />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">To</Label>
                    <DatePicker />
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between w-full">
            <Button variant="default" className="w-full">
              Post
            </Button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default IssueCreationDialog;
