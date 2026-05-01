export interface GitHubData {
  organization: string
  repository: string
}

export interface Project {
  skills: string[]
  url?: string
  github?: GitHubData
  image?: string
}

export interface ProjectBasic extends Project {
  leading: false
  icon: string
}

export interface ProjectLeading extends Project {
  leading: true
  palette?: string
}
