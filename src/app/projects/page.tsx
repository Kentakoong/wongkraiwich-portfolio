"use client";

import { X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { ProjectCard } from "./_components/ProjectCard";
import { projects, projectTags } from "./_constants/projects";

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"all" | "active">("all");
  const [showAllTags, setShowAllTags] = useState(false);

  const filteredProjects = projects.filter((project) => {
    const matchesTag = !selectedTag || project.tags.includes(selectedTag);
    const matchesView =
      viewMode === "all" ||
      (viewMode === "active" &&
        (project.status === "active" || project.status === "wip"));
    return matchesTag && matchesView;
  });

  const matchingCount = selectedTag
    ? projects.filter((p) => p.tags.includes(selectedTag)).length
    : 0;

  const handleTagClick = (tag: string) => {
    setSelectedTag((prev) => (prev === tag ? null : tag));
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 md:py-24">
      {/* Header Section */}
      <div className="mb-16 space-y-4 text-center">
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="font-bold text-4xl sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
        >
          Projects
        </motion.h1>
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
        >
          A collection of my work spanning iOS development, web applications,
          open-source tools, and research projects.
        </motion.p>
      </div>

      {/* Filter Bar */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.2 }}
      >
        {/* View Mode Toggle */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-lg border border-border bg-background/50 p-1 backdrop-blur-sm">
            <button
              className={cn(
                "rounded-md px-4 py-2 font-medium text-sm transition-all",
                viewMode === "all"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted/50"
              )}
              onClick={() => setViewMode("all")}
              type="button"
            >
              All Projects
            </button>
            <button
              className={cn(
                "rounded-md px-4 py-2 font-medium text-sm transition-all",
                viewMode === "active"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted/50"
              )}
              onClick={() => setViewMode("active")}
              type="button"
            >
              Active
            </button>
          </div>
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-muted-foreground text-sm">Filter by:</span>
          {(showAllTags ? projectTags : projectTags.slice(0, 12)).map((tag) => (
            <Badge
              className={cn(
                "cursor-pointer transition-all hover:bg-primary/20",
                selectedTag === tag
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/50 text-muted-foreground"
              )}
              key={tag}
              onClick={() => handleTagClick(tag)}
              variant="secondary"
            >
              {tag}
            </Badge>
          ))}
          {projectTags.length > 12 && !showAllTags && (
            <button
              className="text-muted-foreground text-sm underline-offset-4 transition-colors hover:underline"
              onClick={() => setShowAllTags(true)}
              type="button"
            >
              +{projectTags.length - 12} more
            </button>
          )}
        </div>
      </motion.div>

      {/* Active Filter Display */}
      {selectedTag && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -10 }}
        >
          <span className="text-muted-foreground text-sm">
            {matchingCount} project{matchingCount !== 1 ? "s" : ""} with
          </span>
          <Badge
            className="font-medium"
            onClick={() => setSelectedTag(null)}
            variant="default"
          >
            {selectedTag}
            <button
              className="ml-1 hover:text-red-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedTag(null);
              }}
              type="button"
            >
              <X className="size-3" />
            </button>
          </Badge>
          <button
            className="text-muted-foreground text-sm underline-offset-4 transition-colors hover:text-foreground hover:underline"
            onClick={() => setSelectedTag(null)}
            type="button"
          >
            clear filter
          </button>
        </motion.div>
      )}

      {/* All Projects Grid */}
      <section>
        {viewMode === "all" && !selectedTag && (
          <div className="mb-6 flex items-center gap-2">
            <div className="h-8 w-1 rounded-full bg-primary" />
            <h2 className="font-bold text-2xl">All Projects</h2>
          </div>
        )}
        {(viewMode !== "all" || selectedTag) && (
          <div className="mb-6 flex items-center gap-2">
            <div className="h-8 w-1 rounded-full bg-primary" />
            <h2 className="font-bold text-2xl">
              {selectedTag
                ? `Projects with "${selectedTag}"`
                : viewMode === "active"
                  ? "Active Projects"
                  : "All Projects"}
            </h2>
          </div>
        )}

        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard index={index} key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <motion.div
            animate={{ opacity: 1 }}
            className="py-20 text-center"
            initial={{ opacity: 0 }}
          >
            <p className="text-lg text-muted-foreground">
              No projects found matching the selected filters.
            </p>
            <button
              className="mt-4 text-primary underline-offset-4 transition-colors hover:underline"
              onClick={() => {
                setSelectedTag(null);
                setViewMode("all");
              }}
              type="button"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </section>

      {/* Stats Section */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mt-24 grid gap-8 border-border/50 border-t pt-12 text-center sm:grid-cols-2"
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.5 }}
      >
        <div>
          <div className="font-bold text-4xl text-primary">
            {projects.length}
          </div>
          <div className="mt-2 text-muted-foreground text-sm">
            Total Projects
          </div>
        </div>
        <div>
          <div className="font-bold text-4xl text-primary">
            {projectTags.length}
          </div>
          <div className="mt-2 text-muted-foreground text-sm">
            Technologies Used
          </div>
        </div>
      </motion.div>
    </main>
  );
}
