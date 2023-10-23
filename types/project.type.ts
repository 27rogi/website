interface ProjectGitHub {
  organization: string
  repository: string
}

interface Project {
  name: string
  icon?: string
  text?: string
  url: string
  skills: string[]
  github?: ProjectGitHub
}

interface ProjectGitHubStats {
  stargazers_count: number
  forks: number
}

export type {
  Project,
  ProjectGitHub,
  ProjectGitHubStats,
}
