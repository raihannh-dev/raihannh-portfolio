export type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  demoUrl: string;
  repoUrl: string;
  isPrivate?: boolean;
};
