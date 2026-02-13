export interface Experience {
  role: string;
  company: string;
  logoUrl?: string;
  type?: string;
  location?: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: Array<string>;
  tags: Array<string>;
  isCurrent: boolean;
}
