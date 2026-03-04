"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { AppStore } from "@/components/icons/link/AppStore";
import { External } from "@/components/icons/link/External";
import { Website } from "@/components/icons/link/Website";
import { GitHub } from "@/components/icons/social/GitHub";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import type { Project } from "../_types/project";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const linkIcons = {
  github: GitHub,
  external: External,
  "app-store": AppStore,
  website: Website,
};

function getStatusColor(status: Project["status"]) {
  switch (status) {
    case "active":
      return "bg-green-500/10 text-green-500 border-green-500/20";
    case "completed":
      return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    case "archived":
      return "bg-neutral-500/10 text-neutral-500 border-neutral-500/20";
    case "wip":
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
    default:
      return "bg-muted text-muted-foreground";
  }
}

function getStatusLabel(status: Project["status"]) {
  switch (status) {
    case "active":
      return "Active";
    case "completed":
      return "Completed";
    case "archived":
      return "Archived";
    case "wip":
      return "In Progress";
    default:
      return "";
  }
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="group"
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-primary/5">
        {/* Status Badge - hide for active projects */}
        {project.status && project.status !== "active" && (
          <div className="absolute top-4 right-4 z-10">
            <Badge
              className={cn(
                "font-medium text-xs",
                getStatusColor(project.status)
              )}
              variant="outline"
            >
              {getStatusLabel(project.status)}
            </Badge>
          </div>
        )}

        {/* Header */}
        <div className="mb-4 flex items-start gap-4">
          {/* Icon */}
          {project.iconUrl && (
            <div className="relative shrink-0">
              <div className="flex size-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Image
                  alt={`${project.name} icon`}
                  className="rounded-lg"
                  height={64}
                  src={project.iconUrl}
                  width={64}
                />
              </div>
            </div>
          )}

          {/* Title Section */}
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-foreground text-xl transition-colors group-hover:text-primary">
              {project.name}
            </h3>
            <p className="mt-1 text-muted-foreground text-sm">
              {project.tagline}
            </p>
            {project.organization && (
              <Link
                className="mt-1 inline-flex items-center gap-1 text-muted-foreground text-xs transition-colors hover:text-primary"
                href={project.organizationUrl || "#"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>{project.organization}</span>
                <External className="size-3" />
              </Link>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-4 space-y-1">
            {project.highlights.slice(0, 3).map((highlight, i) => (
              <li
                className="flex items-start gap-2 text-muted-foreground text-xs"
                key={i}
              >
                <span className="mt-0.5 size-1 shrink-0 rounded-full bg-primary" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 6).map((tag) => (
            <Badge
              className="cursor-pointer transition-all hover:bg-primary/20"
              key={tag}
              variant="secondary"
            >
              {tag}
            </Badge>
          ))}
          {project.tags.length > 6 && (
            <Badge className="text-muted-foreground" variant="ghost">
              +{project.tags.length - 6}
            </Badge>
          )}
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-2 border-border/50 border-t pt-4">
          {project.links.map((link) => {
            const Icon = link.icon ? linkIcons[link.icon] : External;
            return (
              <Link
                className="group/link flex items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2 text-center font-medium text-xs transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                href={link.url}
                key={link.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {Icon && <Icon className="size-3.5" />}
                <span className="truncate">{link.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
