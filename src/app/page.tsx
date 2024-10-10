import Navbar from "@/components/Navbar";
import Posts from "@/components/Posts";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <Navbar />
      <Stats />
      <Posts />
    </div>
  );
}
