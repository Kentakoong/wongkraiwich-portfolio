export interface ProjectLink {
  title: string;
  url: string;
  icon?: "github" | "external" | "app-store" | "website";
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  startDate: string;
  endDate?: string | null;
  status?: "active" | "completed" | "archived" | "wip";
  organization?: string;
  organizationUrl?: string;
  logoUrl?: string;
  iconUrl?: string;
  tags: Array<string>;
  links: Array<ProjectLink>;
  highlights?: Array<string>;
  featured?: boolean;
}
