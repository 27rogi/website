import type { Skill } from "./skill";

export interface Experience {
  icon: `${string}:${string}`
  year?: number
  proof?: string
}

export interface Certificate extends Experience {
  type: "certificate"
  issuer?: string
}

export interface Job extends Experience {
  type: "job"
  yearEnd?: number
  skills?: Array<Skill | undefined>
}

export interface Competition extends Experience {
  type: "competition"
}

export type ExperienceType = Certificate | Job | Competition;
