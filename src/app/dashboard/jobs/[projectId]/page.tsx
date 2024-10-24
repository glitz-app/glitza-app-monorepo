import ModulesContainer from "./ModulesContainer";

export default async function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = params;
  return (
    <div className="relative h-[calc(100vh-60px)] w-full bg-neutral-50">
      {/* <h1 className="p-4">Project Title</h1> */}
      <ModulesContainer projectId={projectId} />
    </div>
  );
}
