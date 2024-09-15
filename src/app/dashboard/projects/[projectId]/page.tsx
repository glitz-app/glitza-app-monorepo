import ModulesContainer from "./ModulesContainer";

export default async function ProjectPage() {
  return (
    <div className="relative h-[calc(100vh-60px)] w-full bg-neutral-50">
      {/* <h1 className="p-4">Project Title</h1> */}
      <ModulesContainer />
    </div>
  );
}
