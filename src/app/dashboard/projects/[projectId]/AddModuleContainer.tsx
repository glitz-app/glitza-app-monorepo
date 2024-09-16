"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import { ModuleType } from "@prisma/client";
import { XIcon } from "lucide-react";
import { useMemo, useState, useEffect } from "react";

const AddModuleContainer = ({
  open,
  width = 384,
  starter,
  onAddModule,
  onClose,
}: {
  open: boolean;
  width?: number | string;
  starter: boolean;
  onAddModule?: (moduleTypeId: string) => void;
  onClose?: () => void;
}) => {
  const { data: modules, error, isLoading } = api.moduleType.getAll.useQuery();

  const handleAddModule = (moduleTypeId: string) => {
    onAddModule?.(moduleTypeId);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div
      className={cn(
        "fixed right-0 top-[60px] h-[calc(100vh-60px)] border-l border-neutral-200 bg-white pt-8 transition-all duration-200 animate-in slide-in-from-right",
        !open && "hidden",
      )}
      style={{ width }}
    >
      <Button
        variant="ghost"
        className="absolute left-2 top-2 h-8 w-8 rounded-full p-0"
        onClick={onClose}
      >
        <XIcon className="h-4 w-4" />
      </Button>
      <div className="w-full p-4">
        <h2 className="mb-4 text-xl font-semibold">Add New Module</h2>
        {/* Add your form or content for adding a new module here */}
        <p>Module configuration options will go here.</p>
      </div>

      <section className="grid grid-cols-12 gap-4 p-4">
        {modules?.map((moduleType) => (
          <Card
            key={moduleType.id}
            className="group col-span-12 cursor-pointer overflow-hidden transition-all duration-200 hover:scale-105 md:col-span-6"
            onClick={() => handleAddModule(moduleType.id)}
          >
            <CardHeader className="h-48 bg-gradient-to-br from-[#FFA1FB] via-[#BEBCFF] to-[#7AFFFF] p-0 md:h-24">
              <div className="hidden h-full w-full items-center justify-center bg-black/30 duration-200 animate-in fade-in group-hover:flex">
                <span className="text-white">+ Add module</span>
              </div>
            </CardHeader>
            <CardContent className="p-2">
              <p className="text-sm font-semibold">{moduleType.name}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default AddModuleContainer;
