export interface Skill {
  color: string
  // Iconify requires to use <iconpack>:<icon> syntax
  icon: `${string}:${string}`
  name: string
}

export interface SkillCategory {
  items: Array<Skill | undefined>
  key: string
}
