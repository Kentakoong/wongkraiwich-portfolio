"use client";

import { motion } from "motion/react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { CurrentRoleCard } from "./_components/CurrentRoleCard";
import { TimelineItem } from "./_components/TimelineItem";
import { experiences } from "./_constants/experiences";

export default function ExperiencesPage() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const currentExperiences = experiences.filter((exp) => exp.isCurrent);

  const handleSkillSelect = (skill: string) => {
    setSelectedSkill((prev) => (prev === skill ? null : skill));
  };

  const matchingCount = selectedSkill
    ? experiences.filter((exp) => exp.tags.includes(selectedSkill)).length
    : 0;

  // Sort experiences:
  // 1. Current roles first (isCurrent: true)
  // 2. Then by start date descending
  const sortedExperiences = [...experiences].sort((a, b) => {
    // If one is current and the other isn't, prioritize current
    if (a.isCurrent !== b.isCurrent) {
      return a.isCurrent ? -1 : 1;
    }

    // Sort by start date descending (most recent first)
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 md:py-24">
      {selectedSkill && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex items-center justify-center gap-2 rounded-lg border-border bg-muted/50 px-4 py-2 text-sm"
          initial={{ opacity: 0, y: -10 }}
        >
          <span className="text-muted-foreground">
            {matchingCount} experience{matchingCount !== 1 ? "s" : ""} with
          </span>
          <Badge className="font-medium" variant="default">
            {selectedSkill}
          </Badge>
          <button
            className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            onClick={() => setSelectedSkill(null)}
            type="button"
          >
            click to clear
          </button>
        </motion.div>
      )}

      <div className="mb-16 space-y-4 text-center">
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="font-bold text-4xl sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
        >
          My Journey
        </motion.h1>
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
        >
          Building the future, one commit at a time.
        </motion.p>
      </div>

      {/* Current Roles Section */}
      <section className="mb-24">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          transition={{ delay: 0.2 }}
        >
          <div className="h-8 w-1 rounded-full bg-primary" />
          <h2 className="font-bold text-2xl">Current Endeavors</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentExperiences.map((exp, index) => (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              key={exp.role}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <CurrentRoleCard
                experience={exp}
                index={index}
                onSkillSelect={handleSkillSelect}
                selectedSkill={selectedSkill}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="mb-12 flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          transition={{ delay: 0.5 }}
        >
          <div className="h-8 w-1 rounded-full bg-muted-foreground/50" />
          <h2 className="font-bold text-2xl text-muted-foreground">
            Career Timeline
          </h2>
        </motion.div>

        <div className="relative ml-4 space-y-12 border-muted/50 border-l-2 md:ml-12">
          {sortedExperiences.map((exp, index) => (
            <motion.div
              className="relative pl-8 md:pl-12"
              initial={{ opacity: 0, x: -20 }}
              key={exp.role}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              {/* Timeline Dot */}
              <div
                className={cn(
                  "absolute top-2 -left-[9px] h-4 w-4 rounded-full border-4 border-background transition-colors duration-300",
                  exp.isCurrent
                    ? "bg-primary ring-4 ring-primary/20"
                    : "bg-muted-foreground"
                )}
              />

              <TimelineItem
                experience={exp}
                onSkillSelect={handleSkillSelect}
                selectedSkill={selectedSkill}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
