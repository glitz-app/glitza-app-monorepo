"use client";

import ModuleCard from "@/app/_components/ModuleCard";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
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
  const [isAddModuleOpen, setIsAddModuleOpen] = React.useState(false);
  const SIDEBAR_WIDTH = 400;

  const handleCloseAddModule = () => {
    setIsAddModuleOpen(false);
  };

  return (
    <div className="relative h-full w-full">
      <section
        className={cn("w-full p-4 transition-all duration-200")}
        style={{
          width: isAddModuleOpen ? `calc(100% - ${SIDEBAR_WIDTH}px)` : "100%",
        }}
      >
        <div className="mx-auto flex max-w-md flex-col">
          {modules.map((module, index) => (
            <React.Fragment key={module.id}>
              <ModuleCard module={module} />
              {index < modules.length - 1 && (
                <div className="mx-auto h-8 w-[1px] bg-gray-300" />
              )}
            </React.Fragment>
          ))}

          <div className="flex items-center justify-center pt-4">
            <AddModuleButton
              size={"3rem"}
              onClick={() => setIsAddModuleOpen(!isAddModuleOpen)}
            />
          </div>
        </div>
      </section>
      <AddModuleContainer
        open={isAddModuleOpen}
        width={SIDEBAR_WIDTH}
        onClose={handleCloseAddModule}
      />
    </div>
  );
};

export default ModulesContainer;

const AddModuleButton = ({
  size,
  onClick,
}: {
  size: number | string;
  onClick?: () => void;
}) => {
  return (
    <button
      className="group relative cursor-pointer"
      style={{ height: size, width: size }}
      onClick={onClick}
    >
      <div className="absolute left-0 top-0 h-full w-full rotate-45 transform rounded-full bg-gradient-to-r from-[#FFA1FB] via-[#BEBCFF] to-[#7AFFFF] blur-sm transition-all duration-200"></div>
      <div className="absolute left-0 top-0 h-full w-full transform rounded-full border-2 border-white bg-white/70 transition-all duration-200 group-hover:scale-105 group-hover:bg-white/80">
        <PlusIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform" />
      </div>
    </button>
  );
};

const AddModuleContainer = ({
  open,
  width = 384,
  onAddModule,
  onClose,
}: {
  open: boolean;
  width?: number | string;

  onAddModule?: () => void;
  onClose?: () => void;
}) => {
  const handleAddModule = () => {
    // setIsAddModuleOpen(!isAddModuleOpen);
    onAddModule?.();
  };

  return (
    <div
      className={cn(
        "fixed right-0 top-[60px] h-[calc(100vh-60px)] border-l border-neutral-200 bg-white transition-all duration-200 animate-in slide-in-from-right",
        !open && "hidden",
      )}
      style={{ width }}
    >
      <div className="h-full w-full p-4">
        <h2 className="mb-4 text-xl font-semibold">Add New Module</h2>
        {/* Add your form or content for adding a new module here */}
        <p>Module configuration options will go here.</p>
      </div>
    </div>
  );
};
