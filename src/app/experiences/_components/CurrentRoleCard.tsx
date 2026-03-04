import { Building2, MapPin } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import type { Experience } from "../_types/experience";

interface CurrentRoleCardProps {
  experience: Experience;
  index: number;
  selectedSkill?: string | null;
  onSkillSelect?: (skill: string) => void;
}

export function CurrentRoleCard({
  experience,
  index,
  selectedSkill = null,
  onSkillSelect,
}: CurrentRoleCardProps) {
  const hasSelectedSkill = Boolean(selectedSkill);
  const isMatching =
    hasSelectedSkill &&
    selectedSkill !== null &&
    experience.tags.includes(selectedSkill);

  return (
    <div
      className={cn(
        "group relative h-full transition-all duration-300",
        hasSelectedSkill && !isMatching && "opacity-50",
        index === 0 && "md:col-span-2 lg:col-span-2"
      )}
    >
      <Card
        className={cn(
          "h-full overflow-hidden border-primary/20 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg dark:hover:shadow-primary/10",
          hasSelectedSkill && isMatching && "shadow-lg ring-2 ring-primary"
        )}
      >
        <div className="absolute top-0 right-0 p-4">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
          </span>
        </div>
        <CardHeader>
          <div className="mb-2 flex items-center gap-3">
            <div
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg",
                experience.logoUrl ? "bg-white" : "bg-primary/10 text-primary"
              )}
            >
              {experience.logoUrl ? (
                <Image
                  alt=""
                  className="object-cover"
                  height={40}
                  src={`${experience.logoUrl}?s=80`}
                  width={40}
                />
              ) : (
                <Building2 size={20} />
              )}
            </div>
            <div>
              <CardTitle className="text-lg">{experience.company}</CardTitle>
              <p className="font-medium text-muted-foreground text-sm">
                {experience.type}
              </p>
            </div>
          </div>
          <h3 className="font-bold text-xl leading-tight">{experience.role}</h3>
          <div className="mt-1 flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin size={14} />
            <span>{experience.location}</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground text-sm leading-relaxed">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag) => {
              const isSelected = tag === selectedSkill;
              return (
                <Badge
                  className={cn(
                    "font-normal transition-transform",
                    onSkillSelect && "cursor-pointer hover:scale-105",
                    isSelected && "scale-105"
                  )}
                  key={tag}
                  onClick={() => onSkillSelect?.(tag)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onSkillSelect?.(tag);
                    }
                  }}
                  role={onSkillSelect ? "button" : undefined}
                  tabIndex={onSkillSelect ? 0 : undefined}
                  variant={isSelected ? "default" : "secondary"}
                >
                  {tag}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
