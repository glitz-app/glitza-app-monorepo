"use client";

import { useState } from "react";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";

const ProjectsPage = () => {
  const router = useRouter();
  const [isCreating, setIsCreating] = useState(false);

  const { data: projects, isLoading } = api.imageProject.getAll.useQuery();

  const createProject = api.imageProject.create.useMutation({
    onSuccess: (newProject) => {
      router.push(`/dashboard/projects/${newProject.id}`);
    },
  });

  const handleCreateProject = () => {
    setIsCreating(true);
    createProject.mutate({ name: "New Project" });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="relative h-[calc(100vh-60px)] w-full bg-neutral-50 p-4">
      <h1 className="mb-6 text-2xl font-bold">Your Projects</h1>
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects?.map((project) => (
          <Card
            key={project.id}
            className="cursor-pointer hover:shadow-md"
            onClick={() => router.push(`/dashboard/projects/${project.id}`)}
          >
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Status: {project.status}</p>
              <p>Created: {new Date(project.createdAt).toLocaleDateString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button className="" onClick={handleCreateProject}>
        Create Project
      </Button>
    </div>
  );
};

export default ProjectsPage;
