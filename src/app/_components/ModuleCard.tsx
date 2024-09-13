import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { HelpCircle } from "lucide-react";

interface ModuleCardProps {
  module: {
    id: number;
    name: string;
    description: string;
  };
}

const ModuleCard = ({ module }: ModuleCardProps) => {
  return (
    <Card className="relative max-w-md rounded-xl p-4">
      <h2 className="text-lg font-bold">{module.name}</h2>
      <div className="absolute right-2 top-2">
        <HoverCard>
          <HoverCardTrigger>
            <HelpCircle className="text-neutral-500 hover:text-neutral-700" />
          </HoverCardTrigger>
          <HoverCardContent>{module.description}</HoverCardContent>
        </HoverCard>
      </div>

      {/* ---- module configuration section ---- */}
      <section></section>
    </Card>
  );
};

export default ModuleCard;
