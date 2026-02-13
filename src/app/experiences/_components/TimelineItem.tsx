import { Briefcase, Calendar } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import type { Experience } from "../_types/experience";
import { calculateDuration } from "../_utils/calculateDuration";

interface TimelineItemProps {
  experience: Experience;
  selectedSkill?: string | null;
  onSkillSelect?: (skill: string) => void;
}

export function TimelineItem({
  experience,
  selectedSkill = null,
  onSkillSelect,
}: TimelineItemProps) {
  const hasSelectedSkill = Boolean(selectedSkill);
  const isMatching =
    hasSelectedSkill &&
    selectedSkill !== null &&
    experience.tags.includes(selectedSkill);
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-10">
      {/* Date Column (Desktop) */}
      <div className="flex shrink-0 flex-col pt-1 md:w-48">
        <div
          className={cn(
            "mb-1 font-bold text-lg leading-none",
            experience.isCurrent ? "text-primary" : "text-muted-foreground"
          )}
        >
          {new Date(experience.startDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
          })}
        </div>
        <span className="flex items-center gap-1 text-muted-foreground text-sm">
          <Calendar size={12} />
          {experience.isCurrent
            ? "Present"
            : calculateDuration(experience.startDate, experience.endDate)}
        </span>
      </div>

      {/* Content Card */}
      <Card
        className={cn(
          "group w-full transition-all duration-300",
          experience.isCurrent
            ? "border-border bg-white hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
            : "border-border/50 bg-muted/80 shadow-sm hover:shadow-lg dark:bg-muted/50",
          hasSelectedSkill && isMatching && "shadow-lg ring-2 ring-primary",
          hasSelectedSkill && !isMatching && "opacity-50"
        )}
      >
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl">{experience.role}</CardTitle>
              <div className="mt-1 font-medium text-lg text-muted-foreground">
                {experience.company}
              </div>
            </div>
            {experience.logoUrl ? (
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white transition-opacity group-hover:opacity-100">
                <Image
                  alt=""
                  className="object-cover"
                  height={40}
                  src={`${experience.logoUrl}?s=80`}
                  width={40}
                />
              </div>
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 opacity-50 transition-opacity group-hover:opacity-100">
                <Briefcase size={18} />
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <ul className="mb-4 list-disc space-y-2 pl-4 text-muted-foreground text-sm">
            {experience.achievements.length > 0 ? (
              experience.achievements.map((item, i) => <li key={i}>{item}</li>)
            ) : (
              <p>{experience.description}</p>
            )}
          </ul>
          <div className="flex flex-wrap gap-2 border-border/50 border-t pt-2">
            {experience.tags.map((tag) => {
              const isSelected = tag === selectedSkill;
              return (
                <Badge
                  className={cn(
                    "cursor-pointer text-xs transition-transform",
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
                  variant={isSelected ? "default" : "outline"}
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
