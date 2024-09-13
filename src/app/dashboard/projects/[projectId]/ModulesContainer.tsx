import ModuleCard from "@/app/_components/ModuleCard";
import React from "react";

const modules = [
  {
    id: 1,
    name: "Module 1",
    description: "Module description goes here.",
  },
  {
    id: 2,
    name: "Module 2",
    description: "Module description goes here.",
  },
  {
    id: 3,
    name: "Module 3",
    description: "Module description goes here.",
  },
];

const ModulesContainer: React.FC = () => {
  return (
    <section className="mx-auto flex max-w-md flex-col">
      {modules.map((module, index) => (
        <React.Fragment key={module.id}>
          <ModuleCard module={module} />
          {index < modules.length - 1 && (
            <div className="mx-auto h-8 w-[1px] bg-gray-300" />
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default ModulesContainer;
