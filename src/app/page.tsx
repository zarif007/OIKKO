import IssueCreationDialog from "@/components/IssueCreation.dialog";
import Posts from "@/components/Posts";
import Stats from "@/components/Stats";

export const revalidate = 0;

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <Stats />
      <IssueCreationDialog />
      <Posts />
    </div>
  );
}
