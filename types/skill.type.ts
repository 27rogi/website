interface Skill {
  [key: string]: {
    icon: string
    color: string
    name: string
    hidden?: boolean
    stack?: boolean
  }
}

export type {
  Skill,
}
