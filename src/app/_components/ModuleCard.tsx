import { Card } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import type { Module, ModuleType } from "@prisma/client";
import { HelpCircle } from "lucide-react";

interface ModuleWithType extends Module {
  type: ModuleType;
}

interface ModuleCardProps {
  module: ModuleWithType;
}

const ModuleCard = ({ module }: ModuleCardProps) => {
  return (
    <Card className="relative max-w-md rounded-xl p-4 shadow-md shadow-[#BEBCFF]/10">
      <h2 className="text-lg font-bold">{module.type.name}</h2>
      <div className="absolute right-2 top-2">
        <HoverCard>
          <HoverCardTrigger>
            <HelpCircle className="text-neutral-500 hover:text-neutral-700" />
          </HoverCardTrigger>
          {/* <HoverCardContent>{module.description}</HoverCardContent> */}
        </HoverCard>
      </div>

      {/* ---- module configuration section ---- */}
      <section></section>
    </Card>
  );
};

export default ModuleCard;
