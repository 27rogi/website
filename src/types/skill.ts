export type Skill = {
  color: string
  // Iconify requires to use <iconpack>:<icon> syntax
  icon: `${string}:${string}`
  name: string
};

export type SkillCategory = {
  items: Skill[]
  key: string
};
