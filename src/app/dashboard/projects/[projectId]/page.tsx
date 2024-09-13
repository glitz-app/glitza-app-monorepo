import ModulesContainer from "./ModulesContainer";

export default async function ProjectPage() {
  return (
    <div className="min-h-[calc(100vh-60px)] w-full bg-neutral-50 p-4">
      <h1 className="">Project Title</h1>
      <ModulesContainer />
    </div>
  );
}
